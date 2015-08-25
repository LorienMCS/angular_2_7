# Services

####EXERCISE:** Name at least 3 angular built in services that we have used so far.
#####$http, $location, $routeParams

####EXERCISE: Read the docs for [the q promise library](https://github.com/kriskowal/q).  Why would you prefer to use a promise over a callback?  What advantage does it have?
#####Promises almost feel sychronous; they are easier to chain, error-handling is cleaner, and it's easier to create reusable code.

#### Creating a Service With Dependencies

Your service could also have dependencies.  We have seen the `$http` service.  In the example we will also used the `$q` service to add deferreds to our service:

```js
app.factory('omdbapi', ["$http", "$q", function($http, $q) {
  var omdbservice = {};
  var baseUrl = "http://www.omdbapi.com/?plot=short&r=json&s=";
  var searchTerm = '';

  omdbservice.setSearchTerm = function(term) {
    searchTerm = encodeURIComponent(term);
  }

  omdbservice.getSearchTerm = function() {
    return decodeURIComponent(searchTerm);
  }

  omdbservice.search(term) {
    if (term !== undefined) {
      omdbservice.setSearchTerm(term);
    }

    var url = baseUrl + searchTerm;

    var deferred = $q.defer();

    $http.get(url).success(function(data) {
      deferred.resolve(data);
    }).error(function() {
      deferred.reject("Error!")
    });

    return deferred.promise;
  }

  return omdbservice;
}]);
```

**EXERCISE:** Use the [Giphy Api](https://github.com/Giphy/GiphyAPI) to add a feature to your app.  Whenever a new user is submitted, do a search for a gif using the person's name.  If you get a result, save that along with the users name email and phone number.  Show the user's gif on the show page.  HINT: you probably want to use the embedded url froom the giphy search resutls.
