import CustomButton from "../customButton/CustomButton";

const addDisapprove = (divisionId, mpId) => {
  console.log("Data", divisionId, mpId);
  fetch("http://localhost:8080/approveDisapprove", {
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
    <CustomButton
      text="Disapprove"
      onPress={() => {
        addDisapprove(divisionId, mpId);
      }}
    />
  );
}

export default disapprove;
