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

  $scope.notifications = [
      {
        "link":"javascript:void(0);",
        "icon":"icon-plus",
        "class":"label label-success",
        "message":"New user registration.",
        "time":"1"
      },
      {
        "link":"javascript:void(0);",
        "icon":"icon-warning-sign",
        "class":"label label-danger",
        "message":"High CPU load on cluster #2",
        "time":"5"
      },
      {
        "link":"javascript:void(0);",
        "icon":"icon-bullhorn",
        "class":"label label-info",
        "message":"New items are in queue.",
        "time":"25"
      },
      {
        "link":"javascript:void(0);",
        "icon":"icon-bolt",
        "class":"label label-warning",
        "message":"Disk space to 85% full.",
        "time":"55"
      }
  ];

  $scope.tasks = [
      {
        "link":"javascript:void(0);",
        "description":"Preparing new release",
        "percent":"30",
        "class":"progress progress-small",
        "progressClass":"progress-bar progress-bar-info"
      },
      {
        "link":"javascript:void(0);",
        "description":"Change management",
        "percent":"80",
        "class":"progress progress-small progress-striped active",
        "progressClass":"progress-bar progress-bar-danger"
      },
      {
        "link":"javascript:void(0);",
        "description":"Mobile development",
        "percent":"60",
        "class":"progress progress-small",
        "progressClass":"progress-bar progress-bar-success"
      },
      {
        "link":"javascript:void(0);",
        "description":"Database migration",
        "percent":"20",
        "class":"progress progress-small",
        "progressClass":"progress-bar progress-bar-warning"
      },
      {
        "link":"javascript:void(0);",
        "description":"Database migration",
        "percent":"20",
        "class":"progress progress-small",
        "progressClass":"progress-bar progress-bar-warning"
      },
      {
        "link":"javascript:void(0);",
        "description":"Database migration",
        "percent":"20",
        "class":"progress progress-small",
        "progressClass":"progress-bar progress-bar-warning"
      },
      {
        "link":"javascript:void(0);",
        "description":"Database migration",
        "percent":"20",
        "class":"progress progress-small",
        "progressClass":"progress-bar progress-bar-warning"
      }
    ];

  $scope.messages = [
    {
      "link":"javascript:void(0);",
      "photo":"/static/sbadmin/assets/img/demo/avatar-1.jpg",
      "from":"Bob Carter",
      "time":"Just Now",
      "text":"Consetetur sadipscing elitr..."
    },
    {
      "link":"javascript:void(0);",
      "photo":"/static/sbadmin/assets/img/demo/avatar-2.jpg",
      "from":"Jane Doe",
      "time":"45 mins",
      "text":"Sed diam nonumy..."
    },
    {
      "link":"javascript:void(0);",
      "photo":"/static/sbadmin/assets/img/demo/avatar-3.jpg",
      "from":"Patrick Nilson",
      "time":"6 hours",
      "text":"No sea takimata sanctus..."
    }
  ];

});