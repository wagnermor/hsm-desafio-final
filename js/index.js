const crud = require('./crud');
const { readData, startData, writeData } = crud;
const { CreateCurso } = require('./createObj');

const {
  id_criar,
  titulo_criar,
  descricao_criar,
  link_imagem_criar,
  nome_prof_criar,
  lista_criar,
  btn_criar,
} = require('./dataForms/dataCriar');


startData();
console.log(readData());

const criarCurso = () => {
  btn_criar.addEventListener("click", () => {
    // console.log(`
    // ${id_criar}\n
    // ${titulo_criar}\n
    // ${descricao_criar}\n
    // ${nome_prof_criar}
    // `)
    console.log('clicou');
  })
}
criarCurso();