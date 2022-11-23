class DivisionsClient {
	constructor(memberId) {
		(this._fetchUrl =
			"https://commonsvotes-api.parliament.uk/swagger/ui/index#!/Divisions/Divisions_GetVotingRecordsForMember"),
			(this.memberId = memberId);
	}

	getVotesFromApi = (callback) => {
      fetch(this._fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          callback(data);
        });
    }


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
	};

   

	// queryParameters.memberId()
	// memberId=3977&take=3


module.exports = DivisionsClient;
