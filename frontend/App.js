import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
import { MpInput } from "./src/components/mpInput/MpInput";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);

  useEffect(() => {
    handleFeed();
  }, []);

  async function handleFeed() {
    const memberId = await getMpId();
    await getDivisions(memberId);
  }

  async function getMpId() {
    return fetch(
      `https://members-api.parliament.uk/api/Members/Search?Name=Munira%20Wilson`
    )
      .then((response) => response.json())
      .then((json) => {
        setMpData(json);
        setLoadingMp(false);
        return json.items[0].value.id;
      });
  }

  async function getDivisions(memberId) {
    fetch(
      `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId.toString()}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Votewatch</Text>
      <Text>Keeping eyes on the ayes</Text>
      <StatusBar style="auto" />
      <MpInput />
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
                }\nVoted: ${!!individualData.MemberVotedAye ? "Yes" : "No"}\n`;
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
