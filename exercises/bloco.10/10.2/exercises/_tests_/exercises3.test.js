const getUserName = require('../exercises3');

describe('getUserName test', () => {
  describe('when the id user exists', () => {
    it('returns ', async () => {
      expect.assertions(1)
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1)
      try {
          await getUserName(2)
      } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' })
      }
    });
  });
});

