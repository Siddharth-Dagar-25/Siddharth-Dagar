var timeout;
var tl = gsap.timeline();
var cursor = document.querySelector("#minicircle");

function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*15)
        if (a < 100) {
            document.querySelector("#percentage").textContent = a + "%";
        } else {
            a = 100;
            document.querySelector("#percentage").textContent = a + "%";
        }
    },150)
};

time();

tl.to("#loader h1", {
    delay: 0.5,
    duration: 2,
    onStart: time()
});

tl.to("#loader", {
    top: "-100vh",
    delay: 0.4,
    duration: 0.8
});

function updateClock() {
    const now = new Date();
    const hours24 = now.getHours();
    const hours12 = (hours24 % 12) || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    
    const Time = `${hours12}:${minutes}:${seconds} ${ampm}`;
    
    const timeString = `${Time} IST`;
    
    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;
  }
  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
  // Initial update
  updateClock();


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function firstPageAnim() {
    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
        })
        .from("#page1footer", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
        });
};

function circleshapechange() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.6, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.6, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            cursor.style.transform = `translate(${dets.clientX - 20}px, ${dets.clientY - 10}px) scale(1, 1)`;
        }, 100);
    });
};

function circleMouseFollower(xscale, yscale) {
    document.addEventListener("mousemove", function (dets) {
        cursor.style.transform = `translate(${dets.clientX - 20}px, ${dets.clientY - 10}px) scale(${xscale}, ${yscale})`;
    });
};

circleshapechange();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", function (dets) {
        gsap.to(element.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
        gsap.to(element.querySelector("h1"), {
            opacity: 0.6,
            x: 1,
            ease: Power3,
        });
        gsap.to(cursor, {
            width: 20,
            height: 20,
            opacity: 1,
            color: 'white'
        });
    });

    element.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - element.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
        gsap.to(element.querySelector("h1"), {
            opacity: 0.2,
            ease: Power3,
            x: 50,
        });
        gsap.to(cursor, {
            width: 80,
            height: 80,
            opacity: 0.8,
            color: 'black'
        });
    });
});

// var project1 = document.getElementById("project1");
// var targetURL = "https://ai-text-summarizer-app.siddharthdagar.repl.co/";

// project1.addEventListener("click", function () {
//     window.open(targetURL, '_blank');
// });

// var project2 = document.getElementById("project2");
// var targetURL = "https://netflixx-gpt-seven.vercel.app/";

// project2.addEventListener("click", function () {
//     window.open(targetURL, '_blank');
// });

// var project3 = document.getElementById("project3");
// var targetURL = "https://ai-text-summarizer-app.siddharthdagar.repl.co/";

// project3.addEventListener("click", function () {
//     window.open(targetURL, '_blank');
// });

// const anchorTags = document.querySelectorAll('a');

// anchorTags.forEach(function(anchor) {
//     anchor.addEventListener("click", function(event) {
//         event.preventDefault();
//     });

//     anchor.addEventListener("mouseover", function(event) {
//         event.preventDefault(); 
//     });
// });

// anchorTags.forEach((anchorTag) => {
//     anchorTag.addEventListener('mouseover', () => {
//         anchorTag.style.textDecoration = 'underline';
//         anchorTag.style.transition = 'ease 0.3s'
//     });

//     anchorTag.addEventListener('mouseout', () => {
//         anchorTag.style.textDecoration = 'none';
//         anchorTag.style.transition = 'ease 0.3s'
//     });
// });

