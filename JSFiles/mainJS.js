$("document").ready(function(){

resize();
//NAV BAR DROP DOWN
$('nav li ul').hide().removeClass('options');

$('nav li').hover(
  function(){
    var ul = $(this).find('ul');
    $("devButtonsList").css({"color":"blue"});
    //get menu link width and the list of links width
    var menuWidth = $(this).width();
    var ulWidth = $(ul).width();
    //minus the two and divide by two to get the new margin
    var newMargin = (menuWidth - ulWidth)/2;
      //apply new margin
    $(ul).css({"margin-left":newMargin});
    //slide down
    $(ul).stop().slideDown(400);
  },
  function(){
    var ul = $(this).find('ul');
    $(ul).stop().slideUp(400);
  }
);
//NAV BAR DROP DOWN

///RESIZING
$(window).on('resize', function(){
  resize()
});

function resize(){
        var win = $(this); //this = window
       console.log(win.width());
      if (win.width() >= 1900) { 
        $("body").append('<style>.quote:before{transform: skewY(-3deg);}</style>');
      }
      if (win.width() >= 2500) {
        $("body").append('<style>.quote:before{transform: skewY(-2deg);}</style>');
      }
      if (win.width() >= 1750) {
        $("body").append('<style>.imgcontainer {width: 100%; height: auto;}</style>');
      }
      if (win.width() <= 1750) {
        $("body").append('<style>.imgcontainer {width: 1750px; height: 583px;}</style>');
      }
}
///RESIZING

///SKILL LEVEL DROP DOWN
  var app = angular.module('scotchApp', ['ngRoute']);
app.controller('MainCtrl', function($scope) {
  $scope.swiftS = false;
  $scope.javaS = false;
  $scope.htmlS = false;
  $scope.cssS = false;
  $scope.scriptS = false;
});

//Drop down
var skills = document.getElementById('skills');
var linkH = $(skills).find('ul');
var linkA = $(linkH).find('a');
$(linkA).hover(function(){
  var skillDiv = $(linkA).find("div");
  var wordWidth = $(this).width();
  var levelWidth = $(skillDiv).width();

  var newMargin = (wordWidth - levelWidth)/2;

  $(skillDiv).css({"margin-left":newMargin});

});
///SKILL LEVEL DROP DOWN


//add image
angular.module("myApp", []).controller("MyCtrl", function($scope){
  $scope.image = "https://www.google.com/images/srpr/logo11w.png";
alert("image");
})

});
