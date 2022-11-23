const DivisionsClient = require('../divisionsClient');
const fakeApiResponse = require('./fakeApiResponse.json');
require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('calls fetch and loads data', (done) => {
    const DivisionsClient = new DivisionsClient();

    fetch.mockResponse(JSON.stringify(fakeApiResponse));

    newsClient.loadNews((returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual(fakeApiResponse); // Asessing deep equality
      done();
    });
  });
});