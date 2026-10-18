# Aman Bhaskar — 5G RAN Software Engineer Portfolio

Modern, high-performance portfolio website showcasing CU Layer 3 protocol engineering, 5G NR / NB-IoT architecture, Non-Terrestrial Network (NTN) satellite extensions, and network automation.

![Portfolio Preview](res/aman.png)

## 📡 Key Features
- **5G Radio Frequency & Constellation Canvas**: Real-time canvas simulation of cellular beamforming and gNodeB mesh network nodes.
- **Interactive 5G gNodeB & Protocol Stack Explorer**: Clickable CU Layer 3 module inspector (`gNodeB HA`, `N2SCTP & F1SCTP Decoupling`, `RRC`, `UECC`, `RRM`, `Xn/NG HO`, `DAPS`, `SIB31 NTN`).
- **Capgemini Professional Roadmap**: Timeline highlighting gNodeB High Availability design, modular SCTP aggregators, NB-IoT logging framework, multi-AMF test simulators, and 2x Capgemini WOW Awards.
- **Geographic Roots & Milestones**: Interactive topological India map illustrating journey from hometown roots in Supaul (Bihar) to NIT Raipur (B.Tech Honours), Capgemini Bengaluru (Fresher Year), and Capgemini Gurugram (5G CU L3 Engineering Base).
- **Filterable Technical Competency Matrix**: Categorized skill pills covering low-level C programming, Python automation, DevOps, and AI developer workflows.
- **Interactive 5G Terminal CLI ("Aman Shell")**: Embedded keyboard-navigable terminal emulator (`help`, `skills`, `bio`, `exp`, `journey`, `ha`, `sctp`, `awards`, `contact`, `download`).
- **Academics & Verified Credentials**: NIT Raipur Honours degree (CGPA 8.71 / 10) and LinkedIn Verified Skill Badge in C.
- **Direct Contact & Dispatch**: Quick 1-click clipboard copy for email, LinkedIn/GitHub channels, and direct mail client dispatch.

## 🚀 GitHub Pages Deployment

This site is built with **zero external compilation dependencies** (pure semantic HTML5, modern CSS3 with glassmorphism, and vanilla JS) — 100% compatible with GitHub Pages:

1. Commit and push the code:
   ```bash
   git add .
   git commit -m "Build modern 5G RAN portfolio with interactive architecture explorer & CLI"
   git push origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment** > **Branch**, select `main` and root `/`
   - Click **Save**
3. Your site will be live at:
   ```
   https://amanbh2.github.io/portfolio/
   ```

## 🛠️ Local Preview
Run any local static server:
```bash
# Python
python -m http.server 5173

# Or Node npx serve
npx serve .
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
