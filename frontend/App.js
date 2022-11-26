import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Button, Linking } from "react-native";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
import { MpInput } from "./src/components/mpInput/MpInput";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [divisionData, setDivisionData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState("");
  const [mpEmail, setMPEmail] = useState([]);
  const [mpTwitter, setMPTwitter] = useState([]);
  const [mpWebsite, setMPWebsite] = useState([]);

  useEffect(() => {
    callCommonsApi();
  }, [mpName]);

  async function callCommonsApi() {
    if (mpName == "") return;
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
    setMPTwitter(contactData.value[1].line1);
    // setMPWebsite(contactData.value[1].line1);
  }

  const getDivisionAndMPData = (individualData) => {
    return (
      <Text>
        {`Division Title: ${individualData.PublishedDivision.Title}\n`}
        {`Division Date: ${individualData.PublishedDivision.Date}\n`}
        {`Division ID: ${individualData.PublishedDivision.DivisionId}\n`}

        {`Member Voted: ${individualData.MemberVotedAye ? "Aye" : "Noe"}\n`}
        <Button
          onPress={() =>
            Linking.openURL(
              `mailto:${mpEmail}?subject=${individualData.PublishedDivision.Title}&body=${individualData.PublishedDivision.Title}`
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
              <Text>{`\nID: ${mpData.items[0].value.id}\n`}</Text>
              <Text>{mpTwitter}</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
