function resumo(usuario: {nome: string, idade: number}){//digo ao parametro que ele vai receber um objeto e que 1 é string e o outro é number;
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;//aplico as informações do objeto
}
//Implementação da função
let u = {//objeto;
    nome: 'Anderson',
    idade: 28 
}
// caso coloque mais dados no meu objeto porém não use não irá expressar erro, porém pedir mais dados do que consta dentro do objeto irá expressar erro.
resumo(u);