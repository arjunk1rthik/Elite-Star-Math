// =========================
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

            if (
                section !== content
            ) {

                section.classList.remove(
                "open"
                );

            }

        });

        content.classList.toggle(
        "open"
        );

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(124,77,255,.4)";
        navbar.style.boxShadow = "none";
    } else {
        navbar.style.background = "rgba(124,77,255,.15)";
        navbar.style.boxShadow = "none";
    }

});

// =========================
// ACTIVE NAVIGATION LINKS
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
        section.offsetHeight;

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

            link.getAttribute("href")
            === "#" + current

        ) {

            link.classList.add(
            "active-link"
            );

        }

    });

});

// =========================
// SCROLL REVEAL ANIMATIONS
// =========================

const revealElements =
document.querySelectorAll(

".achievement-box, .feature-card, .pricing-card, .contact-card, .stat-card"

);

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (

            entry.isIntersecting

        ) {

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(element => {

    element.classList.add(
    "hidden"
    );

    revealObserver.observe(
    element
    );

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            const target =
            document.querySelector(

                this.getAttribute(
                "href"
                )

            );

            if (
                target
            ) {

                target.scrollIntoView({

                    behavior:
                    "smooth",

                    block:
                    "start"

                });

            }

        }

    );

});

// =========================
// CLOSE MOBILE MENU
// =========================

document
.querySelectorAll(
".nav-links a"
)
.forEach(link => {

    link.addEventListener(

        "click",

        () => {

            navLinks.classList.remove(
            "mobile-active"
            );

        }

    );

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
// =========================
// JULY SCHEDULE DROPDOWN
// Add this to the bottom of script.js
// =========================

// Each option: which days are active, and which time slots appear on each day.
// Days: Mon, Tue, Wed, Thu, Fri
// Slots map to these time windows from the spreadsheet:
//   "10:00–11:00 AM", "11:00 AM–12:00 PM",
//   "3:00–4:00 PM",  "6:00–7:00 PM", "7:00–8:00 PM"
// Level labels match the 1A–5A rows in the spreadsheet.

const SCHEDULE_OPTIONS = {
  "1": [
    { day: "Monday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "2": [
    { day: "Monday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Tuesday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "3": [
    { day: "Monday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Tuesday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "4": [
    { day: "Monday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Tuesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "5": [
    { day: "Monday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "6": [
    { day: "Monday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "7": [
    { day: "Tuesday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "8": [
    { day: "Tuesday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "9": [
    { day: "Tuesday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "10": [
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ]
};

const DAY_ICONS = {
  "Monday":    "fa-m",
  "Tuesday":   "fa-t",
  "Wednesday": "fa-w",
  "Thursday":  "fa-calendar-day",
  "Friday":    "fa-f"
};

const scheduleDropdown = document.getElementById("schedule-dropdown");
const scheduleDisplay  = document.getElementById("schedule-display");
const schedulePlaceholder = document.getElementById("schedule-placeholder");
const scheduleDaysGrid = document.getElementById("schedule-days-grid");

if (scheduleDropdown) {

    scheduleDropdown.addEventListener("change", function () {

        const val = this.value;

        if (!val) {
            scheduleDisplay.style.display  = "none";
            schedulePlaceholder.style.display = "block";
            return;
        }

        const days = SCHEDULE_OPTIONS[val];

        scheduleDaysGrid.innerHTML = days.map(function (dayData) {

            const slotsHTML = dayData.slots.map(function (slot, i) {
                return `
                <div class="schedule-time-slot">
                    <i class="fas fa-clock"></i>
                    <span>${slot}</span>
                    <span class="schedule-level-badge">${dayData.levels[i]}</span>
                </div>`;
            }).join("");

            return `
            <div class="schedule-day-card">
                <h4>
                    <i class="fas fa-calendar-day"></i>
                    ${dayData.day}
                </h4>
                ${slotsHTML}
            </div>`;

        }).join("");

        scheduleDisplay.style.display  = "block";
        schedulePlaceholder.style.display = "none";

    });

}

// =========================
// SIGNUP MODAL
// Add this to the bottom of script.js
// =========================

const TRIAL_DATES = [
    { value: "2026-06-27", label: "Saturday, June 27" },
    { value: "2026-06-28", label: "Sunday, June 28" },
    { value: "2026-06-29", label: "Monday, June 29" },
    { value: "2026-06-30", label: "Tuesday, June 30" },
    { value: "2026-07-01", label: "Wednesday, July 1" },
    { value: "2026-07-02", label: "Thursday, July 2" },
    { value: "2026-07-03", label: "Friday, July 3" },
    { value: "2026-07-05", label: "Sunday, July 5" }
];

function buildTrialTimeSlots() {

    // 9:00 AM through 8:00 PM, in 30-minute slots
    const slots = [];
    let minutes = 9 * 60;
    const endMinutes = 20 * 60;

    function formatTime(totalMinutes) {
        let hour = Math.floor(totalMinutes / 60);
        const minute = totalMinutes % 60;
        const period = hour >= 12 ? "PM" : "AM";
        let displayHour = hour % 12;
        if (displayHour === 0) displayHour = 12;
        const minuteStr = minute === 0 ? "00" : String(minute);
        return `${displayHour}:${minuteStr} ${period}`;
    }

    while (minutes < endMinutes) {
        const start = formatTime(minutes);
        const end = formatTime(minutes + 30);
        slots.push(`${start} - ${end}`);
        minutes += 30;
    }

    // Remove any slot listed in BLOCKED_TIME_SLOTS (e.g. lunch break)
    return slots.filter(slot => !BLOCKED_TIME_SLOTS.includes(slot));
}

// Add/remove strings here (must exactly match the generated "h:mm AM/PM - h:mm AM/PM" format)
// to block off specific time slots, e.g. for a lunch break.
const BLOCKED_TIME_SLOTS = [
    "1:00 PM - 1:30 PM",
    "1:30 PM - 2:00 PM"
];

const signupModalOverlay = document.getElementById("signup-modal-overlay");
const signupModalClose = document.getElementById("signup-modal-close");
const signupFormView = document.getElementById("signup-form-view");
const signupSuccessView = document.getElementById("signup-success-view");
const signupSuccessClose = document.getElementById("signup-success-close");
const signupForm = document.getElementById("signup-form");
const openSignupButtons = document.querySelectorAll(".open-signup-modal");

const trialDateSelect = document.getElementById("trial-date");
const trialTimeSelect = document.getElementById("trial-time");
const trialDatetimeGroup = document.getElementById("trial-datetime-group");
const wantsTrialRadios = document.querySelectorAll('input[name="wantsTrial"]');

// Populate the date dropdown
if (trialDateSelect) {

    TRIAL_DATES.forEach(date => {

        const option = document.createElement("option");
        option.value = date.value;
        option.textContent = date.label;
        trialDateSelect.appendChild(option);

    });

}

// Populate the time dropdown
if (trialTimeSelect) {

    buildTrialTimeSlots().forEach(slot => {

        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        trialTimeSelect.appendChild(option);

    });

}

function openSignupModal() {

    if (!signupModalOverlay) return;

    signupModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    signupFormView.style.display = "block";
    signupSuccessView.classList.remove("active");

}

function closeSignupModal() {

    if (!signupModalOverlay) return;

    signupModalOverlay.classList.remove("active");
    document.body.style.overflow = "";

}

openSignupButtons.forEach(button => {

    button.addEventListener("click", openSignupModal);

});

if (signupModalClose) {

    signupModalClose.addEventListener("click", closeSignupModal);

}

if (signupSuccessClose) {

    signupSuccessClose.addEventListener("click", closeSignupModal);

}

// Close when clicking outside the modal box
if (signupModalOverlay) {

    signupModalOverlay.addEventListener("click", (e) => {

        if (e.target === signupModalOverlay) {
            closeSignupModal();
        }

    });

}

// Close on Escape key
document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        signupModalOverlay &&
        signupModalOverlay.classList.contains("active")
    ) {
        closeSignupModal();
    }

});

// Show/hide the trial date & time fields based on Yes/No answer
wantsTrialRadios.forEach(radio => {

    radio.addEventListener("change", () => {

        if (radio.value === "yes" && radio.checked) {

            trialDatetimeGroup.classList.add("open");
            trialDateSelect.required = true;
            trialTimeSelect.required = true;

        } else if (radio.value === "no" && radio.checked) {

            trialDatetimeGroup.classList.remove("open");
            trialDateSelect.required = false;
            trialTimeSelect.required = false;
            trialDateSelect.value = "";
            trialTimeSelect.value = "";

        }

    });

});

// =========================
// FORMSPREE ENDPOINT
// After creating a form at formspree.io, replace the URL below with
// your own endpoint from the Formspree dashboard
// (it looks like "https://formspree.io/f/abcdwxyz").
// =========================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqgjqkj";

// Handle form submission
if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitButton = signupForm.querySelector('button[type="submit"]');
        const formData = new FormData(signupForm);

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
        }

        fetch(FORMSPREE_ENDPOINT, {

            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }

        })
        .then(response => {

            if (response.ok) {

                signupFormView.style.display = "none";
                signupSuccessView.classList.add("active");

                signupForm.reset();
                trialDatetimeGroup.classList.remove("open");

            } else {

                response.json().then(data => {
                    console.error("Formspree error:", data);
                });

                alert("Something went wrong submitting the form. Please try again, or email us directly at contact@elitestarmath.com.");

            }

        })
        .catch(error => {

            console.error("Network error submitting form:", error);
            alert("Something went wrong submitting the form. Please check your connection and try again.");

        })
        .finally(() => {

            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
            }

        });

    });

}
