/*4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command)*/

console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: number [][] = [];

for (let x =0; x < 3; x++ ){
    minhaMatriz[x] = new Array(3);
    for(let y = 0; y < 4; y++){
        let nome: number = teclado(`Digite os numeros no [${x}, ${y}]`);
        minhaMatriz[x][y] = nome;
    }
}
console.log(minhaMatriz);