// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 600);

    }, 2000);

});

// ===============================
// Love Timer
// ===============================

const startDate = new Date("December 24, 2025 00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateTimer,1000);

updateTimer();

// ===============================
// Floating Hearts
// ===============================

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);

// ===============================
// Surprise Button
// ===============================

const surprise=document.getElementById("surprise");

surprise.addEventListener("click",()=>{

alert("❤️ Happy Girlfriend's Day Dakshita ❤️\n\nI Love You Forever.\n\n- Anubhav");

confettiEffect();

});

// ===============================
// Confetti
// ===============================

function confettiEffect(){

for(let i=0;i<200;i++){

let piece=document.createElement("div");

piece.style.position="fixed";

piece.style.width="8px";

piece.style.height="8px";

piece.style.background=`hsl(${Math.random()*360},100%,60%)`;

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.zIndex="999";

piece.style.borderRadius="50%";

piece.style.transition="4s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.top="100vh";

piece.style.transform=`translateX(${Math.random()*300-150}px)`;

piece.style.opacity="0";

},10);

setTimeout(()=>{

piece.remove();

},4000);

}

}

// ===============================
// Smooth Fade
// ===============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});

// ===============================
// Mouse Hearts
// ===============================

document.addEventListener("mousemove",(e)=>{

const h=document.createElement("span");

h.innerHTML="❤";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.color="#ff5ca8";

h.style.fontSize="14px";

h.style.pointerEvents="none";

h.style.transition="1s";

document.body.appendChild(h);

setTimeout(()=>{

h.style.opacity="0";

h.style.transform="translateY(-40px) scale(2)";

},10);

setTimeout(()=>{

h.remove();

},1000);

});