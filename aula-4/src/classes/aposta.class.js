export default class Aposta {
  constructor(nome, peso) {
    this.id = new Date().getTime();
    this.nome = nome && nome.trim().length ? nome.trim() : null;
    this.peso = peso && peso.trim().length ? parseInt(peso) : null;
    this.ativo = true;
  }

  static valida(nome, peso) {
    if (!nome || !nome.trim().length)
      throw new Error('um nome deve ser informado');

    if (!peso || !peso.trim().length || isNaN(parseInt(peso)))
      throw new Error('o peso deve ser um número');
  }
}