const { combineUsers } = require('../index'); // make sure the path is correct

describe('combineUsers', () => {
  test('merges multiple arrays into one user array', () => {
    const result = combineUsers(['alice'], ['bob', 'carol'], ['dave']);
    expect(result.users).toEqual(['alice', 'bob', 'carol', 'dave']);
  });

  test('adds a valid merge_date in M/d/yyyy format', () => {
    const result = combineUsers(['user1']);
    const today = new Date().toString('M/d/yyyy');
    expect(result.merge_date).toBe(today);
  });

  test('works with no input arrays', () => {
    const result = combineUsers();
    expect(result.users).toEqual([]);
    const today = new Date().toString('M/d/yyyy');
    expect(result.merge_date).toBe(today);
  });
});

