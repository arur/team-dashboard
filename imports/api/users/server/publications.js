Meteor.publish("personalData", function() {
  if (!this.userId) {
    return this.ready();
  }

  return Meteor.users.find(
    { _id: this.userId },
    { fields: { personalData: 1 } }
  );
});

Meteor.publish("userList", function() {
  if (!this.userId) {
    return this.ready();
  }

  return Meteor.users.find(
    {},
    { fields: { personalData: 1 } }
  );
});
