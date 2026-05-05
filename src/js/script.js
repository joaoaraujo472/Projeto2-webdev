// LIMPEZA 

const email = "   email@email.com  ";
// trim - remove os espaços inicio e fim
const emailLimpo = email.trim();
console.log(emailLimpo)

// VALIDAÇÂO
if (emailLimpo.includes("@" && ".com")){
    console.log("email válido")
}else{
    console.log("email inválido")
}

//  TRANSFORMAÇÃPO DE TEXTO

const tituloArtigo="Como aprender JAVA RAIZ";
// metodo upper(maiusculo) e low(minusculo)
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)

// Slipt - transforma o texto em array
const texto2 = tituloArtigo.split(" ");
console.log(texto2)

// join - junta tudo em uma unica string
const texto3 = texto2.join("-");
console.log(texto3)

// metodo toFixed

const precoProduto = 199.99;
const desconto = 0.15; //15%
const precoFinal = precoProduto * (1-desconto);
console.log(precoFinal)
// `` - template strings - concatenação
console.log(`R${precoFinal.toFixed(2)}`);

// DOM (DOCUMENT OBJECT MODEL)

const Titulo = document.getElementById("titulo")

titulo.innerText = "O DOM mundou o texto"

titulo.style.color = "blue"

