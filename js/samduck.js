document.addEventListener("DOMContentLoaded" ,()=>{

	const menu = document.getElementById("navList");
	const nav =  document.getElementsByTagName("nav")[0];
	const nav_a = document.querySelectorAll("nav a");

	menu.addEventListener("click" , () => {
		nav.style.transition = "left 0.5s";
		nav.style.left = 0;
	});

	nav_a.forEach( i => {
		i.addEventListener("click" , ()=> {
			nav.style.transition = "none";
			nav.style.left = "-100%";
		});		
	});


});
