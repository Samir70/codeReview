export const fisherYatesShuffle = {
    name: "Fischer-Yates shuffle algorithm",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const shuffle = arr => {",
        "    let out = [...arr];",
        "    for (let i = out.length - 1; i > 0; i--) {",
        "        let j = Math.floor(Math.random() * (i+1)); // number 0..i",
        "        [out[i], out[j]] = [out[j], out[i]]",
        "    }",
        "    return out",
        "}"
    ]
};

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
        "            // improve previous subArray by including ith element",
        "            maxToHere += arr[i];",
        "        } else {",
        "            maxToHere = arr[i];",
        "        }",
        "        if (maxToHere > maxSoFar) { maxSoFar = maxToHere }",
        "    }",
        "    return maxSoFar",
        "}"
    ]
};
