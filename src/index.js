function reverse (n) {
    
    return Number(String(Math.abs(n)).split('').reverse().join(''));
    
}
console.log(reverse(-425));