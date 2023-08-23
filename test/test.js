import healthType from '../src/health';

test('health type healthy', () => {
  const gamer = { name: 'Маг', health: 90 };
  const result = healthType(gamer);
  expect(result).toEqual('healthy');
});

test('health type wounded', () => {
  const gamer = { name: 'лучник', health: 30 };
  const result = healthType(gamer);
  expect(result).toEqual('wounded');
});

test('health type critical', () => {
  const gamer = { name: 'мечник', health: 10 };
  const result = healthType(gamer);
  expect(result).toEqual('critical');
});
