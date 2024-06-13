/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.*/

console.clear();

let teclado = require (`rompt-sync`)();
let minhaMatriz: string [][] = [];
let linha: number = 2;
let coluna: number = 2; 

for (let i = 0; i<= linha; i++) {  

    minhaMatriz[i] = [];  
    for (let x=0; x <= coluna ; x++) {  
        let resultado: string = teclado(`Digite o número que vai estar no endereco [${i}, ${x}] da matriz: `);  
        minhaMatriz[i][x]= resultado;  
    }  
}
console.log(minhaMatriz);