Session.setDefault('iniciado', false)

function resetarPontuacao () {
  var pontos = Pontos.find().fetch();
  pontos.forEach(function(element){
    Pontos.remove({_id: element._id});
  });
  Session.set('pontuacoes', null)
}

Template.admin.helpers({
  iniciado: function () {
    return Session.get('iniciado');
  },
  pontuacoes: function () {
    return Session.get('pontuacoes')
  },
  pontosRegistrados: function () {
    return Pontos.find().fetch().length
  }
});

Template.admin.events({
  'click #resetar': function () {
    resetarPontuacao();
    Iniciado.update(Iniciado.findOne({})._id, {$set: {jogoIniciou: false}});
  },
  'click #iniciar': function () {
    resetarPontuacao();

    if (!Iniciado.findOne({})){
      Iniciado.insert({jogoIniciou: true});
    } else {
      Iniciado.update(Iniciado.findOne({})._id, {$set: {jogoIniciou: true}});
    }

    Meteor.setTimeout(function () {
      Iniciado.update(Iniciado.findOne({})._id, {$set: {jogoIniciou: false}});
      var total = Pontos.find().fetch().length;

      var usuarios = _.uniq(Pontos.find({}, {
          sort: {userId: 1}, fields: {userId: true}
      }).fetch().map(function(x) {
          return x.userId;
      }), true);

      pontuacoes = [];

      usuarios.forEach(function (element) {
        pontuacoes.push({userName: Pontos.findOne({userId: element}).userName, pontos: Pontos.find({userId: element}).fetch().length});
      });

      Session.set('pontuacoes', pontuacoes)

    }, 4000)
  }
});