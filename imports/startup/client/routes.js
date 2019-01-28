import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import "../../ui";

// Below here are the route definitions
FlowRouter.route('/', {
    name: "home",
    action: function(params, queryParams) {
      if(Meteor.userId()) {
        FlowRouter.go("/profile");
      }
      BlazeLayout.render('masterLayout', {
        footer: "footer",
        main: "home",
        nav: "nav",
      });
    }
  });
  
  FlowRouter.route('/profile', {
    name: "profile",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
      BlazeLayout.render('masterLayout', {
        footer: "footer",
        main: "profile",
        nav: "nav",
      });
    }
  });

  FlowRouter.route('/teams', {
    name: "teams",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
      BlazeLayout.render('masterLayout', {
        footer: "footer",
        main: "teams",
        nav: "nav",
      });
    }
  });

  FlowRouter.route('/team/:id', {
    name: "team",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
      BlazeLayout.render('masterLayout', {
        footer: "footer",
        main: "teamSingle",
        nav: "nav",
      });
    }
  });

  FlowRouter.route('/terms-of-use', {
    name: "terms",
    action: function(params, queryParams) {
      BlazeLayout.render('masterLayout', {
        footer: "footer",
        main: "terms",
        nav: "nav",
      });
    }
  });
  
  FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render('masterLayout', {
        footer: "footer",
        main: "pageNotFound",
        nav: "nav",
      });
    }
  };
  
  
  //Routes
  AccountsTemplates.configureRoute('changePwd');
  AccountsTemplates.configureRoute('forgotPwd');
  AccountsTemplates.configureRoute('resetPwd');
  AccountsTemplates.configureRoute('signIn');
  AccountsTemplates.configureRoute('signUp');
  AccountsTemplates.configureRoute('verifyEmail');