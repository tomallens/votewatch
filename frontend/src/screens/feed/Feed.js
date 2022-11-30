import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  Button,
  Linking,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import MPData from "../../components/MPData/MPData";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";

function Feed() {
  const [isLoading, setLoading] = useState(true);
  const [divisionData, setDivisionData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState("Boris Johnson");
  const [mpEmail, setMPEmail] = useState("boris.johnson.mp@parlement.uk");
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    callCommonsApi();
    pushNotificationHandler(); // << Currently needs to be commented out in order for google and email links to work. -JOE2k22
  }, [mpName]);

  function pushNotificationHandler() {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    ); // makes a push token to identify this instance of the client
    // .then(token => expoPushTokensApi.register(token)); <---- this is our point of entry to backend - inactive for now

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // Works when app is foregrounded, backgrounded, or killed
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("--- notification tapped ---");
        console.log(response);
        console.log("------");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      ); // otherwise it will never stop asking
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }


  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true, // shows when app is in foreground too
    }),
  });

  async function callCommonsApi() {
    if (mpName == '') return;
    const memberId = await getMpId(mpName);
    await getMPContactData(memberId);
    await getMpVotes(memberId);
  }

  async function getMpId(mpName) {
    const data = await (
      await fetch(
        `https://members-api.parliament.uk/api/Members/Search?Name=${mpName}`
      )
    ).json();
    setMpData(data);

    return data.items[0].value.id;
  }

  async function getMpVotes(memberId) {
    const votes = await (
      await fetch(
        `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId}`
      )
    ).json();
    setDivisionData(votes);
    setLoading(false);
  }

  async function getMPContactData(memberId) {
    const contactData = await (
      await fetch(
        `https://members-api.parliament.uk/api/Members/${memberId}/Contact`
      )
    ).json();
    setMPEmail(contactData.value[0].email);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <MpInput setMpName={setMpName} /> **UNCOMMENT ONCE WORKING** */}
      <Text style={styles.text}>Your MP: {mpName}</Text>
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <View style={styles.container}>
            <Image
              source={{
                uri: `${mpData.items[0].value.thumbnailUrl}`,
                width: 150,
                height: 150
              }}
              style={{ borderColor: 'black', borderWidth: 5, borderRadius: 75 }}
            />
            <Swiper
              loop={false}
              showsPagination={true}
              showsButtons={true}
              bounces={true}
              index={1}
            >
                  {divisionData.map((individualData, i) => {
                return (
                  <MPData
                    key={`mpdata-${i}`}
                    name={mpName}
                    email={mpEmail}
                    data={individualData}
                  />
                );
              }).slice(0, 12)}
            </Swiper>
            <StatusBar style="auto" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

async function registerForPushNotificationsAsync() {
  let token;


  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    // gotta be real with you i just copied this part and can't quite explain it
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {

    alert("Must use physical device for Push Notifications"); //none of this works on emulators
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 32,
    fontWeight: 'bold'
  },
  textSecondary: {
    fontFamily: 'Futura',
    fontSize: 10
  }


export default Feed;
