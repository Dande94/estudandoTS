//o TS subentende que tal váriavel não é instável e expressa erro co intenção de blindar o código; 
function fazerReuisicoes(url:string, method:'GET' | 'POST'){
    //.........
}
function fazerReuisicoes2(url:string, method:'GET' | 'POST'){
    //.........
}

type Methods = 'GET' | 'POST';

let url = "https://google.com.br";
//let method = 'GET';//não aceita;
let method: Methods = 'GET';//aceitável;
fazerReuisicoes(url, method);//caso não crie o type o typescript expressará error por não deixa especifico quais opções aceita;

//com objeto
//let req = {url: "https://google.com.br", method: "GET"};//não aceitável;
type RequestDetails = {
    url: string, 
    method: 'GET'  | 'POST'
}
let req : RequestDetails= {
    url: "https://google.com.br", 
    method: "GET"
}
fazerReuisicoes2(req.url, req.method);
