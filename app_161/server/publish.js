Meteor.publish("cases", function() {
    return cases.find();
});
