import { Button, Linking, View, Text } from 'react-native';

function mpData(props) {
  const mpName = props.name;
  const mpEmail = props.email;
  const individualData = props.data;

  const divisionTitle = individualData.PublishedDivision.Title;
  const divisionDate = new Date(
    individualData.PublishedDivision.Date
  ).toDateString();
  const mpVote = individualData.MemberVotedAye;

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
        {`\n${divisionDate}\n\n`}
        <Button
          onPress={() =>
            Linking.openURL(
              'http://google.com/search?q=' + divisionTitle,
              '_blank'
            )
          }
          title={`${divisionTitle}`}
        />{' '}
        <Text
          style={{
            fontSize: 100,
            color: 'firebrick',
            textAlign: 'center',
            fontWeight: '900',
         
          }}
        >
          {`${mpVote ? 'AYE' : 'NOE'}\n`}
        </Text>
        {`\n\n\n`}
      </Text>
      <Button
        onPress={() =>
          Linking.openURL(
            `mailto:${mpEmail}?subject=${divisionTitle}&body=Dear ${mpName},\n\n I am writing to you regarding your vote on the recent division titled: "${divisionTitle}". \n\nIt has come to my attention that you voted ${
              mpVote ? 'Aye' : 'Noe'
            } for this Division. \n\n I would therefore share my [SUPPORT / CONCERN] because [ENTER REASON]. \n\n Yours Sincerely,\n\n [ENTER NAME]`
          )
        }
        title="EMAIL YOUR MP ABOUT THIS"
      />
    </View>
  );
}

export default mpData;

// *WIP vote logic function*
// function ayeNoe() {
//   if(individualData.MemberVotedAye) {
//     <Text style={{
//       fontSize: 100,
//       color: ('forestgreen'),
//       fontWeight: '900',
//       alignItems: 'center'}}> 'AYE' </Text>
//     } else if (!individualData.MemberVotedAye) {
//       <Text style={{
//         fontSize: 100,
//         color: ('firebrick'),
//         fontWeight: '900',
//         alignItems: 'center'}}> 'NOE' </Text>
//     }
// }
