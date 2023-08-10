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


//crud operation on file system
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud/')

//create file
// const createFile = () => {
//     fs.writeFileSync(`${dirPath}${'sharma.txt'}`, "This is crud operation file create.")
// }

// createFile()

// const readFile = () => {
//     fs.readFile(`${dirPath}${'sharma.txt'}`, 'utf-8', (error, item)=> {
//         console.log('readfilecontent',item)
//     })
// }

// readFile()

// const updateFileContent = () => {
//      fs.appendFile(`${dirPath}${'sharma.txt'}`, 'Content of file has been changed', (error)=> {
//         if(!error)
//          console.log("file is updated.")
//      })
// }

// updateFileContent()

//rename file
// const renameFile = ( ) => {
//     fs.rename(`${dirPath}${'sharma.txt'}`, `${dirPath}${'rename.txt'}`, (err)=>{
//          if(!err){
//             console.log("file name has been changed.")
//          }
//     })
// }

// renameFile()


//delete file
// const deleteFile = () => {
//     fs.unlink(`${dirPath}${'rename.txt'}`, (err)=>{
//         if(!err){
//             console.log("file has been deleted")
//         }else{
//             console.log("error",err)
//         }
//     })
    
// }

// deleteFile()



//mondgo db connection with node js

const {MongoClient} = require('mongodb');
const mongodbPathURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbPathURL);
const database = 'e-comm'

const getData = async () => {
    let result = await client.connect()
    let db = result.db(database)
    let collection = db.collection('products')
    let response = await collection.find({}).toArray()
    console.log(response)

}

getData()

