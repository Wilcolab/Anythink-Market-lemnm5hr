/**
 * Convert a string to camelCase.
 * Examples:
 *   string("basic prompt")   -> "basicPrompt"
 *   string("Basic-Prompt")   -> "basicPrompt"
 *   string("multiple_words") -> "multipleWords"
 *
 * @param {string} input
 * @returns {string}
 */
function string(input) {
    if (typeof input !== 'string') return '';
    const parts = input.trim().split(/[^a-zA-Z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';
    const first = parts[0].toLowerCase();
    const rest = parts.slice(1).map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase());
    return [first, ...rest].join('');
}

module.exports = string;