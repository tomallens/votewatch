import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
import { MpInput } from "./src/components/mpInput/MpInput";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState("");

  useEffect(() => {
    callCommonsApi();
  }, [mpName]);

  const callCommonsApi = async () => {
    if (mpName == "") return;
    const split = mpName.split(" ");
    let firstName = split[0];
    let secondName = split[1];
    const memberId = await getMpId(firstName, secondName);

    await getMPVotes(memberId);
  };

  async function getMpId(firstName, secondName) {
    const result = await (
      await fetch(
        `https://members-api.parliament.uk/api/Members/Search?Name=${firstName}%20${secondName}`
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
