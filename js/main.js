/*-------- Sticky Nav bar ------*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}


// // ----------------------- Show /hide main page caption on hover----------------------------------------------

// function show(id) {
// 	document.getElementById(id).style.visibility = "visible";
// };
// function hide(id) {
// 	document.getElementById(id).style.visibility = "hidden";
// };

// document.getElementById("caption").style.display = "block";


// function showBlock(id) {
// 	document.getElementById(id).style.visibility = "visible";
// };

// function hideBlock(id) {
//     // document.getElementById(id).style.display = "block";
//     document.getElementById(id).style.visibility = "hidden";
// };


// var x_offset = 20;
// function updatePosition( e ){
// 	var melp_photo = document.getElementById("melp_photo");
// 	melp_photo.style.top = e.y - melp_photo.clientHeight/2 + "px" ;
// 	melp_photo.style.left = e.x - melp_photo.clientWidth + x_offset + "px" ;
// };

// var x_offset = 20;
// function updatePosition( e ){
// 	var kara_photo = document.getElementById("kara_photo");
// 	kara_photo.style.top = e.y - kara_photo.clientHeight/2 + "px" ;
// 	kara_photo.style.left = e.x - kara_photo.clientWidth + x_offset + "px" ;
// };


// document.onmousemove = updatePosition;




/*---------Side Nav Responsive------*/
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

/* Open the sidenav */
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}


