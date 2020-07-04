import './style.css';

import { Aposta, ApostaLista } from './classes';
import { NovaApostaHTML } from './components';


const inNome = document.querySelector('#inNome');
const inPeso = document.querySelector('#inPeso');
const outApostas = document.querySelector('#outApostas');

const lista = new ApostaLista();

document.querySelector('#btApostar').addEventListener('click', event => {
  try {
    Aposta.valida(inNome.value, inPeso.value);
    const aposta = new Aposta(inNome.value, inPeso.value);

    lista.novaAposta(aposta);
    outApostas.appendChild(NovaApostaHTML(aposta));

    inNome.value = '';
    inPeso.value = '';
    inNome.focus();
  } catch(erro) {
    alert('Aposta inválida: ' + erro.message);
  }
});

document.querySelector('#btCancelar').addEventListener('click', event => {
  const apostasInativas = lista.inativas;

  if (!apostasInativas.length) {
    alert('Selecione as apostas a serem canceladas clicando sobre elas na lista');
  } else {
    const idsInativas = apostasInativas.map(aposta => aposta.id);
    console.log('idsInativas', idsInativas);

    Array.from(outApostas.children).forEach(li => {
      const id = parseInt(li.getAttribute('data-id'));
      if (idsInativas.includes(id))
        li.remove();
    });

    lista.removerInativos();
  }
});

document.querySelector('#btLimpar').addEventListener('click', event => {
  if (!confirm('Confirmar exclusão de todas as apostas?')) {
    outApostas.innerHTML = '';
    lista.limpar();
  }
});

document.querySelector('#btVencedor').addEventListener('click', event => {
  if (lista.get().length > 1) {
    const peso = prompt('Qual o peso real da melancia (em gramas)?');

    const apostasVencedoras = lista.ordenaVencedores(peso);
    const vencedor = apostasVencedoras.shift();
    const vices = apostasVencedoras.filter(aposta => aposta.margemErro == vencedor.margemErro);
    const lanterna = apostasVencedoras.filter(aposta => !vices.includes(aposta)).pop();

    const mensagemVencedor = `E o vencedor é... ${vencedor.nome}, ${!vencedor.margemErro ? 'com uma aposta certeira' : `por aproximação (errou por ${vencedor.margemErro}gr)`}!\n`;
    const mensagemVice = vices.length ? `Tivemos outras apostas ganhadoras (${vices.map(aposta => aposta.nome).join(', ')}), mas ${vencedor.nome} apostou primeiro.\n` : '';
    const mensagemLanterna = lanterna ? `Já ${lanterna.nome}, foi lanterninha e errou por ${lanterna.margemErro}...` : '';

    alert(`${mensagemVencedor}${mensagemVice}${mensagemLanterna}`);
  } else {
    alert('Ainda não temos apostas suficientes...');
  }
});

outApostas.addEventListener('click', event => {
  const id = event.target.getAttribute('data-id');
  const aposta = lista.ativarDesativar(id);
  if (aposta.ativo)
    event.target.classList.remove('inativo');
  else
    event.target.classList.add('inativo');
});