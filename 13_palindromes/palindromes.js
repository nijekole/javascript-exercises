const palindromes = function (word) {
    const allchar = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanStr = word.toLowerCase()
    .split('')
    .filter((character) => allchar.includes(character))
    .join(''); 

    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr == reversedStr;
};
// Do not edit below this line
module.exports = palindromes;
