const nome: string = 'Anderson';

function exemplo1(n1:number):string {
    return 'O parametro era: ' + n1;
}

exemplo1(15);

//comando de criação do arquivo tsconfig.json
//tsc --init
//após isso se executa apenas o comando tsc
//tsc
//irá compilar todos os arquivos TS para JS;
//caso encontre erros, irá avisar porém compilará do mesmo jeito;
//se usar o comando watchMode irá acompanhar e aplicará a alterção em todos os asquivos TS;