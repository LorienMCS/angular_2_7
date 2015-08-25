app.controller("HomeController", ["$scope", "$location", "ContactList", function($scope, $location, ContactList){

	// ContactList is service instance; ContactList.contactList is array in the service
	$scope.contactData = ContactList.contactList;
	$scope.person = {};

	$scope.addContact = function() {
		// add person to service array
	  ContactList.addContact($scope.person);
	  $scope.person = {};
	};

	$scope.deleteContact = function() {
		ContactList.removeContact(ContactList.findContact($scope.person.name, 1));
	};

	$scope.showContact = function(person) {
		var id = $scope.contactData.indexOf(ContactList.findContact(this.person.name));
		$location.path('/' + id + '/show');
	}

}]);



app.controller("ShowController", ["$scope", "$routeParams", "ContactList", function($scope, $routeParams, ContactList){

	// ContactList is service instance; ContactList.contactList is array in the service
	$scope.person = ContactList.contactList[$routeParams.id];

}]);