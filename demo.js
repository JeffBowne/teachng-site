function addNum() {
	var firstNum = document.getElementById("text-box-1").value, 
		secondNum = document.getElementById("text-box-2").value;
	
	document.getElementById("result").innerHTML = (parseInt(firstNum) + parseInt(secondNum));
};

console.log("hello");


var name = "Jeff";

var myAge = 34;

var isThisWeird = true;


// var guitarCompanies = ["Fender", "Gibson", "Hofner", "Schecter"]




// var fenders = ["Stratocaster", "Telecaster", "Mustang", "Jazzmaster"]

// var gibsons = ["Les Paul", "SG", "Explorer", "ES-335"]

// var guitarCompanies = [fenders, gibsons]




// var guitarCompanies = [ ["Stratocaster", "Telecaster", "Mustang", "Jazzmaster"], ["Les Paul", "SG", "Explorer", "ES-335"] ]






// var guitar1 = {brand: "Schecter", model: "Corsair", pickups: 2, hollowBody: true}

// var guitar2 = {brand: "Gibson", model: "Les Paul", pickups: 1, hollowBody: false}

// var guitar3 = {brand: "Fender", model: "Mustang", pickups: 3, hollowBody: false}

// console.log(guitar2.model);

// CLASS:  Create an object that is YOU, with your firstName, lastName, birthday, etc...
// console log those values








// var numA = 50,
// 	numB = 22;


// if (numA > 100) {
// 	console.log(numA +" is too high.");
// } else if (numA === 50) {
// 	console.log("50!");
// } else if (numA === 60) {
// 	console.log("60!");
// } else {
// 	console.log("nahhhhhh.");
// };







// function addingNumbers(firstNumber, secondNumber) {
// 	return firstNumber + secondNumber;
// };

// function compareNumbers(a, b) {

// 	if (a > b) {
// 		return "it's bigger!"
// 	} else {
// 		return "it's smaller!"
// 	}
// }


// function userError() {
// 	alert("You messed up!");
// };



// function doorGame(door) {
// 	if (door === 1) {
// 		return "CUPCAKE";
// 	} else if (door === 2) {
// 		return "WHISKEY";
// 	} else if (door === 3) {
// 		return "NEW CAR"
// 	} else {
// 		return "That is not an option BOZO!"
// 	};
// };



// function earlierThing(numA) {

// 	if (numA > 100) {
// 		console.log(numA +" is too high.");
// 	} else if (numA === 50) {
// 		console.log("50!");
// 	} else if (numA === 60) {
// 		console.log("60!");
// 	} else {
// 		console.log("nahhhhhh.");
// 	};

// };




// var fenders = ["Stratocaster", "Telecaster", "Mustang", "Jazzmaster", "Jazz-Bass", "P-Bass"]





// for(var i = 0; i< fenders.length; i++){

//   console.log( fenders[i] + " is a guitar." );

// };



// var x = 6;

// while(x < 10){
// 	console.log("On number " + x);
// 	x++; 
// }



// var formHeading = document.getElementById('form-title'),
// 	name = "Jeff";

// console.log( "This is what WAS inside the heading: " + formHeading.innerText );

// formHeading.innerText = "my name is " + name

// console.log( "This is what IS NOW inside the heading: " + formHeading.innerText );



// var jsDemoForm = document.getElementById('js-demo-form');

// console.log( jsDemoForm.innerHTML );

// jsDemoForm.innerHTML = "<h2>New Stuff</h2>"




var myDataAttr = document.querySelectorAll('[data-something]')

console.log("this is in my heading " + myDataAttr[0].innerText);




function eventHandler(){
	var myBottles = event.target.innerText,
		bottleQty = parseInt( myBottles.split(" ")[0] ),
		bottleWord = myBottles.split(" ")[1];

		event.target.innerText = (bottleQty - 1) + ' ' + bottleWord


		console.log('Take 1 down pass it around');

};



document.getElementById("form-title").onclick = eventHandler;


