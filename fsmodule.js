const filesystem = require("fs");

filesystem.readFile("file.txt", "utf8", (err, data) => {
    console.log(err, data)
})

const a = filesystem.readFileSync("file.txt")                      //(It will intentinally block further function from loading i.e. it will block the next console log untill it is done.)
console.log(a.toString())


// console.log("for read file sync");


filesystem.writeFile("file.txt", "My sirname is Khan", ()=>{
    console.log("TEXT IS WRITTEN")
})

filesystem.writeFileSync("file.txt", "My sirname is Khan...")          //(It will intentinally block further function from loading)



