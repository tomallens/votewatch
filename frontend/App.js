import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(
      `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=4494`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <Text>
            {data.map((individualData) => {
              return `Date: ${
                individualData.PublishedDivision.Date
              }\nDivision id: ${
                data[0].PublishedDivision.Date
              }\nDivision title: ${data[0].PublishedDivision.Title}\nVoted: ${
                !!data[0].MemberVotedAye ? 'Yes' : 'No'
              }\n\n`;
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
