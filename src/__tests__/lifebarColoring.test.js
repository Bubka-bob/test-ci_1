import getLifeBarColor from '../../src/lifebarColoring';

describe('getLifeBarColor function', () => {
  // Тест для случая, когда здоровье больше 50
  it('returns "healthy" when health is above 50', () => {
    const result = getLifeBarColor({ name: 'Paladin', health: 90 });
    expect(result).toEqual('healthy');
  });

  // Тест для ситуации, когда здоровье находится между 15 и 50
  it('returns "wounded" when health is between 15 and 50 inclusive', () => {
    const result = getLifeBarColor({ name: 'Archer', health: 30 });
    expect(result).toEqual('wounded');
  });

  // Тест для критического состояния, когда здоровье менее 15
  it('returns "critical" when health is below 15', () => {
    const result = getLifeBarColor({ name: 'Sorceress', health: 10 });
    expect(result).toEqual('critical');
  });
});