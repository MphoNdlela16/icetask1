import http from "http"
const PORT = 3000
const server = http.createServer((req, res) =>{
res.end('This is not  working')
})
server.listen(PORT)