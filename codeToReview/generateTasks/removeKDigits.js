export const removeKDigits = {
    name: "Remove k digits to get smallest number",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const removeKDigits = (num, k) => {",
        "    if (num.length <= k ) {return '0'}",
        "    var answer = [];",
        "    for (var i=0; i<num.length; i++) {",
        "        while (k>0 && answer.length > 0 && answer[answer.length - 1] > num[i]) {",
        "            answer.pop();",
        "            k--",
        "        }",
        "        answer.push(num[i]);",
        "    }",
        "    while (k>0) {",
        "        answer.pop();",
        "        k--",
        "    }",
        "    while (answer[0] === '0') {answer.shift()}",
        "    return answer.length === 0 ? '0' : answer.join('')",
        "}"
    ]
}
