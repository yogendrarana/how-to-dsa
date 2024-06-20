/*
    String in JavaScript
    1. A string is a sequence of characters used to represent text.
    2. Strings are immutable, meaning once created, their values cannot be changed.
    3. Strings can be created using string literals or the String constructor.
*/

/*
    JavaScript String Methods:
    1. String Creation:
        - String(): Creates a new string object.
        - String.fromCharCode(): Returns a string created from the specified sequence of UTF-16 code units.
        - String.fromCodePoint(): Returns a string created by using the specified sequence of code points.

    2. String Inspection:
        - charAt(index): Returns the character at the specified index.
        - charCodeAt(index): Returns the Unicode of the character at the specified index.
        - codePointAt(pos): Returns a non-negative integer that is the Unicode code point value.
        - includes(searchString, position): Checks if a string contains another string.
        - startsWith(searchString, position): Checks if a string starts with another string.
        - endsWith(searchString, length): Checks if a string ends with another string.
        - indexOf(searchValue, fromIndex): Returns the index of the first occurrence of the specified value.
        - lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of the specified value.
        - localeCompare(compareString): Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

    3. String Transformation:
        - concat(...strings): Joins two or more strings and returns a new string.
        - repeat(count): Returns a new string with a specified number of copies of the string it was called on.
        - replace(searchValue, newValue): Replaces the first instance of a specified value with another value.
        - replaceAll(searchValue, newValue): Replaces all instances of a specified value with another value.
        - slice(start, end): Extracts a section of a string and returns it as a new string.
        - split(separator, limit): Splits a string into an array of substrings.
        - substring(start, end): Returns a subset of a string between one index and another, or through the end of the string.
        - toLowerCase(): Converts a string to lowercase letters.
        - toUpperCase(): Converts a string to uppercase letters.
        - trim(): Removes whitespace from both ends of a string.
        - trimStart() / trimLeft(): Removes whitespace from the beginning of a string.
        - trimEnd() / trimRight(): Removes whitespace from the end of a string.

    4. String Matching:
        - match(regex): Retrieves the matches when matching a string against a regular expression.
        - matchAll(regex): Returns an iterator of all results matching a string against a regular expression.
        - search(regex): Searches a string for a specified value and returns the position of the match.

    5. String Conversion:
        - toString(): Returns a string representing the specified object.
        - valueOf(): Returns the primitive value of a String object.
        - padStart(targetLength, padString): Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Padding is applied from the start (left) of the current string.
        - padEnd(targetLength, padString): Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Padding is applied from the end (right) of the current string.
        - toLocaleLowerCase(): The characters within a string are converted to lowercase while respecting the current locale.
        - toLocaleUpperCase(): The characters within a string are converted to uppercase while respecting the current locale.
*/
