Template.postSubmit.helpers({
    cases() {
    return cases.find();
  }
});
Template.postSubmit.onCreated(function() { 
  this.subscribe('cases');
});


