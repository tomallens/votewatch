const DivisionsClient = require('../divisionsClient');
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
      expect(callback.name).toEqual(["Boris Johnson"]);
      done();
    });
  });
});
