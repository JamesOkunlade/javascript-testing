let letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
​
let lettersInNumbers = {};
let numbersInLetters = {};
​
for (let i = 0; i < letters.length; i++) {
    lettersInNumbers[letters[i]] = i;
    numbersInLetters[i] = letters[i];
}
​
function encryptCharacter(char, shift) {
    let isUpCase = (char.match(/[A-Z]/)) ? true : false;
    if (!isUpCase) {
        char = char.toUpperCase();
    }
    let charPosition =  lettersInNumbers[char];
    if (charPosition) {
        let newCharPosition = (charPosition + shift) % 26;
        if (!isUpCase) {
            return numbersInLetters[newCharPosition].toLowerCase();
        } else {
            return numbersInLetters[newCharPosition];
        }
    } else {
        return char;
    }
}
​
function ceasar(string) {
    stringArray = string.split('');
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = encryptCharacter(stringArray[i], 3);
    }
    return stringArray.join('');
}
​
module.exports = ceasar;
