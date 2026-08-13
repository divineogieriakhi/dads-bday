/* =========================================================
   BIRTHDAY EXPERIENCE
   FOR AUGUSTINE OGIERIAKHI
========================================================= */


/* =========================================================
   INTRO
========================================================= */

const introScreen = document.getElementById("introScreen");
const enterButton = document.getElementById("enterButton");
const mainContent = document.getElementById("mainContent");

enterButton.addEventListener("click", () => {

    introScreen.classList.add("hidden");

    setTimeout(() => {
        mainContent.classList.add("visible");

        createParticles();

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 600);

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   PARTICLES
========================================================= */

function createParticles() {

    const particleContainer =
        document.getElementById("particles");

    for (let i = 0; i < 70; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 10 + 8) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.opacity =
            Math.random() * 0.6;

        particleContainer.appendChild(particle);

    }

}


/* =========================================================
   LETTER
========================================================= */

const letterText = document.getElementById("letterText");

const letter = `
Happy Birthday, Dad. ❤️

I wanted to do something different this year.

Instead of simply sending you a birthday message,
I wanted to make something that you could look at
and know that I actually took the time to create
something just for you.

Thank you for everything you do.

Thank you for the sacrifices, the advice,
the lessons, the support, the laughter,
and even the moments where you have to correct me.

I might not always say it,
but I appreciate you more than you probably know.

I hope this new chapter of your life brings you
peace, happiness, good health, success and
many more beautiful memories.

You deserve to be celebrated today.

Happy Birthday, Augustine Ogieriakhi.

I love you, Dad. ❤️
`;

let letterStarted = false;

function typeLetter() {

    if (letterStarted) return;

    letterStarted = true;

    let index = 0;

    function type() {

        if (index < letter.length) {

            const character = letter[index];

            if (character === "\n") {
                letterText.innerHTML += "<br>";
            } else {
                letterText.innerHTML += character;
            }

            index++;

            setTimeout(type, 18);
        }

    }

    type();
}


/* =========================================================
   DETECT LETTER SECTION
========================================================= */

const letterSection =
    document.querySelector(".letter-section");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    typeLetter();
                }

            });

        },
        {
            threshold: 0.3
        }
    );

observer.observe(letterSection);


/* =========================================================
   CAKE / WISH
========================================================= */

const wishButton =
    document.getElementById("wishButton");

const wishText =
    document.getElementById("wishText");

const flames =
    document.querySelectorAll(".flame");

wishButton.addEventListener("click", () => {

    flames.forEach(flame => {

        flame.style.opacity = "0";

    });

    wishText.innerHTML =
        "✨ May every wish you make come true. ✨";

    createConfetti(120);

    createHeartExplosion();

    wishButton.innerHTML =
        "🎂 WISH MADE!";

});


/* =========================================================
   FINAL SURPRISE
========================================================= */

const celebrateButton =
    document.getElementById("celebrateButton");

const finalReveal =
    document.getElementById("finalReveal");

celebrateButton.addEventListener("click", () => {

    createConfetti(250);

    createHeartExplosion();

    finalReveal.classList.add("show");

    celebrateButton.innerHTML =
        "❤️ HAPPY BIRTHDAY DAD ❤️";

    celebrateButton.style.background =
        "#d9b46b";

    celebrateButton.style.color =
        "#08090d";

});


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount = 100) {

    const container =
        document.getElementById("confetti");

    const colors = [
        "#d9b46b",
        "#f2d58c",
        "#ffffff",
        "#c98f4a",
        "#e8c5a4",
        "#b89c65"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        piece.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);

    }

}


/* =========================================================
   HEART EXPLOSION
========================================================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💖",
        "💛",
        "✨",
        "🤍"
    ];

    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.zIndex =
            "1000";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 400 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    Math.random() * 1200 + 1000,

                easing: "cubic-bezier(.17,.67,.32,1)"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 2500);

    }

}


/* =========================================================
   MOUSE GLOW EFFECT
========================================================= */

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty(
        "--mouse-x",
        x + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        y + "px"
    );

});


/* =========================================================
   RANDOM LITTLE CELEBRATION
========================================================= */

setInterval(() => {

    if (Math.random() > 0.7) {

        const spark =
            document.createElement("div");

        spark.innerHTML = "✦";

        spark.style.position = "fixed";

        spark.style.left =
            Math.random() * 100 + "%";

        spark.style.top =
            Math.random() * 100 + "%";

        spark.style.color =
            "#d9b46b";

        spark.style.fontSize =
            Math.random() * 10 + 5 + "px";

        spark.style.pointerEvents =
            "none";

        spark.style.zIndex = "0";

        document.body.appendChild(spark);

        spark.animate(
            [
                {
                    opacity: 0,
                    transform: "scale(0)"
                },
                {
                    opacity: 1,
                    transform: "scale(1)"
                },
                {
                    opacity: 0,
                    transform: "scale(0)"
                }
            ],
            {
                duration: 1800
            }
        );

        setTimeout(() => {
            spark.remove();
        }, 1800);

    }

}, 800);


/* =========================================================
   KEYBOARD SECRET
========================================================= */

let secretCode = "";

document.addEventListener("keydown", (event) => {

    secretCode += event.key.toLowerCase();

    if (secretCode.length > 20) {
        secretCode = secretCode.slice(-20);
    }

    if (secretCode.includes("augustine")) {

        createConfetti(100);

        createHeartExplosion();

        secretCode = "";

    }

});