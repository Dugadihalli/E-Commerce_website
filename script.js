// --------------- Toggle the Nav_bar ---------------

function hideShow() {

    const NavbarList = document.querySelector('#navBar');
  
    if (NavbarList.style.display === "block") {
        NavbarList.style.display = "none";
    }
    else {
        NavbarList.style.display = "block";
    }
}
   

	
	// Hambuger Menu toggle event

function myFunction(x) {
	x.classList.toggle("change");
}


