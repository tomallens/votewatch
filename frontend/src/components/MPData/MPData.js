import { Button, Linking } from "react-native";
import { Text } from "react-native";

function MPData(props) {
  const mpName = props.name;
  const mpEmail = props.email;
  const individualData = props.data;

  const divisionTitle = individualData.PublishedDivision.Title;
  return (
    <Text>
      <Button
        onPress={() =>
          Linking.openURL(
            "http://google.com/search?q=" + divisionTitle,
            "_blank"
          )
        }
        title={`Division Title: ${divisionTitle}`}
      />{" "}
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

export default MPData;
