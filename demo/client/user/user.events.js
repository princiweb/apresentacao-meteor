Session.setDefault('counter', 0);
Session.setDefault('usuario', null);

Template.apresentacao.events({
  'mousedown #btn-counter': function (event) {
    event.preventDefault();
    Session.set('counter', Session.get('counter') + 1);
    Meteor.call('inserirPontuacao', Session.get('usuario').id, Session.get('usuario').nome);
  },
  'touchstart #btn-counter': function (event) {
    event.preventDefault();
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