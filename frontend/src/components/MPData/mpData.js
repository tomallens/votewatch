import { Button, Linking } from "react-native";
import { Text } from "react-native";
import approve from "../ApproveDisapprove/approve";
import disapprove from "../ApproveDisapprove/disapprove";
import getApprovesDisapproves from "./getApprovesDisapproves";

function mpData(props) {
  const mpName = props.name;
  const mpEmail = props.email;
  const mpId = props.mpId;
  const individualData = props.data;

  const divisionTitle = individualData.PublishedDivision.Title;
  const divisionDate = individualData.PublishedDivision.Date;
  const divisionId = individualData.PublishedDivision.DivisionId;
  const mpVote = individualData.MemberVotedAye;

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
      {`Division Date: ${divisionDate}\n`}
      {`Division ID: ${divisionId}\n`}
      {`Member Voted: ${mpVote ? "Aye" : "Noe"}\n`}
      <Button
        onPress={() =>
          Linking.openURL(
            `mailto:${mpEmail}?subject=${divisionTitle}&body=Dear ${mpName},\n\n I am writing to you about the Division "${divisionTitle}". \n\nIt has come to my attention that you voted ${
              mpVote ? "Aye" : "Noe"
            } for this Division. \n\n I would like to raise my ... because ... \n\n Yours Sincerely,\n\n`
          )
        }
        title="EMAIL YOUR MP ABOUT THIS"
      />
      {`\n\n\n`}
      {approve(divisionId, mpId)}
      {disapprove(divisionId, mpId)}
    </Text>
  );
}

export default mpData;
