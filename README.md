# Jaffar Mala — Personal Developer Portfolio

> **AI Product Builder & Systems-Oriented Developer**  
> *"I build practical software and AI-powered products by connecting models, APIs, backend systems, cloud infrastructure, and real-world applications."*

A bespoke, editorial-style personal developer portfolio built for **Jaffar Mala** (B.Sc. Information Technology, Mumbai, India). Designed with systems thinking, restrained typography, and complete engineering honesty.

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite 5 + TypeScript
- **Styling**: Tailwind CSS (Sophisticated neutral palette: off-white `#F9F9F7`, deep graphite `#141518`, cobalt accent `#1D4ED8`)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS hardware-accelerated transitions
- **Typography**: Plus Jakarta Sans (Headings/Body) + JetBrains Mono (Technical telemetry/metadata)

---

## 📂 Architecture & Directory Structure

```
├── index.html               # Semantic HTML with SEO, OpenGraph & preconnect tags
├── package.json             # Scripts & dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Custom palette & typography configuration
├── public/
│   ├── favicon.svg          # Geometric JM monogram favicon
│   └── assets/
│       └── images/          # Authentic photos (jaffar.jpeg, robot.png, deepcheck-logo.png)
└── src/
    ├── data/
    │   └── portfolio.ts     # Centralized, strictly-typed data store
    ├── components/
    │   ├── Navbar.tsx       # Sticky minimalist navigation with mobile drawer
    │   ├── Hero.tsx         # Headline, narrative & interactive System Topology graph
    │   ├── About.tsx        # Two-column editorial narrative & interest taxonomy
    │   ├── Skills.tsx       # Grouped skills with "Currently Exploring" clearly separated
    │   ├── Projects.tsx     # Featured projects showcase & smaller supporting work
    │   ├── ProjectCard.tsx  # Interactive tabs: Overview, Architecture Flow, Contribution
    │   ├── Achievements.tsx # Award gallery with institutional verification
    │   ├── Community.tsx    # Volunteering, Swift Mumbai & conference timeline
    │   ├── Experience.tsx   # Degree progression & 4-phase learning trajectory
    │   ├── Certifications.tsx # Verified training & credential records
    │   ├── CurrentFocus.tsx # Engineering roadmap & systems orchestrator vision
    │   ├── Contact.tsx      # Direct social channels & functional dispatch form
    │   └── Footer.tsx       # Dynamic copyright, links, and personal sign-off
    ├── styles/
    │   └── globals.css      # Tailwind directives, subtle grid patterns & scrollbar
    ├── App.tsx              # Main layout assembler
    └── main.tsx             # Application entry point
```

---

## 🚀 Running the Project Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🛠️ Updating Portfolio Content

All information — projects, links, skills, achievements, contact details, and awards — is maintained in a single editable file:

```
src/data/portfolio.ts
```

To update project details, change social links, or add new achievements, edit `src/data/portfolio.ts`. The UI will reflect changes immediately without modifying component markup.

---

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.

---

## 📜 Content Integrity & Engineering Transparency

This portfolio follows strict rules for credibility:
- No artificial percentage bars or fake 5-star ratings.
- Hackathon prototypes are clearly designated as prototypes, differentiating synthetic telemetry from hardware sensor feeds.
- Team achievements are presented with clear distinctions between team accolades and personal contributions.
- Real photographic evidence is incorporated from actual competitions and research conventions.
