/* ==========================================
   HOUSE OF PHILIA WEBSITE
   script.js
   Animations • Navbar • Counters • Countdown
========================================== */

/* -------------------------------
   NAVBAR SCROLL EFFECT
-------------------------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* -------------------------------
   FADE IN SECTIONS ON SCROLL
-------------------------------- */

const sections = document.querySelectorAll("section");

const revealSection = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            section.classList.add("fade","show");
        }

    });

};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

/* -------------------------------
   ANIMATED COUNTERS
-------------------------------- */

const counters = document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target = +counter.dataset.target;

    const speed = target / 120;

    let count = 0;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

},{threshold:.5});

counters.forEach(counter => counterObserver.observe(counter));

/* -------------------------------
   SATURDAY COUNTDOWN
-------------------------------- */

const countdown = document.getElementById("countdown");

function updateCountdown(){

    if(!countdown) return;

    const today = new Date();

    const nextSaturday = new Date();

    const daysUntilSaturday = (6 - today.getDay() + 7) % 7 || 7;

    nextSaturday.setDate(today.getDate() + daysUntilSaturday);

    nextSaturday.setHours(9,0,0,0);

    const distance = nextSaturday - today;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance / (1000*60*60)) % 24);
    const minutes = Math.floor((distance / (1000*60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `
        <div class="count-box">
            <h3>${days}</h3>
            <p>Days</p>
        </div>

        <div class="count-box">
            <h3>${hours}</h3>
            <p>Hours</p>
        </div>

        <div class="count-box">
            <h3>${minutes}</h3>
            <p>Minutes</p>
        </div>

        <div class="count-box">
            <h3>${seconds}</h3>
            <p>Seconds</p>
        </div>
    `;

}

updateCountdown();
setInterval(updateCountdown,1000);

/* -------------------------------
   SMOOTH SCROLL FOR NAV LINKS
-------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

/* -------------------------------
   GALLERY HOVER TILT EFFECT
-------------------------------- */

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mousemove",(e)=>{

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 8;
        const rotateX = ((y / rect.height) - .5) * -8;

        item.style.transform =
        `perspective(800px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform =
        "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

});

/* -------------------------------
   HERO PARALLAX EFFECT
-------------------------------- */

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const scroll = window.scrollY;

    if(hero){

        hero.style.backgroundPositionY = scroll * .3 + "px";

    }

});

/* -------------------------------
   LITTLE GOLD GLOW FOLLOWING CURSOR
-------------------------------- */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
