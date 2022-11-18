//função tipada;
type MathFunction = (n1 : number, n2 : number) => number;// requisitos da tipagem;

const somar: MathFunction = (n1 , n2 ) => {//função aceitando a tipagem
    return n1 + n2;
}

const subtrairo: MathFunction = (n1 , n2 ) => {
    return n1 - n2;
}
const multiplicar: MathFunction = (n1 , n2 ) => {
    return n1 * n2;
}
const dividir: MathFunction = (n1 , n2 ) => {
    return n1 / n2;
}

// como espera um retorno de number ao deixa vazia(void) expressará erro;