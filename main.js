document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('reveal-trigger');
  const cardContainer = document.getElementById('card-container');
  const closeBtn = document.getElementById('close-card');

  // Trigger Reveal
  trigger.addEventListener('click', () => {
    // Hide trigger
    trigger.classList.add('fade-out');
    
    // Show card
    setTimeout(() => {
      trigger.style.display = 'none';
      cardContainer.classList.remove('hidden');
      cardContainer.classList.add('visible');
      
      // Fire Confetti explosion
      shootConfetti();
    }, 400); // Wait for fade-out to mostly finish
  });

  // Close Card
  closeBtn.addEventListener('click', () => {
    cardContainer.classList.remove('visible');
    cardContainer.classList.add('hidden');
    
    setTimeout(() => {
      trigger.style.display = 'flex';
      // force reflow
      void trigger.offsetWidth; 
      trigger.classList.remove('fade-out');
    }, 600);
  });

  // Confetti Logic
  function shootConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffd700', '#ffffff', '#fce781']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffd700', '#ffffff', '#fce781']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  // Floating Lanterns Background Logic
  function createLanterns() {
    const container = document.querySelector('.lanterns-container');
    const lanternEmojis = ['🏮', '✨', '🌟'];
    
    for (let i = 0; i < 15; i++) {
      const lantern = document.createElement('div');
      lantern.classList.add('lantern');
      lantern.textContent = lanternEmojis[Math.floor(Math.random() * lanternEmojis.length)];
      
      // Randomize position and animation properties
      lantern.style.left = `${Math.random() * 100}vw`;
      lantern.style.animationDuration = `${10 + Math.random() * 15}s`;
      lantern.style.animationDelay = `${Math.random() * 5}s`;
      lantern.style.fontSize = `${1 + Math.random() * 1.5}rem`;
      
      container.appendChild(lantern);
    }
  }

  createLanterns();
});
