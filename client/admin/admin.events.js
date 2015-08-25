Session.setDefault('iniciado', false)

// Template.admin.helpers({
//   iniciado: function () {
//     return Session.get('iniciado');
//   }
// });

Template.admin.events({
  'click #resetar': function () {
    var pontos = Pontos.find().fetch();
    pontos.forEach(function(element){
      Pontos.remove({_id: element._id});
    });
  },
  'click #iniciar': function () {
    // Meteor.setTimeout(function () {
    if (!Iniciado.findOne({})){
      Iniciado.insert({jogoIniciou: true});
    } else {
      Iniciado.update(Iniciado.findOne({})._id, {$set: {jogoIniciou: true}});
    }

    Meteor.setTimeout(function () {
      Iniciado.update(Iniciado.findOne({})._id, {$set: {jogoIniciou: false}})
    }, 5000)
  }
});