//Array no TS tipagem

//let nomes = ['Anderson','Gisele','Isabel','Andrey'];//JS
let nomes:string[] = ['Anderson','Gisele','Isabel','Andrey'];//digo ao TS que isso é um array de strings
//let nomes:string[] = ['Anderson','Gisele','Isabel','Andrey',90];//conflito

//array para numbers, dois exemplos corretos
let idades: number[]  = [5.5,90,50,20,30];//mais usado
let numeros: Array<number> = [5.5,90,50,20,30];
//numeros.push(101);
//numeros.push('Anderson');//conflito