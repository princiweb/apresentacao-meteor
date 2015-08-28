Session.setDefault('iniciado', false)

function resetarPontuacao () {
  var pontos = Pontos.find().fetch();
  pontos.forEach(function(element){
    Pontos.remove({_id: element._id});
  });
  Session.set('pontuacoes', null)
}

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
    }, 4000)
  }
});