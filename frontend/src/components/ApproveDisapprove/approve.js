import CustomButton from "../customButton/CustomButton";

const addApprove = (divisionId, mpId) => {
  console.log("Data", divisionId, mpId);
  fetch("http://localhost:8080/approveDisapprove", {
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
    <CustomButton
      text="Approve"
      onPress={() => {
        addApprove(divisionId, mpId);
      }}
    />
  );
}

export default approve;
