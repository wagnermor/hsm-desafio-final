const readline = require('readline-sync');
const { clear } = require('console');

const {
  startData,
  criarCurso,
  exibirCurso,
  atualizarCurso,
  deletarCurso,
  listaCursos,
} = require('./crud');

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
    criar_menu();
  } else if (retorno === '2') {
    exibir_menu();
  } else if (retorno === '3') {
    atualizar_menu();
  } else if (retorno === '4') {
    deletar_menu();
  } else if (retorno === '5') {
    listar_menu();
  } else if (retorno === '6') {
    clear();
    menu();
  } else if (retorno === '0') {
    return;
  } else {
    clear();
    console.log('\nOpção inválida\n');
    menu();
  }
}

const criar_menu = () => {
  const id = readline.question('Digite um código para o curso: ');
  const titulo = readline.question('Digite o título do curso: ');
  const descricao = readline.question('Digite a descrição do curso: ');
  const img = readline.question('Digite o link de uma imagem para o curso: ');
  const nomeProfessor = readline.question('Digite o nome do professor do curso: ');
  const linkAula = readline.question('Digite um link para aula do curso: ');
  criarCurso(id, titulo, descricao, img, nomeProfessor, linkAula);
  menu();
}

const exibir_menu = () => {
  const id = readline.question('Digite um código para o curso: ');
  exibirCurso(id);
  
  menu();
}
const atualizar_menu = () => {
  const id = readline.question('Digite um código para o curso: ');
  const titulo = readline.question('Digite o título do curso: ');
  const descricao = readline.question('Digite a descrição do curso: ');
  const img = readline.question('Digite o link de uma imagem para o curso: ');
  const nomeProfessor = readline.question('Digite o nome do professor do curso: ');
  const linkAula = readline.question('Digite um link para aula do curso: ');
  atualizarCurso(id, titulo, descricao, img, nomeProfessor, linkAula);
  menu();
}
const deletar_menu = () => {
  const id = readline.question('Digite um código para o curso: ');
  deletarCurso(id);
  menu();
}
const listar_menu = () => {
  listaCursos();
  menu();
}

module.exports = {
  menu: menu,
  criar_menu: criar_menu,
  exibir_menu: exibir_menu,
  atualizar_menu: atualizar_menu,
  deletar_menu: deletar_menu,
  listar_menu: listar_menu
}
