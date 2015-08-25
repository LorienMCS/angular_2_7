app.controller("ContactController", ["$scope", "ContactList", function($scope, ContactList){

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

}]);

