export const stockSpanner = {
    name: "Design an object which returns the span of a stock",
    author: "Samir70",
    language: "javaScript",
    code: [ 
        "//stock prices arrives as [100, 80, 60, 70, 60, 75, 85]",
        "//output would be [1, 1, 1, 2, 1, 4, 6]",       
        "var StockSpanner = function() {",
        "    this.stocks = [[Infinity, 0]];",
        "    this.count = 0;",
        "};",
        "StockSpanner.prototype.next = function(price) {",
        "    while (this.stocks[this.stocks.length - 1][0] <= price) {this.stocks.pop()}",
        "    let lastStock = this.stocks[this.stocks.length - 1];",
        "    this.count++;",
        "    this.stocks.push([price, this.count]);",
        "    return this.count - lastStock[1]",
        "};"
    ]
}

