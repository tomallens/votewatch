import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView } from "react-native";
import { MpInput } from "./src/components/mpInput/MpInput";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMp, setLoadingMp] = useState(true);
  const [data, setData] = useState([]);
  const [mpData, setMpData] = useState([]);
  const [mpName, setMpName] = useState("Munira Wilson");

  useEffect(() => {
    
  }, []);

  // async function handleFeed() {
  //   console.log("feed");
  //   const split = mpName.split(" ");
  //   let firstName = split[0];
  //   let secondName = split[1];

  //   const memberId = await getMpId(firstName, secondName);
  //   await getDivisions(memberId);
  // }

  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Votewatch</Text>
      <Text>Keeping eyes on the ayes</Text>
      <StatusBar style="auto" />

      <MpInput mpName={mpName} setMpName={setMpName} />
      <Text>Your MP is set to: {mpName}</Text>

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
