
//do something here
function CanIDrive(){
	var ageElement = document.getElementById('age');
	var age = ageElement.value;
	console.log(age);

	var result = document.getElementById("results");
	if (age < 15){
		result.innerHTML = 'You cannot get a permit';
	}else if (age ==15) {
		result.innerHTML = "You can get a permit";
		
	}else if (age >= 16 && age < 21){
			results.innerHTML = 'You can drive but not drink';
	}else if (age >= 21){
			results.innerHTML = 'You can drive AND drink';
	}



};

//var btnDrive = document.getElementByID('CanIDrive');

var btnDrive = document.getElementById("CanIDrive");
btnDrive.addEventListener('click',CanIDrive);

//	document.getElementByID('CanIDrive').addEventListener('click', 
//	CanIDrive);

function fizzbuzz(){
	//Create a loop of 1 to 100

for (var i = 0; i < 100; i++) {
    console.log( "The number is " + i);
}


	//If divisible by 3 print fizz

	//If divisible by 5 print buzz

	//If divisible by 5 AND 3 print fizzbuzz
}