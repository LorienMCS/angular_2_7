app.factory('ContactList', function() {
  // locally-scoped variable name that, by definition
  // does not exist outside of this function. You could
  // call this variable anything; the name of the service
  // will be what is referred to outside of the service.
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


app.factory('GiphyService', ["$http", "$q", function($http, $q) {
  var GiphyService = {};
  var baseUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var publicKey = "&api_key=dc6zaTOxFJmzC";
  var searchTerm = '';

  GiphyService.setSearchTerm = function(term) {
    searchTerm = encodeURIComponent(term);
  }

  GiphyService.getSearchTerm = function() {
    return decodeURIComponent(searchTerm);
  }

  GiphyService.search = function(term,cb) {
    if (term !== undefined) {
      GiphyService.setSearchTerm(term);
    }

    var url = baseUrl + searchTerm + publicKey;

    var deferred = $q.defer();

    $http.get(url).success(function(data) {
      deferred.resolve(data);
    }).error(function() {
      deferred.reject("Cannot Get Giphy")
    });

    return deferred.promise;
  }

  return GiphyService;
}]);