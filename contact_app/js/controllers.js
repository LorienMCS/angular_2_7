app.controller("HomeController", ["$scope", "$location", "ContactList", "GiphyService", function($scope, $location, ContactList, GiphyService){

	// ContactList is service instance; ContactList.contactList is array in the service
	$scope.contactData = ContactList.contactList;
	$scope.person = {};
	$scope.person.giphy = "";
	$scope.person.noGiphy = false;
	$scope.person.error = "";

	$scope.addContact = function() {
		GiphyService.search($scope.person.name)
		.then(function(obj) {
			if(obj.data[0]!=undefined){
				$scope.person.giphy = obj.data[0].images.fixed_height.url;
				ContactList.addContact($scope.person);
				$scope.person = {};
			} else {
				$scope.person.noGiphy = true;
				$scope.person.error = "Sorry, no giphy for you!"
				ContactList.addContact($scope.person);
				$scope.person = {};
			}
		});
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