let palavra = "radar"
let palavrareverse = palavra.split('').reverse().toString().replace(/,/g, "")
if (palavra == palavrareverse){console.log("Essa palavra é palindromo")}
else {console.log("Essa palavra não é")}
