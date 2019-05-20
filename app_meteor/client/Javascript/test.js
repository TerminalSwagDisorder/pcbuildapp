
Template.test.onCreated(function() {

    Meteor.call('cpu', function(error, response) {
        // result.data[1] is the array of objects with the data
        Session.set('bankData', response);
    console.log(response);
    });
});
Template.test.helpers({
    'cpu': function(){        
        return Session.get('bankData');
    }
});
