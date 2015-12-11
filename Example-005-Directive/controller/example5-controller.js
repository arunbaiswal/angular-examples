/**
 * Created by Arun Banswal on 06-12-2015.
 */
var app = angular.module('example5', []);

// Directive name should be lower case

app.directive('restricta', function () {
    return {
        restrict : 'A', // default restrict
        template: "<div style=\"color:green\">2. Restrict to Attribute</div>"
    }
});

app.directive('restricte', function () {
    return {
        restrict : 'E',
        template: "<div style=\"color:red\">1. Restrict to Element</div>"
    }
});

app.directive('restrictc', function () {
    return {
        restrict : 'C',
        template: "<div style=\"color:blue\">3. Restrict to Class</div>"
    }
});

app.directive('restrictm', function () {
    return {
        restrict : "M",
        link: function(){
            alert("4. Restrict to comment")
        }
    }
});




