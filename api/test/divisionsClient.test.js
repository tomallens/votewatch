const DivisionsClient = require('../divisionsClient');
const fakeApiResponse = require('./fakeApiResponse.json');
require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('calls fetch and loads data', (done) => {
    fakeMemberId = 0 
    const divisionsClient = new DivisionsClient(fakeMemberId);

    fetch.mockResponse(JSON.stringify(fakeApiResponse));

    divisionsClient.getVotesFromApi((returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(fakeApiResponse); // Asessing deep equality
      done();
    });
  });
});