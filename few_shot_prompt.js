/**
 * Convert a string to camelCase.
 * Examples:
 *  - "first name"   -> "firstName"
 *  - "user_id"      -> "userId"
 *  - "SCREEN_NAME"  -> "screenName"
 *  - "mobile-number"-> "mobileNumber"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    // Split on any non-alphanumeric characters, ignore empty segments
    const parts = input.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';

    const [first, ...rest] = parts;
    const lowerFirst = first.toLowerCase();

    const camelRest = rest
        .map(word => {
            const lw = word.toLowerCase();
            return lw.charAt(0).toUpperCase() + lw.slice(1);
        })
        .join('');

    return lowerFirst + camelRest;
}

module.exports = toCamelCase;

// Quick examples when run directly with Node:
if (require.main === module) {
    console.log(toCamelCase('first name'));      // firstName
    console.log(toCamelCase('user_id'));         // userId
    console.log(toCamelCase('SCREEN_NAME'));     // screenName
    console.log(toCamelCase('mobile-number'));   // mobileNumber
}