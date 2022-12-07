export default async function getApprovesDisapproves() {
  let approvalsDisapprovals = "";
  const approveDisapproves = await fetch(
    `http://localhost:8080/approveDisapproves`,
    {}
  )
    .then((res) => res.json())
    .then((data) => {
      approvalsDisapprovals = data;
    });
  return approvalsDisapprovals.data.length;
  // console.log(approvalsDisapprovals.data.length);
}
