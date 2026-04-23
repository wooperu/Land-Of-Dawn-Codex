const dots = document.querySelectorAll('.dot');
  let active = 0;
  setInterval(() => {
    dots.forEach((d, i) => d.classList.toggle('inactive', i !== (active % dots.length)));
    active++;
  }, 2500);