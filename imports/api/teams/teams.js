import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(["autoform"]);

Teams = new Mongo.Collection("teams");

Teams.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

Member = new SimpleSchema({
  type: String
});

TeamSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  members: {
    type: Array,
    autoform: {
      type: "hidden"
    },
    autoValue: function() {
      if (!this.isSet) {
        return [this.userId];
      }
    }
  },
  "members.$": {
    type: String
  },
  createdBy: {
    type: String,
    label: "Created By",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  addToTeam: function(teamId, userId) {
    Teams.update(
      {
        _id: teamId
      },
      {
        $addToSet: { members: userId }
      }
    );
  },
  removeFromTeam: function(teamId, userId) {
    Teams.update(
      {
        _id: teamId
      },
      {
        $pull: { members: userId }
      }
    );
  },
  deleteTeam: function(teamId) {
    Teams.remove({ _id: teamId });
  }
});

Meteor.methods({});

Teams.attachSchema(TeamSchema);
