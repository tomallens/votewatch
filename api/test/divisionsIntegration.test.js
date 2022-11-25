const DivisionsClient = require('../divisionsClient');

describe('Client class', () => {

  it('calls fetch and loads real data from Commons API', (done) => {
    const divisionsClient = new DivisionsClient(4132);
    divisionsClient.getVotesFromApi((returnedDataFromApi) => {
      expect(returnedDataFromApi[0].MemberId).toBe(4132); 
      expect(returnedDataFromApi[0].MemberVotedAye).toBe(false);
      expect(returnedDataFromApi[0].PublishedDivision.DivisionId).toBe(1394);

      done();
    });
  });
});