import "./profile.html";

Template.profile.onCreated(function() {
  this.autorun(() => {
    this.subscribe("personalData", Meteor.userId());
    this.subscribe("myteams", Meteor.userId());
  });
  this.editMode = new ReactiveVar(false);
});

Template.profile.helpers({
  // get current user data
  user () {
    return Meteor.users.findOne({});
  },
  // get teams
  teams () {
    return Teams.find({});
  },
  // user id for update form
  updateProfileId: function() {
    return Meteor.userId();
  },
  // whether edit form is visible
  editMode: function () {
    return Template.instance().editMode.get();
  }
});

Template.profile.events({
  "click .edit" : function(event, template) {
    template.editMode.set(!template.editMode.get());
  }
})