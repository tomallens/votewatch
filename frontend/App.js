import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, Linking, Button } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [isLoadingEmail, setLoadingEmail] = useState(true);

  // const [mpContactData, setMpContactData] = useState([]);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpEmail, setMpEmail] = useState([]);
  const [mpContactData, setMPContact] = useState([]);

  // async function getMPContactData(memberId) {
  //   console.log("memberId:", memberId);
  //   const finalResult = await (
  //     await fetch(
  //       `https://members-api.parliament.uk/api/Members/${memberId}/Contact`
  //     )
  //   ).json();
  //   setMPContact(finalResult);
  // }

   async function getMpEmail(memberId) {
    const finalresult = await(
      await fetch(
      `https://members-api.parliament.uk/api/Members/${memberId.toString()}/Contact`
    )
    ).json();
    setMpEmail(finalresult.items[0].value.email)
  }

  // function updateMemberId() {
  //   await memberId = mpData.items[0].value.id;
  // }

  useEffect(() => {
    feedHandler()
  }, [])
  
  async function feedHandler() {
    const memberId = await getMpId()
    await getDivisions(memberId)   
      }

  
  async function getMpId() {
    return fetch(
      `https://members-api.parliament.uk/api/Members/Search?Name=Catherine%20West`
    )
      .then((response) => response.json())
      .then((json) => {
        setMpData(json)
        setLoadingMp(false);

        return json.items[0].value.id;
      })
  }

  async function getDivisions(memberId){
    fetch(
      `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId.toString()}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }

 
  

  // useEffect(() => {
  //   fetch(
  //     `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${mpData.items[0].value.id}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading || isLoadingMp ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <Text><Text>
            <Image
              source={{
                uri: `${mpData.items[0].value.thumbnailUrl}`,
                width: 60,
                height: 60,
              }}
            />
              <Text>{` MP ID: ${mpData.items[0].value.id}\n`}</Text>
              {/* <Text>{console.log("mpContactData:", mpContactData.value)} */}
            </Text>
              
              {/* <Button onPress={() => Linking.openURL(`mailto:${getMpEmail()}?subject=SendMail&body=Description`)}
                title="Email this MP" /> */}

            {data.map((individualData) => {
              return  <Text>{"\n"}Date: {
                individualData.PublishedDivision.Date
              }{"\n"}Division id: {
                individualData.PublishedDivision.Date
              }{"\n"}Division title: {
                individualData.PublishedDivision.Title
              }{"\n"}Voted: {!!individualData.MemberVotedAye ? 'Yes' : 'No'};{"\n"}{"\n"}<Button onPress={() => Linking.openURL(`mailto:${getMpEmail()}?subject=${individualData.PublishedDivision.Title}&body=Description`)}
              title="Email the MP about this vote" />{"\n"}{"\n"}</Text>
            })}
            </Text>
                        
          {/* <Text>{`${data.items[0].value.id}`}</Text>
          <Image
            source={{
              uri: `${data.items[0].value.thumbnailUrl}`,
              width: 60,
              height: 60,
            }}
          /> */}
          <StatusBar style="auto" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
