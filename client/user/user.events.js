// counter starts at 0
Session.setDefault('counter', 0);
Session.setDefault('usuario', null);

Template.apresentacao.helpers({
  counter: function () {
    return Session.get('counter');
  },
  usuario: function () {
    return Session.get('usuario');
  },
  iniciado: function () {
    return Iniciado.findOne({}).jogoIniciou;
  }
});

Template.apresentacao.events({
  'click #btn-counter': function () {
    Session.set('counter', Session.get('counter') + 1);
    Meteor.call('inserirPontuacao', Session.get('usuario').id, Session.get('usuario').nome);
  },
  'submit #login': function (event) {
    event.preventDefault();
    
    var nome = event.target.name.value;
    var id = Math.floor((Math.random() * 1000) + 1);
    
    var usuario = {
      id: id,
      nome: nome
    }
    
    Session.set('usuario', usuario);
  }
});