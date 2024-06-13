/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.*/

console.clear();
let minhaMatriz: number [][] = []; 
let teclado = require (`prompt-sync`)();

let linha: number = 4; 
let coluna: number = 4; 
 
for (let x = 0; x <= linha; x++) {  
    minhaMatriz[x] = [];  
    for (let i =0; i <= coluna ; i++) {  
        minhaMatriz[x][i] = Math.floor(Math.random() * 10);  
        let resultado: string = teclado(`Digite o número que vai estar no endereco [${i}, ${x}] da matriz: `);  
        
    }  
}  
console.log(minhaMatriz);