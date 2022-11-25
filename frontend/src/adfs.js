import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);
  console.log("divisions data:", data);
  console.log("MP data: ", mpData);
  var memberId = "4494";

  // function updateMemberId() {
  //   await memberId = mpData.items[0].value.id;
  // }

  Promise.resolve(
    useEffect(() => {
      fetch(
        `https://members-api.parliament.uk/api/Members/Search?Name=Boris%20Johnson`
      )
        .then((response) => response.json())
        .then((json) => {
          setMpData(json);
          console.log("data id from json", json.items[0].value.id);
          memberId = json.items[0].value.id;
          console.log("member id", memberId);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setLoadingMp(false);
          console.log("memberId end of function", memberId);
          return memberId;
        });
    }, [])
  ).then(
    useEffect(() => {
      fetch(
        `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId.toString()}`
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
              }\nVoted: ${!!individualData.MemberVotedAye ? "Yes" : "No"}\n`;
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
