import "./nav.html";

Template.nav.onCreated(function() {
    this.autorun(() => {
      this.subscribe("personalData", Meteor.userId());
    });
  });
  
  Template.nav.helpers({
    user () {
      return Meteor.users.findOne({});
    }
  });