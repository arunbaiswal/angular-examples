/**
 * Created by Arun Banswal on 06-12-2015.
 */
angular.module('example4', [])
    .service('MyService',function MyService(){
        var that = this;
        that['message'] = 'Hello';
    })
    .controller('MyFirstController', function MyFirstController(MyService) {
        var first = this;
        first.data = MyService;
    })
    .controller('MySecondController', function MySecondController(MyService) {
        var second = this;
        second.data = MyService;
    });