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

