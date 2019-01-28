import "./teamSingle.html";

Template.teamSingle.onCreated(function() {
  this.autorun(() => {
    const id = FlowRouter.getParam("id");
    this.subscribe("singleTeam", id);
    this.subscribe("userList");
  });
  this.editMode = new ReactiveVar(false);
});

Template.teamSingle.helpers({
  team: () => {
    const id = FlowRouter.getParam("id");
    return Teams.findOne({ _id: id });
  },
  members: (ids=[]) => {
    return Meteor.users.find({"_id": {$in: ids}});  
  },
  notCreator(creatorId, memberId) {
    return creatorId !== memberId;
  },
  editMode () {
    return Template.instance().editMode.get();
  },
  isOwner (createdBy) {
    return Meteor.userId() === createdBy;
  }
});

Template.teamSingle.events({
  "click .remove-member": function () {
      const teamId = FlowRouter.getParam("id");
      Meteor.call("removeFromTeam", teamId, this._id)
  },
  "click .edit" : function(event, template) {
    template.editMode.set(!template.editMode.get());
  },
  "click .delete-team": function() {
    const teamId = FlowRouter.getParam("id");
    Meteor.call("deleteTeam", teamId);
    FlowRouter.go('/teams');
  }
})