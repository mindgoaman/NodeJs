// server creation and data send
// const data = require('./data')
// const http = require('http');
// http.createServer((req, resp)=>{
//      resp.writeHead(200,{'Content-Type':'application/json'})
//      resp.write(JSON.stringify(data))
//      resp.end()
// }).listen(3000);

//command line input
// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'files')
// const inputRec = process.argv
// console.log(inputRec)

// if (inputRec[2] == 'add') {
//      console.log(`${dirPath}${'/'}${inputRec[3]}`)
//      fs.writeFileSync(`${dirPath}${'/'}${inputRec[3]}`, inputRec[4])
// } else if (inputRec[2] == 'remove') {
//      console.log(`${dirPath}${'/'}${inputRec[3]}`)
//      fs.unlinkSync(`${dirPath}${'/'}${inputRec[3]}`, inputRec[4])
// }else{
//      console.log('Not valid input')
// }

//multiple files creation and read multiples files
// const { error } = require('console');
// const fs = require('fs');
// const dir = require('path');
// const dirPath = dir.join(__dirname, 'files');

// //createFile
// const createFile = () => {
//      for(let i=0; i<5; i++){
//           console.log(i)
//           fs.writeFileSync(`${dirPath}${'/sharma'}${i}${'.txt'}`, `${'This is'} ${i} ${'is created inside files folder.'}`)
//      }
// }

// //readFiles
// const readFiles = () => {
//      fs.readdir(dirPath,(err, filesread)=>{
//           filesread.map((item)=>{
//                console.log(`${'file name is'} ${item}`)
//           })
//      })
   
// }

//createFile()
// readFiles()