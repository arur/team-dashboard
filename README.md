# team-dashboard
Small app to manage teams

[Screenshot of Team Details page](./team-dashboard.png "Team Details")

## General flow

After visiting main page a user will need to create an account or log in to an existing one. This will reirect the user to their profile page. Personal data can be edited on the Profile page. There is a list of the teams created by this user. Clicking on a team will load teams details page.

Teams page shows all teams created. The owner of the team can edit it, add or delete members.

## Data structure

App has 2 collections. Here are simplified schemas:

1. meteors users collection extended with profile data.

```
Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ["Male", "Female"],
    optional: true
  }
});
```
2. teams collection

```
TeamSchema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  members: {
    type: Array
  },
  "members.$": {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date
  }
});
```
## Challenges

- Understanding the Meteors way for building web application(Meteor was completely new framework to the author)
- File structuring (layout, page, component)
- Data flow

## Improvements

- Thorough testing
- Redirects. Example: after createing new Team redirect to newly created team page
- Add confirmation dialogs, action statuses (success, error)
- Error handling
- More polished UI
- Documentation