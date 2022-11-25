import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);

  useEffect(() => {
    callCommonsApi();
  }, []);

  const callCommonsApi = async () => {
    setLoading(true);
    // try {
    const memberId = await getMPName();
    console.log("memberId:", memberId);
    await getMPVotes(memberId);
  };

  async function getMPName() {
    const result = await (
      await fetch(
        `https://members-api.parliament.uk/api/Members/Search?Name=Catherine%20West`
      )
    ).json();
    setMpData(result);
    setLoadingMp(false);
    return result.items[0].value.id;
  }

  async function getMPVotes(memberId) {
    console.log("memberId:", memberId);
    const finalResult = await (
      await fetch(
        `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId}`
      )
    ).json();
    setData(finalResult);
    setLoading(false);
  }
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   setLoading(false);

  return (
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

            {data.map((individualData) => {
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
