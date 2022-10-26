const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/example1',
    function(request,response){
        response.send('I am example1');
        console.log('I am example1');
    }
);

app.get('/example2',
    (request,response)=>{
        response.send("Olen example2");
        console.log("Olen example2");
    }
);
//kysymysmerkki määrittää fnamen vapaaehtoiseksi
app.get('/sayhello/:fname?',
    function(request,response){
        let fn=request.params.fname;
        response.send("Tervehdys "+fn);
    }
);

app.post('/addData',
    function(request,response){
        response.send(request.body.fname);
        console.log(request.body.fname);
    }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;