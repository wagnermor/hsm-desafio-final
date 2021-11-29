const readline = require('readline-sync');
const id = readline.question('Código do curso: ');
const titulo = readline.question('Título do curso: ');
const descricao = readline.question('Descrição do curso: ');
const img = readline.question('Imagem do curso: ');
const nomeProfessor = readline.question('Professor do curso: ');
const linkAula = readline.question('Link para aula do curso: ');

module.exports = {
  id,
  titulo,
  descricao,
  img,
  nomeProfessor,
  linkAula,
}
