//como setar uma propriedade(parametro) como opcional,caso eu não a tenha preciso tratala; 
function resumo(usuario: {nome: string, idade?: number}){//usando '?' depois da var que será opcional
    if(usuario.idade !== undefined){//e aqui tratando essa ausência de informação
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    }else{
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}

let u = {
    nome: 'Anderson',
    //idade: 28 //aqui no caso simulei a ausenca do dados idade
}
resumo(u);