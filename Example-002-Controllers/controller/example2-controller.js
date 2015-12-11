/**
 * Created by Arun Banswal on 06-12-2015.
 */
angular.module('example2', [])
    .controller('MyFirstController', function MyFirstController() {
        var that = this;
        that.data = {message: "Hello"};
    });