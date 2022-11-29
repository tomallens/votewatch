import React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Feed() {
  const [isLoading, setLoading] = useState(true);
  const [divisionData, setDivisionData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState('Boris Johnson');
  const [mpEmail, setMPEmail] = useState('boris.johnson.mp@parlement.uk');
  // const [token, setToken] = useState(asyncStorage.getItem('userToken'));

  useEffect(() => {
    callCommonsApi();
  }, [mpName]);

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

  const getDivisionAndMPData = (individualData) => {
    return (
      <Text>
        {`Division Title: ${individualData.PublishedDivision.Title}\n`}
        {`Division Date: ${individualData.PublishedDivision.Date}\n`}
        {`Division ID: ${individualData.PublishedDivision.DivisionId}\n`}

        {`Member Voted: ${individualData.MemberVotedAye ? 'Aye' : 'Noe'}\n`}
        <Button
          onPress={() =>
            Linking.openURL(
              `mailto:${mpEmail}?subject=${
                individualData.PublishedDivision.Title
              }&body=Dear ${mpName},\n\n I am writing to you about the Division "${
                individualData.PublishedDivision.Title
              }". \n\nIt has come to my attention that you voted ${
                individualData.MemberVotedAye ? 'Aye' : 'Noe'
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
                return getDivisionAndMPData(individualData);
              })}
            </Text>
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
    alignItems: 'center',
  },
});

export default Feed;
