

/* =============== Jumbotron layout for mobile settings ========================== */

 function myFun() {
  var element = document.getElementById("myIntro");
  element.classList.remove("col-6");
  element.classList.add("col-12");
}

/* ================================================================================ */

/*===== Right area of about section and removing col-6 class of left area ========*/

function righty(){
	var element = document.getElementById("right");
	element.classList.remove("col-6");
  	element.classList.add("col-12");
  	element = document.getElementById("left");
	element.classList.remove("col-6");
}

/* =============================================================================== */


/* ======== adding or removing classes for mobile devices of tabs ============= */ 
function myFunction(x) {
	if (x.matches) { // If media query matches
   		myFun();
   		righty();
  	}
  	else{
  		var y = document.getElementById("myIntro").className;
  		element = document.getElementById("left");
		element.classList.add("col-6");
  		if(y=="col-12"){
  			var element = document.getElementById("myIntro");
  			element.classList.remove("col-12");
  			element.classList.add("col-6");
		}
		var element = document.getElementById("right");
  		var yup = document.getElementById("right").className;
  		console.log("yup = " + yup);
		if(yup == "col-12"){
			element.classList.remove("col-12");
  			element.classList.add("col-6");
  		}
	}
}

/* ============================================================================== */


var x = window.matchMedia("(max-width: 991px)");		// getting media screen width
x.addListener(myFunction)								// adding listener