// Welcome message
console.log("Welcome to my CV!");

// Display current year
const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Taena Kim - Tous droits réservés.</p>
`;

// Button interaction
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    console.log("Bienvenue dans mon portfolio !");
});
