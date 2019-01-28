Meteor.publish("teams", function() {
    return Teams.find({});
})

Meteor.publish("myteams", function(id) {
    return Teams.find({createdBy: id});
})

Meteor.publish("singleTeam", function(id) {
    check(id, String);
    return Teams.find({_id: id});
})