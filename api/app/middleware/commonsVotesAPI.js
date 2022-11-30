
  async function loadLastPublishedDate() {
    const apiUrl = `https://commonsvotes-api.parliament.uk/data/divisions.json/search?queryParameters.take=1`
    const divisionAPIData = await (await fetch(apiUrl)).json()
    const integerTime = new Date(divisionAPIData[0].PublicationUpdated)
    console.log(`time from API: ${integerTime}`)
    return integerTime
  }

  async function loadLastPublishedTitle() {
    const apiUrl = `https://commonsvotes-api.parliament.uk/data/divisions.json/search?queryParameters.take=1`
    const divisionAPIData = await (await fetch(apiUrl)).json()
    console.log(`latest division title: ${divisionAPIData[0].Title}`)
    return divisionAPIData[0].Title
  }
module.exports = { loadLastPublishedDate, loadLastPublishedTitle }