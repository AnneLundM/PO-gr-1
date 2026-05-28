const slides = document.querySelectorAll('.slide');
  let cur = 0;
  let animating = false;

  slides[cur].style.zIndex = 1;

  function go(n) {
    if (animating) return;
    animating = true;
    const next = (n + slides.length) % slides.length;

    slides[next].style.zIndex = 2;
    slides[next].classList.remove('opacity-0');
    slides[next].classList.add('opacity-100');

    setTimeout(() => {
      slides[cur].classList.remove('opacity-100');
      slides[cur].classList.add('opacity-0');
      slides[cur].style.zIndex = 0;
      slides[next].style.zIndex = 1;
      cur = next;
      animating = false;
    }, 1000);
  }

  let timer = setInterval(() => go(cur + 1), 4000);

  document.querySelector('.nav-prev').addEventListener('click', () => {
    clearInterval(timer);
    go(cur - 1);
    timer = setInterval(() => go(cur + 1), 4000);
  });
  document.querySelector('.nav-next').addEventListener('click', () => {
    clearInterval(timer);
    go(cur + 1);
    timer = setInterval(() => go(cur + 1), 4000);
  });