function findCharacterClassMatches(str) {
    // Define patterns for character classes
    const digitPattern = /\d/g; // Matches digits
    const uppercasePattern = /[A-Z]/g; // Matches uppercase letters
    const lowercasePattern = /[a-z]/g; // Matches lowercase letters
    const specialCharPattern = /[^A-Za-z0-9\s]/g; // Matches special characters

    // Find matches for each character class in the string
    const digits = str.match(digitPattern) || [];
    const uppercaseLetters = str.match(uppercasePattern) || [];
    const lowercaseLetters = str.match(lowercasePattern) || [];
    const specialChars = str.match(specialCharPattern) || [];

    // Return an object containing the matches for each character class
    return {
        digits: digits,
        uppercaseLetters: uppercaseLetters,
        lowercaseLetters: lowercaseLetters,
        specialChars: specialChars
    };
}

// Test the function with a sample string
const sampleString = "Hello 123! How are you?";
const matches = findCharacterClassMatches(sampleString);

console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialChars);
