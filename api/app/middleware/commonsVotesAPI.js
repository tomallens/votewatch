
  async function loadLastPublishedDate() {
    const apiUrl = `https://commonsvotes-api.parliament.uk/data/divisions.json/search?queryParameters.take=1`
   const divisionAPIData = await (await fetch(apiUrl)).json()
    return divisionAPIData[0].PublicationUpdated
  }

  async function loadLastPublishedTitle() {
    const apiUrl = `https://commonsvotes-api.parliament.uk/data/divisions.json/search?queryParameters.take=1`
   const divisionAPIData = await (await fetch(apiUrl)).json()
    return divisionAPIData[0].Title
  }
module.exports = { loadLastPublishedDate, loadLastPublishedTitle }