const  getUserName = require('../exercises2');

describe('getUserName test', () => {
  describe('when the id user exists', () => {
    it('returns ', () => {
      expect.assertions(1)
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1)
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});

