var app = angular.module('app', ['ui.grid', 'ui.grid.expandable', 'ui.grid.selection', 'ui.grid.pinning']);
app.controller('ThirdCtrl', ['$scope', '$http', '$log', function ($scope, $http) {
    $scope.gridOptions = {
        expandableRowTemplate: '<div ui-grid="row.entity.subGridOptions" style="height:150px;"></div>',
        expandableRowHeight: 150,
        // enableExpandableRowHeader :true ,
        showExpandAllButton : false ,
        onRegisterApi: function (gridApi) {
            console.log(gridApi);
            var rowEntity = null
            gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
                // if (rowEntity !== row.entity) {
                //     gridApi.expandable.collapseRow(rowEntity)
                // }
                // rowEntity = row.entity
                if (row.isExpanded) {
                    row.entity.subGridOptions = {
                        columnDefs: [
                            {name: 'name'},
                            {name: 'gender'},
                            {name: 'company'}
                        ]
                    };

                    $http.get('./100.json')
                        .then(function (response) {
                            row.entity.subGridOptions.data = response.data;
                        });
                }
            });
        }
    }

    $scope.gridOptions.columnDefs = [
        {name: 'id', pinnedLeft: true},
        {name: 'name'},
        {name: 'age'},
        {name: 'address.city'}
    ];

    $http.get('./500.json')
        .then(function (response) {
            $scope.gridOptions.data = response.data;
        });
}]);


// app.controller('MainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
//     $scope.gridOptions = {
//         expandableRowTemplate: 'expandableRowTemplate.html',
//         expandableRowHeight: 150,
//         //subGridVariable will be available in subGrid scope
//         expandableRowScope: {
//             subGridVariable: 'subGridScopeVariable'
//         }
//     }
//
//     $scope.gridOptions.columnDefs = [
//         { name: 'id' },
//         { name: 'name'},
//         { name: 'age'},
//         { name: 'address.city'}
//     ];
//
//     $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
//         .then(function(response) {
//             var data = response.data;
//
//             for(i = 0; i < data.length; i++){
//                 data[i].subGridOptions = {
//                     columnDefs: [ {name:"Id", field:"id"},{name:"Name", field:"name"} ],
//                     data: data[i].friends
//                 }
//             }
//             $scope.gridOptions.data = data;
//         });
//
//     $scope.gridOptions.onRegisterApi = function(gridApi){
//         $scope.gridApi = gridApi;
//     };
//
//     $scope.expandAllRows = function() {
//         $scope.gridApi.expandable.expandAllRows();
//     }
//
//     $scope.collapseAllRows = function() {
//         $scope.gridApi.expandable.collapseAllRows();
//     }
// }]);
//
// app.controller('SecondCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
//     $scope.gridOptions = {
//         enableRowSelection: true,
//         expandableRowTemplate: 'expandableRowTemplate.html',
//         expandableRowHeight: 150
//     }
//
//     $scope.gridOptions.columnDefs = [
//         { name: 'id', pinnedLeft:true },
//         { name: 'name'},
//         { name: 'age'},
//         { name: 'address.city'}
//     ];
//
//     $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pageshttps://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
//         .then(function(response) {
//             var data = response.data;
//
//             for(i = 0; i < data.length; i++){
//                 data[i].subGridOptions = {
//                     columnDefs: [ {name:"Id", field:"id"},{name:"Name", field:"name"} ],
//                     data: data[i].friends
//                 }
//             }
//             $scope.gridOptions.data = data;
//         });
// }]);
//
//
// app.controller('FourthCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
//     $scope.gridOptions = {
//         enableRowSelection: true,
//         expandableRowTemplate: 'expandableRowTemplate.html',
//         expandableRowHeight: 150
//     }
//
//     $scope.gridOptions.columnDefs = [
//         { name: 'id', pinnedLeft:true },
//         { name: 'name'},
//         { name: 'age'},
//         { name: 'address.city'}
//     ];
//
//     $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
//         .then(function(response) {
//             var data = response.data;
//
//             for(i = 0; i < data.length; i++){
//                 data[i].subGridOptions = {
//                     columnDefs: [ {name:"Id", field:"id"},{name:"Name", field:"name"} ],
//                     data: data[i].friends,
//                     disableRowExpandable : (i % 2 === 0)
//                 }
//             }
//             $scope.gridOptions.data = data;
//         });
// }]);