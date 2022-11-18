function firstLetterUpperCase(name:string){//captura o nome(tipar cada parametro (name:string, age:number))
    let firstLetter = name.charAt(0).toUpperCase();//captura caracter na 1ª posiçãp letra(0) uso o metodo de transforma em maiúscula;
    return firstLetter+name.substring(1);//contatena a 1ª letra com o nome porém apartir da 2ª letra que está na posição (1)
}

firstLetterUpperCase('anderson');//retorna Anderson
//firstLetterUpperCase(90);//não gera conflito(pq o parametro name não foi tipado então ele seta automático o type any), porém ao executar expressa erro;