const nome: string = 'Artur';

const fazendoAula: boolean = true;

const diaDoMes: number = 10;

interface Pessoa {
    nome: string;
    anoNascimento?: number; // ? colocando essa propriedade é opcional
}

interface Professor extends Pessoa {
    //disciplinas: string[],
    disciplinas: Array<string> //**Generics*/
}

interface Aluno extends Pessoa {
    media: number,
}

const mathias: Professor =
{
    nome: 'Mathias Glenco>',
    anoNascimento: 2002,
    disciplinas: [],
}

const artur: Aluno = 
{
    nome: 'Artur Bazzanella',
    anoNascimento: 1975,
    media: 9.8,
}
