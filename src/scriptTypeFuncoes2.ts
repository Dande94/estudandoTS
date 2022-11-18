function firstLetterUpperCase(name:string) :string {//():string indica que ser retornado uma string(esse metodo funciona para qualquer tipagem number/boolen/any)
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}

//let nome: number = firstLetterUpperCase('anderson');//conflita por ser number e retorna uma string;
let nome = firstLetterUpperCase('anderson');//não necessitar tipar aqui pis na função já setei o retorno com string;

//exemplo number
function somar(n1: number, n2: number):number{
    return n1 + n2;
    //return `${n1 + n2}`;//implica em conflito pq entender que é uma string por ser formato templateString
}
let result = somar(90,15);
