import healthType from '../src/health';

test('health type', () => {
  const gamer = { name: 'Маг', health: 90 };
  const result = healthType(gamer);
  expect(result).toEqual('healthy');
});
