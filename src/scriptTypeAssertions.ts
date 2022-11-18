/* 
let idadeField = document.getElementById('idade');
console.log(idadeField.value);//o value não existe no HTMLElement;
//para mostrar os erros do exemplo e preciso descomenta entre as linhas 1 e 4;
*/
//o value faz parte do HTMLInputElement, por isso expressa erro, por que o TS entender que o que tem valor é campo de input
let idadeField2 = document.getElementById('idade') as HTMLInputElement;
console.log(idadeField2.value);//agora o erro sumiu;

// os assertions seria o termo 'as' que indica para o TS o comportamento que tal elemento tem; nesse caso ele não reconhecia que o input value tava querenco capturar o valor por não reconhecer que é um elemento de input. 