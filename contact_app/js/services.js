app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [];

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
  };

  ContactList.findContact = function(searchedName) {
    var contactArr = ContactList.contactList;
    for (var i=0; i < contactArr.length; i++) {
        if (contactArr[i].name === searchedName) {
            return contactArr[i];
        };
    };
  };

  ContactList.removeContact = function(index) {
    ContactList.contactList.splice(index, 1);
  };

  return ContactList;
});

