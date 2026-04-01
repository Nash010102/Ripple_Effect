/* ============================================
   THE RIPPLE OF YOU — Interactivity
   A love letter in code 💖
   ============================================ */

// ===== DATA =====
const IMPACT_NODES = [
  {
    emoji: '😊', label: 'Smiles',
    title: 'You Make Me Smile',
    desc: 'Even after the most tiring day, one message from you changes everything. You make me smile without even trying.',
    withoutTitle: 'No One to Smile For',
    withoutDesc: 'No one to make me smile. The days would feel mechanical — just going through the motions.'
  },
  {
    emoji: '🚂', label: 'Train rides',
    title: 'Train Rides Feel Shorter',
    desc: 'A 1.5-hour train ride feels like 15 minutes when I\'m talking to you. You make even the boring parts of life feel special.',
    withoutTitle: 'Endless Train Rides',
    withoutDesc: 'The train rides would feel endless. Just me, the noise, and the weight of the commute.'
  },
  {
    emoji: '💪', label: 'Strength',
    title: 'You Keep Me Going',
    desc: 'When I want to give up at work, I remember — I\'m building this for us. You remind me to keep going, even on the hardest days.',
    withoutTitle: 'No Reason to Push',
    withoutDesc: 'No reason to keep pushing. I\'d still be working… but without any meaning behind it.'
  },
  {
    emoji: '🏠', label: 'Home',
    title: 'You Feel Like Home',
    desc: 'No matter where I am, no matter how chaotic life gets — talking to you feels like coming home. You are my safe place.',
    withoutTitle: 'Nowhere Feels Like Home',
    withoutDesc: 'Nowhere would feel like home. Just places and spaces without warmth.'
  },
  {
    emoji: '🌟', label: 'Inspire',
    title: 'You Inspire Me',
    desc: 'You make me want to be better, do better, dream bigger. Because of you, I believe a beautiful future is possible — and that future always has you in it.',
    withoutTitle: 'No Spark',
    withoutDesc: 'No one to inspire me. I\'d be surviving, not dreaming. Just staying the same.'
  },
  {
    emoji: '😌', label: 'Peace',
    title: 'You\'re My Peace',
    desc: 'In all the chaos of life — the exhaustion, the noise, the overthinking — you are the calm I run to. You are my peace, Mochi.',
    withoutTitle: 'No Peace',
    withoutDesc: 'No peace to find. Just noise, chaos, and a mind that won\'t stop racing.'
  },
  {
    emoji: '❤️', label: 'Chosen',
    title: 'You Choose Me',
    desc: 'Every single day, you choose me. Again and again, even when I\'m tired, even when I\'m difficult. I never take that for granted.',
    withoutTitle: 'No One Choosing Me',
    withoutDesc: 'No one choosing me. Just… alone, wondering if I\'m enough.'
  },
  {
    emoji: '🌙', label: 'Nights',
    title: 'You End My Days Right',
    desc: 'Falling asleep on call with you is the best part of any day. No matter how bad things get, ending the day with you makes everything okay.',
    withoutTitle: 'Empty Nights',
    withoutDesc: 'Nights would feel empty. Just silence, darkness, and a cold pillow.'
  }
];

const DAILY_MESSAGES = [
  "Today, you made a tiring day feel a little lighter.",
  "Today, you reminded me why I keep going.",
  "Today, you made me feel like I'm not alone in this.",
  "Today, even when I was exhausted, you were my comfort.",
  "Today, you gave me something to look forward to after work.",
  "Today, you made a 1.5-hour train ride feel shorter.",
  "Today, you made me smile without even trying.",
  "Today, you made me feel understood.",
  "Today, you were my peace."
];

const CHAINS = [
  {
    start: "When you Sayang me…",
    steps: [
      "I feel supported",
      "I stop doubting myself as much",
      "Work feels less overwhelming",
      "I don't feel like giving up",
      "I start believing in my future again",
      "And that future… always has you in it 💖"
    ]
  },
  {
    start: "You listen to me…",
    steps: [
      "My thoughts feel less heavy",
      "I can breathe again",
      "I become a better version of myself",
      "All because you cared enough to hear me 💖"
    ]
  }
];

const WITH_MESSAGES = [
  "💛 The days feel lighter — even the hardest ones.",
  "💬 I have someone to share my small, silly things with.",
  "🚂 Train rides are just more time with you.",
  "🔥 Work has meaning — because I'm building a future for us.",
  "🌟 I'm not just okay… I'm the best version of me."
];

const WITHOUT_MESSAGES = [
  "The days would feel longer… and heavier.",
  "There'd be no one to tell my small things to.",
  "The train rides would feel emptier.",
  "I'd still be working… but without meaning behind it.",
  "I'd be okay… but I wouldn't be me."
];

const THANKS = [
  { emoji: '🫂', text: 'Thank you for staying even when I\'m too tired to talk properly.' },
  { emoji: '💭', text: 'Thank you for understanding me when I don\'t even understand myself.' },
  { emoji: '⏳', text: 'Thank you for being patient with me during this phase of my life.' },
  { emoji: '🔥', text: 'Thank you for motivating me when I feel like I\'m falling behind.' },
  { emoji: '💪', text: 'Thank you for making effort, even when you\'re tired too.' },
  { emoji: '💖', text: 'Thank you for choosing me, again and again.' }
];

const PARTICLE_EMOJIS = ['💖', '✨', '💗', '🌸', '💫', '♥', '🩷', '⭐', '💕'];

// ===== HELPERS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== PARTICLE SYSTEM =====
function createParticle() {
  const container = $('#particles');
  if (!container) return;
  const el = document.createElement('span');
  el.className = 'particle';
  el.textContent = PARTICLE_EMOJIS[Math.floor(Math.random() * PARTICLE_EMOJIS.length)];
  el.style.left = Math.random() * 100 + '%';
  el.style.bottom = '-30px';
  el.style.fontSize = (10 + Math.random() * 14) + 'px';
  const dur = 10 + Math.random() * 15;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = (Math.random() * 3) + 's';
  container.appendChild(el);
  setTimeout(() => { if (el.parentNode) el.remove(); }, (dur + 4) * 1000);
}

let particleInterval;
function startParticles() {
  for (let i = 0; i < 12; i++) {
    setTimeout(createParticle, i * 500);
  }
  particleInterval = setInterval(createParticle, 2000);
}

// ===== INTRO → MAIN TRANSITION =====
function enterMain() {
  const intro = $('#intro');
  const main = $('#main');
  const toggle = $('#mode-toggle-container');

  intro.classList.add('hidden');
  main.style.display = 'block';

  // Small delay for display:block to apply before opacity transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      main.classList.add('visible');
      toggle.classList.add('visible');
      initRippleMap();
      initDaily();
      initChain(0);
      initContrast();
      initThanks();
      initScrollObserver();
      // Show scroll hint after nodes reveal
      setTimeout(() => {
        const hint = $('#scroll-hint');
        if (hint) hint.classList.add('visible');
      }, 2500);
    });
  });
}

// ===== RIPPLE MAP =====
let nodesRevealed = false;

function initRippleMap() {
  const container = $('#satellite-nodes');
  if (!container) return;

  // Create satellite nodes
  IMPACT_NODES.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = 'sat-node';
    el.dataset.index = i;
    el.innerHTML = `<span class="sat-emoji">${node.emoji}</span><span class="sat-label">${node.label}</span>`;
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showNodePopup(i);
    });
    container.appendChild(el);
  });

  positionNodes();
  window.addEventListener('resize', positionNodes);

  // Center orb click
  const orb = $('#center-orb');
  if (orb) orb.addEventListener('click', triggerRipple);
}

function positionNodes() {
  const map = $('#ripple-map');
  if (!map) return;
  const rect = map.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const radius = Math.min(cx, cy) * 0.72;
  const nodes = $$('.sat-node');
  const svg = $('#svg-lines');
  if (!svg) return;

  svg.innerHTML = '';

  nodes.forEach((el, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    const nodeW = el.offsetWidth || 72;
    const nodeH = el.offsetHeight || 72;
    el.style.left = (x - nodeW / 2) + 'px';
    el.style.top = (y - nodeH / 2) + 'px';

    // SVG line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', cx);
    line.setAttribute('y1', cy);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    svg.appendChild(line);
  });
}

function triggerRipple() {
  // Animate pulse rings
  const rings = $$('.pulse-ring');
  rings.forEach((ring, i) => {
    ring.classList.remove('active');
    void ring.offsetWidth; // force reflow for re-animation
    setTimeout(() => ring.classList.add('active'), i * 350);
  });

  // Reveal nodes one by one (first time only)
  if (!nodesRevealed) {
    const nodes = $$('.sat-node');
    nodes.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 500 + i * 180);
    });
    // Show SVG lines after nodes appear
    setTimeout(() => {
      const svg = $('#svg-lines');
      if (svg) svg.classList.add('lines-visible');
    }, 500 + IMPACT_NODES.length * 180 + 200);
    nodesRevealed = true;
  }
}

function showNodePopup(index) {
  const node = IMPACT_NODES[index];
  const isWithout = $('#without-toggle') && $('#without-toggle').checked;
  const title = isWithout ? node.withoutTitle : node.title;
  const desc = isWithout ? node.withoutDesc : node.desc;
  const prefix = isWithout ? '🖤 ' : '';

  const body = $('#popup-body');
  if (!body) return;
  body.innerHTML = `
    <div class="popup-emoji">${node.emoji}</div>
    <div class="popup-title">${prefix}${title}</div>
    <div class="popup-desc">${desc}</div>
  `;
  $('#node-popup').classList.remove('hidden');
}

// Popup close
document.addEventListener('click', (e) => {
  const popup = $('#node-popup');
  if (!popup) return;
  if (e.target.id === 'popup-close' || e.target === popup) {
    popup.classList.add('hidden');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const popup = $('#node-popup');
    if (popup) popup.classList.add('hidden');
  }
});

// ===== DAILY MESSAGE =====
let dailyIndex = 0;

function initDaily() {
  // Use day of year for initial message
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  dailyIndex = dayOfYear % DAILY_MESSAGES.length;
  updateDaily();

  // Create dots
  const dotsContainer = $('#daily-dots');
  if (!dotsContainer) return;
  DAILY_MESSAGES.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === dailyIndex ? ' active' : '');
    dotsContainer.appendChild(dot);
  });
}

function updateDaily() {
  const text = $('#daily-text');
  if (!text) return;
  text.style.opacity = '0';
  setTimeout(() => {
    text.textContent = '\u201C' + DAILY_MESSAGES[dailyIndex] + '\u201D';
    text.style.opacity = '1';
  }, 300);

  // Update dots
  $$('.dot').forEach((d, i) => d.classList.toggle('active', i === dailyIndex));
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'prev-daily' || e.target.closest('#prev-daily')) {
    dailyIndex = (dailyIndex - 1 + DAILY_MESSAGES.length) % DAILY_MESSAGES.length;
    updateDaily();
  }
  if (e.target.id === 'next-daily' || e.target.closest('#next-daily')) {
    dailyIndex = (dailyIndex + 1) % DAILY_MESSAGES.length;
    updateDaily();
  }
});

// Touch swipe for daily card
let touchStartX = 0;
const dailyCard = document.querySelector('.daily-carousel');
if (dailyCard) {
  dailyCard.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  dailyCard.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        dailyIndex = (dailyIndex + 1) % DAILY_MESSAGES.length;
      } else {
        dailyIndex = (dailyIndex - 1 + DAILY_MESSAGES.length) % DAILY_MESSAGES.length;
      }
      updateDaily();
    }
  }, { passive: true });
}

// ===== CHAIN =====
let currentChain = 0;

function initChain(index) {
  currentChain = index;
  const chain = CHAINS[index];
  const track = $('#chain-track');
  if (!track) return;
  track.innerHTML = '';

  // Start bubble (always visible)
  const startEl = document.createElement('div');
  startEl.className = 'chain-step revealed';
  startEl.innerHTML = `<div class="step-bubble" style="color:var(--soft-pink);font-weight:600;font-size:1.05rem">${chain.start}</div>`;
  track.appendChild(startEl);

  // Chain steps with connectors
  chain.steps.forEach((step, i) => {
    const connector = document.createElement('div');
    connector.className = 'chain-connector';
    track.appendChild(connector);

    const stepEl = document.createElement('div');
    stepEl.className = 'chain-step';
    if (i === chain.steps.length - 1) stepEl.classList.add('last-step');
    stepEl.innerHTML = `<div class="step-bubble">${step}</div>`;
    track.appendChild(stepEl);
  });

  // Prompt
  const prompt = document.createElement('div');
  prompt.className = 'chain-prompt';
  prompt.textContent = 'tap anywhere to reveal each step ✨';
  prompt.id = 'chain-prompt';
  track.appendChild(prompt);

  // Click handler
  track.onclick = revealNextChainStep;
}

function revealNextChainStep() {
  const steps = $$('#chain-track .chain-step:not(.revealed)');
  const connectors = $$('#chain-track .chain-connector:not(.revealed)');

  if (steps.length > 0) {
    if (connectors.length > 0) {
      connectors[0].classList.add('revealed');
    }
    setTimeout(() => {
      steps[0].classList.add('revealed');
    }, 150);

    if (steps.length === 1) {
      const prompt = $('#chain-prompt');
      if (prompt) prompt.style.opacity = '0';
    }
  }
}

// Chain tab switching
document.addEventListener('click', (e) => {
  if (e.target.matches('.chain-tab') && !e.target.classList.contains('active')) {
    $$('.chain-tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    initChain(parseInt(e.target.dataset.chain));
  }
});

// ===== CONTRAST (WITH YOU / WITHOUT YOU) =====
function initContrast() {
  const withList = $('#with-list');
  const withoutList = $('#without-list');
  if (!withList || !withoutList) return;

  WITH_MESSAGES.forEach(msg => {
    const el = document.createElement('div');
    el.className = 'contrast-item';
    el.textContent = msg;
    withList.appendChild(el);
  });

  WITHOUT_MESSAGES.forEach(msg => {
    const el = document.createElement('div');
    el.className = 'contrast-item';
    el.textContent = msg;
    withoutList.appendChild(el);
  });
}

// ===== THANKS =====
function initThanks() {
  const grid = $('#thanks-grid');
  if (!grid) return;
  THANKS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'thanks-card';
    card.innerHTML = `<span class="thanks-emoji">${item.emoji}</span>${item.text}`;
    grid.appendChild(card);
  });
}

// ===== WITHOUT YOU TOGGLE =====
const withoutToggle = $('#without-toggle');
if (withoutToggle) {
  withoutToggle.addEventListener('change', (e) => {
    const isWithout = e.target.checked;
    const label = $('#toggle-label');
    const withContent = $('#with-content');
    const withoutContent = $('#without-content');

    if (isWithout) {
      document.body.classList.add('without-mode');
      if (label) label.textContent = 'Without You 🖤';
      if (withContent) withContent.classList.add('hidden');
      if (withoutContent) withoutContent.classList.remove('hidden');
    } else {
      document.body.classList.remove('without-mode');
      if (label) label.textContent = 'With You 💖';
      if (withContent) withContent.classList.remove('hidden');
      if (withoutContent) withoutContent.classList.add('hidden');
    }

    // Re-trigger contrast item animations
    setTimeout(() => {
      const items = $$('#sec-contrast .contrast-item');
      items.forEach((el, i) => {
        el.classList.remove('show');
        setTimeout(() => el.classList.add('show'), i * 120);
      });
    }, 150);

    // Re-trigger fade-in items in contrast section
    setTimeout(() => {
      $$('#sec-contrast .fade-in').forEach((el, i) => {
        el.classList.remove('show');
        setTimeout(() => el.classList.add('show'), i * 100);
      });
    }, 100);
  });
}

// ===== SCROLL OBSERVER =====
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;

        // Fade-in elements
        section.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('show'), i * 200);
        });

        // Contrast items
        section.querySelectorAll('.contrast-item').forEach((el, i) => {
          setTimeout(() => el.classList.add('show'), 200 + i * 120);
        });

        // Thanks cards
        section.querySelectorAll('.thanks-card').forEach((el, i) => {
          setTimeout(() => el.classList.add('show'), 200 + i * 120);
        });
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  $$('.section').forEach(sec => observer.observe(sec));
}

// ===== INIT =====
const enterBtn = $('#enter-btn');
if (enterBtn) {
  enterBtn.addEventListener('click', enterMain);
}

// Start particles immediately for ambient effect on intro
startParticles();

// Hide scroll hint when user scrolls
let scrollHintHidden = false;
window.addEventListener('scroll', () => {
  if (!scrollHintHidden && window.scrollY > 200) {
    const hint = $('#scroll-hint');
    if (hint) {
      hint.style.opacity = '0';
      hint.style.transition = 'opacity 0.5s';
    }
    scrollHintHidden = true;
  }
}, { passive: true });
