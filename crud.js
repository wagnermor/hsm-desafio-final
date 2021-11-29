const fs = require('fs');

const CreateCurso = require('./NewCurso');

const readData = () => fs.readFileSync('./data/cursos.json', 'utf-8');

const startData = () => !readData() ? writeData([]) : console.log('************************************************');
const writeData = (data) => {
  try {
    fs.writeFileSync('./data/cursos.json', JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

//Função criarCurso
const criarCurso = (
  id,
  titulo,
  descricao,
  img,
  nomeProfessor,
  linkAula
  ) => {
  const curso = JSON.parse(readData());
  
  curso.push(CreateCurso(id, titulo, descricao, img, nomeProfessor, linkAula))
  return writeData(curso);
}

//Função exibirCurso
const exibirCurso = (id) => {
  const curso = JSON.parse(readData());
  console.log(curso.length);
  for(let i = 0; i < curso.length; i++) {
    if (curso.length <= 0) {
      console.log('Não há cursos cadastrados');
    }
    
    if (curso[i]['id'] === id) {
      console.log(`\n
      Código do curso: ${curso[i]['id']}
      Título do curso: ${curso[i]['titulo']}
      Descrição do curso: ${curso[i]['descricao']}
      Endereço da imgem do curso: ${curso[i]['pathImg']}
      Nome do professor: ${curso[i]['nomeProfessor']}
      Link da aula: ${curso[i]['linkAula']}\n`);
    } else if (curso[i]['id'] !== id && i === curso.length - 1) {
      console.log('\n!!! Este código não existe !!!\n');
    } 
  }
}

//Função atualizarCurso
const atualizarCurso = (
  id,
  titulo,
  descricao,
  img,
  nomeProfessor,
  linkAula
  ) => {
  const curso = JSON.parse(readData());
  for(let i = 0; i < curso.length; i++) {
    if(curso[i]['id'] === id) {
      curso[i]['id'] = id;
      curso[i]['titulo'] = titulo;
      curso[i]['descricao'] = descricao;
      curso[i]['pathImg'] = img;
      curso[i]['nomeProfessor'] = nomeProfessor;
      curso[i]['linkAula'] = linkAula;
      
    }
  }
  try {
    fs.writeFileSync('./data/cursos.json', JSON.stringify(curso, null, 2), 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

//Função deletarCurso
const deletarCurso = (id) => {
  const curso = JSON.parse(readData());
  for(let i = 0; i < curso.length; i++) {
    if(curso[i]['id'] === id) {
      curso.splice(i,1);
      
    }
  }
  try {
    fs.writeFileSync('./data/cursos.json', JSON.stringify(curso, null, 2), 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  startData: startData,
  criarCurso: criarCurso,
  exibirCurso: exibirCurso,
  atualizarCurso: atualizarCurso,
  deletarCurso: deletarCurso,
}
