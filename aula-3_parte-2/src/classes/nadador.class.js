export default class Nadador {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

export function mostraNome(nadador) {
  console.log(`Nome do Nadador: ${nadador.nome}`);
}

export function mostraIdade(nadador) {
  console.log(`Idade do Nadador: ${nadador.idade}`);
}