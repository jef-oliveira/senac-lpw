const selHorario = document.querySelector('#selHorario'),
      inPreco = document.querySelector('#inPreco'),
      selOp = document.querySelector('#selOp');


const precosQuadra = [], precosOpcionais = [];


window.addEventListener('load', () =>{
  const url = 'https://quadrapos.herokuapp.com/';

  fetch(url + 'quadra.php')
    .then(response => response.json())
    .then(data => { 
      for({ id, horario, preco } of data) {
        let option = document.createElement('option');
        option.value = id;
        option.text = horario;
        selHorario.appendChild(option);
        precosQuadra.push({ id, horario, preco });
      }
    });

  fetch(url + 'opcionais.php')
    .then(response => response.json())
    .then(data => { 
      for({ id, nome, preco } of data) {
        let option = document.createElement('option');
        option.value = id;
        option.text = nome;
        selOp.appendChild(option);
        precosOpcionais.push({ id, nome, preco });
      }
    })
});

const obterValorQuadra = () => {
  const precoQuadra = precosQuadra.find(precoQuadra => precoQuadra.id == selHorario.value);
  return Number(precoQuadra ? precoQuadra.preco : 0);
};

const obterValorOpcionais = () => {
  const preco = Array.from(selOp.children)
    .filter(opt => opt.selected)
    .reduce((total, option) => {
      const precoOpcional = precosOpcionais.find(precoOpcional => precoOpcional.id == option.value);
      return total + Number(precoOpcional.preco);
    }, 0);

  return Number(preco);
};

const preencherValor = () => {
  const valorQuadra = obterValorQuadra();
  const valorOpcionais = obterValorOpcionais();
  inPreco.value =(valorQuadra + valorOpcionais).toLocaleString('pt-br', { minimumFractionDigits: 2 });
};

selHorario.addEventListener('change', preencherValor);
selOp.addEventListener('change', preencherValor);