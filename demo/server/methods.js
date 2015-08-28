Meteor.methods({
  inserirPontuacao: function (userId, userName) {
    Pontos.insert({userId: userId, userName: userName});
  },
  iniciarOuParar: function (bool) {
    Iniciado.update(Iniciado.findOne({})._id, {$set: {jogoIniciou: bool}});
  }
})