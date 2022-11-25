import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, Linking, Button } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);

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
          <Text>
            <Image
              source={{
                uri: `${mpData.items[0].value.thumbnailUrl}`,
                width: 60,
                height: 60,
              }}
            />
              <Text>{` MP ID: ${mpData.items[0].value.id}\n`}</Text>
              
              <Button onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description')}
                title="Email this MP" />          

            {data.map((individualData) => {
              return `\nDate: ${
                individualData.PublishedDivision.Date
              }\nDivision id: ${
                individualData.PublishedDivision.Date
              }\nDivision title: ${
                individualData.PublishedDivision.Title
              }\nVoted: ${!!individualData.MemberVotedAye ? 'Yes' : 'No'}\n`;
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
