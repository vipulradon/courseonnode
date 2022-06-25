const fs = require('fs');

//methods to read files in the fs module
const firstcontent = fs.readFileSync('./content/first.txt','utf-8');
console.log(firstcontent)
const secondcontent = fs.readFileSync('./content/second.txt','utf-8');
console.log(secondcontent)


//fs module method to create a new file 
fs.writeFileSync('./content/third.txt',`this is the content of the third file : ${firstcontent},${secondcontent}`,{flag:"a"})
