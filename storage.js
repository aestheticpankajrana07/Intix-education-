/* ═══════════════════════════════════
   INTIX EDUCATION — STORAGE MODULE
═══════════════════════════════════ */

const INTIX = {
  // ── USER ──────────────────────────
  getUser() {
    const u = localStorage.getItem('intix_user');
    return u ? JSON.parse(u) : null;
  },
  setUser(data) {
    localStorage.setItem('intix_user', JSON.stringify(data));
  },
  logout() {
    localStorage.removeItem('intix_user');
    window.location.href = '/index.html';
  },
  requireAuth() {
    const user = this.getUser();
    if (!user) {
      window.location.href = '/index.html?login=1';
      return null;
    }
    return user;
  },

  // ── PROGRESS ──────────────────────
  getProgress(courseId) {
    const all = JSON.parse(localStorage.getItem('intix_progress') || '{}');
    return all[courseId] || { completed: [], currentLesson: 0 };
  },
  setProgress(courseId, data) {
    const all = JSON.parse(localStorage.getItem('intix_progress') || '{}');
    all[courseId] = data;
    localStorage.setItem('intix_progress', JSON.stringify(all));
  },
  completeLesson(courseId, lessonIndex) {
    const prog = this.getProgress(courseId);
    if (!prog.completed.includes(lessonIndex)) {
      prog.completed.push(lessonIndex);
    }
    prog.currentLesson = lessonIndex;
    this.setProgress(courseId, prog);
  },
  getCompletionPercent(courseId, totalLessons) {
    const prog = this.getProgress(courseId);
    return Math.round((prog.completed.length / totalLessons) * 100);
  },
  getAllProgress() {
    return JSON.parse(localStorage.getItem('intix_progress') || '{}');
  },

  // ── EXAM SCORES ───────────────────
  getScore(courseId) {
    const scores = JSON.parse(localStorage.getItem('intix_scores') || '{}');
    return scores[courseId] || null;
  },
  setScore(courseId, score, total) {
    const scores = JSON.parse(localStorage.getItem('intix_scores') || '{}');
    scores[courseId] = { score, total, passed: score / total >= 0.6, date: new Date().toISOString() };
    localStorage.setItem('intix_scores', JSON.stringify(scores));
  },
  hasPassed(courseId) {
    const s = this.getScore(courseId);
    return s && s.passed;
  },
  getAllScores() {
    return JSON.parse(localStorage.getItem('intix_scores') || '{}');
  },

  // ── CERTIFICATES ──────────────────
  getCertificates() {
    return JSON.parse(localStorage.getItem('intix_certs') || '[]');
  },
  addCertificate(cert) {
    const certs = this.getCertificates();
    if (!certs.find(c => c.courseId === cert.courseId)) {
      certs.push({ ...cert, id: 'INTIX-' + Date.now().toString(36).toUpperCase(), date: new Date().toISOString() });
      localStorage.setItem('intix_certs', JSON.stringify(certs));
    }
    return certs;
  },
  hasCertificate(courseId) {
    return this.getCertificates().some(c => c.courseId === courseId);
  },

  // ── ASSESSMENTS ───────────────────
  getAssessment(courseId) {
    const all = JSON.parse(localStorage.getItem('intix_assessments') || '{}');
    return all[courseId] || null;
  },
  setAssessment(courseId, data) {
    const all = JSON.parse(localStorage.getItem('intix_assessments') || '{}');
    all[courseId] = { ...data, completed: true, date: new Date().toISOString() };
    localStorage.setItem('intix_assessments', JSON.stringify(all));
  },
  hasCompletedAssessment(courseId) {
    const a = this.getAssessment(courseId);
    return a && a.completed;
  },

  // ── PREMIUM ACCESS ────────────────
  getPremiumAccess() {
    return JSON.parse(localStorage.getItem('intix_premium') || '[]');
  },
  grantPremium(courseId) {
    const p = this.getPremiumAccess();
    if (!p.includes(courseId)) p.push(courseId);
    localStorage.setItem('intix_premium', JSON.stringify(p));
  },
  hasPremium(courseId) {
    return this.getPremiumAccess().includes(courseId);
  },

  // ── STREAK ────────────────────────
  getStreak() {
    const data = JSON.parse(localStorage.getItem('intix_streak') || '{"count":0,"last":""}');
    const today = new Date().toDateString();
    if (data.last === today) return data;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (data.last === yesterday) {
      data.count += 1;
    } else if (data.last !== today) {
      data.count = 1;
    }
    data.last = today;
    localStorage.setItem('intix_streak', JSON.stringify(data));
    return data;
  },

  // ── ADMIN ─────────────────────────
  getAdminData() {
    return JSON.parse(localStorage.getItem('intix_admin_data') || JSON.stringify({
      users: [], payments: [], certsSent: []
    }));
  },
  logUser(user) {
    const d = this.getAdminData();
    const existing = d.users.find(u => u.email === user.email);
    if (!existing) {
      d.users.push({ ...user, loginTime: new Date().toISOString(), courses: [] });
    } else {
      existing.lastLogin = new Date().toISOString();
    }
    localStorage.setItem('intix_admin_data', JSON.stringify(d));
  },
  logPayment(payment) {
    const d = this.getAdminData();
    d.payments.push({ ...payment, time: new Date().toISOString(), status: 'pending', id: 'PAY-' + Date.now() });
    localStorage.setItem('intix_admin_data', JSON.stringify(d));
  },
  approvePayment(paymentId) {
    const d = this.getAdminData();
    const p = d.payments.find(p => p.id === paymentId);
    if (p) {
      p.status = 'approved';
      this.grantPremium(p.courseId);
    }
    localStorage.setItem('intix_admin_data', JSON.stringify(d));
  },

  // ── UTILS ─────────────────────────
  totalLessonsCompleted() {
    const all = this.getAllProgress();
    return Object.values(all).reduce((sum, c) => sum + (c.completed?.length || 0), 0);
  },
  completedCourses() {
    const scores = this.getAllScores();
    return Object.keys(scores).filter(k => scores[k].passed).length;
  }
};

// ── NAVBAR INJECTION ──────────────────────────────────
function renderNav(activePage) {
  const user = INTIX.getUser();
  const navEl = document.getElementById('main-nav');
  if (!navEl) return;

  const links = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'courses.html', label: 'Courses', id: 'courses' },
    { href: 'profile.html', label: 'Profile', id: 'profile' },
  ];

  navEl.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="assets/logos/intix-logo.png" alt="INTIX" onerror="this.style.display='none'">
          <span class="nav-logo-text">INTIX <span>EDU</span></span>
        </a>
        <nav class="nav-links">
          ${links.map(l => `<a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a>`).join('')}
          ${user ? `<a href="admin.html" style="color:var(--text-muted)">Admin</a>` : ''}
        </nav>
        <div class="nav-actions">
          ${user ? `
            <div class="nav-user">
              <div class="nav-avatar">${user.name.charAt(0).toUpperCase()}</div>
              <span>${user.name.split(' ')[0]}</span>
            </div>
            <button class="btn btn-ghost btn-sm" onclick="INTIX.logout()">Logout</button>
          ` : `
            <button class="btn btn-primary btn-sm" onclick="openLoginModal()">Get Started</button>
          `}
        </div>
      </div>
    </div>
  `;
}

// ── TOAST ──────────────────────────────────────────────
function toast(msg, type = 'info') {
  const icons = { success: '✓', error: '✗', info: 'ℹ' };
  const colors = { success: '#22c55e', error: '#ef4444', info: '#3b82f6' };
  const c = document.getElementById('toast-container') || (() => {
    const el = document.createElement('div');
    el.id = 'toast-container';
    el.className = 'toast-container';
    document.body.appendChild(el);
    return el;
  })();
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span style="color:${colors[type]};font-size:16px">${icons[type]}</span> ${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// ── AOS (Animate on Scroll) ──────────────────────────
function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.aosDelay || 0;
        setTimeout(() => entry.target.classList.add('aos-animate'), parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ── SEND TELEGRAM ─────────────────────────────────────
async function sendTelegram(message) {
  try {
    await fetch('netlify/functions/telegram.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
  } catch(e) {
    // Direct API fallback (dev mode)
    const token = '8779827418:AAFSmE_GF3-smxhf9J6D8HOkWYn7kPrQTro';
    const chatId = '7649201511';
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
      });
    } catch(e2) { console.log('Telegram notify failed'); }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  // Remove loading screen
  const ls = document.getElementById('loading-screen');
  if (ls) setTimeout(() => { ls.style.opacity = '0'; setTimeout(() => ls.remove(), 500); }, 1200);
});
