Template.apresentacao.helpers({
  counter: function () {
    return Session.get('counter');
  },
  usuario: function () {
    return Session.get('usuario');
  },
  iniciado: function () {
    if (Iniciado.findOne({}).jogoIniciou)
      Session.set('counter', 0);
    return Iniciado.findOne({}).jogoIniciou;
  }
});