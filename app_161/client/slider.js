if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  // slider starts at 20 and 80
  Session.setDefault("slider", [1000, 4000]);

  Template.hello.rendered = function () {
    this.$("#slider").noUiSlider({
      start: Session.get("slider"),
      connect: true,
      range: {
        'min': 300,
        'max': 5000
      }
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider', [Math.round(val[0]), Math.round(val[1])]);
    }).on('change', function (ev, val) {
      // round off values on 'change' event
      Session.set('slider', [Math.round(val[0]), Math.round(val[1])]);
    });
  };

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },
    slider: function () {
      return Session.get("slider");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
