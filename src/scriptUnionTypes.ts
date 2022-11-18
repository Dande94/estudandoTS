//Como setar mais de uma tipagem ao uma váriavel, nesse caso limitando a opções;
let idade:  string | number = 28;//usando '|' o pipe para separar;
// idade = document.getElementById("idade").innerHTML;

//nesse exemplo mostra o poder do TS em identificar o qe tá sendo pedido na função ee conciliar co o processamento dela e se houver algo que não se aplicar irá expressar erro;
function mostrarIdade(idade: string | number){
    console.log("Minha idade é:" +idade);
    // console.log(idade.toUpperCase());//tirar o comentário para poder ver o conflito
}

//mesma função porém agora tratada
function mostrarIdade2(idade: string | number){
    if(typeof idade == 'string'){
        console.log(idade.toUpperCase());
    }else{
        console.log("Minha idade é:" +idade);
    }
}




mostrarIdade(28);
mostrarIdade('28');
//----------------
mostrarIdade2(28);
mostrarIdade2('28');