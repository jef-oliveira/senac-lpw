export default class ApostaLista {
  constructor(apostas = []) {
    this.apostas = [ ...apostas ];
  }

  get() {
    return [ ...this.apostas ];
  }

  get inativas() {
    return this.apostas.filter(aposta => !aposta.ativo);
  }

  novaAposta(aposta) {
    this.apostas.push(aposta);
  }

  ativarDesativar(id) {
    const aposta = this.apostas.find(aposta => aposta.id == id);
    aposta.ativo = !aposta.ativo;
    return aposta;
  }

  removerInativos() {
    this.apostas = this.apostas.filter(aposta => aposta.ativo);
  }

  limpar() {
    this.apostas = [];
  }

  ordenaVencedores(peso) {
    return this.apostas
               .map(aposta => ({ ...aposta, margemErro: Math.abs(aposta.peso - peso) }))
               .sort((aposta1, aposta2) => (aposta1.margemErro - aposta2.margemErro) || (aposta1.id - aposta2.id));
  }
}