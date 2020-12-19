export const topologicalOrder = {
    name: "Topological order of a directed graph",
    author: "Samir70",
    language: "pseudoCode",
    code: [
        "// All vertices pointing to a vertex are listed before it",
        "// good for finding order of actions where one has to be done before another",
        "hash the edges of the graph into an object where every vertex has a list of those that lead into it and a list of those it leads out to",
        "Push every vertex with no ins onto the stack",
        "note the number of edges",
        "while the stack is not empty:",
        "- pop curr",
        "- push curr onto ordered list",
        "- for every vertex it points to: ",
        "-- remove curr from destination's inlist",
        "-- if this empties a destination's inlist, add it to the stack",
        "-- decrement the count of edges",
        "When stack is empty:",
        "- if edgecount is now 0, return ordered list; else false"
    ]
};

export const dijkstrasAlgorithm = {
    name: "Dijkstra's SSSP Algorithm",
    author: "Samir70 Dijkstra CodingGame",
    language: "pseudoCode",
    code: [
        "Mark your selected initial node with a current distance of 0 and the rest with infinity.",
        "Set the non-visited node with the smallest current distance as the current node C.",
        "For each neighbour N of your current node C: ",
        "    add the current distance of C with the weight of the edge connecting C to N. ",
        "    If it's smaller than the current distance of N, set it as the new current distance of N.",
        "Mark the current node C as visited.",
        "If there are non-visited nodes, go to step 2."
    ]
}


export const bisectGraph = {
    name: "Bisect a graph",
    author: "Samir70",
    language: "pseudoCode",
    code: [
        "// partition a graph so no vertex is the same set as a vertex it is adjacent to",
        "For each vertex:",
        "-- make a list of vertices they are adjacent to",
        "Then for each of these lists as [vertex, adjList]",
        "-- if the vertex is uncolored,",
        "--- colour it 1",
        "--- push it on to the stack",
        "--- add it to the set of vertices that have gone on the stack",
        "-- pop the stack and for every vertex in adjList of current",
        "--- if they are the same colour as current, return false",
        "--- // graph cannot be bisected",
        "---- else",
        "----- set their colour to 1 - colour(current) and",
        "----- (if they haven't already been pushed) push them on the stack",
        "- move onto next [vertex, adjList]"
    ]
}

export const subtreeWithAllDeepest = {
    name: "Find the LCA of deepest nodes in binary tree (with Euler Path)",
    author: "Samir70 rowe1337 ajna",
    language: "javaScript",
    code: [
        "const subtreeWithAllDeepest = root => {",
        "    let depth = [], path = [];",
        "    const eulerianPath = (n, d) => {",
        "        path.push(n); depth.push(d);",
        "        if (n.left) {",
        "            eulerianPath(n.left, d+1);",
        "            path.push(n); depth.push(d)",
        "        }",
        "        if (n.right) {",
        "            eulerianPath(n.right, d+1);",
        "            path.push(n); depth.push(d)",
        "        }",
        "    }",
        "    eulerianPath(root, 0);",
        "    let maxD = 0, minD = 0, out = 0;",
        "    for (let i = 1; i<depth.length; i++) {",
        "        if (depth[i] > depth[maxD]) {",
        "            maxD = i; minD = i; out = i",
        "        } else if (depth[i] === depth[maxD]) {",
        "            out = minD",
        "        } else if (depth[i] < depth[minD]) {",
        "            minD = i",
        "        }",
        "    }",
        "    return path[out]",
        "}"
    ]
}


