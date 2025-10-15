// /workspaces/Anythink-Market-lemnm5hr/chain_prompt.js

/**
 * Convert a string to kebab-case.
 * - Returns an empty string for non-string input or when the result would be empty.
 * - Trims whitespace, lowercases, collapses sequences of non-alphanumeric characters
 *   (including spaces and underscores) into a single hyphen, and strips leading/trailing hyphens.
 *
 * @param {string} inputString
 * @returns {string}
 */
function toKebabCase(inputString) {
    if (typeof inputString !== 'string') {
        // invalid input type -> return empty string
        return '';
    }

    // Trim and normalize case
    const trimmed = inputString.trim();
    if (trimmed.length === 0) return '';

    // Use Unicode property escapes to keep letters/numbers from other scripts,
    // collapse any sequence of non-alphanumeric characters into a single hyphen.
    // Then remove leading/trailing hyphens that may have been created.
    const kebab = trimmed
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, '-') // collapse non-alnum sequences to '-'
        .replace(/^[-]+|[-]+$/g, ''); // trim leading/trailing hyphens

    return kebab;
}

/* Example usages */

// Normal string with spaces
console.log(toKebabCase('Hello World Example')); // expected: "hello-world-example"

// String with underscores and surrounding spaces/specials
console.log(toKebabCase('  __foo_bar__  ')); // expected: "foo-bar"

// Mixed casing and special characters
console.log(toKebabCase('This IS -- a Test!!! 123')); // expected: "this-is-a-test-123"

// Additional edge cases
console.log(toKebabCase('_____')); // expected: "" (only special characters -> empty)
console.log(toKebabCase(42)); // expected: "" (invalid type -> empty)

module.exports = { toKebabCase };