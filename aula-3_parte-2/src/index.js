import './style.css';
import Atleta, { mostraNome as printNome, mostraIdade as printIdade } from './classes/nadador.class';

const nadador1 = new Atleta('Primeiro Nadador', 25);
const nadador2 = new Atleta('Segundo Nadador', 25);

printNome(nadador1);
printIdade(nadador1);