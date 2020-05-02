import * as S from '../src/modules/String'

describe('String', () => {
  it('isEmptyStr', () => {
    expect(S.isEmptyStr('')).toBe(true)
    expect(S.isEmptyStr('x')).toBe(false)
  })
})
