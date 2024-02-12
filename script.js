let name = "Software Developer";
let anim = document.querySelector('#vertical');
let hr = document.querySelector('hr');
let hrWidth = true;
let i = 0;

let intervalID = setInterval(() => {
    anim.innerHTML += name.charAt(i);
    if (hrWidth) {
      hr.style.height = "15px";
    } else {
      hr.style.height = "70px";
    }
    hrWidth = !hrWidth;
    i++;

    // Check if the entire text has been printed
    if (i >= name.length) {
        // Stop the interval
        clearInterval(intervalID);
        hr.style.display = "none";
    }
}, 300);

const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const listctn1 = document.querySelector(".listctn1");
let mediaQuery = window.matchMedia("(max-width: 600px)");

function toggleMenu(displayHamburger) {
  if (mediaQuery.matches) {
    // Toggle button visibility
    hamburger.style.display = displayHamburger ? "block" : "none";
    closeIcon.style.display = displayHamburger ? "none" : "block";
    // Toggle menu visibility
    if (displayHamburger) {
      listctn1.classList.remove('show');
    } else {
      listctn1.classList.add('show');
    }
  } else {
    // Ensure proper display on larger screens or adjust as needed
    listctn1.style.display = "flex";
    listctn1.classList.remove('show');
  }
}

// Initialize menu state
toggleMenu(true); // Assuming true will hide the menu initially

hamburger.addEventListener("click", () => toggleMenu(false));
closeIcon.addEventListener("click", () => toggleMenu(true));

// Close the menu when clicking on it (you might want to refine this behavior)
document.querySelector(".listctn1").addEventListener("click", () => {
  // Only toggle menu if in mobile view
  if (mediaQuery.matches) {
    toggleMenu(true);
  }
});

// Ensure correct menu state on screen size change
mediaQuery.addEventListener('change', e => {
  if (e.matches) {
    // If we are now in mobile view
    toggleMenu(true); // Hide the menu
  } else {
    // For larger screens, adjust as needed
    listctn1.style.display = "none"; // Or set it to flex if you want it always visible
    hamburger.style.display = "none";
    close.style.display = "none";
  }
});

// document.getElementById('hamburger').addEventListener('click', function() {
//   this.querySelector('svg').style.fill = 'white';
// });
// document.getElementById('close').addEventListener('click', function() {
//   this.querySelector('svg').style.fill = 'white';
// });
