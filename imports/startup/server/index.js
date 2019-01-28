// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import "../../api/api";

// Set up login services
Meteor.startup(function() {

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    {
      $set: {
        clientId: Meteor.settings.clientId,
        client_email: Meteor.settings.clientEmail,
        secret: Meteor.settings.secret
      }
    },
    { upsert: true }
  );
});

// Add firstName field to user
Accounts.onCreateUser((options, user) => {
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    const firstName = options.profile.firstName;
    const personalData = {
      firstName
    };
    user.personalData = personalData;
  }

  return user;
});
