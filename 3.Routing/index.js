const http=require('http');
const port = 3000;
const hostname= '127.0.0.1';
const fs=require('fs');

const server=http.createServer((req,res)=>{
  const handleReadFile = (statusCode, fileLocation) =>{
    fs.readFile(fileLocation,(err,data)=>{
        res.writeHead(statusCode,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
  }

   if(req.url==='/'){
        handleReadFile(200,'./views/index.html')
    
   }
   else if(req.url==='/about'){
    handleReadFile(200,'./views/about.html')
   }
   else if(req.url==='/contact'){
    handleReadFile(200,'./views/contact.html')
   }
   else{
        handleReadFile(200,'./views/error.html')
   }

});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});