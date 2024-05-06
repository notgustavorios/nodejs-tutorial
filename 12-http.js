const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to our history')
    }
    else{
        res.end(`
        <h1>OOPS!</h1>
        <p> We can't seem to find the page you're looking for</p>
        <a href="/">Back home</a>
        `)
    }
    
})

server.listen(5000)
