
/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.*/

console.clear();
let minhaMatriz: number [][] = []; 

let linha: number = 2; 
let coluna: number = 2; 
 
for (let z = 0; z <= linha; z++) {  
    minhaMatriz[z] = [];  
    for (let x=0; x <= coluna ; x++) {  
        minhaMatriz[z][x] = Math.floor(Math.random() * 21);  
    }  
}  

console.log(minhaMatriz);

let maior: number = minhaMatriz[0][0];
let posicao: number[] = [0, 0];

for (let z = 0; z < linha; z++) {
  for (let x = 0; x < coluna; x++) {
    if (minhaMatriz[z][x] > maior) {
      maior = minhaMatriz[z][x];
      posicao = [z, x];
    }
  }
}

for (let z = 0; z < linha; z++) {
  for (let x = 0; x < coluna; x++) {
    if (minhaMatriz[z][x] > maior) {
      minhaMatriz[z][x] = maior;
      posicao[1] = z;
      posicao[0] = x;
    }
  }
}
console.log(`O maior elemento da matriz é: ${maior} e se encontra na posição [${posicao[0]}, ${posicao[1]}]`);
console.log(minhaMatriz);