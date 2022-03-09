// function soma(a: number, b: number) {
//    return a + b;
//}

/* Interfaces
interface Ianimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}
const animal: Ianimal= {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => ( `${alturaEmDecibeis}dB`)
}

animal.executarRugido('s')//apresenta o erro pois nao é number

const felino IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNotuena: true;
 } */

/* Types
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}
interface IFelino extends IAnimal {
    visaoNoturna: boolean;

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio'| 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
} */

/* TRATANDO OS INPUTS
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input',(event) => {
    //console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
}); */

//Generic Types - recebendo qualquer coisa, sem dizer o tipo
/*
function adicionaApendiceALista <T> (array: any[], valor: T) {
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);

function adicionaApendiceALista <T> (array: T[], value: T) {
    return array.map(() => value);
}

adicionaApendiceALista(['A', 'B', 'C'], 'D');*/

interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para a area de administração
    }
    //redirecionar para  a area do usuario
}