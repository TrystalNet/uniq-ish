import * as UniqIsh from '../src/uniq-ish.ts'

describe('tests', () => {
  it('Creates a unique id with the correct length', () => {
    const id = UniqIsh.randomId(3)
    console.log(id)
    expect(id.length).toEqual(3)
  })
})
