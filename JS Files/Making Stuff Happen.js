*internal
<script>
    alert("Hello,world.");
	</script>
	

	*External
	<script src="script.js"></script>
	
	
    * Variables and Data
	 
	 var surname = prompt('Greeting friend, may I enquire as to your surname?');
	 
	 * Declaration
	 var surname;
	 var age;
	 
	 *initialization
	 var name = "Tom";
	 var age = 20;
	 
	 *Assignment
	  name = "Andy";
	  age = 43;
	  
	 *DoingMath
	  var apples =5, pears = 10;
	 
	 *Now, use these two variables to figure out how many pieces of fruit there are in total.
	   var piecesOfFruit = apples + pears;
	   
	 *Splitting the fruit
	  var piecesForEachPerson = piecesOfFruit / 3;
	  
	 *Precedence & operators
	 (10 + 2) / 2 + 4 * 2
	 The part in brackets is worked out first. So this becomes
	  12 / 2 + 4 * 2
	  This is used to work out the final value
	  14
	  
	 *logic
	 Equality
	 15.234 === 15.234
	 true
	 We can also determine if two values are not equal using the triple not equal operator (“!==”).
	 15.234 ! == 18.4545
	 true
	 It’s important to know that strings containing a number and an actual number are not equal.
	 '10' === 10
	 false
	 
	 
	 *Greater than and less than
	  10>5
	  true
	  
	  Next we use the less than operator("<") to determine if the left value is smaller.
	  20.4 < 20.2
	  =false
	  
	  Combined comparisons
	   Combining a comparison of equality and size can be done with the greater than or equal to and less than or equal to operators (“>=” and “<=” respectively).
	   10 >= 10 = true
	   
	   10 <= 5 = false
	   
	  *Conditional
	  The most simple if statement looks something like this:
	  
	    if (10 > 5) {
			// Run the code in here
		}
		
		if-else
			if (43 < 2) {
				// Run the code in here
			} else {
				// Run a different bit of code
			}
			
			
	 *Looping
	  While
	  var i = 1;
	  while (i < 10) {
		  alert(i);
		  i = i+1;
	  }
	  // i is now 10
	  
	  *for
	  for (var i = 1; i < 10; i++) {
		  alert(i);
	  }
	  
	  *This gives us alert boxes containing the numbers 1 to 10 in order.
	       By the way, i++ is equivalent to i = i + 1
		   
	 *Functions
	    var add = function (a, b) {
        return a + b;
         };
		 
		 a and b are the function’s parameters, and the value it returns is signified by the return keyword. The return keyword also stops execution of the code in the function; nothing after it will be run.
		 var result = add(1, 2); // result is now 3
		 
		 
	*Object
	  var jedi = {
		  name: "Yoda",
		  age: 899,
		  talk: function () { alert("another... sky... walk..."); }
		  
	  };
	  
	  The Jedi’s name and age are properties - they are essentially variables within the object and can store anything a variable can. talk is a property that holds a function - a method.

      You can get data back out of an object using the dot syntax:
  
      jedi.name;
	  = Yoda
	  
	  jedi.age;
	  =899
	  
	  jedi.talk();
	  
	  Properties can be any kind of data including objects and arrays. Adding an object as a property of another object creates a nested object:
	  
	  var person =  {
		  age: 122
	  };
	  
	  person.name = {
		  first: "jeanne",
		  last: "Calment"
	  };
	  
	  Creating empty object and adding properties and method to it is possible too:
	  
	    var dog = {};
		dog.bark = function () { alert("Woof!);}
		
	 *Array
	    var emptyArray = [];
		
		var shoppingList = ['Milk', 'Bread','Beans'];
		
	You retrieve a specific element from an array using square bracket syntax:
	
	    shoppingList[0];
		=milk
		
	It’s also possible to set the value at a particular index, again using the square bracket syntax:
	    shoppingList[l] = 'cookie';
		
		//shoppingList is now ['Milk', 'Cookies', 'Beans']
		
	You can find the number of elements in the array using its length property:
		shoppingList.length;
		=3
		
	You can use push and pop methods to add and remove elements from the end of the array:
	   shoppingList.push('A new car');
	   //shoppingList is now ['Milk','Bread','Beans','A new car']
	   
	   shoppingList.pop();
	   // shoppingList  is back to ['milk', 'Bread', 'Beans']
	   
	   var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}
		
		
		
	 