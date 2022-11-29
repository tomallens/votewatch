import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, Button, Linking, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from 'react-native-swiper'

function Feed() {
  const [isLoading, setLoading] = useState(true);
  const [divisionData, setDivisionData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState("Boris Johnson");
  const [mpEmail, setMPEmail] = useState("boris.johnson.mp@parlement.uk")


  useEffect(() => {
    callCommonsApi();
  }, [mpName]);

  async function callCommonsApi() {
    if (mpName == "") return;
    const memberId = await getMpId(mpName);
    await getMPContactData(memberId)
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

const getDivisionAndMPData = (individualData) => {
    return (
      <Text style={styles.textSecondary}>
      {`Name of vote: ${individualData.PublishedDivision.Title}\n`}
      {`Vote date: ${individualData.PublishedDivision.Date}\n`}
      {`Vote ID: ${individualData.PublishedDivision.DivisionId}\n`}

      {`Member Voted:\n`}
      <Text style={{fontSize: 100, color: 'crimson', fontWeight: '900'}}>
      {`${individualData.MemberVotedAye ? "AYE" : "NOE"}\n`}
      </Text>
        <Button
          onPress={() =>
            Linking.openURL(
              `mailto:${mpEmail}?subject=${
                individualData.PublishedDivision.Title
              }&body=Dear ${mpName},\n\n I am writing to you about the Division "${
                individualData.PublishedDivision.Title
              }". \n\nIt has come to my attention that you voted ${
                individualData.MemberVotedAye ? "Aye" : "Noe"
              } for this Division. \n\n I would like to raise my ... because ... \n\n Yours Sincerely,\n\n`
            )
          }
          title="EMAIL YOUR MP ABOUT THIS"
        />
        {`\n\n\n`}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <MpInput setMpName={setMpName} /> */}
      <Text style={styles.text}>Your MP is set to: {mpName}</Text>
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <View style={styles.container}>
       
              <Image
                source={{
                  uri: `${mpData.items[0].value.thumbnailUrl}`,
                  width: 60,
                  height: 60,
                }}
              />
              <Text style={styles.text}>{`${mpData.items[0].value.id}\n`}</Text>
              <Swiper
        loop={false}
        showsPagination={true}
        // autoplay={true}
        // autoplayTimeout={0.2}
        showsButtons={true}
        bounces={true}
        index={1}>

              {divisionData.map((individualData) => {
                return getDivisionAndMPData(individualData)
              }).slice(0,10)}
            </Swiper>
            <StatusBar style="auto" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
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
});

export default Feed;
