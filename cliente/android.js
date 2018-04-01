var http = require('http');
var buffer_corpo_response = [];

var opcoes ={
    hostname: 'localhost',
    port: 80,
    path: '/teste',
    method: 'get',
    headers: {
        'Accept': 'application/json',
        //'Content-type' : 'application/x-www-form-urlencoded'
        'Content-type' : 'application/json'
    }
};

//Content-type
//x-www-form-urlencoded  - Formulário

var html = 'nome=José';
var json = {nome: 'José'};
var req = http.request(opcoes, function(res){
    //ler streaming
    res.on('data', function(chunk){
        buffer_corpo_response.push(chunk);
    });

    //Terminou
    res.on('end', function(){
        console.log(Buffer.concat(buffer_corpo_response).toString());
        console.log(res.statusCode);
    });

    res.on('error', function(){

    });
});

//Escrevendo o conteúdo da requisição
//req.write(html);

//req.write(JSON.stringify(json));
/* Executa o request */
req.end();