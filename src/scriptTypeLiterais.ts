//type literal -  um modo de setar algo fixo dentro de uma variavel(muito parecido anexar algo como const); 
//faz muito mais sentido usar quando se tem mais de um opçao a ser setada e se quer limitar a aceitação apenas a essas opções;
let nome:string = 'Anderson';//modelo tradicional;
const nome2: string = 'Anderson';//medelo const;
let nome3: 'Anderson' = 'Anderson';//type literal
//nome3 = 'Fulano'//ao tentar colocar outro valor na variavel exibe erro;

function mostrarTexto(texto:string,
    alinhamento: 'left'|'right'|'center') {//aqui eu informo que o parametro alinhamento só pode aceitar essas 3 opções
        return `<div style="text-align:${alinhamento}">${texto}</div>`;//exemplo do uso da função;
}

mostrarTexto('Anderson','left');
mostrarTexto('Anderson','right');
//mostrarTexto('Anderson','biruleibe');//por não ser aceitável como parametro, expressa erro;

//3 exemplos 
function temNome(nome:string): true | false{//aqui digo que só pode retorna true ou false;
    if(nome !== ''){
        return true
    }else{
        return false;
    }
    //se usar operador ternário expressa erro- >   nome !== ''? true : false;
}

function temNome2(nome:string): boolean{ //pode se usar o termo boolean diretamente no lugar de'true | false';
    if(nome !== ''){
        return true
    }else{
        return false;
    }
}

//posso criar um type já com os literia dentro;
type VerdadeiroOuFalso = true | false;
function temNome3(nome:string): VerdadeiroOuFalso{
    if(nome !== ''){
        return true
    }else{
        return false;
    }
}
//nesse exemplo o mais enxuto seria usar o exemplo do boolean, os outros dois são apenas pra exemplificar como usar o types literais;
//----------
//outro exemplo 
function configurar(props: {width: number, height: number} | 'auto'){}//estou unformando a função que posso tanto capturar valores setado como posso também capturar uma string pré determinada
configurar({width: 100, height:200});
configurar('auto');
//configurar('automático');//expressa erro por não ser aceitável
//melhorando o exemplo anteior
type Opcoes= {
    width: number;
    height:number
}
function configurar2(props: Opcoes | 'auto'){}
configurar2({width: 100, height:200});
configurar2('auto');


