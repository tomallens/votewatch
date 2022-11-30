import { Button, Linking } from "react-native";
import { Text } from "react-native";
import CustomButton from "../../components/customButton/CustomButton";


function getDivisionAndMPData(mpName, mpEmail, mpId, individualData) {
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
      {`\n`}

      
      <CustomButton
        text="Approve"
        onPress={() => {
          console.log("Approve was clicked!")
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              divisionTitle: individualData.PublishedDivision.Title,
              divisionId: individualData.PublishedDivision.DivisionId,
              mpId: mpId
            })
        };
        fetch('https://localhost:8080/approval', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        }}
      />

      

      <CustomButton
        text="Disapprove"
        onPress={() => {
          console.log("Disapprove was clicked!")
        }}
      />

      {`\n\n\n`}
    </Text>
  );
}

export default getDivisionAndMPData;
