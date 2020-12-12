export const mergesortedListsIterative = {
    name: "Merge two sorted lists, iterative version",
    author: "Samir70",
    language: "javaScript",
    code: [
        "var mergeTwoLists = function(a, b) {",
        "    let dummy = new ListNode(0);",
        "    let cur = dummy;",
        "    while (a && b) {",
        "        if (a.val < b.val) {",
        "            cur.next = a;",
        "            a = a.next;",
        "        } else {",
        "            cur.next = b;",
        "            b = b.next",
        "        }",
        "        cur = cur.next",
        "    }",
        "    cur.next = a || b",
        "    return dummy.next",
        "};"
    ]
}

export const mergeTwoListsRecursive = {
    name: "Merge two sorted lists, recursive version",
    author: "Samir70",
    language: "javaScript",
    code: [
        "var mergeTwoLists = function (a, b) {",
        "    if (!a || !b) { return a || b }",
        "    if (a.val < b.val) {",
        "        a.next = mergeTwoLists(a.next, b);",
        "        return a",
        "    }",
        "    b.next = mergeTwoLists(a, b.next);",
        "    return b",
        "};"
    ]
}

export const mergeKLists = {
    name: "Merge k sorted lists, divide and conquer",
    author: "Samir70",
    language: "javaScript",
    code: [
        "var mergeKLists = function(lists) {",
        "    while (lists.length > 1) {",
        "        let left = 0, right = lists.length - 1;",
        "        while (left < right) {",
        "            let merged = mergeTwoLists(lists[left], lists[right]);",
        "            lists.pop();",
        "            lists[left] = merged;",
        "            left++; right--;",
        "        }",
        "    }",
        "    return lists[0] || null",
        "};"
    ]
}

