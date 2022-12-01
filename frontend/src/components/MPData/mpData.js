import { Button, Linking, View, Text } from 'react-native';
import approve from "../approveDisapprove/approve";
import disapprove from "../approveDisapprove/disapprove";

function mpData(props) {
  const mpName = props.name;
  const mpEmail = props.email;
  const mpId = props.mpId;
  const individualData = props.data;
  const divisionTitle = individualData.PublishedDivision.Title;
  const divisionId = individualData.PublishedDivision.Id;
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

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // const fetchPosts = () => {
  //   if (token) {
  //     fetch("/posts", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then(async (data) => {
  //         window.localStorage.setItem("token", data.token);
  //         setToken(window.localStorage.getItem("token"));
  //         setPosts(data.posts);
  //       });
  //   }
  // };

  return (
         <View style={{ flex: 1,
      alignItems: 'center'
    }}>
      <Text>
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
   
   {approve(divisionId, mpId)}
   {disapprove(divisionId, mpId)}
   </Text>  
    </View>
  );
}

export default mpData;


