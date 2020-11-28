export const mergeIntervals = {
    name: "merge intervals",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const merge = intervals => {",
        "    if (intervals.length === 0) {return []}",
        "    let res = [];",
        "    intervals.sort((a, b) => a[0] - b[0]);",
        "    let cur = intervals[0];",
        "    let i = 1;",
        "    while (i < intervals.length) {",
        "        let compare = intervals[i];",
        "        if (compare[0] > cur[1]) {",
        "            res.push(cur);",
        "            cur = compare",
        "        } else {",
        "            cur[1] = Math.max(compare[1], cur[1])",
        "        }",
        "        i++;",
        "    }",
        "    res.push(cur);",
        "    return res",
        "};"
    ]
};
