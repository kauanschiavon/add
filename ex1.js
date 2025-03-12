const leitura = require("prompt-sync")();

let nome = leitura("Informe um nome: ");
let cor = leitura("Digite sua cor favorita : ");
let filme = leitura("Digite seu filme preferido: ");
let cidade = leitura("Informe o nome da sua cidade: ");
let animal = leitura("Informe o nome do seu animal de estimação(caso tenha um): ");

console.log("Seja bem vindo cupincha vulgo : " + nome, "que tem a cor favorita" +cor,"Que tem o filme preferido" +filme, "que mora em "+cidade, "Que tem um animal de estimação chamado"+animal);
