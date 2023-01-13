var fs = require('fs');

// The fs.readFile() method is used to read files on your computer.
fs.readFile('demo.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});
let cont = fs.readFileSync('demo.txt', 'utf8');
console.log(cont);

// The File System module has methods for creating new files:
// 1. fs.appendFile() --> appends new text to new one
// 2. fs.open()
// 3. fs.writeFile() --> replaces the old text from new one

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

fs.appendFile("demo1.txt", "I am a new file", (err)=>{
    if(err) throw err;
    console.log("File created");
});

fs.writeFile("demo.txt", "I am a new text.", (err)=>{
    console.log("Replaced text");
})