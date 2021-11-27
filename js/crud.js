const fs = require('fs');
const CreateObj = require('./createObj');

const teste = [];
const id = () => teste.length === 0 ? 1 : teste.length + 1;

const powerPoint = new CreateObj(
  id(),
  'Powe Point', 'Curso de power point',
  'https://raw.githubusercontent.com/wagnermor/hsm-desafio-final/main/images/nome-clean.jpg',
  'Wagner Moreira',
  ['https://google.com','https://github.com','https://youtube.com']
  );
  
const word = new CreateObj(
  id(),
  'Word', 'Curso de word',
  'https://raw.githubusercontent.com/wagnermor/hsm-desafio-final/main/images/nome-clean.jpg',
  'Wagner Moreira',
  ['https://google.com','https://github.com','https://youtube.com']
  );

const excel = new CreateObj(
  id(),
  'excel', 'Curso de excel',
  'https://raw.githubusercontent.com/wagnermor/hsm-desafio-final/main/images/nome-clean.jpg',
  'Wagner Moreira',
  ['https://google.com','https://github.com','https://youtube.com']
  );

      
const readData = () => fs.readFileSync('../data/courses.json', 'utf-8');

const startData = () => !readData() ? writeData([]) : console.log('Tem coisa aí');

const writeData = (data) => {
  try {
    fs.appendFileSync('../data/courses.json', JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  readData: readData,
  startData: startData,
  writeData: writeData,
}




// fs.writeFile('../data/courses.json', JSON.stringify(word, null, 2), 'utf-8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Ok');
// })

// try {
//   fs.writeFileSync('../data/courses.json', JSON.stringify(array, null, 2), 'utf-8');
// } catch (err) {
//   console.log(err);
// };

      // fs.appendFile('../data/courses.json', JSON.stringify(excel, null, 2), 'utf-8', err => {
      //   if (err) throw err;
      //   console.log('Updated');
      // });