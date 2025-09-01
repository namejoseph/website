document.addEventListener("DOMContentLoaded", function () {

  // Instagram banner
  const banner = document.getElementById("instagramBanner");
  if (banner) {
    const phrase = "LATEST INSTAGRAM POSTS";
    const colors = ["#FFB8C8", "#FFFFFF", "#FFFD00", "#B8FFF1"];

    function updateBanner() {
      banner.innerHTML = ""; // Clear existing elements
      const phraseWidth = 400; // Approximate width in pixels
      let count = Math.ceil(window.innerWidth / phraseWidth) + 2;

      for (let i = 0; i < count; i++) {
        const span = document.createElement("span");
        span.classList.add("instagram-post");
        span.textContent = phrase;
        span.style.color = colors[i % colors.length];
        banner.appendChild(span);
      }
    }

    function cycleColors() {
      const spans = document.querySelectorAll(".instagram-post");
      spans.forEach(span => {
        let currentColor = span.style.color;
        let newColors = colors.filter(c => c !== currentColor);
        span.style.color = newColors[Math.floor(Math.random() * newColors.length)];
      });
    }

    updateBanner();
    window.addEventListener("resize", updateBanner);
    setInterval(cycleColors, 3000);
  }

  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger-container');
  if (hamburger) {
    const menu = document.querySelector('.main-nav-menu');
    const social = document.querySelector('.main-nav-social');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('cross');
      const isExpanded = menu.style.transform === 'translateX(0px)';
      menu.style.transform = isExpanded ? 'translateX(-100%)' : 'translateX(0px)';
      social.style.transform = isExpanded ? 'translateY(-100%)' : 'translateY(0px)';
    });
  }

  // Video Lazy Loading
  const videoItems = document.querySelectorAll('.video-item');
  videoItems.forEach(item => {
    item.addEventListener('click', () => {
      const videoId = item.getAttribute('data-id');
      if (videoId && !item.querySelector('iframe')) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');

        item.innerHTML = '';
        item.appendChild(iframe);
      }
    });
  });

  // Typewriter Effect
  const textElement = document.getElementById('typed-text');
  if (textElement) {
    const container = textElement.parentElement;
    const textToType = "I am a composer, electronic musician and multimedia artist. I write and record most of my music. I have written music for video games, short films and one VR app. Thank you for visiting my website.";

    function setContainerHeight() {
      const containerStyles = window.getComputedStyle(container);
      const textStyles = window.getComputedStyle(textElement);
      const containerWidth = container.clientWidth;
      const containerPaddingLeft = parseFloat(containerStyles.paddingLeft);
      const containerPaddingRight = parseFloat(containerStyles.paddingRight);
      const availableWidth = containerWidth - containerPaddingLeft - containerPaddingRight;

      const sizer = document.createElement('div');
      sizer.style.position = 'absolute';
      sizer.style.visibility = 'hidden';
      sizer.style.height = 'auto';
      sizer.style.width = availableWidth + 'px';
      sizer.style.fontSize = textStyles.fontSize;
      sizer.style.fontFamily = textStyles.fontFamily;
      sizer.style.fontWeight = textStyles.fontWeight;
      sizer.style.letterSpacing = textStyles.letterSpacing;
      sizer.style.lineHeight = textStyles.lineHeight;
      sizer.style.whiteSpace = 'normal';
      sizer.textContent = textToType;

      document.body.appendChild(sizer);
      const textHeight = sizer.offsetHeight;
      document.body.removeChild(sizer);

      const containerPaddingTop = parseFloat(containerStyles.paddingTop);
      const containerPaddingBottom = parseFloat(containerStyles.paddingBottom);
      const totalHeight = textHeight + containerPaddingTop + containerPaddingBottom;

      container.style.minHeight = totalHeight + 'px';
    }

    function typeWriter(text, index) {
      textElement.textContent = text.slice(0, index);
      if (index < text.length) {
        index++;
        setTimeout(() => typeWriter(text, index), 50);
      } else {
        setTimeout(clearAndRestart, 5000);
      }
    }

    function clearAndRestart() {
      textElement.textContent = '';
      setTimeout(() => typeWriter(textToType, 0), 50);
    }

    setContainerHeight();
    typeWriter(textToType, 0);
    window.addEventListener('resize', setContainerHeight);
  }
});
