import CustomButton from "../customButton/CustomButton";

const addApprove = (divisionId, mpId) => {
  console.log('Data', divisionId, mpId)
  fetch('https://localhost:8080/approvals', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      approved: true,
      divisionId: divisionId,
      mpId: mpId
    }),
  })
}

function approve(divisionId, mpId) {
  return (
    <CustomButton
      text="Approve"
      onPress={() => { addApprove(divisionId, mpId)
        // console.log("Approve was clicked!")
        // const requestOptions = {
        //   method: 'PATCH',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     approved: true,
        //     divisionId: divisionId,
        //     mpId: mpId
        //   })
        // };
        // fetch('https://localhost:8080/approval', requestOptions)
        //   .then(response => response.json())
        //   .then(data => console.log(data));
      }}
    />
    
  )
}

export default approve;