import "./search.html";

Template.search.onCreated(function() {
  this.autorun(() => {
    this.subscribe("userList");
  });
});

Template.search.events({
  "submit #search": function(event) {
    event.preventDefault();
    Session.set("search/keyword", event.target.term.value);
    // event.target.term.value = "";
  }
});
