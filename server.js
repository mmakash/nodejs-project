const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        respondWithMessage(res,"This is homepage");
    }
    else if(req.url === "/about"){
        respondWithMessage(res,"This is about page");
    }
    else if(req.url === "/contact"){
        respondWithMessage(res,"This is contact page");
    }
    else if(req.url === "/file-write"){
        handlefileWrite(res);
    }
    else{
        respondWithMessage(res,"404 not found",404);
    }
});
function respondWithMessage(res, message, statusCode = 200) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(message);
  }
function handlefileWrite(res){
    fs.writeFile("demo.txt","hello World",(err) =>{
        if(err){
            respondWithMessage(res,"Error Writing file",500);
        }
        else{
            respondWithMessage(res,"File 'demo.txt' created and text 'hello world' written")
        }
    })
}
const port = 3000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});