/**
 * Aman Bhaskar - 5G RAN Software Engineer Portfolio
 * Interactive Systems & Dynamic Protocol Visualizer Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initExperienceCalculator();
    initThemeEngine();
    initCanvasRF();
    renderDynamicContent();
    initProtocolInspector();
    initSkillsFilter();
    initMapInteractions();
    initTerminalCLI();
    initCopyActions();
    initMobileNav();
    initScrollSpy();
    initContactForm();
    initSatelliteInteractions();
});

/* ==========================================================================
   1. Dynamic Experience Calculator (Accurate from 4th Aug 2022)
   ========================================================================== */
let globalExperience = { years: 4, months: 2, formatted: '4+ Years' };

function initExperienceCalculator() {
    const startDate = new Date(PORTFOLIO_DATA.profile.joinDate || '2022-08-04');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (now.getDate() < startDate.getDate()) {
        months--;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    globalExperience = {
        years,
        months,
        formatted: `${years}+ Years`,
        detailed: `${years} Yrs ${months} Mos`
    };

    const expBadge = document.getElementById('dynamic-exp-badge');
    if (expBadge) {
        expBadge.textContent = `${globalExperience.formatted} of telecom industry experience`;
    }

    const timelineDuration = document.getElementById('timeline-duration-text');
    if (timelineDuration) {
        timelineDuration.textContent = `Aug 4, 2022 – Present (${globalExperience.detailed})`;
    }
}

/* ==========================================================================
   2. Theme Engine (Solar Amber, Aurora Emerald, Tactical Orange, Cyber Cyan)
   ========================================================================== */
function initThemeEngine() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const dropdown = document.getElementById('theme-dropdown');
    const themeOpts = document.querySelectorAll('.theme-opt');

    const savedTheme = localStorage.getItem('aman_5g_theme') || 'solar';
    setTheme(savedTheme);

    if (toggleBtn && dropdown) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
                dropdown.classList.remove('open');
            }
        });
    }

    themeOpts.forEach((opt) => {
        opt.addEventListener('click', () => {
            const theme = opt.getAttribute('data-set-theme');
            setTheme(theme);
            if (dropdown) dropdown.classList.remove('open');
        });
    });

    function setTheme(themeName) {
        if (!PORTFOLIO_DATA.themes[themeName]) return;
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('aman_5g_theme', themeName);

        themeOpts.forEach((btn) => {
            if (btn.getAttribute('data-set-theme') === themeName) {
                btn.classList.add('active');
                if (!btn.querySelector('.theme-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'theme-badge';
                    badge.textContent = 'Active';
                    btn.appendChild(badge);
                }
            } else {
                btn.classList.remove('active');
                const badge = btn.querySelector('.theme-badge');
                if (badge) badge.remove();
            }
        });

        if (window.updateCanvasTheme) {
            window.updateCanvasTheme();
        }
    }

    window.switchTheme = setTheme;
}

/* ==========================================================================
   3. Render Dynamic Content (De-duplicated & Modular)
   ========================================================================== */
function renderDynamicContent() {
    renderMetrics();
    renderSkillsGrid();
}

function renderMetrics() {
    const container = document.getElementById('metrics-bar-container');
    if (!container) return;

    // Build metrics dynamically with calculated experience & hometown journey
    const metrics = [
        { value: globalExperience.formatted, label: 'Years 5G RAN Exp', cls: 'theme-accent-text' },
        { value: '2x', label: 'Capgemini WOW Winner', cls: 'theme-accent-text' },
        { value: '8.71', label: 'NIT Raipur Honours CGPA', cls: 'text-white' },
        { value: 'CU-CP', label: 'Layer 3 Telecom Focus', cls: 'theme-sec-text' },
        { value: '3', label: 'Supaul ➔ Raipur ➔ Gurugram', cls: 'theme-accent-text' }
    ];

    container.innerHTML = metrics
        .map((m, idx) => `
            <div class="metric-item">
                <span class="metric-number ${m.cls}">${m.value}</span>
                <span class="metric-desc">${m.label}</span>
            </div>
            ${idx < metrics.length - 1 ? '<div class="metric-divider"></div>' : ''}
        `)
        .join('');
}

function renderExperiencePillars() {
    const container = document.getElementById('experience-pillars-container');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.experiencePillars
        .map((pillar) => `
            <div class="exp-pillar glass-inner">
                <div class="pillar-head">
                    <span class="pillar-icon theme-accent-text">${pillar.icon}</span>
                    <h4 class="pillar-title">${pillar.title}</h4>
                </div>
                <ul class="pillar-points">
                    ${pillar.points.map((pt) => `<li>${pt}</li>`).join('')}
                </ul>
            </div>
        `)
        .join('');
}

function renderSkillsGrid() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.skills
        .map((cat) => `
            <div class="skill-category glass-card" data-category="${cat.category}">
                <div class="cat-header">
                    <span class="cat-icon theme-accent-text">${cat.icon}</span>
                    <h3 class="cat-title">${cat.title}</h3>
                </div>
                <div class="chips-container">
                    ${cat.items
                        .map((item) => `<span class="skill-pill ${item.highlight ? 'highlight' : ''}">${item.name}</span>`)
                        .join('')}
                </div>
            </div>
        `)
        .join('');
}

/* ==========================================================================
   4. India Map & Milestone Interactions
   ========================================================================== */
function initMapInteractions() {
    const nodes = document.querySelectorAll('.map-node');
    const milestoneCards = document.querySelectorAll('.milestone-card');

    function setActiveMilestone(cityId) {
        milestoneCards.forEach((card) => {
            if (card.getAttribute('data-highlight') === cityId) {
                card.classList.add('active');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                card.classList.remove('active');
            }
        });
    }

    nodes.forEach((node) => {
        const cityId = node.getAttribute('data-node');
        node.addEventListener('click', () => {
            setActiveMilestone(cityId);
            const cityData = PORTFOLIO_DATA.journey.find((j) => j.id === cityId);
            if (cityData) {
                showToast(`📍 ${cityData.city}: ${cityData.title}`);
            }
        });
    });

    milestoneCards.forEach((card) => {
        card.addEventListener('click', () => {
            const cityId = card.getAttribute('data-highlight');
            setActiveMilestone(cityId);
        });
    });
}

/* ==========================================================================
   5. Dynamic 5G Radio Frequency & Constellation Canvas
   ========================================================================== */
function initCanvasRF() {
    const canvas = document.getElementById('rf-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const nodes = [];
    const nodeCount = Math.min(Math.floor((width * height) / 25000), 45);

    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            pulse: Math.random() * Math.PI,
            isTower: i % 8 === 0
        });
    }

    let mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function getAccentColor() {
        return getComputedStyle(document.documentElement).getPropertyValue('--accent-glow').trim() || '#f59e0b';
    }

    window.updateCanvasTheme = () => {};

    function draw() {
        ctx.clearRect(0, 0, width, height);
        const accent = getAccentColor();

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 135) {
                    const alpha = (1 - dist / 135) * 0.16;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }

        nodes.forEach((node) => {
            node.x += node.vx;
            node.y += node.vy;
            node.pulse += 0.03;

            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            const mdx = node.x - mouse.x;
            const mdy = node.y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 90) {
                const angle = Math.atan2(mdy, mdx);
                node.x += Math.cos(angle) * 1.5;
                node.y += Math.sin(angle) * 1.5;
            }

            if (node.isTower) {
                const ringRadius = 14 + Math.sin(node.pulse) * 8;
                ctx.strokeStyle = accent;
                ctx.globalAlpha = 0.22;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.globalAlpha = 1.0;
                ctx.fillStyle = accent;
            } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            }

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    draw();
}

/* ==========================================================================
   6. Interactive 5G Architecture & Protocol Inspector
   ========================================================================== */
function initProtocolInspector() {
    const moduleBtns = document.querySelectorAll('.module-btn');
    const featureChips = document.querySelectorAll('.feature-chip');

    const inspectorId = document.getElementById('inspector-id');
    const inspectorBadge = document.getElementById('inspector-badge');
    const inspectorHeading = document.getElementById('inspector-heading');
    const inspectorSummary = document.getElementById('inspector-summary');
    const inspectorBullets = document.getElementById('inspector-bullets');
    const inspectorSpec = document.getElementById('inspector-spec');
    const inspectorLang = document.getElementById('inspector-lang');
    const inspectorCard = document.getElementById('inspector-display');

    function updateInspector(key) {
        const data = PORTFOLIO_DATA.architecture[key];
        if (!data) return;

        if (inspectorCard) {
            inspectorCard.style.opacity = '0.4';
            setTimeout(() => {
                inspectorId.textContent = data.id;
                inspectorBadge.textContent = data.badge;
                inspectorHeading.textContent = data.heading;
                inspectorSummary.textContent = data.summary;
                inspectorSpec.textContent = data.spec;
                inspectorLang.textContent = data.lang;

                inspectorBullets.innerHTML = '';
                data.bullets.forEach((b) => {
                    const li = document.createElement('li');
                    li.textContent = b;
                    inspectorBullets.appendChild(li);
                });

                inspectorCard.style.opacity = '1';
            }, 120);
        }
    }

    moduleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            moduleBtns.forEach((b) => b.classList.remove('active'));
            featureChips.forEach((c) => c.classList.remove('active'));
            btn.classList.add('active');
            updateInspector(btn.getAttribute('data-module'));
        });
    });

    featureChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            moduleBtns.forEach((b) => b.classList.remove('active'));
            featureChips.forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            updateInspector(chip.getAttribute('data-feature'));
        });
    });

    window.inspectProtocol = updateInspector;
}

/* ==========================================================================
   7. Skills Matrix Filtering
   ========================================================================== */
function initSkillsFilter() {
    const tabs = document.querySelectorAll('.filter-tab');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');
            const cards = document.querySelectorAll('.skill-category');

            cards.forEach((card) => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   7.5 Geographic Milestones & India Map Interaction
   ========================================================================== */
function initMapInteractions() {
    const mapNodes = document.querySelectorAll('.map-node');
    const milestoneCards = document.querySelectorAll('.milestone-card');

    mapNodes.forEach((node) => {
        node.addEventListener('click', () => {
            const nodeId = node.getAttribute('data-node');
            highlightMilestone(nodeId);
        });
    });

    milestoneCards.forEach((card) => {
        card.addEventListener('click', () => {
            const milestoneId = card.getAttribute('data-highlight');
            highlightMilestone(milestoneId);
        });
    });

    function highlightMilestone(id) {
        milestoneCards.forEach((c) => {
            if (c.getAttribute('data-highlight') === id) {
                c.classList.add('active');
                c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                c.classList.remove('active');
            }
        });

        mapNodes.forEach((n) => {
            if (n.getAttribute('data-node') === id) {
                n.style.transform = 'scale(1.25)';
                setTimeout(() => {
                    n.style.transform = '';
                }, 1000);
            }
        });
    }
}

/* ==========================================================================
   8. Interactive Terminal CLI ("Aman Shell")
   ========================================================================== */
function initTerminalCLI() {
    const toggleBtn = document.getElementById('terminal-toggle-btn');
    const modal = document.getElementById('terminal-modal');
    const overlay = document.getElementById('terminal-overlay');
    const closeBtn = document.getElementById('term-close-btn');
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');

    if (!modal || !input || !output) return;

    function openTerminal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => input.focus(), 150);
    }

    function closeTerminal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openTerminal);
    if (overlay) overlay.addEventListener('click', closeTerminal);
    if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === '`') || e.key === 'F2') {
            e.preventDefault();
            modal.classList.contains('active') ? closeTerminal() : openTerminal();
        } else if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeTerminal();
        }
    });

    const commandHistory = [];
    let historyIndex = -1;

    const commands = {
        help: () => `
Available Commands:
  <span class="theme-accent-text">bio</span>        - Professional summary with accurate experience (${globalExperience.detailed})
  <span class="theme-accent-text">skills</span>     - Comprehensive list of technical competencies
  <span class="theme-accent-text">exp</span>        - Career roadmap at Capgemini (joined Aug 4, 2022)
  <span class="theme-accent-text">journey</span>    - Geographic milestones (Supaul ➔ Raipur ➔ Gurugram)
  <span class="theme-accent-text">ha</span>         - Overview of gNodeB High Availability multi-CU-CP design
  <span class="theme-accent-text">sctp</span>       - Protocol decoupling of N2SCTP & F1SCTP from RRC
  <span class="theme-accent-text">theme &lt;name&gt;</span>- Switch palette ('solar', 'aurora', 'tactical', 'cyber')
  <span class="theme-accent-text">awards</span>     - Awards & honors (WOW Awards)
  <span class="theme-accent-text">contact</span>    - Direct contact channels
  <span class="theme-accent-text">download</span>   - Download Aman's Resume PDF
  <span class="theme-accent-text">clear</span>      - Clear terminal screen
  <span class="theme-accent-text">exit</span>       - Close terminal window
        `,
        bio: () => `
<strong class="text-white">Aman Bhaskar</strong> — 5G RAN Software Engineer (${globalExperience.detailed} Experience)
Specializing in CU Layer 3 protocol stack development for 5G NR and NB-IoT.
Focused on High Availability multi-CU-CP architecture, N2/F1 SCTP modular aggregators,
and cellular mobility. Honours graduate from NIT Raipur (CGPA 8.71/10).
Hometown: Supaul, Bihar. Current Base: Gurugram, India.
        `,
        skills: () => `
<strong class="theme-accent-text">5G & Telecom:</strong>    5G NR, gNodeB (CU/DU), Open RAN, NB-IoT, Satellite NTN (SIB31)
<strong class="theme-sec-text">CU Architecture:</strong>  High Availability (HA), N2SCTP & F1SCTP, RRC, UECC, RRM, Mobility (Xn, NG, DAPS)
<strong class="theme-accent-text">Languages:</strong>        C, Python, Bash, Socket Programming, Linux IPC, ASN.1
<strong class="theme-sec-text">Tooling & DevOps:</strong> Jenkins CI/CD, Wireshark, Git/GitLab, Docker, Copilot/GitLab Duo
        `,
        exp: () => `
<strong class="text-white">Capgemini</strong> | Connectivity & Network Engineer — Professional I
<span class="theme-accent-text">Aug 4, 2022 – Present (${globalExperience.detailed}) | Gurugram, India</span>
• Designed gNodeB High Availability architecture supporting multiple CU-CP instances.
• Decoupled NGAP and F1AP from RRC into dedicated N2SCTP and F1SCTP protocol aggregators.
• Implemented 5G NR Layer 3 mobility: RACH, UE Attach, Xn Handover, NG Handover, DAPS.
• Engineered complete CU logging architecture for NB-IoT and SIB31 NTN satellite support.
• Developed Layer 3 Test Tool with multi-AMF support and automated Jenkins CI/CD pipelines.
        `,
        journey: () => `
📍 <strong class="theme-accent-text">Geographic Milestones:</strong>
1. <strong>Supaul, Bihar:</strong> Hometown and formative roots.
2. <strong>Raipur, Chhattisgarh:</strong> National Institute of Technology Raipur (B.Tech Honours, 8.71 CGPA).
3. <strong>Bengaluru, Karnataka:</strong> Joined Capgemini as a fresher (Aug 2022 – Aug 2023).
4. <strong>Gurugram, Haryana / NCR:</strong> Relocated engineering base for 5G RAN CU Layer 3 (Aug 2023 – Present).
        `,
        ha: () => `
🛡️ <strong class="theme-accent-text">gNodeB High Availability (HA) Architecture:</strong>
Designed architecture enabling multiple CU-CP instances within a single gNB-CU.
Features synchronized UE context states between active and standby units, providing
fault tolerance and hot-standby failover to maintain uninterrupted cellular connectivity.
        `,
        sctp: () => `
🔀 <strong class="theme-sec-text">N2SCTP & F1SCTP Modular Protocol Aggregators:</strong>
Decoupled transport and application layers by splitting out NGAP and F1AP from RRC.
• <strong>N2SCTP:</strong> Manages SCTP associations and NGAP message handling towards 5G Core AMFs.
• <strong>F1SCTP:</strong> Handles SCTP transport and F1AP message routing towards Distributed Units (DUs).
• Internal IPC provides clean, modular message dispatch to and from RRC.
        `,
        theme: (arg) => {
            if (!arg) return `Usage: theme [solar | aurora | tactical | cyber]`;
            if (PORTFOLIO_DATA.themes[arg]) {
                window.switchTheme(arg);
                return `🎨 Switched palette to: <strong>${PORTFOLIO_DATA.themes[arg].name}</strong>`;
            }
            return `Available palettes: solar, aurora, tactical, cyber`;
        },
        awards: () => `
🏆 <strong class="theme-accent-text">Capgemini WOW Award × 2</strong>
Honored twice with the WOW Award in recognition of outstanding delivery excellence,
high-quality feature implementations, and dependable engineering leadership across critical engagements.
        `,
        contact: () => `
✉️  Email:    <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="theme-accent-text">${PORTFOLIO_DATA.profile.email}</a>
📍 Location: ${PORTFOLIO_DATA.profile.location} (Hometown: Supaul, Bihar)
🔗 LinkedIn: <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" class="theme-accent-text">linkedin.com/in/amanbh2</a>
🐙 GitHub:   <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" class="theme-accent-text">github.com/amanbh2</a>
        `,
        download: () => {
            window.open(PORTFOLIO_DATA.profile.resumePdf, '_blank');
            return '📄 Downloading Aman_Resume_v2026.pdf in a new tab...';
        },
        clear: () => {
            output.innerHTML = '';
            return '';
        },
        exit: () => {
            closeTerminal();
            return 'Terminal closed.';
        }
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const raw = input.value.trim();
            if (!raw) return;

            commandHistory.push(raw);
            historyIndex = commandHistory.length;

            const parts = raw.split(' ');
            const cmd = parts[0].toLowerCase();
            const arg = parts.slice(1).join(' ').toLowerCase();

            const userLine = document.createElement('div');
            userLine.className = 'term-line';
            userLine.innerHTML = `<span class="term-prompt theme-accent-text">aman@gNodeB:~$</span> <span class="text-white">${escapeHtml(raw)}</span>`;
            output.appendChild(userLine);

            let responseHtml = '';
            if (commands[cmd]) {
                responseHtml = commands[cmd](arg);
            } else {
                responseHtml = `<span style="color: #ef4444;">Command not recognized: '${escapeHtml(cmd)}'. Type <span class="theme-accent-text">'help'</span> for list of commands.</span>`;
            }

            if (responseHtml) {
                const respLine = document.createElement('div');
                respLine.className = 'term-line';
                respLine.innerHTML = responseHtml;
                output.appendChild(respLine);
            }

            input.value = '';
            output.scrollTop = output.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        }
    });

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
}

/* ==========================================================================
   9. Satellite Click Interaction
   ========================================================================== */
function initSatelliteInteractions() {
    const satelliteUnit = document.querySelector('.orbiting-satellite-unit');
    if (!satelliteUnit) return;

    satelliteUnit.addEventListener('click', (e) => {
        e.stopPropagation();
        const archSection = document.getElementById('architecture');
        if (archSection) {
            archSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (window.inspectProtocol) {
            window.inspectProtocol('sib31');
        }
        showToast('🛰️ NTN Satellite Link: Inspected SIB31 module!');
    });
}

/* ==========================================================================
   10. Clipboard Copy Actions & Toast Feedback
   ========================================================================== */
let toastTimeout = null;
function showToast(msg) {
    const toast = document.getElementById('toast-notify');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function initCopyActions() {
    const heroCopyBtn = document.getElementById('quick-copy-email-btn');
    if (heroCopyBtn) {
        heroCopyBtn.addEventListener('click', () => {
            const email = heroCopyBtn.getAttribute('data-email') || PORTFOLIO_DATA.profile.email;
            copyTextToClipboard(email, 'Email copied to clipboard!');
        });
    }

    document.querySelectorAll('.btn-copy-sm').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const text = btn.getAttribute('data-copy');
            if (text) {
                e.preventDefault();
                copyTextToClipboard(text, `Copied: ${text}`);
            }
        });
    });

    function copyTextToClipboard(text, successMsg) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast(successMsg);
            }).catch(() => fallbackCopy(text, successMsg));
        } else {
            fallbackCopy(text, successMsg);
        }
    }

    function fallbackCopy(text, successMsg) {
        const temp = document.createElement('input');
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        try {
            document.execCommand('copy');
            showToast(successMsg);
        } catch (err) {
            showToast('Press Ctrl+C to copy');
        }
        document.body.removeChild(temp);
    }
}

/* ==========================================================================
   11. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('mobile-open');
        hamburger.classList.toggle('is-active', isOpen);
    });

    navLinks.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
            hamburger.classList.remove('is-active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('mobile-open');
            hamburger.classList.remove('is-active');
        }
    });
}

/* ==========================================================================
   12. ScrollSpy Active Link Tracking
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/* ==========================================================================
   13. Contact Dispatch Form Handler
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('sender-name').value.trim();
        const email = document.getElementById('sender-email').value.trim();
        const subject = document.getElementById('sender-subject').value.trim();
        const message = document.getElementById('sender-message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject || '5G Stack Discussion')}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoUrl;
        showToast('Launching email client for direct dispatch...');
    });
}
