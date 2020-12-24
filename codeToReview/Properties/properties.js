export const longestPalindrome = {
    name: "Find the length of the longest palindrome that can be made from given string",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const longestPalindrome = s => {",
        "    let singles = new Set();",
        "    var pairCount = 0;",
        "    for (var c of s) {",
        "        if (singles.has(c)) {",
        "            pairCount++;",
        "            singles.delete(c)",
        "        } else {",
        "            singles.add(c)",
        "        }",
        "    }",
        "    let longest = pairCount*2",
        "    return longest < s.length ? longest+1 : longest",
        "}"
    ]
}
