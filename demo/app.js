/**
 * Created by tzachit on 28/01/15.
 */

(function(angular){

    'use strict';

    var app = angular.module('demo', ['ObservableCollection']);

    app.controller('MainController', ['$scope', 'ObservableCollection',
        function($scope, ObservableCollection){

            var collection = new ObservableCollection();

            collection.onAdd(function(key, value){
                alert('New item: key -> ' + key + ', value -> ' + value + '.');
            });

            collection.onUpdate(function(key, value){
                alert('Update item: key -> ' + key + ', value -> ' + value + '.');
            });

            collection.onRemove(function(key, value){
                alert('Remove item: key -> ' + key + ', value -> ' + value + '.');
            });

            $scope.collection = collection;
        }
    ]);

}(window.angular));