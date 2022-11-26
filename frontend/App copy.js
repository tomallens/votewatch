// import * as React from "react";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";

// import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
// import { MpInput } from "./src/components/mpInput/MpInput";

// export default function App() {
//   const [isLoading, setLoading] = useState(true);
//   const [divisionData, setDivisionData] = useState([]);
//   const [mpData, setMpData] = useState([]);
//   const [mpName, setMpName] = useState("");

//   useEffect(() => {
//     callCommonsApi();
//   }, [mpName]);

//   async function callCommonsApi() {
//     if (mpName == "") return;
//     const memberId = await getMpId(mpName);
//     await getMpVotes(memberId);
//   }

//   async function getMpId(mpName) {
//     const data = await (
//       await fetch(
//         `https://members-api.parliament.uk/api/Members/Search?Name=${mpName}`
//       )
//     ).json();
//     setMpData(data);

//     return data.items[0].value.id;
//   }

//   async function getMpVotes(memberId) {
//     const votes = await (
//       await fetch(
//         `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId}`
//       )
//     ).json();
//     setDivisionData(votes);
//     setLoading(false);
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Welcome to Votewatch</Text>
//       <Text>Keeping eyes on the ayes</Text>
//       <StatusBar style="auto" />

//       <MpInput setMpName={setMpName} />
//       <Text>Your MP is set to: {mpName}</Text>
//       <View style={{ flex: 1, padding: 24 }}>
//         {isLoading ? (
//           <Text>Loading...</Text>
//         ) : (
//           <View style={styles.container}>
//             <Text>
//               <Image
//                 source={{
//                   uri: `${mpData.items[0].value.thumbnailUrl}`,
//                   width: 60,
//                   height: 60,
//                 }}
//               />
//               <Text>{`${mpData.items[0].value.id}\n`}</Text>

//               {divisionData.map((individualData) => {
//                 return `\nDate: ${
//                   individualData.PublishedDivision.Date
//                 }\nDivision id: ${
//                   individualData.PublishedDivision.Date
//                 }\nDivision title: ${
//                   individualData.PublishedDivision.Title
//                 }\nVoted:${individualData.MemberVotedAye ? "Yes" : "No"}\n`;
//               })}
//             </Text>
//             <StatusBar style="auto" />
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
