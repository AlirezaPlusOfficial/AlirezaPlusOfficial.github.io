	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
	// Default DARK CODE
	darkmode.classList.replace('bx-moon','bx-sun');
	document.body.classList.add('active');

	// Contact 

	function Manage() {
            var vName = document.getElementById("vName").value;
            var vEmail = document.getElementById("vEmail").value;
            var vMessage = document.getElementById("vMessage").value;
            if (vName == "" || vEmail == "" || vMessage == "") {
               alert("Please Enter your (Name , Email , Message) Thanks You <3");
            } else {
               window.open('mailto:AlirezaPlusBusiness@gmail.com?subject=New Message From: ' + vName + ' &body=' + vMessage + '');
            }
         }
