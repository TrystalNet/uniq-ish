# uniq-ish
Creates unique ids by generating a string of base62 characters of specified length.

For example:

randomId(2) => 'Aa'
randomId(10) => '09aRq3zzy3'

A validator function can be passed as a parameter to specify which output values cannot be emitted 
(very useful for ensuring uniqueness in a domain)

let previouslyGenerated = new Set(['aa','bb','cc'])
let alreadyUsed = id => previouslyGenerated.has(id)
let r = randomId(2, alreadyUsed)
==> a0, Bb, ba, cx, 00, etc...

If the function fails after 100 attempts to produce a result it 
lengthens the number:

let iReallyWantThreeChars = id => id.length > 2
let r = randomId(2, iReallyWantThreeChars)
==> a0x, xb1, bb3, 000, ...
