function Curso(id, titulo, descricao, pathImg, nomeProfessor, linkAula) {
  this.id = id;
  this.titulo = titulo;
  this.descricao = descricao;
  this.pathImg = pathImg;
  this.nomeProfessor = nomeProfessor;
  this.linkAula = linkAula;
}
const CreateCurso = (
  id = '',
  titulo = '',
  descricao = '',
  pathImg = '',
  nomeProfessor = '',
  linkAula = ''
  ) => {
    return new Curso(
      id,
      titulo,
      descricao,
      pathImg,
      nomeProfessor,
      linkAula
    )
};
module.exports = CreateCurso;