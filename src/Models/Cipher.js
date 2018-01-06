const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export class Cipher {
  encode (m, b) {
    const c = _mod(letters.indexOf(m) + b)
    return letters[c]
  }
  decode (c, b) {
    const m = _mod(letters.indexOf(c) - b)
    return m === -1 ? letters[letters.length - 1] : letters[m]
  }
  encodeWord (word, b) {
    let cipheWord = ''
    word.split('').forEach((element) => {
      cipheWord += ((element === '') ? ' ' : this.encode(element, b))
    })
    return cipheWord
  }
  decodeWord (word, b) {
    let decipherWord = ''
    word.split('').forEach((element) => {
      decipherWord += ((element === '') ? ' ' : this.decode(element, b))
    })
    return decipherWord
  }
}

// PRIVATE METHOD
function _mod (n) {
  return ((n % 27) + 27) % 27
}
