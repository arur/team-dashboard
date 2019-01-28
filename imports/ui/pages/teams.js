import "./teams.html";

Template.teams.onCreated(function() {
  this.autorun(() => {
    this.subscribe("teams");
  });
});

Template.teams.helpers({
  teams: () => {
    return Teams.find({});
  }
});

