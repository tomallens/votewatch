import { Button, Linking } from "react-native";
import { Text } from "react-native";

function getDivisionAndMPData(mpName, mpEmail, individualData) {
  return (
    <Text>
      {`Division Title: ${individualData.PublishedDivision.Title}\n`}
      {`Division Date: ${individualData.PublishedDivision.Date}\n`}
      {`Division ID: ${individualData.PublishedDivision.DivisionId}\n`}

      {`Member Voted: ${individualData.MemberVotedAye ? "Aye" : "Noe"}\n`}
      <Button
        onPress={() =>
          Linking.openURL(
            `mailto:${mpEmail}?subject=${
              individualData.PublishedDivision.Title
            }&body=Dear ${mpName},\n\n I am writing to you about the Division "${
              individualData.PublishedDivision.Title
            }". \n\nIt has come to my attention that you voted ${
              individualData.MemberVotedAye ? "Aye" : "Noe"
            } for this Division. \n\n I would like to raise my ... because ... \n\n Yours Sincerely,\n\n`
          )
        }
        title="EMAIL YOUR MP ABOUT THIS"
      />
      {`\n\n\n`}
      
    </Text>
  );
}

export default getDivisionAndMPData;
