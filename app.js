const readline = require('readline-sync');
const fs = require('fs');

const CreateCurso = require('./NewCurso');
const { clear } = require('console');

const readData = () => fs.readFileSync('./data/cursos.json', 'utf-8');

const startData = () => !readData() ? writeData([]) : console.log('************************************************');
const writeData = (data) => {
  try {
    fs.writeFileSync('./data/cursos.json', JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

const criar = () => {//Função criar cursos
  const curso = JSON.parse(readData());
  const id = readline.question('Digite um código para o curso: ');
  const titulo = readline.question('Digite o título do curso: ');
  const descricao = readline.question('Digite a descrição do curso: ');
  const img = readline.question('Digite o link de uma imagem para o curso: ');
  const nomeProfessor = readline.question('Digite o nome do professor do curso: ');
  const linkAula = readline.question('Digite um link para aula do curso: ');
  
  curso.push(CreateCurso(id, titulo, descricao, img, nomeProfessor, linkAula))
  
  return writeData(curso), menu();
}

const exibir = () => {//Função exibir cursos
  const curso = JSON.parse(readData());
  const entraId = readline.question('Digite o código do curso: ');
  for(let i = 0; i < curso.length; i++) {
    if (curso[i]['id'] === entraId) {
      console.log(`\nCódigo do curso: ${curso[i]['id']}
      Título do curso: ${curso[i]['titulo']}
      Descrição do curso: ${curso[i]['descricao']}
      Endereço da imgem do curso: ${curso[i]['pathImg']}
      Nome do professor: ${curso[i]['nomeProfessor']}
      Link da aula: ${curso[i]['linkAula']}\n`);
      console.log(i);
    } else if (curso[i]['id'] !== entraId && i === curso.length - 1) {
      clear();
      console.log('\n!!! Este código não existe !!!\n');
    }
  }
  menu();
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

const menu = () => {
  console.log(`\n****** SISTEMA DE GERENCIAMENTO DE CURSOS ******`);
  console.log(`[1] Criar um novo curso
[2] Exibir curso escolhido
[3] Atualizar curso escolhido
[4] Deletar curso escolhido
[5] Listar todos cursos
[6] Limpar a tela
[0] Sair`);

retorno = readline.question('>> Selecione uma opção: ');

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
  } else if (retorno === '6') {
    clear();
  } else if (retorno === '0') {
    return;
  } else {
    console.log('\nOpção inválida\n');
    menu();
  }
}

clear();
startData();
menu();
