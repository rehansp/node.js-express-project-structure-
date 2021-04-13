const http = require('http');
const app = require('./api/app');
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`);
});