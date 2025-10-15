/**
 * Convert an arbitrary string into lower camelCase (also known as "camelCase" or "lowerCamelCase").
 *
 * The function performs the following normalization steps before constructing the camelCase result:
 *  1. Trims leading and trailing whitespace.
 *  2. Rejects null/undefined, non-string values, empty strings after trim, and strings that consist only of digits.
 *  3. Splits camelCase boundaries (e.g. "fooBar" -> "foo Bar") to preserve existing camel-case word boundaries.
 *     - This uses the pattern: /([a-z0-9])([A-Z])/g.
 *  4. Unifies common word separators (underscore, hyphen and whitespace) into a single space.
 *     - Equivalent to: replace(/[_\-\s]+/g, ' ').
 *  5. Removes any other punctuation characters, preserving only ASCII letters, digits and spaces.
 *     - Equivalent to: replace(/[^A-Za-z0-9 ]+/g, '').
 *  6. Splits on spaces and lower-cases the first token, capitalizes the first character of every subsequent token
 *     while lower-casing the remainder, then joins them together with no separator.
 *
 * Behavior notes:
 *  - Alphabetic characters must be present somewhere in the input; purely numeric strings are rejected.
 *  - Numeric characters are allowed inside tokens and are preserved in the output (e.g. "version2-number" -> "version2Number").
 *  - Dots and other punctuation that are not explicitly preserved are removed during normalization.
 *
 * Errors thrown (TypeError) with exact messages:
 *  - "Input must be a string" if input is null/undefined or not of type string.
 *  - "Input must be a non-empty string" if input.trim() has length 0.
 *  - "Input must contain alphabetic characters" if the trimmed input is only digits or normalization produces no word tokens.
 *
 * Examples:
 *  toCamelCase('first name')    // 'firstName'
 *  toCamelCase('user_id')       // 'userId'
 *  toCamelCase('SCREEN_NAME')   // 'screenName'
 *  toCamelCase('mobile-number') // 'mobileNumber'
 *  toCamelCase('fooBarBaz')     // 'fooBarBaz'    (preserves existing camel boundaries)
 *
 * @function toCamelCase
 * @param {string} input - The source string to convert to camelCase.
 * @returns {string} The camelCase version of the input.
 * @throws {TypeError} If input is null, undefined, not a string, empty after trimming, or contains no alphabetic characters.
 */
 
/**
 * Convert an arbitrary string into dot.case (lowercase words separated by dots).
 *
 * The function performs the following normalization steps before constructing the dot.case result:
 *  1. Trims leading and trailing whitespace.
 *  2. Rejects null/undefined, non-string values, empty strings after trim, and strings that consist only of digits.
 *  3. Splits camelCase boundaries (e.g. "fooBar" -> "foo Bar") to preserve existing camel-case word boundaries.
 *     - This uses the pattern: /([a-z0-9])([A-Z])/g.
 *  4. Unifies common word separators (dot, underscore, hyphen and whitespace) into a single space.
 *     - Equivalent to: replace(/[._\-\s]+/g, ' ').
 *  5. Removes any other punctuation characters, preserving only ASCII letters, digits and spaces.
 *     - Equivalent to: replace(/[^A-Za-z0-9 ]+/g, '').
 *  6. Splits on spaces, lower-cases each token, and joins them with '.' as the separator.
 *
 * Behavior notes:
 *  - Alphabetic characters must be present somewhere in the input; purely numeric strings are rejected.
 *  - Numeric characters are allowed inside tokens and are preserved in the output (e.g. "v2_Release" -> "v2.release").
 *  - Dots present in the input are treated as separators (not preserved as-is), so "a.b" => "a.b" and "a..b" => "a.b".
 *
 * Errors thrown (TypeError) with exact messages:
 *  - "Input must be a string" if input is null/undefined or not of type string.
 *  - "Input must be a non-empty string" if input.trim() has length 0.
 *  - "Input must contain alphabetic characters" if the trimmed input is only digits or normalization produces no word tokens.
 *
 * Examples:
 *  toDotCase('First Name')      // 'first.name'
 *  toDotCase('user_id')         // 'user.id'
 *  toDotCase('SCREEN_NAME')     // 'screen.name'
 *  toDotCase('mobile-number')   // 'mobile.number'
 *  toDotCase('fooBarBaz')       // 'foo.bar.baz'
 *
 * @function toDotCase
 * @param {string} input - The source string to convert to dot.case.
 * @returns {string} The dot.case (lowercased, dot-separated) version of the input.
 * @throws {TypeError} If input is null, undefined, not a string, empty after trimming, or contains no alphabetic characters.
 */
