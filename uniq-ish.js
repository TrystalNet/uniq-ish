"use strict";
console.log('15-06-28A');
function base62encode(i) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (i === 0)
        return '0';
    let s = '';
    while (i > 0) {
        s = chars[i % 62] + s;
        i = Math.floor(i / 62);
    }
    return s;
}
exports.base62encode = base62encode;
function randomId(len, validator) {
    const Q = Math.pow(62, len || 4);
    const F = () => base62encode(Math.floor(Math.random() * Q));
    let id = F();
    if (validator) {
        let reps = 0;
        const maxreps = 100;
        while (reps++ < maxreps && !validator(id))
            id = F();
    }
    return id;
}
exports.randomId = randomId;
