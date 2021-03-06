# uniq-ish
Creates unique ids by generating a string of random characters of specified length.

For example:

```
console.log(randomId(2)) // 'mQ'  
console.log(randomId(10)) // '09aRq3zzy3'
```

## Custom Validator
A <b>validator</b> function can be passed as a parameter to specify which output values cannot be emitted 
(very useful for ensuring uniqueness in a domain)

For example, to require your id have at least one 'a':  

```
console.log(randomId(5, id => id.indexOf('a'>= 0)))  // bcq12
```

If the function fails after 100 attempts to produce a result it lengthens the number:

```
let TWO = 2
let THREEACTUALLY = id => id.length > 2
console.log(randomId(TWO, THREEACTUALLY)) // a0x, xb1, bb3, 000, ...  
```

## Custom Character Set
By default characters are generated from the base62 set (a-zA-Z0-9).  
You can pass your own character set instead, as a string of any length.  
For example, to generate a random string of 10 'ABC#@' characters: 

```
console.log(randomId(10,null,'ABCD@#')) // @B#DD#@ABC
```

_uniq-ish_ was created for use in the Trystal code ecosystem.
