// const express = require('express');

// const app = express();

// const port = 3000;

// app.get('/', (request, response)=>{
//     console.log('Hello');
//     response.send('Sudu');
// })

// app.get('/getPage', (req, res) => {        
//     res.sendFile('index.html', {root: __dirname});      
// });


// app.listen(port, () => {
//     console.log(`Now listening on port ${port}`);
// }); 

const { fs } = require('fs');
const http = require('http');


const server = http.createServer(function (request, response) {
    const { url } = request;
    if(url.includes('index.html')){
        fs.readFile('index.html', 'ascii', (err, data) => {
            response.end(data);
        })
    }else{
        response.end(`Hi`)
    }
    console.log('Got a request'+ url);
    response.end('shraddha')
});

server.listen(3000, ()=>{ // any number > 1024 and < 65536
    console.log('listening');
});

// socket -> port number