

// /* =============== Jumbotron layout for mobile settings ========================== */

//  function myFun1() {
//   var element = document.getElementById("myIntro");
//   var tmp = document.getElementById("myIntro").className;
//   if(tmp == "col-6"){
//   	tmp.classList.remove("col-6");
//   }
//   element.classList.add("col-12");
// }
//  function myFun2() {
//   var element = document.getElementById("myIntro");
//   var tmp = document.getElementById("myIntro").className;
//   if(tmp == "col-12"){
//   	tmp.classList.remove("col-12");
//   }
//   element.classList.add("col-6");
// }

// /* ================================================================================ */

// /*===== Right area of about section and removing col-6 class of left area ========*/

// function righty(){
// 	var element = document.getElementById("right");
// 	element.classList.remove("col-6");
//   	element.classList.add("col-12");
//   	element = document.getElementById("left");
// 	element.classList.remove("col-6");
// }

//  =============================================================================== 


// /* ======== adding or removing classes for mobile devices of tabs ============= */ 
// function myFunction(x) {
// 	if (x.matches) { // If media query matches
//    		myFun1();
//    		righty();
//   	}
//   	else{
//   		myFun2();
//   		/*
//   		var y = document.getElementById("myIntro").className;*/
//   		element = document.getElementById("left");
// 		element.classList.add("col-6");
//   		/*if(y=="col-12"){
//   			var element = document.getElementById("myIntro");
//   			element.classList.remove("col-12");
//   			element.classList.add("col-6");
// 		}*/
// 		var element = document.getElementById("right");
//   		var yup = document.getElementById("right").className;
//   		console.log("yup = " + yup);
// 		if(yup == "col-12"){
// 			element.classList.remove("col-12");
// 		}
//   			element.classList.add("col-6");
  		
// 	}
// }

// /* ============================================================================== */


// var x = window.matchMedia("(max-width: 991px)");		// getting media screen width
// x.addListener(myFunction)								// adding listener



/* ---------------------------------------------------------------------------------------------------------------------------------------- */


/* =============== Jumbotron layout for mobile settings ========================== */

			/* ================================= for mobile layout ===============================*/

function myFun1() {
  var element = document.getElementById("myIntro");
  var tmp = document.getElementById("myIntro").className;
  if(tmp == "col-6"){
  	element.classList.remove("col-6");
  }
  element.classList.add("col-12");
}

			/* ================================= for laptop layout ===============================*/

 function myFun2() {
  var element = document.getElementById("myIntro");
  var tmp = document.getElementById("myIntro").className;
  if(tmp == "col-12"){
  	element.classList.remove("col-12");
  }
  element.classList.add("col-6");
}

/* ================================================================================ */




/* =============== About section layout for mobile settings ========================== */

						/* ================================= for mobile layout ===============================*/


function righty1() {
  var element = document.getElementById("right");
  var tmp = document.getElementById("right").className;
  if(tmp == "col-6"){
  	element.classList.remove("col-6");
  }
  element.classList.add("col-12");
}

			/* ================================= for laptop layout ===============================*/

 function righty2() {
  var element = document.getElementById("right");
  var tmp = document.getElementById("right").className;
  if(tmp == "col-12"){
  	element.classList.remove("col-12");
  }
  element.classList.add("col-6");
}

/* ================================================================================ */



/* ======== adding or removing classes for mobile devices of tabs ============= */ 
function myFunction(x) {
 	if (x.matches) { // If media query matches
		myFun1();
		righty1();
	} else {
		myFun2();
		righty2();
	}
}

var x = window.matchMedia("(max-width: 991px)");		// measuring media width
myFunction(x); 		// call function first
x.addListener(myFunction);		// call function on state change also