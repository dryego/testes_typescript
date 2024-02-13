interface Pessoa {
  nome: string;
  idade: number;
  profissao?: string;
}

const pessoa: Pessoa = {
  nome: "dryego",
  idade: 35,
  profissao: "desenvolvedor",
};
const outraPessoa: Pessoa = {
  nome: "carlos",
  idade: 35,
  profissao: "mecanico",
};

const mostraPessoa = (nome: string, idade: number, profissao?: string) => {
  if (profissao === undefined) {
    profissao = "Não informada";
  }

  const pessoa: Pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao,
  };

  return pessoa;
};

console.log(mostraPessoa("dryego", 36), mostraPessoa("jose", 75, "motorista"));

const arrayPessoas: Array<Pessoa> = [pessoa, outraPessoa];

console.log(arrayPessoas);

const tipoUsuario = {
  admin: "Bemvindo administrador.",
  estudante: "Bemvindo Estudante.",
  espectador: "Bemvindo Espectador.",
};

const saudacaoUsuario = (usuario: string) => {
  return tipoUsuario[usuario as keyof typeof tipoUsuario];
};

console.log(saudacaoUsuario("admin"));
