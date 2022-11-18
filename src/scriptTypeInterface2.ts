//com o type não se pode criar propriedades novas já o interface é modular em relação isso;
//diferença entre eles

interface User{
    nome:string;
}
//logo abaixo adiciono a nova propriedade e não expressa erro
interface User {
    idade:number;
}

function resumo(usuario:User){//aplicando o type User que criei
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}
resumo({
    nome: 'Anderson',
    idade:28
})

/*
// agora com type
type User2{
    nome:string;
}
//logo abaixo adiciono a nova propriedade e expressando erro
type User2{
    idade:number;
}
function resumo2(usuario:User2){//aplicando o type User que criei
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}
resumo2({
    nome: 'Anderson',
    idade:28
})
//para mostrar os erros do exemplo e preciso descomenta entre as linhas 21 e 37;
*/

// *Dar preferencia para o uso de Interface*