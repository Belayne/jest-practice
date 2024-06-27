function reverseString(str) {
    const reversed = [];
    for(const char of str) {
        reversed.unshift(char);
    }
    const reversedStr = reversed.join("");

    return reversedStr;
}

export {
    reverseString
}