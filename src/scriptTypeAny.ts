//type Any - habilita o uso de quarquer tipo dentro do Array, assim mesclado string com numbers entre outros; 
let chamada:string[] = ['Anderson','Gisele','Isabel','Andrey'];
//chamada.push(556);//conflito

let chamada2:any = ['Anderson','Gisele','Isabel','Andrey'];
chamada2.push(556);//sem conflito

let chamada3: any = ['Anderson', 28, true];