Template.admin.helpers({
  iniciado: function () {
    return Session.get('iniciado');
  },
  pontuacoes: function () {
    var usuarios = _.uniq(Pontos.find({}, {
      sort: {userId: 1}, fields: {userId: true}
    }).fetch().map(function(x) {
      return x.userId;
    }), true);

    pontuacoes = [];

    usuarios.forEach(function (element) {
      pontuacoes.push({userName: Pontos.findOne({userId: element}).userName, pontos: Pontos.find({userId: element}).fetch().length});
    });

    var rankingUsuarios = pontuacoes.sort(function (a, b) {
      return b.pontos - a.pontos;
    })

    Session.set('pontuacoes', rankingUsuarios);

    return Session.get('pontuacoes');
  },
  pontosRegistrados: function () {
    return Pontos.find().fetch().length;
  },
  apressado: function () {
    return Pontos.findOne({}).userName;
  }
});