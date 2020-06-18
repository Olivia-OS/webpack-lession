import Matt from "./file1.js"
// import _ from "./node_modules/lodash-es/lodash.default.js"
import _ from "lodash"

var global = "this is a global var";

console.log(Matt.add(5, 4))
console.log(Matt.subtract(5, 4))
console.log(Matt.number)
console.log(_.random(1000, 2000))
