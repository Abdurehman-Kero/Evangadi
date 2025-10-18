const text = "I'm Abdurehman Kero";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter-text").textContent +=
      text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing when page loads
window.onload = typeWriter;
