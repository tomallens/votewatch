import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useRef } from "react";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { StyleSheet, Image, Text, View, SafeAreaView, Platform, Button } from "react-native";
import { MpInput } from "./src/components/mpInput/MpInput";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [divisionData, setDivisionData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState("");
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    callCommonsApi();
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token)); // makes a push token to identify this instance of the client

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current); // otherwise it will never stop asking
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [mpName]);

  Notifications.setNotificationHandler({ 
    handleNotification: async () => ({
      shouldShowAlert: true // shows when app is in foreground too
    }),
  });

  async function callCommonsApi() {
    if (mpName == "") return;
    const memberId = await getMpId(mpName);
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

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Votewatch</Text>
      <Text>Keeping eyes on the ayes</Text>
      <StatusBar style="auto" />

      <MpInput setMpName={setMpName} />
      <Text>Your MP is set to: {mpName}</Text>
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.container}>
            <Text>
              <Image
                source={{
                  uri: `${mpData.items[0].value.thumbnailUrl}`,
                  width: 60,
                  height: 60,
                }}
              />
              <Text>{`${mpData.items[0].value.id}\n`}</Text>

              {divisionData.map((individualData) => {
                return `\nDate: ${
                  individualData.PublishedDivision.Date
                }\nDivision id: ${
                  individualData.PublishedDivision.Date
                }\nDivision title: ${
                  individualData.PublishedDivision.Title
                }\nVoted:${individualData.MemberVotedAye ? "Yes" : "No"}\n`;
              })}
            </Text>
            <StatusBar style="auto" />
          </View>
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>Your expo push token: {expoPushToken}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Title: {notification && notification.request.content.title} </Text>
          <Text>Body: {notification && notification.request.content.body}</Text>
          <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
        </View>
        <Button
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

async function schedulePushNotification() { // this is just for local testing, delete once working
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'omg it actually worked (if it wasnt obvious, this is a mock)',
      data: { data: 'we can even pass JSON through here I think' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) { // gotta be real with you i just copied this part and can't quite explain it
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications'); //none of this works on emulators
  }

  return token;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
