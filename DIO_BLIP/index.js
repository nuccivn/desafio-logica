let heroi = {
    nome: "Nucci",
    xp: 7891  // Você pode alterar este valor para testar diferentes níveis
};
// Função para determinar o nível baseado no XP usando switch-case
function determinarNivel(xp) {
    switch (true) {
        case (xp < 1000):
            return "Ferro";
        case (xp >= 1001 && xp <= 2000):
            return "Bronze";
        case (xp >= 2001 && xp <= 5000):
            return "Prata";
        case (xp >= 5001 && xp <= 7000):
            return "Ouro";
        case (xp >= 7001 && xp <= 8000):
            return "Platina";
        case (xp >= 8001 && xp <= 9000):
            return "Ascendente";
        case (xp >= 9001 && xp <= 10000):
            return "Imortal";
        case (xp >= 10001):
            return "Radiante";
        default:
            return "Nível desconhecido";  // Caso não se encaixe em nenhum
    }
}
// Determinando o nível
let nivel = determinarNivel(heroi.xp);
// Exibindo a mensagem

console.log(`O herói de nome ${heroi.nome}, está no nível ${nivel}.`);