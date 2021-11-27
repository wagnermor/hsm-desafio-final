const fs = require('fs');

//metodo para ler o json
fs.readFile('../data/courses.json', data, 'utf-8', (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  
  try {
    const courses = JSON.parse(data);
    console.log(courses[0].lista_de_aulas[2]);
  } catch (eee) {
    console.log(eee);
  }
});

//metodo para escrever
fs.writeFile('../data/courses.json', 'utf-8', (error, data) => {

})

// const courses = require('../data/courses.json');
// console.log(courses[0].lista_de_aulas[2]);
// courses.push(
//   {
//     "id": 1,
//     "titulo": "Planejamento financeiro",
//     "descricao": "Como planejar reservas e investimentos",
//     "imagem": "blog.bompracredito.com.br/wp-content/uploads/vantagens-de-ter-o-nome-limpo.jpg",
//     "professor": "João Roberto",
//     "lista_de_aulas": [
//       "google.com",
//       "youtube.com",
//       "githube.com"
//     ]
//   }
// )