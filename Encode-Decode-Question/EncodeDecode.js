const encode = (s) => s.replace(/(\D)\1\1+/g, (_) => _.length + _[0]);
const decode = (s) => s.replace(/(\d)+(\D)/g, (match, one, two) => two.repeat(parseInt(one)));

const encodeString = "abbbabaavvv"
const encodedString = encode(encodeString)
const decodedString = decode(encodedString)
console.log(encodedString)
console.log(decodedString)

console.assert(encodeString === decodedString, {encodeString, decodedString, errorMsg: "Strings do not match" })
