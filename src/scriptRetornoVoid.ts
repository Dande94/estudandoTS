//quando uma função retorna vazia;
//exemplo: quando da um comando de remover um elemento;
function removerElemento(el: HTMLElement | null):void{
    el?.remove();
    //return 'bla bla bla' // se setar um retorno descaracteriza o void e gera conflito;
}
removerElemento(document.getElementById('teste'));


//na estrutura abaixo ao construir uma tipagem void e usala na função e a função retornar algo não gera conflito pois o ela espera void porém é opcional;(técnicamente "não espero nada dessa função!")
type QualquerFuncao = () => void;

const algo: QualquerFuncao = () =>{
    return 12;
}
