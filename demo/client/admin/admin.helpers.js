Template.admin.helpers({
  iniciado: function () {
    return Session.get('iniciado');
  },
  pontuacoes: function () {
    return Session.get('pontuacoes');
  },
  pontosRegistrados: function () {
    return Pontos.find().fetch().length;
  },
  apressado: function () {
    return Pontos.findOne({}).userName;
  }
});