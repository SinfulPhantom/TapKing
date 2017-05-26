//Operating Systems Tizen Example
//Created By Spencer Miller
    
window.onload = function () {
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
        	try {
        		tizen.application.getCurrentApplication().exit();
        	} catch (ignore) {}
    }); 
    newBattle();
};

function newBattle() {
	document.getElementById("win").innerHTML = "";
	
	//Health Bar
	var health = document.getElementById("health");
	health.value = 100; //Enemy's Starting Health
	
	var index = 0;
	imageChange(index++);
	
	//Combat Function when image is clicked
    var enemy = document.getElementById("enemy")
	    .addEventListener("click", function battle() { 
	    	dmg = Math.floor(Math.random() * 10); //Damage between 0-10
	    	console.log("Enemy took: " + dmg + " damage!");
	    	
	    	//Health reduced by damage.
			health.value -= dmg;
			console.log("current health: " + health.value);
			
			//When health goes down to 0.
			if (health.value <= 0) {
				victory();
			}
	});
}

function victory() {
	//Initializing the explosion gif
	var death = new Image();
    death.src = "explode.gif";
    
	document.getElementById("input").src = death.src;
	console.log("BOOM!"); //Death check
	
	//Displays Victory at top of the screen.
	document.getElementById("win").innerHTML = "<h1>VICTORY!</h1>";
	setTimeout(newBattle, 5000)
}

function imageChange(x) {
	var sprite = new Image();
	
	console.log(x);
	
	//Image Initialization
	var imageArray = new Array();
	imageArray[0] = document.getElementById("input").src = "diablo.png";
	imageArray[1] = document.getElementById("input").src = "demon.png";
	imageArray[2] = document.getElementById("input").src = "slim.png";
	imageArray[3] = document.getElementById("input").src = "bat.png";
	imageArray[4] = document.getElementById("input").src = "boss.png";
	
	//Move through imageArray.
	for (x; x <= 5; x++) {
		console.log("imageArray index: " + x);
		sprite = imageArray[x];	
		break;
	}
	return(sprite);
}
