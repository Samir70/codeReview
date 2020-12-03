export const longestCommonSubsequence = {
    name: "Find length of longest common subsequence",
    author: "Samir70",
    language: "javaScript",
    code: [
        "const longestCommonSubsequence = (A, B) => {",
        "    let dp = Array(A.length + 1)",
        "    for (let i = 0; i < dp.length; i++) {",
        "        dp[i] = Array(B.length + 1).fill(0)",
        "    }",
        "    for (let r = 1; r < dp.length; r++) {",
        "        for (let c = 1; c < dp[0].length; c++) {",
        "            if (A[r - 1] === B[c - 1]) {",
        "                dp[r][c] = dp[r - 1][c - 1] + 1",
        "            } else {",
        "                dp[r][c] = Math.max(dp[r][c - 1], dp[r - 1][c])",
        "            }",
        "        }",
        "    }",
        "    return dp[A.length][B.length]",
        "};"
    ]
}