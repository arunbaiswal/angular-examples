/**
 * Created by Arun Banswal on 06-12-2015.
 */
angular.module('example3', [])
    .controller('MyFirstController', function () {
        var that = this;
        that.data = {message: "Hello"};
    })
    .controller('MySecondController', function () {
        var that = this;
        that.data = {message: "World"};
    });