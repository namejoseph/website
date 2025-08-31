const container = document.querySelector('.hamburger-container');
container.classList.toggle('cross');

let menuOpen = 1;

document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("instagramBanner");
  const phrase = "LATEST INSTAGRAM POSTS";
  const colors = ["#FFB8C8", "#FFFFFF", "#FFFD00", "#B8FFF1"];

  function updateBanner() {
      banner.innerHTML = ""; // Clear existing elements

      let count;
      if (window.innerWidth > 1200) {
          count = 4; // Large screens
      } else if (window.innerWidth > 900) {
          count = 3; // Medium screens
      } else if (window.innerWidth > 600) {
          count = 2; // Small screens
      } else {
          count = 1; // Extra small screens
      }

      for (let i = 0; i < count; i++) {
          const span = document.createElement("span");
          span.classList.add("instagram-post");
          span.textContent = phrase;
          span.style.color = colors[i % colors.length]; // Assign initial color
          banner.appendChild(span);
      }
  }

  function cycleColors() {
      const spans = document.querySelectorAll(".instagram-post");
      spans.forEach(span => {
          let currentColor = span.style.color;
          let newColors = colors.filter(c => c !== currentColor); // Remove current color from options
          span.style.color = newColors[Math.floor(Math.random() * newColors.length)]; // Pick a new random color
      });
  }

  updateBanner();
  window.addEventListener("resize", updateBanner);
  setInterval(cycleColors, 3000); // Change colors every 3 seconds
});

function toggleMenu() {
  const container = document.querySelector('.hamburger-container');
  container.classList.toggle('cross');
  if (menuOpen == 1) {
    document.getElementById('main-nav-menu').style.transform = "translateX(-1200px)";
    document.getElementById('main-nav-social').style.transform = "translateY(-800px)";
    menuOpen = 0;
  } else {
    document.getElementById('main-nav-menu').style.transform = "translateX(0)";
    document.getElementById('main-nav-social').style.transform = "translateY(0)";
    menuOpen = 1;
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('typed-text');
  const textToType = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  function typeWriter(text, index) {
    textElement.textContent = text.slice(0, index);
    if (index < text.length) {
      index++;
      setTimeout(function () {
        typeWriter(text, index);
      }, 50); // Adjust typing speed (milliseconds)
    } else {
      // Add a delay after typing is complete
      setTimeout(function () {
        // Clear the text and restart typing
        clearAndRestart();
      }, 5000); // Adjust the delay (milliseconds)
    }
  }

  function clearAndRestart() {
    textElement.textContent = ''; // Clear the text
    setTimeout(function () {
      typeWriter(textToType, 0); // Restart typing
    }, 50);
  }

  typeWriter(textToType, 0);
});




// // Your first p5.js sketch
// function sketch1(p) {
//   p.setup = function () {
//     let canvas = p.createCanvas(windowWidth, 200);
//     canvas.parent('p5Canvas1');
//   };

//   p.draw = function () {
//     p.background(220);
//     // Add your first p5.js drawing code here
//   };

//   // Add more functions as needed
// }

// // Your second p5.js sketch
// function sketch2(p) {
//   p.setup = function () {
//     let canvas = p.createCanvas(windowWidth, 200);
//     canvas.parent('p5Canvas2');
//   };

//   p.draw = function () {
//     p.background(200, 50, 50);
//     // Add your second p5.js drawing code here
//   };

//   // Add more functions as needed
// }

// // Initialize the sketches
// let myp5_1 = new p5(sketch1);
// let myp5_2 = new p5(sketch2);

// // Add more JavaScript functionality as needed
