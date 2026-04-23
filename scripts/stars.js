const starsEl = document.getElementById('stars');
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${size}px; height:${size}px;
      --dur:${(Math.random()*4+2).toFixed(1)}s;
      --delay:${(Math.random()*4).toFixed(1)}s;
      --op:${(Math.random()*0.5+0.2).toFixed(2)};
    `;
    starsEl.appendChild(s);
  }