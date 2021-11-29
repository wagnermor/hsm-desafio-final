const readline = require('readline-sync');
const fs = require('fs');

const CreateCurso = require('./NewCurso');

const readData = () => fs.readFileSync('./data/cursos.json', 'utf-8');
const startData = () => !readData() ? writeData([]) : console.log('Tem coisa aí');
const writeData = (data) => {
  try {
    fs.appendFileSync('./data/cursos.json', JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

//Funções criar curso, exibir curso, atualizar curso, deletear curso e listar cusrsos:
const criar = () => {
  const id = readline.question('Digite um código para o curso: ');
  const titulo = readline.question('Digite o título do curso: ');
  const descricao = readline.question('Digite a descrição do curso: ');
  const img = readline.question('Digite o link de uma imagem para o curso: ');
  const nomeProfessor = readline.question('Digite o nome do professor do curso: ');
  const linkAula = readline.question('Digite um link para aula do curso: ');
  return writeData(CreateCurso(id, titulo, descricao, img, nomeProfessor, linkAula)), menu();
}

const exibir = () => {
  console.log('função exibir');
  return;
}

const atualizar = () => {
  console.log('função atualizar');
  return;
}

const deletar = () => {
  console.log('função deletar');
  return;
}

const listar = () => {
  console.log('função listar');
  return;
}
// console.log(CreateCurso());

const menu = () => {
  console.log(`****** SISTEMA DE GERENCIAMENTO DE CURSOS ******`);
  console.log(`[1] Criar um novo curso
[2] Exibir curso escolhido
[3] Atualizar curso escolhido
[4] Deletar curso escolhido
[5] Listar todos cursos
[0] Sair`);

retorno = readline.question('Selecione uma opção: ');

  if (retorno === '1') {
    criar();
  } else if (retorno === '2') {
    exibir();
  } else if (retorno === '3') {
    atualizar();
  } else if (retorno === '4') {
    deletar();
  } else if (retorno === '5') {
    listar();
  } else if (retorno === '0') {
    return;
  } else {
    console.log('\nOpção inválida\n');
    menu();
  }
}


startData();
menu();
