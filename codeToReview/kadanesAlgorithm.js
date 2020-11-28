export const kadane = {
    name: "Kadane's algorithm to find maximum subarray sum",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const kadane = (arr) => {",
        "    if (arr.length === 1) {return arr[0]}",
        "    var maxToHere = arr[0], maxSoFar = arr[0];",
        "    for (var i = 1; i<arr.length; i++) {",
        "        if (maxToHere + arr[i] > arr[i]) {",
        "            // get better subArray ending here by including ith element",
        "            maxToHere += arr[i];",
        "        } else {",
        "            maxToHere = arr[i];",
        "        }",
        "        if (maxToHere > maxSoFar) { maxSoFar = maxToHere }",
        "        // console.log('maxToHere, maxSoFar', maxToHere, maxSoFar)",
        "    }",
        "    return maxSoFar",
        "}"
    ]
};
