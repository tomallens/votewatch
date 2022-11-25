class DivisionsClient {
  constructor(memberId) {
    this.memberId = memberId;
    this.apiURL = `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${this.memberId}`;
  }
  getVotesFromApi(callback) {
    fetch(this.apiURL)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = DivisionsClient;
