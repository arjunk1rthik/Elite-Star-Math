console.log("SCRIPT LOADED");

const curriculumButtons =
document.querySelectorAll(".curriculum-button");

console.log("Buttons found:", curriculumButtons.length);

curriculumButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        content.classList.toggle("open");

    });

});
