// server creation and data send
// const data = require('./data')
// const http = require('http');
// http.createServer((req, resp)=>{
//      resp.writeHead(200,{'Content-Type':'application/json'})
//      resp.write(JSON.stringify(data))
//      resp.end()
// }).listen(3000);

//command line input
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
const inputRec = process.argv
console.log(inputRec)

if (inputRec[2] == 'add') {
     console.log(`${dirPath}${'/'}${inputRec[3]}`)
     fs.writeFileSync(`${dirPath}${'/'}${inputRec[3]}`, inputRec[4])
} else if (inputRec[2] == 'remove') {
     console.log(`${dirPath}${'/'}${inputRec[3]}`)
     fs.unlinkSync(`${dirPath}${'/'}${inputRec[3]}`, inputRec[4])
}else{
     console.log('Not valid input')
}