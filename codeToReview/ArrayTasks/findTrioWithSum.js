export const findTrioWithSum = {
    name: "Find three elements in array with sum of 2020",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const findPairSorted = (sorted, target) => {",
        "    let left = 0, right = sorted.length - 1;",
        "    while (left < right) {",
        "        let a = sorted[left], b = sorted[right];",
        "        if (a+b === target) {return [a, b]}",
        "        if (a+b < target) {",
        "            left++",
        "        } else {",
        "            right--",
        "        }",
        "    }",
        "    return -1",
        "}",
        "const findTriple = arr => {",
        "    let sorted = arr.map(Number).sort((a, b) => a-b);",
        "    for (let i=0; i<sorted.length;i++) {",
        "        let outcome = findPairSorted(sorted.slice(i+1), 2020-sorted[i]);",
        "        if (outcome !== -1) {",
        "            return [sorted[i], ...outcome]",
        "        }",
        "    }",
        "}"
    ]
}
