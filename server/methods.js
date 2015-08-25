Meteor.methods({
  inserirPontuacao: function (userId, userName) {
    Pontos.insert({userId: userId, userName: userName});
  }
})