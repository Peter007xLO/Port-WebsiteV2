function toggleHam(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById('myMenu');
  if (myMenu.className === 'menu') {
      myMenu.className += ' menu-active'
  } else {
      myMenu.className = "menu";
  }
}

function toggleMenu(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById('myMenu');
  if (myMenu.className === 'menu') {
      myMenu.className += ' menu-active'
  } else {
      myMenu.className = "menu";
  }
}

function togglePro(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById('myMenu');
  if (myMenu.className === 'menu') {
      myMenu.className += ' menu-active'
  } else {
      myMenu.className = "menu";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  elements.forEach(element => observer.observe(element));
});








const textElement = document.getElementById('text1');
  const text = 'Kitskorn Rujichanakul';
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100); 
    } else {
      textElement.style.borderRight = 'none';
    }
  }
type();
