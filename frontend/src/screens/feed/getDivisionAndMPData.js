import { Button, Linking } from "react-native";
import { Text } from "react-native";

function getDivisionAndMPData(mpEmail, individualData) {
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
}

export default getDivisionAndMPData;
