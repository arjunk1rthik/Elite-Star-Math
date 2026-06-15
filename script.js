```javascript
// =========================
// MOBILE MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

        hamburger.classList.toggle("active");

    });

}

// =========================
// CURRICULUM ACCORDION
// =========================

const curriculumButtons =
document.querySelectorAll(".curriculum-button");

curriculumButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        const isOpen =
        content.style.display === "block";

        document
        .querySelectorAll(".curriculum-content")
        .forEach(item => {

            item.style.display = "none";

        });

        if (!isOpen) {

            content.style.display = "block";

        }

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding =
        "14px 8%";

        navbar.style.background =
        "rgba(5,5,15,0.95)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.padding =
        "20px 8%";

        navbar.style.background =
        "rgba(10,10,20,.85)";

        navbar.style.boxShadow =
        "none";

    }

});

// =========================
// FAQ ACCORDION
// =========================

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        const isOpen =
        answer.style.display === "block";

        document
        .querySelectorAll(".faq-answer")
        .forEach(item => {

            item.style.display = "none";

        });

        if (!isOpen) {

            answer.style.display = "block";

        }

    });

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",

    function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(

'.achievement-box, .feature-card, .pricing-card, .timeline-item, .contact-card, .stat-card'

);

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold: 0.15
}

);

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});

// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (

            pageYOffset >= sectionTop &&

            pageYOffset <
            sectionTop +
            sectionHeight

        ){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
        "active-link"
        );

        if(

            link.getAttribute("href") ===
            "#" + current

        ){

            link.classList.add(
            "active-link"
            );

        }

    });

});

// =========================
// STATS COUNTER ANIMATION
// =========================

const statCards =
document.querySelectorAll(
".stat-card h2"
);

function animateValue(
element,
start,
end,
duration
){

    let startTime = null;

    function animation(currentTime){

        if(!startTime)
        startTime = currentTime;

        const progress =
        Math.min(

            (currentTime - startTime) /
            duration,

            1

        );

        const value =
        Math.floor(

            progress *
            (end - start) +
            start

        );

        element.textContent =
        value;

        if(progress < 1){

            requestAnimationFrame(
            animation
            );

        }

    }

    requestAnimationFrame(
    animation
    );

}

const counterObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(

            entry.isIntersecting &&

            !entry.target.classList.contains(
            "counted"
            )

        ){

            const text =
            entry.target.textContent;

            const num =
            parseInt(
            text.replace(/\D/g,'')
            );

            if(!isNaN(num)){

                entry.target.classList.add(
                "counted"
                );

                animateValue(

                    entry.target,

                    0,

                    num,

                    1200

                );

            }

        }

    });

},

{
    threshold: 0.5
}

);

statCards.forEach(card => {

    counterObserver.observe(card);

});

// =========================
// PAGE LOADED
// =========================

window.addEventListener(
"load",

() => {

    document.body.classList.add(
    "loaded"
    );

}

);

console.log(
"MathBridge loaded successfully."
);
```
