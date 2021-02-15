export const reverseDigits = {
    name: "Reverse the digits in a number, 32 bit limit, return zero if that puts ouput beyond limit",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const reverse = x => {",
        "    if (x < 0) { return -reverse(-x) }",
        "    if (x < 10) { return x }",
        "    let out = 0;",
        "    while (x > 0) {",
        "        let digit = x % 10;",
        "        x = Math.floor(x / 10);",
        "        out = 10 * out + digit;",
        "        if (out > 2147483647) { return 0 }",
        "    }",
        "    return out",
        "}"
    ]
}

