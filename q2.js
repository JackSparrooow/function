
function testRegex(pattern, str) {
    
    let regex = new RegExp (pattern);

    return regex.test(str)
}

console.log(testRegex("hello", "Hello, world!")); // false, because "hello" is case-sensitive
console.log(testRegex("world", "Hello, world!")); // true, because "world" is found in the string
console.log(testRegex("[0-9]+", "The answer is 42.")); // true, because there are digits in the string
console.log(testRegex("\\d{3}-\\d{3}-\\d{4}", "Phone number: 555-123-4567")); // true, because it matches the format of a phone number