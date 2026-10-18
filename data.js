/**
 * Aman Bhaskar Portfolio - Structured Data Store
 * Decouples content from markup for clean, efficient maintenance.
 */

const PORTFOLIO_DATA = {
    profile: {
        name: "Aman Bhaskar",
        role: "5G RAN Software Engineer",
        joinDate: "2022-08-04", // 4th Aug 2022
        company: "Capgemini",
        location: "Gurugram, India",
        hometown: "Supaul, Bihar, India",
        almaMater: "NIT Raipur",
        email: "amanbh2@gmail.com",
        linkedin: "https://linkedin.com/in/amanbh2",
        github: "https://github.com/amanbh2",
        resumePdf: "res/Aman_Resume_v2026.pdf",
        avatar: "res/aman.png",
        bio: "5G RAN Software Engineer specializing in CU Layer 3 development for 5G NR and NB-IoT. Experienced in CU-CP High Availability, modular protocol stack design (N2SCTP & F1SCTP), cellular mobility, satellite NTN protocol support, and low-level C development."
    },

    // Core personal engineering metrics
    metrics: [
        { value: "4+", label: "Years 5G RAN Exp", highlight: "accent" },
        { value: "2x", label: "Capgemini WOW Winner", highlight: "accent" },
        { value: "8.71", label: "NIT Raipur Honours CGPA", highlight: "white" },
        { value: "CU-CP", label: "Layer 3 Telecom Focus", highlight: "secondary" },
        { value: "4", label: "Milestones (Supaul ➔ Raipur ➔ BLR ➔ GGN)", highlight: "accent" }
    ],

    // Geographic Milestones for India Map
    journey: [
        {
            id: "supaul",
            city: "Supaul",
            state: "Bihar",
            title: "Hometown & Roots",
            description: "Personal roots and formative upbringing in Supaul, Northern Bihar.",
            type: "origin",
            svgCoords: { cx: 605, cy: 385 }
        },
        {
            id: "raipur",
            city: "Raipur",
            state: "Chhattisgarh",
            title: "Academic Alma Mater",
            description: "National Institute of Technology Raipur (2018–2022) — B.Tech Honours, CGPA: 8.71/10.",
            type: "education",
            svgCoords: { cx: 490, cy: 545 }
        },
        {
            id: "bengaluru",
            city: "Bengaluru",
            state: "Karnataka",
            title: "Career Inception (Fresher Year)",
            description: "Capgemini Bengaluru (Aug 2022 – Aug 2023) — Joined as a fresher, foundational telecom protocol training and stack onboarding.",
            type: "work",
            svgCoords: { cx: 355, cy: 780 }
        },
        {
            id: "gurugram",
            city: "Gurugram",
            state: "Haryana / Delhi-NCR",
            title: "Current Engineering Base",
            description: "Capgemini Gurugram (Aug 2023 – Present) — 5G RAN CU Layer 3 development & High Availability architecture.",
            type: "work",
            svgCoords: { cx: 340, cy: 330 }
        }
    ],

    themes: {
        solar: {
            name: "Solar Amber",
            accent: "#f59e0b",
            secondary: "#38bdf8",
            desc: "NASA Artemis & Aerospace Satellite Gold"
        },
        aurora: {
            name: "Aurora Emerald",
            accent: "#00f5a0",
            secondary: "#a3e635",
            desc: "Quantum Radar & Low-Energy 5G Green"
        },
        tactical: {
            name: "Tactical Orange",
            accent: "#ff6b00",
            secondary: "#38bdf8",
            desc: "Carrier-Grade Baseband Hardware Orange"
        },
        cyber: {
            name: "Cyber Cyan",
            accent: "#00f2fe",
            secondary: "#8b5cf6",
            desc: "High-Frequency 5G Carrier Beam Cyan"
        }
    },

    // Legitimate, public-domain architectural focus areas
    architecture: {
        ha_cucp: {
            id: "SYSTEM DESIGN :: gNodeB High Availability",
            badge: "CU Resiliency",
            heading: "gNodeB CU-CP High Availability (HA) & Resiliency",
            summary: "Architectural design enabling multiple CU-CP instances within a gNB-CU to support fault tolerance, hot-standby failover, and high network availability.",
            bullets: [
                "Designed architecture to support multiple CU-CP instances running within a single gNB-CU node.",
                "Structured state synchronization mechanisms between active and standby CU-CPs for reliable session continuity.",
                "Implemented fault detection and failover triggers to prevent single points of failure across cellular clusters."
            ],
            spec: "gNodeB High Availability Design",
            lang: "C / Linux IPC / Redundancy Models"
        },
        sctp_split: {
            id: "SYSTEM DESIGN :: N2SCTP & F1SCTP Decoupling",
            badge: "Modular Stack Design",
            heading: "N2SCTP & F1SCTP Protocol Aggregators",
            summary: "Modular architecture separating NGAP and F1AP transport handling out of RRC into dedicated SCTP aggregation modules.",
            bullets: [
                "Created N2SCTP aggregator module to manage all SCTP associations and NGAP messages towards the 5G Core AMF.",
                "Engineered F1SCTP aggregator module to handle all SCTP communication and F1AP messages towards Distributed Units (DUs).",
                "Established clean internal IPC message routing between RRC and the respective SCTP modules, improving modularity and maintainability."
            ],
            spec: "3GPP Interface Architecture (NG-C / F1-C)",
            lang: "C / SCTP Socket Programming"
        },
        rrc: {
            id: "MODULE :: RRC (Radio Resource Control)",
            badge: "CU Layer 3",
            heading: "Radio Resource Control (RRC)",
            summary: "Primary control-plane signaling protocol between UE and gNodeB. Manages connection state transitions, security configuration, and mobility measurement reporting.",
            bullets: [
                "Implemented RRCSetup, RRCReconfiguration, and RRCRelease state transition procedures.",
                "Engineered measurement configuration reports triggering intra-frequency and inter-frequency handovers.",
                "Handled ASN.1 encoding and decoding structures per standard 3GPP specifications."
            ],
            spec: "3GPP TS 38.331",
            lang: "C / ASN.1 / Linux CU-CP"
        },
        uecc: {
            id: "MODULE :: UECC (UE Context Control)",
            badge: "CU State Machine",
            heading: "UE Context Control (UECC)",
            summary: "Lifecycle state machine managing individual UE context allocation, state tracking, and interface coordination across the CU.",
            bullets: [
                "Managed UE context initialization, unique identifier assignment, and transition across RRC states.",
                "Coordinated message flows between DU (F1-C), User Plane (E1), and 5G Core AMF (NG-C).",
                "Implemented context teardown and cleanup logic during radio link failures and releases."
            ],
            spec: "3GPP TS 38.401 / TS 38.413",
            lang: "C / POSIX Concurrency"
        },
        rrm: {
            id: "MODULE :: RRM (Radio Resource Management)",
            badge: "Resource Control",
            heading: "Radio Resource Management (RRM)",
            summary: "Decision engine responsible for radio spectrum admission control, quality of service (QoS) enforcement, and handover evaluation.",
            bullets: [
                "Implemented admission control logic evaluating incoming requests against available cell capacity.",
                "Mapped QoS requirements to ensure appropriate prioritization of low-latency and high-throughput data bearers.",
                "Evaluated candidate target cells based on received radio signal measurements (RSRP, RSRQ)."
            ],
            spec: "3GPP TS 38.300",
            lang: "C / Resource Algorithms"
        },
        mobility: {
            id: "PROCEDURES :: Cellular Mobility & Handovers",
            badge: "Inter-gNodeB Mobility",
            heading: "Mobility & Handover Execution (Xn, NG, DAPS)",
            summary: "Implementation of cellular handover mechanisms ensuring uninterrupted connectivity as devices move across cell sites.",
            bullets: [
                "Implemented Xn-based handover between neighboring gNodeBs directly over the Xn-C interface.",
                "Supported NG-based handover coordinated through the 5G Core AMF when direct Xn links are unavailable.",
                "Worked on DAPS (Dual Active Protocol Stack) handover mechanisms minimizing interruption times during transitions."
            ],
            spec: "3GPP TS 38.423 / TS 38.413",
            lang: "C / Protocol State Machines"
        },
        sib31: {
            id: "PROCEDURES :: NTN Satellite Integration",
            badge: "Non-Terrestrial Networks",
            heading: "Non-Terrestrial Networks (NTN) & SIB31 Support",
            summary: "Support for SIB31 parameter processing enabling NB-IoT devices to communicate over satellite constellations.",
            bullets: [
                "Implemented SIB31 modification handling satellite ephemeris and orbital assistance parameters.",
                "Handled timing advance and Doppler frequency shift calculations necessary for non-terrestrial links.",
                "Validated stack behavior for communication under high-latency satellite round-trip delays."
            ],
            spec: "3GPP TS 36.331 / TS 38.331 (Rel. 17)",
            lang: "C / Orbital Ephemeris Handling"
        },
        nbiot_log: {
            id: "ENGINEERING :: NB-IoT Logging Framework",
            badge: "Logging & Diagnostics",
            heading: "NB-IoT CU Logging Architecture",
            summary: "Designed and implemented a structured logging and diagnostic capture system for NB-IoT stack debugging.",
            bullets: [
                "Structured multi-level logging framework (Error, Warn, Info, Trace) with low CPU overhead.",
                "Implemented persistent capture to aid in stack debugging and post-mortem analysis.",
                "Created end-to-end diagnostic tracing for the NB-IoT Test Tool to track protocol message sequences."
            ],
            spec: "Diagnostics & POSIX Tracing",
            lang: "C / Python / Bash"
        }
    },

    experiencePillars: [
        {
            title: "5G NR CU Layer 3 & Resiliency Architecture",
            icon: "📶",
            points: [
                "<strong>High Availability Architecture:</strong> Designed architecture to support multiple CU-CP instances within a gNB-CU, ensuring system resiliency and fault tolerance.",
                "<strong>Protocol Decoupling:</strong> Separated NGAP and F1AP handling from RRC into dedicated aggregator modules (<strong>N2SCTP</strong> and <strong>F1SCTP</strong>) managing associations towards AMF and DUs.",
                "<strong>Core Mobility:</strong> Implemented RACH initial access, UE Attach, Xn Handover, NG Handover, DAPS, MOCN, and UE-ANR.",
                "<strong>Internal Modules:</strong> Developed across RRC (connection setup, reconfiguration), UECC (context lifecycle), and RRM (admission and resource management)."
            ]
        },
        {
            title: "NB-IoT & Satellite NTN Engineering",
            icon: "🛰️",
            points: [
                "<strong>Logging Framework:</strong> Designed and implemented the complete CU logging architecture for NB-IoT with structured log levels and module-wise trace points for efficient stack debugging.",
                "<strong>Test Diagnostics:</strong> Built an end-to-end logging system for the NB-IoT Test Tool, enabling message flow traceability.",
                "<strong>Satellite NTN:</strong> Implemented SIB31 modification enabling NB-IoT devices to connect to Non-Terrestrial Networks."
            ]
        },
        {
            title: "Automation & Test Tool Development",
            icon: "⚙️",
            points: [
                "<strong>L3 Test Tool:</strong> Developed Layer 3 Test Tool with multi-AMF support using socket programming in C to accelerate CU validation cycles.",
                "<strong>CI/CD Pipelines:</strong> Built Python and Bash scripts for Jenkins pipelines for log capture, configuration management, and regression testing.",
                "<strong>Development Workflow:</strong> Managed feature branches, merge requests, code reviews via Git/GitLab, and leveraged developer AI tools (Copilot, GitLab Duo) for code efficiency."
            ]
        }
    ],

    // Curated, market-relevant telecom and systems competencies
    skills: [
        {
            category: "telecom",
            title: "5G NR & Cellular Standards",
            icon: "📡",
            items: [
                { name: "5G NR (New Radio)", highlight: true },
                { name: "3GPP Release Specifications", highlight: true },
                { name: "CU-CP Layer 3 Architecture", highlight: true },
                { name: "gNodeB Architecture (CU / DU Split)", highlight: true },
                { name: "Open RAN Principles", highlight: true },
                { name: "NB-IoT (Narrowband IoT)", highlight: true },
                { name: "Satellite NTN (SIB31)", highlight: true }
            ]
        },
        {
            category: "cu",
            title: "CU Protocols & Resiliency",
            icon: "⚙️",
            items: [
                { name: "CU-CP High Availability (HA)", highlight: true },
                { name: "N2SCTP & F1SCTP Aggregators", highlight: true },
                { name: "RRC (Radio Resource Control)", highlight: true },
                { name: "UE Context Control (UECC)", highlight: true },
                { name: "Radio Resource Management (RRM)", highlight: true },
                { name: "Xn Handover (gNB-to-gNB)", highlight: true },
                { name: "NG Handover (Core-Assisted)", highlight: true },
                { name: "DAPS Handover", highlight: true },
                { name: "RACH & UE Attach", highlight: true },
                { name: "MOCN Architecture", highlight: true },
                { name: "SON / UE-ANR", highlight: true }
            ]
        },
        {
            category: "systems",
            title: "Systems Programming & Protocols",
            icon: "💻",
            items: [
                { name: "C (Telecom Stack Programming)", highlight: true },
                { name: "Python (Automation & Tools)", highlight: true },
                { name: "Bash Shell Scripting", highlight: true },
                { name: "Socket Programming (SCTP / Multi-AMF)", highlight: true },
                { name: "ASN.1 Protocol Specifications", highlight: true },
                { name: "Linux Multithreading & POSIX IPC", highlight: true }
            ]
        },
        {
            category: "devops",
            title: "DevOps, Quality & Tooling",
            icon: "🛠️",
            items: [
                { name: "Jenkins CI/CD Automation", highlight: true },
                { name: "Wireshark & 5G Log Tracing", highlight: true },
                { name: "Git / GitLab Workflows", highlight: true },
                { name: "Docker Containerization", highlight: false },
                { name: "Developer AI Tools (Copilot, GitLab Duo)", highlight: true }
            ]
        }
    ],

    // Separate verified credentials (uncoupled from awards)
    credentials: [
        {
            title: "LinkedIn Skill Assessment: C",
            issuer: "LinkedIn",
            badge: "Verified Skill Badge",
            description: "Passed LinkedIn's standardized C programming skill assessment."
        }
    ]
};
