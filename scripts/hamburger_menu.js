x=false;
function show_noshow(){
    if(x){    
		document.getElementById("all_menu_links").style.display='none';
		document.getElementById("main_content").style.display='inline';
		x=false;
    }
    else{
	 	document.getElementById("main_content").style.display='none';
	 	document.getElementById("all_menu_links").style.visibility = 'visible';
		document.getElementById("all_menu_links").style.display='inline-block';
		x=true;    
    }
}

function open_loc(loc){
	event.preventDefault();
 	show_noshow();
	location.href = loc;
	document.getElementById("menu_check").checked = false;
}

// Get a reference to "myhref".
var myhref = document.getElementByClass("menu_link");
// Get a reference to "myfield".
var myfield = document.getElementById("menu_check");
// Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
myhref.addEventListener("click", function() {
    // "myhref" is click. So, uncheck "myfield"
   	myfield.checked = false;
});
