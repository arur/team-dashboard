import "./userList.html";

Template.userList.helpers({
    searchResults: function() {
      let term = Session.get("search/keyword");
      if (term && term.trim().length > 0) {
        check(term, String);
        const regexp = new RegExp(term, "i");
        return Meteor.users.find({ "personalData.firstName": regexp });
      }
      return false;
    }
  });

  Template.userList.events({
    "click .add-member": function () {
        const teamId = FlowRouter.getParam("id");
        Meteor.call("addToTeam", teamId, this._id)
    }
  })