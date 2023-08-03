const http = require('http');
http.createServer((req, resp)=>{
     resp.writeHead(200,{'Content-Type':'application/json'})
     resp.write(JSON.stringify({name: 'Aman Sharma', email: 'mindgo.aman@gmail.com', mobile: 8929717151}))
     resp.end()
}).listen(3000);