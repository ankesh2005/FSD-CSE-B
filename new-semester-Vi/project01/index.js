const http=require('http');
const port=4500;
const {fetchServerData}=require('./getData')

const server=http.createServer(async(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type')
  
  if(req.url=='/msg' && req.method=='GET'){
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h2 style="color:red;">welcome to Node server</h2>')
  }
  else if(req.url=='/data' && req.method=='GET' ){
    const data= await fetchServerData()
    res.writeHead(200,{'content-type':'application/json'}) 
    res.end(JSON.stringify(data))
  }
  else if(req.url=='/data' && req.method=='POST' ){
    const data= await fetchServerData()
    res.writeHead(200,{'content-type':'application/json'}) 
    res.end(JSON.stringify(data))
  }
  else if(req.url=='/data' && req.method=='PUT' ){
    res.writeHead(200,{'content-type':'application/json'}) 
    res.end(JSON.stringify({msg:"updated successful"}))
  }
  else {
    res.writeHead(404,{'content-type':'application/json'})
    res.end(JSON.stringify({error:"Not Found"}))
  }
})

server.listen(port,()=>{
  console.log("server is running at port 4500")
})