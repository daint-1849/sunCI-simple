const { x } = require('../src/index')

describe('x', () => {
  it('xtest', () => {
    x(123)
    expect(true).toBe(true)
  })
})