const {
  menu,
  criar_menu,
  exibir_menu,
  atualizar_menu,
  deletar_menu,
  listar_menu
} = require('./menu');
const start = require('./crud');


//Função exibir cursos
// const exibir = (id) => {
//   for(let i = 0; i < curso.length; i++) {
//     if (curso[i]['id'] === id) {
//       console.log(`\n
//       Código do curso: ${curso[i]['id']}
//       Título do curso: ${curso[i]['titulo']}
//       Descrição do curso: ${curso[i]['descricao']}
//       Endereço da imgem do curso: ${curso[i]['pathImg']}
//       Nome do professor: ${curso[i]['nomeProfessor']}
//       Link da aula: ${curso[i]['linkAula']}\n`);
//     } else if (curso[i]['id'] !== id && i === curso.length - 1) {
//       clear();
//       console.log('\n!!! Este código não existe !!!\n');
//     }
//   }
//   menu();
// }
start.startData();
menu();
