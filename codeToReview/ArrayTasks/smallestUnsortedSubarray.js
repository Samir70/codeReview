export const unsortedSubarrayN2 = {
    name: "find length of smallest subarray needed to be sorted so that whole array is sorted O(n squared) speed",
    author: "Samir70",
    language: "javaScript",
    code: [        
        "var findUnsortedSubarray = function (nums) {",
        "    let left = 0;",
        "    let minLeft = Infinity, maxRight = 0;",
        "    while (left < nums.length) {",
        "        let right = nums.length - 1",
        "        while (left < right) {",
        "            if (nums[left] > nums[right]) {",
        "                minLeft = Math.min(minLeft, left)",
        "                maxRight = Math.max(maxRight, right)",
        "            }",
        "            right--",
        "        }",
        "        left++",
        "    }",
        "    if (minLeft === Infinity) { return 0 }",
        "    return maxRight - minLeft + 1",
        "};"
    ]
}

export const unsortedSubarray = {
    name: "find length of smallest subarray needed to be sorted so that whole array is sorted O(n) speed",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const findUnsortedSubarray = nums => {",
        "    if (nums.length < 2) { return 0 }",
        "    let left = 0, right = nums.length - 1;",
        "    while (left < right) {",
        "        if (nums[left] <= nums[left + 1]) { left++ }",
        "        else { break }",
        "    }",
        "    if (left >= right) { return 0 }",
        "    while (left < right) {",
        "        if (nums[right] >= nums[right - 1]) { right-- }",
        "        else { break }",
        "    }",
        "    let min = nums[left], max = nums[right];",
        "    for (let i = left; i <= right; i++) {",
        "        min = Math.min(min, nums[i]);",
        "        max = Math.max(max, nums[i]);",
        "    }",
        "    while (left > 0 && nums[left - 1] > min) { left-- }",
        "    while (right < nums.length - 1 && nums[right + 1] < max) { right++ }",
        "    return right - left > 0 ? right - left + 1 : 0",
        "}"
    ]
}

