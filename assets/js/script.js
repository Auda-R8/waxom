//Default

let header = document.getElementById("header");
let introH = document.getElementById("intro");
let scrollOffest = 0;

function scrollMenu(){
	introH = $("#intro").innerHeight();
	scrollOffest = $(this).scrollTop();

	if(scrollOffest >= introH) header.classList.add("fixed");
	else header.classList.remove("fixed");
}

function closeSearch(event){
	if(event.target.closest('.section-search') === null){
     	 searchSec.classList.remove('active');
   	 }
}

//Onload

document.body.onload = function(){

	//Preloader

	let body = document.getElementById("body");
	let preloader = document.getElementById("preloader");

	setTimeout(function(){
		body.classList.remove("lock");
		preloader.classList.add('done');
		new WOW().init();
	}, 1000);

	// Contacts

	let contact = document.getElementById("contact"),
		contacts = document.getElementById("contacts");

	contacts.onclick = function(event){
		event.preventDefault();
		contact.classList.toggle("active");
	}

	//Search

	let searchBtn = document.getElementById("search");
	let searchSec = document.querySelector('.section-search');

	searchBtn.onclick = function(event){
		event.preventDefault();
		searchSec.classList.toggle('active');
	}

	document.addEventListener('mousedown', function(event){
		if (event.target.closest('.section-search') === null) searchSec.classList.remove('active');
	});

	//   Burger Menu
	let burger = document.getElementById("burger");
	let menu = document.getElementById("nav");

	burger.onclick = function() {
		burger.classList.toggle("active");
		nav.classList.toggle("active");
		body.classList.toggle("lock");
	}

	// Button Up

	let btn = document.getElementById("scroll-btn");

	btn.onclick = function(event){
		event.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		});
	}

	//   Scroll Menu

	$(window).on("scroll", function(){
		scrollMenu();
	});

	// Scroll

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		burger.classList.toggle("active");
		nav.classList.toggle("active");
		body.classList.remove("lock");

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset
		}, 500);
	});

};