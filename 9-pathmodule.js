const path = require('path');

//property of the  path module to get the platform specific separator i.e. path.sep
console.log( `The platform specific separator is : ${path.sep}`);
 //another property to get the normalised path of some file
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath)
//property to get just the basename of the entire path of some file i.e. path.basename() 
console.log(path.basename(filePath));
//property to get the absolute path of some file i.e. path.resolve()
const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutePath)
