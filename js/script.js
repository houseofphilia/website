/* ==========================================================
   HOUSE OF PHILIA — STUDIO EDITION
   script.js
========================================================== */


/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1800);

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if(menuButton){

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


/* ==========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 70){

        navbar.style.background = "rgba(248,243,236,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        navbar.style.background = "rgba(248,243,236,.80)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* ==========================================
   FADE IN SECTIONS
========================================== */

const fadeElements = document.querySelectorAll(
    ".mission-card, .timeline-content, .impact-card, .gallery-card, .quote-card, .community-image, .community-text"
);

fadeElements.forEach(element => {

    element.classList.add("fade");

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

fadeElements.forEach(el=>observer.observe(el));


/* ==========================================
   IMPACT COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 90;

        function updateCounter(){

            current += increment;

            if(current < target){

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText = target + "+";

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:0.4
});

counters.forEach(counter=>counterObserver.observe(counter));


/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const heroVideo = document.querySelector(".hero-video");

window.addEventListener("scroll", ()=>{

    if(heroVideo){

        heroVideo.style.transform =
        `translateY(${window.scrollY * 0.15}px)`;

    }

});


/* ==========================================
   BUTTON HOVER GLOW
========================================== */

document.querySelectorAll(".primary-button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow =
        "0 12px 30px rgba(216,169,119,.35)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow = "none";

    });

});


/* ==========================================
   GALLERY VIDEO PLAY / PAUSE
========================================== */

const videos = document.querySelectorAll(".gallery-card video");

videos.forEach(video=>{

    video.addEventListener("mouseenter",()=>{

        video.play();

    });

    video.addEventListener("mouseleave",()=>{

        video.pause();
        video.currentTime = 0;

    });

});


/* ==========================================
   ACTIVE NAV LINK ON SCROLL
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }

    });

});


/* ==========================================
   SCROLL TO TOP WHEN LOGO IS CLICKED
========================================== */

const logo = document.querySelector(".logo-container");

if(logo){

    logo.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
