//Contextual Typing  é inteligencia do TS em identificar os tipos existentes em var e arrays e assim indicar conflito e apontar algo que deva ser tratado;

let names = ['anderson','gisele','isabel','andrey',90];

//função paara transforma todas as letars em maiúscula

//nessa 1ª função identifica a existencia de number em array onde será aplicao um metodo para string e expressa conflito;
names.forEach(function(nome){
    // console.log(nome.toUpperCase());
})

//função similar porém com o if que identifica a exietencia de uma condicinal para tratar string e numbers, e assim não expressando conflito;
names.forEach(function(nome){
    if(typeof nome === 'string'){
        console.log(nome.toUpperCase());
    }else{
        console.log(nome);
    }
});