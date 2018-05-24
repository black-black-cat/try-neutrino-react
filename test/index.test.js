import './flyio'
test('should be sane', () => {
  expect(false).not.toBe(true);
  expect(1 == '1').toBeTruthy()
});

test('toEqual', () => {
  expect({ a: 'a' }).toEqual({ a: 'a' })
  expect({ a: 1 }).toEqual({ a: '1' })
})
