import { add } from '../calc'

describe('add test', () => {
  test('1 + 2', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
