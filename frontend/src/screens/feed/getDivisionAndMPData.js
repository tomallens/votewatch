import { Button, Linking, Text, View } from 'react-native';

function getDivisionAndMPData(mpName, mpEmail, individualData) {
  const date = new Date(individualData.PublishedDivision.Date).toDateString();

  return (
    <View>
      <Text
        style={{
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          textAlign: 'center'
        }}
      >
        {`Name of vote:\n${individualData.PublishedDivision.Title}\n\n`}
        {`Date of vote:\n${date}\n`}
        {/* {`Vote ID: ${individualData.PublishedDivision.DivisionId}\n`} */}

        <Text
          style={{
            fontSize: 100,
            color: 'crimson',
            fontWeight: '900',
            alignItems: 'center'
          }}
        >
          {`${individualData.MemberVotedAye ? 'AYE' : 'NOE'}\n`}
        </Text>

        {`\n\n\n`}
      </Text>

      <Button
        onPress={() =>
          Linking.openURL(
            `mailto:${mpEmail}?subject=${
              individualData.PublishedDivision.Title
            }&body=Dear ${mpName},\n\n I am writing to you about the Division "${
              individualData.PublishedDivision.Title
            }". \n\nIt has come to my attention that you voted ${
              individualData.MemberVotedAye ? 'Aye' : 'Noe'
            } for this Division. \n\n I would like to raise my ... because ... \n\n Yours Sincerely,\n\n`
          )
        }
        title="EMAIL YOUR MP ABOUT THIS"
      />
    </View>
  );
}

export default getDivisionAndMPData;
