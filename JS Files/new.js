*DOM
   By ID
   var pageHeader = document.getElementById('page-header');
   
   By CSS Selector
     var pageHeader = document.querySelector('#header');
	 var buttons = document.querySelectorAll(.btn);
	 

	 
*Events and Callbacks
   var handclick = function (event) {
	   //do something!
   };
   
   var button =   = document.querySelector('#big-button');
   button.addEventListener('click', handleClick);
	 
	 {
		 offsetX: 74,
		 offsetY: 10,
		 pageX: 154,
		 pageY: 489,
		 screenX: 154,
		 screenY: 489,
		 target: h2,
		 timeStamp: 1363131952985,
		 type: "click",
		 X: 154,
		 y: 395,
		 
	 }
	 
	
 *AJAX
   var req = new XMLHttpRequest();
   req.onload = function (event) { .  .  . };
   req.open('get', 'some-file.txt', true);
   
   req.send();
   
  *Json
  { "name": "Yoda", age: 894, "lightsaber" : { "color": "green" } }
  
  *Using Json
    var jsonString = JSON.stringify({
		make: "McLaren",
		model: "MP4-12C",
		miles:5023
	});
	
	var car = JSON.parse(jsonString);
   
   
 *Scope
     var a = 10;
	 
	 if (a > 5) {
		 var b = 5;
		 
	 }
	 
	 var c = a + b; // wouldn't work!
	 
 *Function scope
     var doSomething = function () {
		 
		 var a = 10;
	 };
	 
	doSomething();
	console.log(a); // a is undefined
	
  comparing this to the block scope example above,you can see that,in JavaScript, b is available:
  
   var a = 10;
   
   if (a > 5) {
	   var  b = 5;
   }
   
   var c = a + b; // c is 15
   
 *Childscopes
  
  var doSomething =  function () {
	  var a = 10;
	  
  var doSomethingElse = function () {
	  console.log(a); // a is 10
  };
  doSomethingElse();
  };
  
  doSomething();
  
 *JQuery
   $('.btn').click(function () {
	   // do something
   });
  
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js">
  </script>
  
 