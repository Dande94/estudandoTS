//Criar types
/**
 nomes de types
 ° Pascalcase - esse sera o modelo usado
 ° camelCase
 
*/
 
//exemplo básico
type NomeCompleto =  string;
let nome: NomeCompleto = 'Anderson';
//Aplicação - mesma lógica de uma função, evitar extender o código
type Idade = string | number;//posso fazer uma union simplificada;

function mostrarIdade(i: Idade):Idade{//aplicando a uma função de exemplo
    return i;
}

//outro exemplo de simplificação
//modelo extenso
 function resumo(usuario: {nome:string, idade: number}){//a alteração será aplicada nessa linha
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}
resumo({
    nome: 'Anderson',
    idade:28
})
//modelo reduzido
type User ={
    nome: string,
    idade:number
}
function resumo2(usuario:User){//aplicando o type User que criei
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}
resumo2({
    nome: 'Anderson',
    idade:28
})
//----------
//criar Interface - o conceito básicamente é o mesmo de criar type;
interface User2 {
    nome: string,
    idade: number
}

function resumo3(usuario:User2){//aplicando o type User que criei
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}
resumo3({
    nome: 'Anderson',
    idade:28
})

//com o type não se pode criar propriedades novas já o interface é modular em relação isso;
//diferença

