const palindromes = function (string) {
    const modifiedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return modifiedString === modifiedString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
