app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(name) {
    // TODO
  };

  ContactList.removeContact = function(index) {
    // TODO
  };

  return ContactList;
});

