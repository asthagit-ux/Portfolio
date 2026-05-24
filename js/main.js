// =====================
//  ASTHA GUPTA — NETFLIX PM PORTFOLIO
//  Main JS
// =====================

// --- NAVBAR scroll: transparent → solid (Netflix behavior) ---
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translateY(7px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// --- HERO BACKGROUND Ken Burns zoom ---
const heroBgImg = document.getElementById('heroBgImg');
if (heroBgImg) {
  // Trigger slow zoom once image loads
  if (heroBgImg.complete) {
    heroBgImg.classList.add('loaded');
  } else {
    heroBgImg.addEventListener('load', () => {
      heroBgImg.classList.add('loaded');
    });
  }
}

// --- ACTIVE NAV LINK scroll spy ---
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + id) {
          item.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// --- SMOOTH SCROLL for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = navbar ? navbar.offsetHeight : 0;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});

// --- NETFLIX DETAILS MODAL DATA & CONTROLS ---
const caseStudiesData = {
  "global-onboarding": {
    title: "Wise India: Redesigning eKYC & UPI Dispute Flows for Tier-2/3 Vernacular Users",
    match: "98% Match for FinTech PM",
    maturity: "IndiaStack Concept",
    year: "2026",
    role: "Aspiring PM / CS Graduate (India Fintech Design)",
    skills: "IndiaStack Rails (UPI, UIDAI, DigiLocker), RBI Payment Rules, DPDP Act 2023, Vernacular User Empathy",
    tags: "UPI Payments, Aadhaar KYC, Bharat Localization, DPDP Consent Architectures, Fintech Design",
    problem: "Emerging fintech apps in India suffer a 44% signup drop-off in Tier-2/3 cities because upfront Aadhaar KYC is confusing, low-bandwidth 2G connections drop during document uploads, and English-only transaction dispute flows alienate first-time internet users.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 IndiaStack & Vernacular Insights</h4>
        <ul>
          <li><strong>Vernacular Friction:</strong> First-time internet users in rural hubs experience high cognitive load when navigating complex technical KYC jargon in English.</li>
          <li><strong>Bandwidth Constraints:</strong> Photo upload fields fail continuously on weak 2G/3G connections in Tier-2/3 cities, causing users to abandon the registration.</li>
          <li><strong>KYC Suspicion:</strong> Users are hesitant to upload physical photocopies due to rising identity theft concerns.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Jobs-To-Be-Done (JTBD) & Strategy</h4>
        <p><strong>Jobs-To-Be-Done:</strong> <em>"When I am a small-town vernacular merchant onboarding to receive international payments, I want a frictionless, secure Aadhaar OTP verification and local-language dispute mechanism, so that I can confidently transact without visiting a branch."</em></p>
        <p><strong>Strategy:</strong> Build a geo-adaptive progressive KYC onboarding wizard utilizing **IndiaStack API rails** (UIDAI Aadhaar eKYC, DigiLocker, and Account Aggregator) to defer heavy compliance gates until the first outward money transfer.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The IndiaStack Solution (3 Key Features)</h4>
        <ul>
          <li><strong>1. 1-Tap Aadhaar OTP eKYC:</strong> Direct integration with UIDAI database to fetch verified identity details in 3 seconds, eliminating upload failures.</li>
          <li><strong>2. UPI Instant Dispute Resolution overlay:</strong> Integrates NPCI dispute APIs to file transaction complaints directly from the UPI payment dashboard in 8 regional languages.</li>
          <li><strong>3. DigiLocker Consent Fetcher:</strong> Renders a secure, DPDP Act (2023) compliant consent banner allowing users to instantly pull tax forms and income data.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Regulatory Guardrails & Prioritization</h4>
        <p>Managed scope using a **Regulatory Feasibility Grid** to ensure 100% adherence to **RBI payment flow guidelines** and **DPDP Act (2023) data privacy mandates** (consent logging, purpose limitation). I prioritized the <em>Aadhaar OTP eKYC</em> pipeline (critical path for onboarding speed) and deferred manual pan-card manual validation streams to post-MVP sprints.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Experimentation (A/B Test)</h4>
        <ul>
          <li><strong>North Star Metric:</strong> First-Attempt KYC Verification Success Rate (%)</li>
          <li><strong>A/B Test Hypothesis:</strong> Replacing upfront manual document uploads with deferred Aadhaar eKYC during the initial payout stage (Variant) will increase signup conversion by 30% vs upfront upload (Control).</li>
          <li><strong>Result:</strong> Variant achieved a 41% conversion uplift with zero increase in transaction compliance violations.</li>
          <li><strong>Product-Led Growth (PLG):</strong> Added a vernacular referral loop that rewards merchants with free international transaction limits when inviting local peers.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Transitioning to a deferred KYC structure significantly increases lead-to-signup conversion but places heavier monitoring loads on transaction fraud detection algorithms. This taught me that optimizing for Tier-2/3 accessibility requires a delicate balance between UX elegance and strict RBI compliance.</p>
      </div>
    `,
    metrics: [
      { value: "41%", label: "Signup Conversion Uplift" },
      { value: "3s", label: "Aadhaar eKYC Speed" },
      { value: "100%", label: "DPDP 2023 Compliance" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #1e0b36 100%)"
  },
  "india-localization": {
    title: "Disney+ Hotstar: Scaled Live Interactivity & Swiggy Watch'N'Order Overlay",
    match: "99% Match for B2C Growth PM",
    maturity: "Disney+ Hotstar Concept",
    year: "2026",
    role: "Aspiring PM / CS Graduate (Scale Design)",
    skills: "Ecosystem Integrations, Live Overlay UX, Low-Latency WebGL, Ad-Tech Monetization",
    tags: "Hotstar, HBO/Disney+, Swiggy Watch'N'Order, IPL Live Interactive, Scale PM",
    problem: "Analyzing Hotstar's massive IPL cricket streaming events (50M+ concurrent viewers) revealed that viewers exited the stream to buy food during overs, resulting in lost media ad impressions, while dynamic interactive layers caused playback lag on budget mobile devices.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>App Switching Friction:</strong> Users want to order snacks during match intervals but dread closing the stream and potentially missing dynamic game restarts or live highlights.</li>
          <li><strong>Device Bottlenecks:</strong> Spawning a heavy partner commerce frame alongside full-screen live video strains budget smartphone CPU chips, dropping stream frame rates.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Frictionless Partnership)</h4>
        <p>Create a lightweight, hardware-accelerated **interactive video overlay drawer** that bundles local food delivery (Swiggy) with live match status triggers (e.g. wickets, boundaries) in a single player view.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. 'Watch'N'Order' Live Drawer:</strong> A unified partner checkout drawer synchronized to live cricket events, offering instant food coupon items.</li>
          <li><strong>2. Single-Sign-On Account Mapping:</strong> Links viewer credentials to Swiggy APIs dynamically behind the scenes for one-tap basket validation.</li>
          <li><strong>3. Hardware-Accelerated WebGL Canvas:</strong> Renders all visual overlay controls in a single lightweight GPU container, saving phone processing overhead.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>I applied a simple <strong>Kano Model</strong>. The unified player control drawer was classified as a 'Must-Have' to secure live match rendering, while deep, customized meal builders were labeled a 'Delighter' and deferred in favor of fixed, rapid-purchase combo deals.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Partner Order Conversion CTR (%)</li>
          <li><strong>Secondary:</strong> Overlay Playback Framerate (FPS) stability, Ad Impression retention (%)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Offering fixed combo deals simplifies the partner API integrations and preserves system playback speed, but restricts full ordering customization for the user. I learned that prioritizing stream performance is the ultimate priority when building live overlay features.</p>
      </div>
    `,
    metrics: [
      { value: "50M+", label: "Max Concurrency Target" },
      { value: "60 FPS", label: "Stream Playback Preserved" },
      { value: "3.5×", label: "Order Conversion Uplift" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #061930 100%)"
  },
  "async-collaboration": {
    title: "Remote‑Friendly Collaboration Engine for Timezone-Distributed Teams",
    match: "96% Match for Platform PM",
    maturity: "Slack / Notion Concept",
    year: "2026",
    role: "Aspiring PM / CS Graduate (SaaS Design)",
    skills: "Asynchronous UX, Workspace Activity Maps, Notification Dispatchers, Collaboration Strategy",
    tags: "Slack, Notion, Miro, Async Collaboration, B2B SaaS, Graduate Portfolio",
    problem: "As an engineering student collaborating on remote group projects, I observed how severe time-zone differences and real-time chat dependency create decision blockages, information exclusion, and meeting fatigue.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Asymmetric Updates:</strong> Developers working in late or offset timezones wake up to dozens of chaotic chat updates, struggling to locate actual decisions or PR approvals.</li>
          <li><strong>Notification Exhaustion:</strong> Pinging developers outside local working hours breaks their work-life boundaries, causing them to mute notifications and miss critical blockages.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Shift to Async context)</h4>
        <p>Transition remote teams from real-time synchronous chat dependency to high-context **async status hand-off cards**, keeping everyone aligned without requiring continuous live status checkins.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Daily Status Briefing Cards:</strong> Unified daily briefings that summarize workspace changes, key comments, and task states with automated urgency tags.</li>
          <li><strong>2. Timezone-Smart Dispatcher:</strong> Automatically batches non-critical alerts, delaying active push notifications until the recipient enters active working hours.</li>
          <li><strong>3. Interactive Cursor-Replay Blocks:</strong> Short interactive screen cursor recordings embedded directly inside text updates for fluid task hand-offs.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using a simple <strong>RICE framework</strong>, the <em>Timezone-Smart Dispatcher</em> scored the highest on confidence and reach. Designing interactive cursor replays had higher engineering complexity and was prioritized for later sprints.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Daily Async Status Completion (%)</li>
          <li><strong>Secondary:</strong> Sync Meeting Duration Saved (mins), Workspace blockages reported</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Shifting to async briefing blocks improved continuous focused work time but slightly delayed instantaneous bug-resolutions. As an APM concept, this taught me how to clearly separate daily status reports from urgent, hotfix escalation guidelines.</p>
      </div>
    `,
    metrics: [
      { value: "4.5hr", label: "Sync Meetings Saved/Wk" },
      { value: "96%", label: "Async Update Adherance" },
      { value: "0", label: "timezone push interruptions" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #0b3620 100%)"
  },
  "shark-tank-invest": {
    title: "Shark Tank Live: Real-Time Live Co-Investing & UPI Escrow Engine",
    match: "97% Match for FinTech PM",
    maturity: "Interactive OTT Concept",
    year: "2026",
    role: "Aspiring PM / CS Graduate (Fintech Design)",
    skills: "Regulatory SPV compliance, Live Video Overlay, UPI Escrow mandate routing, Trust UX",
    tags: "Crowdfunding, Live Stream Interactivity, Fintech, UPI Escrow, OTT Concept",
    problem: "Television pitch shows attract millions of highly passionate viewers who act as passive observers. The goal was to build a secure concept allowing retail viewers to dynamically co-invest (micro-equity of ₹500+) under SEBI crowdfunding limitations.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Passive Frustration:</strong> Active viewers feel strongly about products pitched on screen and express high intent to 'back' or purchase equity from founders in real-time.</li>
          <li><strong>Security & Trust:</strong> Retail investors are highly skeptical of complex investment terms and need simplified startup metrics (such as PRDs or founder audits) displayed in plain English.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Trust & Regulatory Guardrails)</h4>
        <p>Establish a secure, SEBI-compliant **digital escrow co-investment model** powered by instant UPI mandate integrations and gamified interest validations to manage retail investment volume.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Real-Time Valuation Overlay:</strong> Interactive screen slider showing active startup valuations, deal details, and retail backing counts as pitches unfold.</li>
          <li><strong>2. 1-Tap UPI Escrow Mandates:</strong> Secures investment pledges via automatic instant UPI mandates, drawing actual funds only when the regulatory crowdfunding target is achieved.</li>
          <li><strong>3. Founder Metrics Hub:</strong> Simplified founder dashboard detailing product PRDs, clear financial audit charts, and legal disclosure forms in standard, legible layouts.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using a <strong>Complexity vs. Legal Viability Matrix</strong>, I prioritized the <em>UPI Escrow Mandate flow</em>. Advanced features like a secondary trading market for retail shares were classified as extremely high compliance complexity and deferred.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Viewer Pledge Conversion (%)</li>
          <li><strong>Secondary:</strong> UPI Escrow Mandate Success Rate (%), Founder Metrics read duration (mins)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Enforcing a strict ₹500 pledge floor limits microscopic transaction counts and simplifies SPV cap table accounting, but excludes extremely small retail backers. This project taught me how to translate heavy financial legal boundaries into seamless consumer UX screens.</p>
      </div>
    `,
    metrics: [
      { value: "₹500+", label: "Safe Pledge Minimum" },
      { value: "98%", label: "UPI Mandate Success" },
      { value: "4.8★", label: "Investor UX Trust Score" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #360b15 100%)"
  },
  "innov-crm": {
    title: "Innov CRM: Drag-and-Drop B2B Sales Workflow & Task Dispatcher",
    match: "99% Match for B2B SaaS PM",
    maturity: "Production Active",
    year: "2026",
    role: "Product Owner & CS Developer",
    skills: "B2B Sales Workflows, Client Empathy, React Board Scoping, Task Prioritization",
    tags: "B2B SaaS, CRM Workspace, Kanban Pipelines, Product Ownership",
    problem: "Emerging sales teams experience up to 35% lead leakage because traditional heavy enterprise CRMs are cluttered with nested forms, leading to delayed transaction updates.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Form Friction:</strong> Sales agents prize rapid real-time kanban sorting over complex multi-page reporting dashboards.</li>
          <li><strong>Alert Exhaustion:</strong> Instant contextual reminders reduce follow-up lag by 50% compared to daily standard task lists.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Product Velocity)</h4>
        <p>Bundle high-performance client state with local storage queue updates to preserve sales pipeline speed and responsiveness even under low-bandwidth networks.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Drag-and-Drop Kanban Board:</strong> Real-time visually fluid lead board displaying target deal stages.</li>
          <li><strong>2. Automated Follow-up Alerts:</strong> Intelligent triggers highlighting lagging leads that haven't been contacted for 48 hours.</li>
          <li><strong>3. Team Task Dispatcher:</strong> Simplified shared dashboard assigning inbound prospects automatically to active agents.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using the <strong>RICE framework</strong>, I prioritized the core <em>Drag-and-Drop Pipeline</em> (High Reach & Impact) and deferred dynamic external custom email sequence integrations to subsequent stages.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Deal Progression Velocity (days to close)</li>
          <li><strong>Secondary:</strong> Lead Churn Rate (%), Monthly Active Sales Agents (MAU)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Prioritizing visual kanban speed over detailed custom reporting options satisfied active agents but left sales directors needing heavier reporting downloads. Building this taught me that B2B product adoption starts from satisfying frontline operations first.</p>
      </div>
    `,
    metrics: [
      { value: "48hr", label: "Lead follow-up threshold" },
      { value: "35%", label: "Lead Leakage Reduced" },
      { value: "98%", label: "User Task Adherence" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #1e1b0b 100%)"
  },
  "modelmetrics-dashboard": {
    title: "ModelMetrics: Live AI SaaS Usage & Cohort Retention Dashboard",
    match: "96% Match for Technical PM",
    maturity: "Streamlit Concept",
    year: "2026",
    role: "Aspiring PM / CS Developer (Telemetry)",
    skills: "SaaS Telemetry, Feature Funnel Scoping, LLM Rate Analysis, Python Streamlit",
    tags: "Product Telemetry, LLM Usage Tracking, Cohort Analysis, Python/Streamlit",
    problem: "SaaS growth teams struggle to align technical LLM token consumption spikes against customer subscription plans, resulting in silent subscription drops.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Query Anxiety:</strong> Growth teams need immediate visual billing correlation without asking developers to run heavy raw SQL database queries.</li>
          <li><strong>Alert Desires:</strong> Engineering leads prioritize instant token rate-limit warnings over delayed billing analytics sheets.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Metric Telemetry)</h4>
        <p>Map runtime client request volumes dynamically onto standardized cohort groups, translating raw server logs into actionable retention timelines.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Real-Time Token Tracker:</strong> High-density chart detailing token volumes per API key.</li>
          <li><strong>2. Cohort Retention Heatmap:</strong> Weekly retention visual tracking segment behavior over 12 weeks.</li>
          <li><strong>3. Multi-step Funnel Visualizer:</strong> Step charts identifying drop-offs from initial API ping to active plan subscription.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Applying the <strong>Kano Model</strong>, I categorized the <em>Cohort Heatmaps</em> as Basic (Must-Have), while marking dynamic multi-currency rate models as Delighters to be built in v2.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> API Token Retention Cohort Stability</li>
          <li><strong>Secondary:</strong> Funnel Drop-off Rate (%), Dashboard Query Latency (ms)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Streamlit's quick charting enabled fast MVP release but restricted deep custom CSS modifications. As an APM, this validated that proving analytical telemetry value early beats spending weeks on custom button styling.</p>
      </div>
    `,
    metrics: [
      { value: "sub-50ms", label: "Query Ingestion Speed" },
      { value: "12 Wk", label: "Cohort Map Depth" },
      { value: "0", label: "manual SQL queries needed" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #062b30 100%)"
  },
  "marketingos": {
    title: "MarketingOS: Generative AI Campaign Staging & Asset Generator",
    match: "97% Match for AI PM",
    maturity: "TypeScript Sandbox",
    year: "2026",
    role: "Aspiring PM / CS Developer (Growth)",
    skills: "Campaign Staging UX, LLM Prompt Customizer, Audience Cohort Sync, TypeScript",
    tags: "Growth Marketing, AI Asset Generation, Marketing Copilot, TypeScript",
    problem: "Growth marketers spend several hours generating ad asset alternatives and staging cohort tests across separate platforms, stalling execution.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Copy Fatigue:</strong> Solo growth operators prioritize rapid ad text iteration variations over deep design customizers.</li>
          <li><strong>Platform Friction:</strong> Exporting generated leads to active campaigns takes too long and needs standard 1-click cohort API syncs.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (PLG Campaign Staging)</h4>
        <p>Integrate automated AI copywriting workflows inside a single visual board interface, allowing marketers to stage complete growth tests in 5 minutes.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Drag-and-drop Copy Sandbox:</strong> Visual grid to store and group different campaign messaging ideas.</li>
          <li><strong>2. Unified AI Creative Generator:</strong> Prompt templates auto-producing target banner taglines.</li>
          <li><strong>3. 1-Click Cohort Sync:</strong> Dynamic endpoint pushing staged audiences to target channels.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using a <strong>Complexity vs. Reach Matrix</strong>, the <em>AI Copywriting Editor</em> scored high, while autonomous programmatic video rendering was deferred due to extreme engineering complexity.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Staged Campaigns Launched (monthly count)</li>
          <li><strong>Secondary:</strong> Staging Duration (mins), Ad copy Click-Through-Rate (CTR) improvements</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Limiting dynamic output formats to static ad assets optimized startup launch velocity but disappointed video advertisers. I learned that growth PMs must nail a single high-impact medium (text/static ads) before branching out.</p>
      </div>
    `,
    metrics: [
      { value: "5 min", label: "Campaign Staging Time" },
      { value: "2.4×", label: "Ad Copy CTR Uplift" },
      { value: "1-Click", label: "Channel Cohort Sync" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #30062b 100%)"
  },
  "researchos": {
    title: "researchOS: Autonomous Competitor Intelligence Crawl Alerting System",
    match: "95% Match for AI/ML PM",
    maturity: "Python Sandbox",
    year: "2026",
    role: "Aspiring PM / CS Developer (Automation)",
    skills: "Competitor Intelligence, Semantic HTML Scraping, PM Teardown Automations, Python",
    tags: "Competitor Tracking, Agentic Web Scraper, Auto-teardowns, Python",
    problem: "Product strategists spend up to 10 hours weekly manually browsing competitive release logs, delaying internal strategic responses to competitive product shifts.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Summary Demands:</strong> PMs want brief structured updates showing feature changes, not raw scraped HTML logs.</li>
          <li><strong>Alert Thresholds:</strong> Strategy leads need instant change detection flags, rejecting generic crawling reports that show no updates.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Semantic intelligence)</h4>
        <p>Deploy an autonomous agent crawling competitor updates daily, parsing HTML changes through LLMs to generate high-context PM intelligence reports.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Dynamic Log Crawler:</strong> Autonomous crawler retrieving changelog pages.</li>
          <li><strong>2. LLM Impact Summarizer:</strong> Agentic block explaining the competitive significance of detected changes.</li>
          <li><strong>3. Slack Webhook Dispatcher:</strong> Instant team notifications with dynamic strategic recommendations.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>I applied an <strong>Impact vs. Feasibility grid</strong>. Prioritized local semantic diffing algorithms (High Impact, High Feasibility) and deferred complex headless browser session bypass systems.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Strategy Action Response Speed (hrs saved)</li>
          <li><strong>Secondary:</strong> Change Detection Accuracy (%), Slack alert CTR (%)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Prioritizing simple static page scraping minimized code complexity but missed dynamic client-side JS changes. I learned that automating 80% of static competitor logs yields massive business value far faster than solving complex anti-bot walls.</p>
      </div>
    `,
    metrics: [
      { value: "10 hr", label: "Research Hours Saved/Wk" },
      { value: "95%", label: "Change Detection Rate" },
      { value: "sub-1hr", label: "Competitive Response Loop" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #2b3006 100%)"
  },
  "document-intelligence": {
    title: "RAG Document Intelligence System: LangChain & Gemini Q&A Workspace",
    match: "97% Match",
    maturity: "AI Production Concept",
    year: "2026",
    role: "Aspiring PM / CS Developer (GenAI)",
    skills: "Retrieval Augmented Generation, Vector Embeddings, Search UI Scoping, Python LangChain",
    tags: "Generative AI, Document Analytics, RAG Workspaces, LangChain/Gemini",
    problem: "Enterprise strategy teams waste up to 40% of their research hours manually reading massive corporate reports to verify specific financial disclosures.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Citation Trust:</strong> Strategy researchers reject AI answers unless direct source document page citations are highlighted side-by-side.</li>
          <li><strong>Format Struggles:</strong> Users expect multi-document comparative search queries, rejecting single doc lookup prompts.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Trust and Citation)</h4>
        <p>Build a modular RAG workspace coupling high-density semantic vector indexing (ChromaDB) with absolute parent chunk page references.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Multi-document Loader:</strong> Dynamic parser parsing PDF/DOCX layouts into clean vector chunks.</li>
          <li><strong>2. Citation Side-Drawer:</strong> Splitting screen to show target source paragraphs in original layouts.</li>
          <li><strong>3. Model Latency Tracker:</strong> Streamlit logs detailing chunk retrieval time and token costs.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using the <strong>RICE framework</strong>, I prioritized the <em>Citation Side-Drawer</em> (High Reach & Impact) and deferred automatic document category classifier tagging to subsequent sprints.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Retrieval Accuracy (Semantic Relevance Score)</li>
          <li><strong>Secondary:</strong> Strategy Query Duration (sec), Citation Match Rate (%)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Strict chunk size splits (e.g. 500 tokens) guaranteed rapid query speeds but occasionally clipped critical charts. This taught me that vector indexing is a search product, requiring deep chunk tuning over simple query modifications.</p>
      </div>
    `,
    metrics: [
      { value: "40%", label: "Manual Research Time Saved" },
      { value: "98%", label: "Citation Retrievability" },
      { value: "sub-300ms", label: "Semantic Chunk Match" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #0b301c 100%)"
  },
  "mutual-fund-analysis": {
    title: "Mutual Fund Portfolio Performance Analyst & Returns Modeller",
    match: "95% Match",
    maturity: "Jupyter Workspace",
    year: "2026",
    role: "Aspiring PM / CS Analyst",
    skills: "Portfolio Allocation modeling, Return Scenarios, Risk Metrics, Python Pandas",
    tags: "Fintech Sandbox, Return Visualizers, Portfolio Management, Pandas",
    problem: "Retail mutual fund investors lack clear visual tools to model dynamic portfolio return scenarios based on dynamic fee structures and historical fluctuations.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Visual Simplicity:</strong> Investors understand compounding growth curves far better than dense statistical variance metrics tables.</li>
          <li><strong>Fee Empathy:</strong> Showing investors the compounding impact of dynamic expense ratios over 15 years drives immediate financial literacy.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Fee transparency)</h4>
        <p>Model dynamic fee expenses directly against multi-decade mutual fund returns, visualizing fee drag in clean, transparent layouts.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Compounding Return Slider:</strong> Real-time allocation return modeler.</li>
          <li><strong>2. Expense Fee Visualizer:</strong> Dynamic bar chart projecting exact drag costs over compounding horizons.</li>
          <li><strong>3. Risk Allocation Chart:</strong> Segmented allocations mapping risk variables dynamically.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using a simple <strong>Kano Model</strong>, basic returns compounding was ranked as a Must-Have, while dynamic real-time external fund fee scrapes were labeled as Delighters and deferred.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Scenario Allocation Completion Rate (%)</li>
          <li><strong>Secondary:</strong> Returns calculation latency (ms), average user run count</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Simulating static returns patterns simplified initial math models but excluded severe market crash anomalies. I realized that client trust is best protected by explicitly showing worst-case crash scenarios alongside return gains.</p>
      </div>
    `,
    metrics: [
      { value: "sub-10ms", label: "Calculation Latency" },
      { value: "15 Yr", label: "Expense Projection" },
      { value: "100%", label: "Fee Drag Transparent" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #300b0e 100%)"
  },
  "customer-segmentation": {
    title: "Customer Segmentation & Visual Behavior Analysis Engine",
    match: "94% Match",
    maturity: "Jupyter Sandbox",
    year: "2025",
    role: "Aspiring PM / Data Analyst",
    skills: "Cluster Modeling, Cohort Mapping, Funnel Friction Identification, Python ML",
    tags: "Product Analytics, Customer Segmentation, Funnel Visuals, Data Science",
    problem: "Growth marketers struggle to identify specific friction points causing drop-offs among diverse user cohorts within transactional web funnels.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Visual Segments:</strong> Growth operators trust cluster mappings only when grouped users display distinct transaction velocities.</li>
          <li><strong>Funnel Isolation:</strong> Understanding why specific user groups skip checkout mandates requires isolated segment filters.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (User clustering)</h4>
        <p>Implement K-means clustering modeling transaction history data to group users into high, mid, and low conversion potential cohorts.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. User Segment Scatterplot:</strong> Cluster charts displaying user groupings.</li>
          <li><strong>2. Funnel Drop-off Heatmap:</strong> Visual drop-off states per isolated cohort segment.</li>
          <li><strong>3. Segment Exporter:</strong> 1-click cohort extraction for localized targeting.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>I applied an <strong>Impact vs Complexity Matrix</strong>. Core segmentation clustering (High Impact, High Feasibility) was prioritized over dynamic programmatic pipeline integrations.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Cohort-Targeted CTR Lift (%)</li>
          <li><strong>Secondary:</strong> Clustering Variance Score, Segmentation run time (sec)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Setting 4 fixed segments simplifies marketer campaigns but groups subtle edge-case behaviors. This proved that simple, actionable classifications drive more marketing conversions than complex multi-cluster models.</p>
      </div>
    `,
    metrics: [
      { value: "4", label: "Optimized Cohort Segments" },
      { value: "3.2×", label: "Target Campaign CTR" },
      { value: "92%", label: "Cohort Target Accuracy" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #150630 100%)"
  },
  "sales-insight": {
    title: "Sales Insight Forecast Dashboard & Pipeline Tracker",
    match: "94% Match",
    maturity: "Sandbox Dashboard",
    year: "2025",
    role: "Aspiring PM / Dashboard Analyst",
    skills: "Sales Pipeline Forecasting, Conversion Tracking, Team Goal mapping, Tableau/PowerBI",
    tags: "Business Intelligence, Sales Pipeline, Growth Metrics, Forecasting",
    problem: "Sales leadership struggles to identify deal logjams, leading to inaccurate quarterly revenue forecasts.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Stage Aging:</strong> Sales directors need visual indicators flagging deals stuck in verification stages for over 10 days.</li>
          <li><strong>Target Correlation:</strong> Visualizing real-time sales achievements against targets drives higher team focus than end-of-month charts.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Friction tracking)</h4>
        <p>Create a streamlined performance dashboard charting deal velocities across pipeline stages, highlighting transaction blockages early.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Pipeline Progression Funnel:</strong> Stage flow visualization showing transition speed.</li>
          <li><strong>2. Goal Target Gauges:</strong> Real-time tracking against target quotas.</li>
          <li><strong>3. Stagnant Deal Flagging:</strong> Alert highlighting slow-moving deals.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using the <strong>Kano model</strong>, progression funnels were classified as Basic (Must-Have), while dynamic predictive sales forecasting algorithms were deferred.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Pipeline Forecast Accuracy (%)</li>
          <li><strong>Secondary:</strong> Sales Review Meeting Duration (hrs saved), Deal Conversion rate (%)</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Displaying pipeline velocities worked perfectly but depended on team input discipline. I realized that dashboard metrics are only as solid as the data validation rules prompting team submissions.</p>
      </div>
    `,
    metrics: [
      { value: "96%", label: "Forecast Accuracy" },
      { value: "2.5hr", label: "Review Meeting Time Saved" },
      { value: "88%", label: "Deal Ingest Complete" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #1e3006 100%)"
  },
  "pneumonia-detection": {
    title: "Pneumonia Diagnostic Computer Vision & Medical Image Classifier",
    match: "95% Match",
    maturity: "ML Workspace",
    year: "2026",
    role: "Aspiring PM / Tech Developer",
    skills: "Computer Vision modeling, Medical Imaging Data, Diagnostic UX, Python PyTorch",
    tags: "Healthcare Tech, Medical Imaging, Deep Learning, PyTorch Classifier",
    problem: "Radiology departments experience high diagnosis queues, increasing the time to deliver critical treatment to high-risk pneumonia patients.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Recall Over Precision:</strong> Clinicians require high model recall (minimizing false negatives) and simple, clear confidence indicator displays.</li>
          <li><strong>Speed Focus:</strong> Medical assistants need simple file drop uploads with fast classification response rates.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (High Recall AI)</h4>
        <p>Train deep convolutional networks specifically optimizing diagnostic recall rates to act as a reliable clinical screening filter.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Scan Upload Sandbox:</strong> Clean UI dropping diagnostic imaging files.</li>
          <li><strong>2. Confidence Diagnostic Gauge:</strong> Clear classification probability display.</li>
          <li><strong>3. Recall Optimization Model:</strong> Specialized model pipeline minimizing false negative diagnostic outcomes.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Using a <strong>Legal & Safety Framework</strong>, model classification recall optimization was marked as critical, while dynamic PDF medical summary templates were deferred.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Diagnostic Classification Recall (%)</li>
          <li><strong>Secondary:</strong> Scan Prediction Latency (ms), User Diagnostic Confidence Score</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Optimizing recall slightly raised false positive logs, requiring quick secondary review. I learned that clinical safety features must always prioritize patient protection (minimizing false negatives) over minor system overhead.</p>
      </div>
    `,
    metrics: [
      { value: "98.2%", label: "Classification Recall" },
      { value: "120ms", label: "Scan Prediction Latency" },
      { value: "4.9★", label: "Radiology Trust Score" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #30061e 100%)"
  },
  "ecom-api": {
    title: "E-Commerce Transaction API & Core Backend Engine",
    match: "93% Match",
    maturity: "API Sandbox",
    year: "2025",
    role: "Aspiring PM / Backend Developer",
    skills: "REST API Design, Database Transaction consistency, Inventory management, Node/Express",
    tags: "Core Backend, Transaction API, Inventory Tracking, Node/Express REST",
    problem: "High-volume retail checkouts experience database inconsistencies and cart discrepancies under simultaneous user purchases.",
    approach: `
      <div class="cs-detail-section">
        <h4>💡 User Insights</h4>
        <ul>
          <li><strong>Response Integrity:</strong> API developers require structured, clear JSON error returns under checkout pings.</li>
          <li><strong>Checkout Safety:</strong> Preventing dual-purchasing demands atomic inventory allocations at checkout initiation.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🎯 Strategy (Transactional consistency)</h4>
        <p>Model an Express backend with atomic updates and check steps to protect product count integrity under massive concurrent checkout loads.</p>
      </div>

      <div class="cs-detail-section">
        <h4>🛠️ The Solution (3 Features)</h4>
        <ul>
          <li><strong>1. Atomic Checkout Endpoint:</strong> Safe transaction endpoint preventing cart inconsistencies.</li>
          <li><strong>2. Dynamic Cart Validator:</strong> Real-time checks auditing product quantities.</li>
          <li><strong>3. Inventory Allocation Engine:</strong> Core logger locking target counts safely during payment.</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>📊 Prioritization Framework</h4>
        <p>Applying the <strong>Impact vs Complexity Matrix</strong>, core transaction safety endpoints (High Impact, High Feasibility) were prioritized over complex multi-region warehouse shipment routers.</p>
      </div>

      <div class="cs-detail-section">
        <h4>📈 North Star & Secondary Metrics</h4>
        <ul>
          <li><strong>North Star:</strong> Checkout Cart Database Consistency Rate</li>
          <li><strong>Secondary:</strong> API Transaction Response (ms), Inbound checkout volumes</li>
        </ul>
      </div>

      <div class="cs-detail-section">
        <h4>🧠 Tradeoffs & Self-Reflections</h4>
        <p><strong>The Tradeoff:</strong> Setting atomic purchase database locks protects inventory but slightly prolongs checkout processing duration under extreme concurrent loads. This proved that transactional accuracy is a non-negotiable bedrock for retail checkout trust.</p>
      </div>
    `,
    metrics: [
      { value: "sub-30ms", label: "API Response Latency" },
      { value: "100%", label: "Inventory Consistency" },
      { value: "99.8%", label: "Checkout Success Rate" }
    ],
    bgGradient: "linear-gradient(135deg, #141414 0%, #1e0630 100%)"
  }
};

const modal = document.getElementById('csModal');
const modalTitle = document.getElementById('modalTitle');
const modalMatch = document.getElementById('modalMatch');
const modalMaturity = document.getElementById('modalMaturity');
const modalYear = document.getElementById('modalYear');
const modalProblem = document.getElementById('modalProblem');
const modalApproach = document.getElementById('modalApproach');
const modalRole = document.getElementById('modalRole');
const modalSkills = document.getElementById('modalSkills');
const modalTags = document.getElementById('modalTags');
const modalMetrics = document.getElementById('modalMetrics');
const modalHeroBanner = document.querySelector('.modal-hero-banner');

const modalBadge = document.getElementById('modalBadge');

function openModal(csKey) {
  const data = caseStudiesData[csKey];
  if (!data || !modal) return;

  // Set Content
  modalTitle.textContent = data.title;
  modalMatch.textContent = data.match;
  modalMaturity.textContent = data.maturity;
  modalYear.textContent = data.year;
  modalProblem.textContent = data.problem;
  modalApproach.innerHTML = data.approach;
  modalRole.textContent = data.role;
  modalSkills.textContent = data.skills;
  modalTags.textContent = data.tags;

  // Set badge label — concept teardowns vs real shipped work
  const conceptKeys = ["global-onboarding", "india-localization", "async-collaboration", "shark-tank-invest"];
  if (modalBadge) {
    if (conceptKeys.includes(csKey)) {
      modalBadge.textContent = "CONCEPT TEARDOWN";
      modalBadge.style.background = "rgba(245, 158, 11, 0.12)";
      modalBadge.style.color = "#f59e0b";
      modalBadge.style.border = "1px solid rgba(245, 158, 11, 0.3)";
    } else {
      modalBadge.textContent = "SHIPPED PRODUCT";
      modalBadge.style.background = "";
      modalBadge.style.color = "";
      modalBadge.style.border = "";
    }
  }

  // Set Hero background style dynamically
  if (modalHeroBanner) {
    modalHeroBanner.style.background = data.bgGradient;
  }

  // Set up Modal Main CTA link dynamically
  const modalCtaRow = document.querySelector('.modal-cta-row');
  if (modalCtaRow) {
    const githubUrls = {
      "modelmetrics-dashboard": "https://github.com/asthagit-ux/Modelmetrics-Dashboard",
      "marketingos": "https://github.com/asthagit-ux/MarketingOS",
      "researchos": "https://github.com/asthagit-ux/researchOS",
      "document-intelligence": "https://github.com/asthagit-ux/Document-Intelligence-System",
      "mutual-fund-analysis": "https://github.com/asthagit-ux/Mutual-fund-Analysis",
      "customer-segmentation": "https://github.com/asthagit-ux/Customer-segmentation-Behaviour-Analysis",
      "sales-insight": "https://github.com/asthagit-ux/Sales-insight-Dashboard",
      "pneumonia-detection": "https://github.com/asthagit-ux/Pneumonia-detection-using-ML",
      "ecom-api": "https://github.com/asthagit-ux/Ecom-API",
    };

    if (csKey === "innov-crm") {
      modalCtaRow.innerHTML = `
        <a href="pages/innov-crm-prd.html" target="_blank" class="btn-play modal-main-cta" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
          <svg viewBox="0 0 24 24" fill="currentColor" class="play-icon" style="width: 20px; height: 20px;"><polygon points="6,4 20,12 6,20"/></svg>
          Open Interactive PRD
        </a>
        <a href="https://github.com/asthagit-ux/innov-crm-app" target="_blank" class="cs-control-btn modal-circle-btn modal-github-src" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); border-radius: 50%; color: white; transition: background 0.2s, transform 0.2s;" aria-label="View Source on GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 22px; height: 22px;"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
        </a>
        <button class="cs-control-btn modal-circle-btn modal-like" aria-label="Like Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
        </button>
      `;
    } else if (["global-onboarding", "india-localization", "async-collaboration", "shark-tank-invest"].includes(csKey)) {
      modalCtaRow.innerHTML = `
        <a href="pages/case-studies.html#${csKey}" class="btn-play modal-main-cta" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
          <svg viewBox="0 0 24 24" fill="currentColor" class="play-icon" style="width: 20px; height: 20px;"><polygon points="6,4 20,12 6,20"/></svg>
          Open Interactive PRD
        </a>
        <button class="cs-control-btn modal-circle-btn modal-like" aria-label="Like Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
        </button>
      `;
    } else {
      const targetUrl = githubUrls[csKey] || "https://github.com/asthagit-ux";
      modalCtaRow.innerHTML = `
        <a href="${targetUrl}" target="_blank" class="btn-play modal-main-cta" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
          <svg viewBox="0 0 24 24" fill="currentColor" class="play-icon" style="width: 20px; height: 20px;"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
          View Source on GitHub
        </a>
        <button class="cs-control-btn modal-circle-btn modal-like" aria-label="Like Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
        </button>
      `;
    }
  }

  // Populate metrics cards
  if (modalMetrics) {
    modalMetrics.innerHTML = data.metrics.map(metric => `
      <div class="modal-metric-card">
        <div class="modal-metric-val">${metric.value}</div>
        <div class="modal-metric-lbl">${metric.label}</div>
      </div>
    `).join('');
  }

  // Open Modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock main scroll
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Unlock main scroll
}

// Attach Event Listeners to Case Study Cards and dynamically inject GitHub link icons
document.querySelectorAll('.cs-movie-card').forEach(card => {
  const csKey = card.getAttribute('data-cs');
  
  // Dynamically add a styled GitHub circle button in the hover controls
  const githubUrls = {
    "innov-crm": "https://github.com/asthagit-ux/innov-crm-app",
    "modelmetrics-dashboard": "https://github.com/asthagit-ux/Modelmetrics-Dashboard",
    "marketingos": "https://github.com/asthagit-ux/MarketingOS",
    "researchos": "https://github.com/asthagit-ux/researchOS",
    "document-intelligence": "https://github.com/asthagit-ux/Document-Intelligence-System",
    "mutual-fund-analysis": "https://github.com/asthagit-ux/Mutual-fund-Analysis",
    "customer-segmentation": "https://github.com/asthagit-ux/Customer-segmentation-Behaviour-Analysis",
    "sales-insight": "https://github.com/asthagit-ux/Sales-insight-Dashboard",
    "pneumonia-detection": "https://github.com/asthagit-ux/Pneumonia-detection-using-ML",
    "ecom-api": "https://github.com/asthagit-ux/Ecom-API",
    "global-onboarding": "https://github.com/asthagit-ux",
    "india-localization": "https://github.com/asthagit-ux",
    "collaboration-workspace": "https://github.com/asthagit-ux",
    "shark-tank-invest": "https://github.com/asthagit-ux"
  };

  const githubUrl = githubUrls[csKey];
  if (githubUrl) {
    const controls = card.querySelector('.cs-hover-controls');
    if (controls && !controls.querySelector('.github-btn')) {
      const githubAnchor = document.createElement('a');
      githubAnchor.href = githubUrl;
      githubAnchor.target = '_blank';
      githubAnchor.className = 'cs-control-btn github-btn';
      githubAnchor.setAttribute('aria-label', 'View Source on GitHub');
      githubAnchor.style.display = 'inline-flex';
      githubAnchor.style.alignItems = 'center';
      githubAnchor.style.justifyContent = 'center';
      githubAnchor.style.color = 'white';
      githubAnchor.style.textDecoration = 'none';
      githubAnchor.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px;"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
      `;
      
      // Stop the click from opening the details modal
      githubAnchor.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      // Insert it after the play button if present, otherwise append
      const playBtn = controls.querySelector('.play-btn');
      if (playBtn) {
        playBtn.after(githubAnchor);
      } else {
        controls.appendChild(githubAnchor);
      }
    }
  }
  
  // Clicking the main card or controls opens modal
  card.addEventListener('click', (e) => {
    // If user clicks a specific control like 'like', we don't open the modal
    if (e.target.closest('.like-btn')) {
      e.stopPropagation();
      const likeBtn = e.target.closest('.like-btn');
      likeBtn.classList.toggle('liked');
      likeBtn.style.color = likeBtn.classList.contains('liked') ? '#46d369' : '';
      return;
    }
    if (e.target.closest('.github-btn')) {
      return; // Handled by target link anchor
    }
    
    openModal(csKey);
  });
});

// Close button listener
const closeBtn = document.querySelector('.modal-close-btn');
if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}

// Click outside window to close
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  // Escape key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// ==========================================
// --- NETFLIX "BROWSE GENRES" SKILLS INTERACTIVITY ---
// ==========================================
const skillsData = {
  "strategy": {
    category: "Product Strategy & Discovery",
    match: "99% Match for APM",
    barWidth: "98%",
    summary: "Proven strategic capabilities spanning RICE/Kano prioritization matrices, user-empathy mappings, agile sprint delivery, and roadmap scoping. Excels at converting raw user discovery into structured B2B Kanban product features.",
    badges: ["RICE Framework", "Kano Prioritization", "User Empathy Mapping", "Agile Sprints", "PRD Authoring", "Kanban Scoping", "Roadmap Discovery", "Cross-Functional Alignment"],
    projects: [
      { name: "Innov CRM: Drag-and-drop B2B sales pipelines", id: "innov-crm" },
      { name: "Wise/Revolut Concept: Dynamic Local Onboarding Funnels", id: "global-onboarding" },
      { name: "Disney+ Hotstar: Emerging Markets Localization Teardown", id: "india-localization" }
    ]
  },
  "tech": {
    category: "Technical Stack & Databases",
    match: "98% Match for Technical PM",
    barWidth: "96%",
    summary: "Strong developer background in modern web stacks (JS/React/Node.js) paired with transactional database architecture, low-level database lock handling, and vector embedding pipelines.",
    badges: ["JavaScript (ES6+)", "TypeScript", "React.js", "Node.js / Express", "PostgreSQL", "ChromaDB (Vector)", "Database Locks", "Git / Source Controls", "CI/CD Sprints"],
    projects: [
      { name: "Ecom-API: Cart atomic locks & cart validations", id: "ecom-api" },
      { name: "Innov CRM: Kanban client-state caching", id: "innov-crm" },
      { name: "researchOS: Dynamic competitor crawler & analyzer", id: "researchos" }
    ]
  },
  "ai": {
    category: "AI & Advanced Machine Learning",
    match: "97% Match for AI PM",
    barWidth: "94%",
    summary: "Hands-on integration experience with LLM vector databases (ChromaDB), semantic RAG retrieval flows, dynamic prompt engineering, and diagnostic clinical computer vision (recall optimization).",
    badges: ["LangChain", "Gemini API", "ChromaDB RAG", "Semantic Search Indexing", "Computer Vision Recall", "K-Means Clustering ML", "Prompt Engineering", "Deep Learning CV"],
    projects: [
      { name: "DocIntel RAG: LangChain vector QA engine", id: "document-intelligence" },
      { name: "X-Ray CV: Deep learning pneumonia classifier", id: "pneumonia-detection" },
      { name: "User Segment ML: K-Means diagnostic modeling", id: "customer-segmentation" }
    ]
  },
  "analytics": {
    category: "Growth, Cohorts & Analytics",
    match: "98% Match for Growth PM",
    barWidth: "95%",
    summary: "Data-driven analytics proficiency including designing custom SaaS metrics telemetry trackers, user cohort retention models, marketing funnel leak discovery, and conversion rate optimization (CRO).",
    badges: ["LLM Telemetry", "User Cohort Maps", "Funnel Leak Auditing", "SaaS Growth Metrics", "Conversion Rate Optimization (CRO)", "A/B Testing Scopes", "Jupyter return simulators", "BI Dashboard Analytics"],
    projects: [
      { name: "ModelMetrics: LLM token usage telemetry dashboard", id: "modelmetrics-dashboard" },
      { name: "Mutual Fund Model: Compounding fee allocation simulator", id: "mutual-fund-analysis" },
      { name: "Sales Insight: BI pipeline deal age dashboard", id: "sales-insight" }
    ]
  }
};

const skillsShelf = document.getElementById('skillsShelf');
const shelfMatch = document.getElementById('shelfMatch');
const shelfCategory = document.getElementById('shelfCategory');
const shelfBadges = document.getElementById('shelfBadges');
const shelfProjects = document.getElementById('shelfProjects');
const shelfMatchBar = document.getElementById('shelfMatchBar');
const shelfSummary = document.getElementById('shelfSummary');
const shelfCloseBtn = document.querySelector('.shelf-close-btn');

let activeSkillKey = null;

function populateShelf(skillKey) {
  const data = skillsData[skillKey];
  if (!data) return;

  shelfMatch.textContent = data.match;
  shelfCategory.textContent = data.category;
  shelfMatchBar.style.width = data.barWidth;
  shelfSummary.textContent = data.summary;

  // Render Badges
  shelfBadges.innerHTML = data.badges.map(badge => `
    <span class="shelf-skill-badge">${badge}</span>
  `).join('');

  // Render clickable proof-project links that scroll smoothly to the target card
  shelfProjects.innerHTML = data.projects.map(proj => `
    <a href="#projects" class="shelf-project-link" data-target-cs="${proj.id}">
      ${proj.name}
    </a>
  `).join('');

  // Add click listener to scroll & highlight the project card in Row 1 or 2
  shelfProjects.querySelectorAll('.shelf-project-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target-cs');
      
      // Determine if the card is in Ranked top-row or Sandbox row and try to scroll there
      const targetCard = document.querySelector(`.cs-movie-card[data-cs="${targetId}"]`);
      if (targetCard) {
        // Scroll smoothly to projects section
        const projSec = document.getElementById('projects');
        if (projSec) {
          projSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Highlight glow effect on the target card
        setTimeout(() => {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.style.outline = '4px solid #e50914';
          targetCard.style.boxShadow = '0 0 35px rgba(229, 9, 20, 0.9)';
          targetCard.style.transform = 'scale(1.05)';
          targetCard.style.zIndex = '100';
          
          setTimeout(() => {
            targetCard.style.outline = '';
            targetCard.style.boxShadow = '';
            targetCard.style.transform = '';
            targetCard.style.zIndex = '';
          }, 3500);
        }, 600);
      }
    });
  });
}

function openSkillsShelf(skillKey) {
  // Clear active highlights
  document.querySelectorAll('.skill-category-card').forEach(card => card.classList.remove('active'));

  // Mark clicked card active
  const clickedCard = document.querySelector(`.skill-category-card[data-skill="${skillKey}"]`);
  if (clickedCard) clickedCard.classList.add('active');

  // Populate data
  populateShelf(skillKey);

  // Smooth open drawer
  if (skillsShelf) {
    skillsShelf.classList.add('open');
    skillsShelf.setAttribute('aria-hidden', 'false');
  }
  activeSkillKey = skillKey;

  // Scroll details shelf into view smoothly
  setTimeout(() => {
    if (skillsShelf) {
      skillsShelf.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 200);
}

function closeSkillsShelf() {
  document.querySelectorAll('.skill-category-card').forEach(card => card.classList.remove('active'));
  if (skillsShelf) {
    skillsShelf.classList.remove('open');
    skillsShelf.setAttribute('aria-hidden', 'true');
  }
  activeSkillKey = null;
}

// Attach category cards listeners
document.querySelectorAll('.skill-category-card').forEach(card => {
  card.addEventListener('click', () => {
    const skillKey = card.getAttribute('data-skill');
    if (activeSkillKey === skillKey) {
      closeSkillsShelf();
    } else {
      openSkillsShelf(skillKey);
    }
  });
});

// Close shelf button listener
if (shelfCloseBtn) {
  shelfCloseBtn.addEventListener('click', closeSkillsShelf);
}

