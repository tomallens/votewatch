import CustomButton from "../customButton/CustomButton";


function disapprove(divisionTitle, divisionId, mpId) {
  return (
    <CustomButton
      text="Disapprove"
      onPress={() => {
        console.log("Disapprove was clicked!")
      }}
    />
    
  )
}

export default disapprove;