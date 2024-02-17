function extractDateParts(pattern, str) {
    // Create a RegExp object with the provided pattern
    let regex = new RegExp(pattern);

    // Test if there is a match between the regex pattern and the string
    let match = regex.exec(str);

    if (match) {
        // Extract specific parts using groups
        let day = match[1];
        let month = match[2];
        let year = match[3];

        // Return an object containing the extracted date parts
        return {
            day: day,
            month: month,
            year: year
        };
    } else {
        return null; // Return null if there is no match
    }
}

// Test the function with a pattern to extract date parts
let dateStr = "Today is 17-02-2024";
let datePattern = /(\d{2})-(\d{2})-(\d{4})/;
let extractedDate = extractDateParts(datePattern, dateStr);

console.log("Extracted Date Parts:", extractedDate);
