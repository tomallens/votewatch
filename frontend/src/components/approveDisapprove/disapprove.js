
import {

  Button,

} from 'react-native';

const addDisapprove = (divisionId, mpId) => {
  console.log("Data", divisionId, mpId);
  fetch("http://10.86.153.239:8080/approveDisapprove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      approved: false,
      divisionId: divisionId,
      mpId: mpId,
    }),
  });
};

function disapprove(divisionId, mpId) {
  return (
    <Button
      title="Disapprove"
      onPress={() => {
        addDisapprove(divisionId, mpId);
      }}
      style={{margin: 'auto'}}
    />
  );
}

export default disapprove;