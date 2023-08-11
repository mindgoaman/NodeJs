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



//get data from mondgo db 
// let dbConnect = require('./mongodb/mongodb');
// const getData = async () => {
//      let result = await dbConnect()
//      let response = await result.find({ name: 'Samsung m50'}).toArray()
//      console.log("response",response)
// }

// getData()
// const readData = require('./mongodb/readData');

// const getData = async () => {
//     let readResp = await readData()
//     console.log("readdata",readResp);

// }

// getData()

// const dbConnect = require('./mongodb/mongodb');

// const insertData = async () => {
//     console.log("insert data")
//     const db = await dbConnect()
//     const insertResult = await db.insertOne(
//        [{
//             name: "note 6",
//             brand: 'real me',
//             price: "$50",
//             category: "Mobile"
//         },
//         {
//             name: "note 7",
//             brand: 'real me',
//             price: "$80",
//             category: "Mobile"
//         }]
//     )
//     console.log(insertResult?.acknowledged)
//     if (insertResult?.acknowledged) {
//          console.log("Data inserted successfully");
//     }else{
//         console.log("Data not inserted");
//     }
// }

// insertData()

// const insert = require('./mongodb/insertData');

// //many data insertion
// let manyData = [{
//     name: "note 11",
//     brand: 'real me2',
//     price: "$52",
//     category: "Mobile2"
// },
// {
//     name: "note 12",
//     brand: 'real me3',
//     price: "$89",
//     category: "Mobile3"
// }]
// insert(false, manyData)

// //One data insertion
// let oneData = {
//     name: "note 221",
//     brand: 'real me22',
//     price: "$543",
//     category: "Mobile45"
// }
// insert(false, oneData)

//update 
// let update = require('./mongodb/updateData');

// let onedataForbeUpdated = {
//      name: 'note 12' 
// }

// let onedataTobeUpdated = {
//      name: "note 6",
//      brand: "real me",
//      price: "$50",
//      category: "Mobile"
// }

// update(false, onedataForbeUpdated, onedataTobeUpdated)

// const deleteData = require('./mongodb/deleteData');
// let data = {
//    price: "$250"
// }
// deleteData(false, data)

