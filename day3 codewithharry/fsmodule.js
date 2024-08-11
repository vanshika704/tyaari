const fs = require('fs');
// fs.readFile('file.txt', 'utf-8' 
//     , (err,data) =>{
//     console.log(err,data)
// })
const a = fs.readFileSync('file.txt') 
    
    console.log(a.toString());

    // const b = fs.writeFile('file2.txt', "aaha tamatar bde majedaar ", () => {
    //     console.log("written file");
    // });
const b1 = fs.writeFileSync('file2.txt', "waah tamatar bde majedar")
console.log(b1);
console.log("likhdi file");

console.log("finished reading file");
