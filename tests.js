var index = require("./index.js")

if (index.name === "Houssein") {
    console.log("The name is correct")
} else {
    console.log("Expected: Houssein, Received: " + index.name)
}



if (index.height === 80) {
    console.log("The height is correct")
} else {
    console.log("Expected: 80, Received: "+ index.height)
}
