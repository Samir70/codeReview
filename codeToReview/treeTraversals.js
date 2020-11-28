export const inorderIterative = {
    name: "iterative inorder traversal of binary tree without overwriting",
    author: "Samir70",
    code: [
        "const inorderTraversal = root => {",
        "    let inorder = [];",
        "    let stack = [];",
        "    let cur = root",
        "    while (cur || stack.length) {",
        "        while (cur) {",
        "            stack.push(cur);",
        "            cur = cur.left;",
        "        }",
        "        cur = stack.pop();",
        "        inorder.push(cur.val);",
        "        cur = cur.right",
        "    }",
        "    return inorder",
        "};"
    ]
};

export const inorderRecursive = {
    name: "recursive inorder traversal of binary tree",
    author: "Samir70",
    code: [
        "const inorderTraversal = root => {",
        "    if (root === null) {return []}",
        "    let l = inorderTraversal(root.left);",
        "    let r = inorderTraversal(root.right);",
        "    return [...l, root.val, ...r ]",
        "};"
    ]
};

