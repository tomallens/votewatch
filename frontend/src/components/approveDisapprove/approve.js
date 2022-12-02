import {

  Button,

} from 'react-native';

const addApprove = (divisionId, mpId) => {
  console.log("Data", divisionId, mpId);
  fetch("http://10.86.153.239:8080/approveDisapprove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      approved: true,
      divisionId: divisionId,
      mpId: mpId,
    }),
  });
};

function approve(divisionId, mpId) {
  return (
    <Button
      title="Approve"
      onPress={() => {
        addApprove(divisionId, mpId);
      }}
      style={{margin: 'auto'}}
    />
  );
}

export default approve;