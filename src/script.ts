/*
versão JS
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1,n2){
    return +n1 + +n2;//colocar um + na frente da variavel com o numero ele transforma de string pra number(inteiro)!
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular(numero1.value, numero2.value);
})

_______________________________________
*/
//versão TS

let numero1 = document.getElementById('numero1') as HTMLInputElement;//"as HTMLInputElement" informa que essa let terá comportamento de input HTMl
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular')as HTMLInputElement;
let res = document.getElementById('resultado')as HTMLInputElement;

function calcular(n1:number,n2:number){//:number informa ao parametro que ele deve receber um number;
    return n1 + n2;
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();//ao retorna o valor da função devolve como string para ser aplicada ao "res";
})

/*
_______________________________________
versão com erro:uso do ->  --noEmitOnError
let numero1 = document.getElementById('numero1') as HTMLInputElement;//
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular')as HTMLInputElement;
let res = document.getElementById('resultado')as HTMLInputElement;

function calcular(n1:number,n2:string){//aqui o erro
    return n1 + n2;
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
})
_______________________________________

*/


