function Curso(id, titulo, descricao, pathImg, nomeProfessor, linksAulas) {
  this.id = id;
  this.titulo = titulo;
  this.descricao = descricao;
  this.pathImg = pathImg;
  this.nomeProfessor = nomeProfessor;
  this.linksAulas = linksAulas;
}

module.exports = Curso;
