# INTIX EDUCATION 🚀
### India's Futuristic AI-Powered Learning Platform

---

## 🌟 Overview

INTIX EDUCATION is a complete, production-ready futuristic learning platform featuring:

- **16+ Courses** — 11 Free + 5 Premium
- **AI-powered curriculum** — AI, Web Dev, Design, Business, Productivity
- **Verified Certificates** — PDF download + email delivery
- **QR Payment System** — UPI ₹49 one-time access
- **Telegram Notifications** — Real-time admin alerts
- **Admin Dashboard** — Full user, payment & cert management
- **SEO Optimized** — Meta, OG, Schema, sitemap, robots
- **100% Responsive** — Mobile-first dark futuristic UI

---

## 📁 File Structure

```
intix-education/
├── index.html              ← Landing page (cinematic hero)
├── courses.html            ← Full course catalog + filters
├── course-view.html        ← Lesson viewer with sidebar
├── assessment.html         ← Pre-exam assessment tasks
├── exam.html               ← 20-mark MCQ final exam
├── certificate.html        ← PDF certificate generator
├── profile.html            ← Student dashboard
├── payment.html            ← UPI QR payment flow
├── admin.html              ← Admin panel (password: intix-ai)
│
├── css/
│   └── style.css           ← Master stylesheet (glassmorphism)
│
├── js/
│   ├── storage.js          ← localStorage engine + utils
│   └── courses.js          ← All course data + exam questions
│
├── netlify/functions/
│   ├── telegram.js         ← Telegram notification function
│   └── send-certificate.js ← Certificate email function
│
├── assets/
│   └── logos/
│       └── intix-logo.png
│
├── netlify.toml            ← Netlify config + redirects
├── robots.txt              ← SEO crawler rules
├── sitemap.xml             ← XML sitemap
├── google22dae08138bb61ce.html ← Google verification
└── README.md
```

---

## 🚀 Deploy to Netlify

### Step 1 — Upload to GitHub
```bash
git init
git add .
git commit -m "INTIX EDUCATION v1.0"
git remote add origin https://github.com/yourusername/intix-education.git
git push -u origin main
```

### Step 2 — Deploy on Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site → Import an existing project"**
3. Connect your GitHub repo
4. Build settings: **leave blank** (static site)
5. Click **Deploy site**

### Step 3 — Set Environment Variables
In Netlify Dashboard → Site Settings → Environment Variables:

```
TELEGRAM_BOT_TOKEN = 8779827418:AAFSmE_GF3-smxhf9J6D8HOkWYn7kPrQTro
TELEGRAM_CHAT_ID   = 7649201511
EMAIL_USER         = your-gmail@gmail.com
EMAIL_PASS         = your-app-password
```

> For Gmail: Use an **App Password** (Google Account → Security → 2FA → App Passwords)

### Step 4 — Custom Domain (Optional)
Netlify Dashboard → Domain Settings → Add custom domain

---

## 🔐 Admin Panel

- **URL:** `/admin.html`
- **Password:** `intix-ai`

### Admin Features:
- 📊 Overview dashboard with analytics
- 👥 All users + Gmail addresses
- 💳 Payment approvals (grant premium access)
- 🏆 Certificate management + email sending
- 📚 Course completion analytics
- 📥 Data export (JSON)
- 📨 Telegram test notifications

---

## 📚 Course Library

### Free Courses (11)
| # | Course | Category |
|---|--------|----------|
| 1 | AI Basics for Beginners | AI |
| 2 | Prompt Engineering Fundamentals | AI |
| 3 | Web Development Basics | Development |
| 4 | UI/UX Design Fundamentals | Design |
| 5 | Freelancing Starter Guide | Business |
| 6 | Productivity Systems | Productivity |
| 7 | Content Creation Basics | Marketing |
| 8 | Personal Branding Essentials | Marketing |
| 9 | Generative AI Basics | AI |
| 10 | Digital Entrepreneurship | Business |
| 11 | Future Careers & AI Skills | Career |
| 12 | Social Media Growth Basics | Marketing |
| 13 | AI Productivity Systems | Productivity |
| 14 | Startup Building Fundamentals | Business |

### Premium Courses (5) — ₹49 each
| # | Course | Category |
|---|--------|----------|
| 1 | Advanced AI Tools Mastery | AI |
| 2 | Full Stack Web Dev Bootcamp | Development |
| 3 | Digital Entrepreneurship Masterclass | Business |
| 4 | Generative AI Content Systems | AI |
| 5 | AI Automation & Productivity Mastery | Productivity |

---

## 🔄 User Flow

```
Landing Page
    ↓
Sign In (Name + Gmail)
    ↓
Browse Courses → Select Course
    ↓
Watch Lessons (6 per course avg.)
    ↓
Complete Assessment
    ↓
Take Final Exam (10 MCQs, 20 marks, 60% to pass)
    ↓
PASS → Generate Certificate → Download PDF / Share
    ↓
Admin emails certificate to student Gmail
```

---

## 💳 Payment Flow

```
User clicks "Unlock Premium Course"
    ↓
Payment page loads with UPI QR code
    ↓
User pays ₹49 via UPI
    ↓
User confirms payment (enters name + TXN ID)
    ↓
Telegram notification sent to admin
    ↓
Admin approves in /admin.html
    ↓
Premium course unlocked (localStorage)
```

---

## 📨 Telegram Notifications

Triggers for:
1. 🔐 New user login
2. 💳 Payment confirmation
3. 📚 Course completion
4. 🏆 Exam passed
5. 🏅 Certificate generated
6. 📧 Certificate email sent

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#07090f` |
| Card | `rgba(255,255,255,0.04)` |
| Blue | `#3b82f6` |
| Purple | `#8b5cf6` |
| Text Primary | `#f0f4ff` |
| Text Muted | `#8892a4` |
| Font Display | Syne |
| Font Body | DM Sans |

---

## ⚙️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Fonts:** Google Fonts (Syne + DM Sans)
- **PDF:** jsPDF + html2canvas
- **QR Code:** api.qrserver.com
- **Backend:** Netlify Functions (Node.js)
- **Notifications:** Telegram Bot API
- **Email:** Nodemailer + Gmail
- **Storage:** localStorage
- **Deploy:** Netlify

---

## 👤 Credits

**Built by Pushkar Rana**  
Founder, INTIX EDUCATION  
🇮🇳 Made in India

---

*© 2026 INTIX EDUCATION. All rights reserved.*
