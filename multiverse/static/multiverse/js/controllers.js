var fullApp = angular.module('fullApp', []);

fullApp.controller('AppBody', function ($scope) {
  $scope.phones = [
    {'name': 'Task 1',
     'snippet': 'Example of a task.'},
    {'name': 'Task 2',
     'snippet': 'Another task.'},
    {'name': 'Task 3™',
     'snippet': 'The last one.'}
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