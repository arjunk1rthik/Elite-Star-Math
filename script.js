// MOBILE MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

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

        document
        .querySelectorAll(".curriculum-content")
        .forEach(section => {

            if (section !== content) {

                section.classList.remove("open");

            }

        });

        content.classList.toggle("open");

    });

});

// =========================
// NAVBAR EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
        "rgba(5,5,15,0.97)";

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.35)";

        navbar.style.padding =
        "15px 8%";

    }

    else {

        navbar.style.background =
        "rgba(10,10,20,.85)";

        navbar.style.boxShadow =
        "none";

        navbar.style.padding =
        "20px 8%";

    }

});

// =========================
// ACTIVE NAV LINKS
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 180;

        const sectionHeight =
        section.clientHeight;

        if (

            pageYOffset >= sectionTop &&

            pageYOffset <
            sectionTop + sectionHeight

        ) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
        "active-link"
        );

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add(
            "active-link"
            );

        }

    });

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealItems =
document.querySelectorAll(

'.achievement-box, .feature-card, .pricing-card, .contact-card, .stat-card'

);

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

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

revealItems.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

// =========================
// COUNTER ANIMATION
// =========================

const statNumbers =
document.querySelectorAll(".stat-card h2");

function animateCounter(
element,
target
){

    let current = 0;

    const increment =
    Math.ceil(target / 40);

    const timer =
    setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent =
        current;

    }, 30);

}

const statsObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (

            entry.isIntersecting &&

            !entry.target.classList.contains(
            "counted"
            )

        ) {

            const text =
            entry.target.textContent;

            const number =
            parseInt(
            text.replace(/\D/g,'')
            );

            if (!isNaN(number)) {

                entry.target.classList.add(
                "counted"
                );

                animateCounter(
                    entry.target,
                    number
                );

            }

        }

    });

},

{
    threshold: 0.5
}

);

statNumbers.forEach(stat => {

    statsObserver.observe(stat);

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(

        "click",

        function(e){

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

        }

    );

});

// =========================
// CLOSE MOBILE MENU AFTER CLICK
// =========================

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove(
        "mobile-active"
        );

    });

});

// =========================
// PAGE LOAD
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
"MathBridge Loaded Successfully"
);
```

