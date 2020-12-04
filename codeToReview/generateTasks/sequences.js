export const tribonacci = {
    name: "Genearate the tribonnaci sequence",
    author: "Samir70",
    language: "javaScript",
    code: [
        "var tribonacci = function(n) {",
        "    var trib = [0, 1, 1];",
        "    if (n < 3) {return trib[n]}",
        "    var i = 2",
        "    while ( i < n) {",
        "        i++",
        "        trib = [trib[1], trib[2],trib[0] + trib[1] + trib[2] ]",
        "    }",
        "    return trib[2]",
        "};"
    ]
};

export const klarnerRado = {
    name: "Generate the Klarner-Rado sequence",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const klarnerRado = (n) => {",
        "    var members = [1];",
        "    var fromDoublePointer = 0, fromTriplePointer = 0;",
        "    var fromDouble = 3, fromTriple = 4;",
        "    var lastAdded = 1;",
        "    while (members.length < n) {",
        "        if (fromDouble < fromTriple) {",
        "            if (fromDouble !== lastAdded) {",
        "                members.push(fromDouble);",
        "                lastAdded = fromDouble",
        "            }",
        "            fromDoublePointer++;",
        "            fromDouble = members[fromDoublePointer] * 2 + 1",
        "        } else {",
        "            if (fromTriple !== lastAdded) {",
        "                members.push(fromTriple);",
        "                lastAdded = fromTriple;",
        "            }",
        "            fromTriplePointer++;",
        "            fromTriple = members[fromTriplePointer] * 3 + 1",
        "        }",
        "    }",
        "    return members",
        "}"
    ]
};


