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

export const nextGreaterElement = {
    name: "replace elements of nums1 with first successor in nums2 that is greater",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const nextGreaterElement = (nums1, nums2) => {",
        "    let stack = [];",
        "    let hash = new Map();",
        "    for (let n of nums2) {",
        "        while (stack.length && stack[stack.length - 1] < n) {",
        "            hash.set(stack.pop(), n)",
        "        }",
        "        stack.push(n)",
        "    }",
        "    return nums1.map(n => hash.has(n) ? hash.get(n) : -1)",
        "}"
    ]
}

export const firstMissingPositive = {
    name: "find the first missing positive integer",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const firstMissingPositive = (nums) => {",
        "    let hash = {}",
        "    for (let n of nums) {",
        "        if (n > 0 && n <= nums.length) { hash[n] = true }",
        "    }",
        "    for (let i = 1; i <= nums.length; i++) {",
        "        if (hash[i] === undefined) { return i }",
        "    }",
        "    return nums.length + 1 // the elements of nums had all of 1..nums.length",
        "};"
    ]
}
