console.log('15-06-28A');
export function base62encode(i) {
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
export function randomId(len, validator) {
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
//# sourceMappingURL=uniq-ish.js.map