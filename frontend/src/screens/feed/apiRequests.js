class APIRequests {
  static getMPData = async (mpName) => {
    const response = await fetch(
      `https://members-api.parliament.uk/api/Members/Search?Name=${mpName}`
    );
    const data = await response.json();
    return data;
  };

  static getMPID = async (mpName) => {
    const response = await fetch(
      `https://members-api.parliament.uk/api/Members/Search?Name=${mpName}`
    );
    const data = await response.json();
    return data.items[0].value.id;
  };

  static getMpVotes = async (memberId) => {
    const votes = await (
      await fetch(
        `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId}`
      )
    ).json();
    return votes;
  };

  static getMPContactData = async (memberId) => {
    const contactData = await (
      await fetch(
        `https://members-api.parliament.uk/api/Members/${memberId}/Contact`
      )
    ).json();
    return contactData.value[0].email;
  };
}

export default APIRequests;

// async function getMpId(mpName) {
//   const data = await (
//     await fetch(
//       `https://members-api.parliament.uk/api/Members/Search?Name=${mpName}`
//     )
//   ).json();
//   setMpData(data);

//   return data.items[0].value.id;
// }