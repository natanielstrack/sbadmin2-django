var fullApp = angular.module('fullApp', []);

fullApp.controller('AppBody', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.search = [
    {'title': 'Documents',},
    {'title': 'Persons',},
  ];
  $scope.documents = [
    {'title': 'Documents',
		'label': 'info',
 		'icon': 'icon-file-text',
		'message': 'strong>John Doe</strong> received $1.527,32',
		'time': 'finances.xls',}
  ];
});