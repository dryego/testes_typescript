var pessoa = {
    nome: "dryego",
    idade: 35,
    profissao: "desenvolvedor",
};
var outraPessoa = {
    nome: "carlos",
    idade: 35,
    profissao: "mecanico",
};
var mostraPessoa = function (nome, idade, profissao) {
    if (profissao === undefined) {
        profissao = "Não informada";
    }
    var pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao,
    };
    return pessoa;
};
console.log(mostraPessoa("dryego", 36), mostraPessoa("jose", 75, "motorista"));
var arrayPessoas = [pessoa, outraPessoa];
console.log(arrayPessoas);
