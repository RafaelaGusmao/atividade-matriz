/*4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command)*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var x = 0; x < 3; x++) {
    minhaMatriz[x] = new Array(3);
    for (var y = 0; y < 4; y++) {
        var nome = teclado("Digite os numeros no [".concat(x, ", ").concat(y, "]"));
        minhaMatriz[x][y] = nome;
    }
}
console.log(minhaMatriz);
