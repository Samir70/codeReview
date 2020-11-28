export const sortColors2pass = {
    name: "sort array 3 colours -- two pass method",
    author: "Samir70",
    code: [
        "var sortColors2pass = function(nums) {",
        "    let tally = Array(3).fill(0);",
        "    for (let n of nums) {",
        "        tally[n]++",
        "    }",
        "    let i = 0, counter = 0;",
        "    for (let t of tally) {",
        "        while (t--) {nums[i] = counter; i++}",
        "        counter++",
        "    }",
        "};"
    ]
}

export const sortColors1pass = {
    name: "sort array of 3 colours in one pass",
    author: "Samir70",
    code: [
        "var sortColors1pass = nums => {",
        "    var low = 0, high = nums.length - 1;",
        "    var i = 0;",
        "    while (i <= high) {",
        "        var col = nums[i]",
        "        switch (col) {",
        "            case 0: {",
        "                nums[i] = nums[low]",
        "                nums[low] = 0;",
        "                low++;",
        "                i++;",
        "                break",
        "            }",
        "            case 1: {",
        "                i++",
        "                break",
        "            }",
        "            case 2: {",
        "                nums[i] = nums[high]",
        "                nums[high] = 2;",
        "                high--",
        "            }",
        "        }",
        "    }",
        "}"
    ]
}

// module.exports = {sortColors1pass, sortColors2pass}