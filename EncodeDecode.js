const encode = (s) => s.replace(/(\w)\1\1+/g, (_) => _.length + _[0])

const encodeString = "aaaaaahhhhhhdddjjssskkaaakkkssssskkwwwwwllllqqqwasdasdfasc"
const encodedString = encode(encodeString)
const decodeString = encodedString

console.log(encodeString)
console.log(decodeString)
console.log()
