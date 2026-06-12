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
// FAQ ACCORDION
// =========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

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
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "14px 8%";

        navbar.style.background =
            "rgba(10,10,20,0.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        navbar.style.padding = "20px 8%";

        navbar.style.background =
            "rgba(20,20,35,0.8)";

        navbar.style.boxShadow = "none";

    }

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(

    ".feature-card, .curriculum-card, .pricing-card, .testimonial-card, .timeline-item, .stat-card"

);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});

// =========================
// COUNTER ANIMATION
// =========================

const statNumbers =
    document.querySelectorAll(".stat-card h2");

function animateCounter(element, target) {

    let current = 0;

    const increment =
        Math.ceil(target / 40);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = current;

    }, 30);

}

const statsObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const value =
                    entry.target.innerText;

                const number =
                    parseInt(value.replace(/\D/g, ""));

                if (
                    !isNaN(number) &&
                    !entry.target.classList.contains(
                        "counted"
                    )
                ) {

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
// SMOOTH NAVIGATION
// =========================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });

// =========================
// FLOATING HERO EFFECT
// =========================

const hero =
    document.querySelector(".hero");

window.addEventListener("mousemove", e => {

    if (!hero) return;

    const x =
        (window.innerWidth / 2 - e.clientX) /
        60;

    const y =
        (window.innerHeight / 2 - e.clientY) /
        60;

    hero.style.backgroundPosition =
        `${x}px ${y}px`;

});

// =========================
// ACTIVE NAV LINK
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
                sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

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
// CONTACT FORM
// =========================

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you for your interest in Math With Arjun Academy! We will get back to you soon."
            );

            form.reset();

        }
    );

}

// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log(
    "Math With Arjun Academy loaded successfully."
);
