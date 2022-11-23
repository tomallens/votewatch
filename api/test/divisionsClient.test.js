const DivisionsClient = require('../divisionsClient');
const fakeApiResponse = require('./fakeApiResponse.json');
require('jest-fetch-mock').enableMocks();

describe("DivisionsClient Api class", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("calls fetch and loads data", (done) => {
    const client = new DivisionsClient();
    fetch.mockResponseOnce(
      JSON.stringify({
        name: ["Boris Johnson"],
      })
    );
    client.getVotesFromApi((callback) => {
      console.log(callback);
      expect(callback.name).toEqual(["Boris Johnson"]);
      done();
    });
  });
});


  // it('calls fetch and loads data', (done) => {
  //   fakeMemberId = 0
  //   const divisionsClient = new DivisionsClient(fakeMemberId);
  //   divisionsClient._fetchUrl = 
    
  //   fetch.mockResponse(JSON.stringify(fakeApiResponse));

  //   divisionsClient.getVotesFromApi((returnedDataFromApi) => {
  //     console.log(returnedDataFromApi)
  //     expect(returnedDataFromApi).toEqual(fakeApiResponse); // Asessing deep equality
  //     done();
  //   });
  // });

