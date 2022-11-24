import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);
  console.log('divisions data:', data);
  console.log('MP data: ', mpData);

  Promise.resolve(
    useEffect(() => {
      fetch(
        `https://members-api.parliament.uk/api/Members/Search?Name=Boris%20Johnson`
      )
        .then((response) => response.json())
        .then((json) => setMpData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoadingMp(false));
    }, [])
  ).then(
    useEffect(() => {
      fetch(
        `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=4494`
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [])
  );

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
            <Text>{`${mpData.items[0].value.id}\n`}</Text>

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
