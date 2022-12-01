import { Button, Linking, View, Text } from 'react-native';
import disapprove from "../approveDisapprove/disapprove";
import approve from "../approveDisapprove/approve";
import getApprovesDisapproves from "./getApprovesDisapproves";

function mpData(props) {
  const mpName = props.name;
  const mpEmail = props.email;
  const mpId = props.mpId;
  const individualData = props.data;
  const divisionId = individualData.PublishedDivision.divisionId;

  const divisionTitle = individualData.PublishedDivision.Title;
  const divisionDate = new Date(
    individualData.PublishedDivision.Date
  ).toDateString();
  const mpVote = individualData.MemberVotedAye;



  function ayeNoe() {
    if(mpVote) {
      return (
      <Text style={{
        fontSize: 100,
        color: ('forestgreen'),
        fontWeight: '900',
        alignItems: 'center'}}>{`\n`}AYE</Text>)
      } else if (!mpVote) {
        return (
        <Text style={{
          fontSize: 100,
          color: ('firebrick'),
          fontWeight: '900',
          alignItems: 'center'}}>{`\n`}NOE</Text>
        )
      }
  }

  return (
    <View style={{ flex: 1,
      alignItems: 'center'
    }}>
      <Text
        style={{
          borderColor: 'black',
          justifyContent: 'center',
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
        />
        
        {ayeNoe()}
    
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
      {`\n\n\n`}
      <Text>
      {approve(divisionId, mpId)}
      {disapprove(divisionId, mpId)}
      </Text>
    </View>
  );
}

export default mpData;


