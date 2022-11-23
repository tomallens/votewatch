// const fetch = require("node-fetch");
// import fetch from 'node-fetch';
class DivisionsClient {
  constructor(memberId) {
    this.memberId = 4132;
    this.apiURL = `https://commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=${memberId}`;
  }
  getVotesFromApi(callback) {
    fetch(this.apiURL)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}


    // commonsvotes-api.parliament.uk/data/divisions.json/membervoting?memberId=3977
  


        // fetch(this._fetchUrl, {
        //     method: 'GET',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       memberId: this.memberId
        //     })
        //   });
		// try {
		// 	let response = await fetch(this._fetchUrl + `?memberId=${this.memberId}`);
		// 	let json = await response.json();
		// 	return json;
		// } catch (error) {
		// 	console.error(error);
		// }
	

   

	// queryParameters.memberId()
	// memberId=3977&take=3


module.exports = DivisionsClient;
