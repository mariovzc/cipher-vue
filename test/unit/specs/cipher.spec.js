import {Cipher} from '@/Models/Cipher'
let cipher = new Cipher()

describe('class Cipher', () => {
  it('should enconde a letter', () => {
    let encode = cipher.encode('B', 2) // m , b
    expect(encode).to.equal('D')
  })
  it('should decode a letter', () => {
    let decode = cipher.decode('D', 2) // c, b
    expect(decode).to.equal('B')
  })
})
