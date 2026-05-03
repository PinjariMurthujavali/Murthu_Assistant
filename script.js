/* ═══════════════════════════════════════════════
   AXIOM — AI Knowledge Assistant
   Local RAG Engine · script.js
   ═══════════════════════════════════════════════ */

'use strict';

// ══════════════════════════════════════════════
//  KNOWLEDGE BASE — NASA SE Handbook Simulation
// ══════════════════════════════════════════════

const KB = {
  acronyms: {
    'TRL': 'Technology Readiness Level',
    'SE':  'Systems Engineering',
    'SRR': 'System Requirements Review',
    'PDR': 'Preliminary Design Review',
    'CDR': 'Critical Design Review',
    'V&V': 'Verification and Validation',
    'ICD': 'Interface Control Document',
    'FRR': 'Flight Readiness Review',
    'CONOPS': 'Concept of Operations',
    'PBS': 'Product Breakdown Structure',
    'WBS': 'Work Breakdown Structure',
    'MOE': 'Measure of Effectiveness',
    'MOPs': 'Measures of Performance',
    'FMEA': 'Failure Mode and Effects Analysis',
    'RAM': 'Reliability, Availability, and Maintainability',
    'TPM': 'Technical Performance Measure',
    'MBSE': 'Model-Based Systems Engineering',
    'SIL': 'System Integration Laboratory',
    'EVM': 'Earned Value Management',
    'IMP': 'Integrated Master Plan',
  },

  sections: [
    {
      id: 'S1', num: '§1', title: 'Introduction to Systems Engineering',
      page: '1–20',
      keywords: ['introduction', 'overview', 'systems engineering', 'what is', 'definition', 'nasa', 'handbook'],
      content: `Systems Engineering (SE) is a disciplined approach for the definition, realization, technical management, operations, and retirement of a system. A system is a construct or collection of different elements that together produce results not obtainable by any element alone. NASA's Systems Engineering Handbook provides agency-wide guidance for how to apply the SE discipline across all mission types. The handbook covers all phases of a mission: Pre-Phase A through Phase F. Systems engineers must balance technical, cost, schedule, and risk considerations simultaneously.`,
      subsections: [
        { title: 'Purpose', content: 'To promote a common understanding of SE processes and requirements across all NASA centers.' },
        { title: 'Scope', content: 'Applies to all robotic and human spaceflight programs and projects at NASA.' },
      ],
    },
    {
      id: 'S2', num: '§2', title: 'Technology Readiness Levels (TRL)',
      page: '21–45',
      keywords: ['trl', 'technology readiness', 'readiness level', 'maturity', 'technology', 'trl 1', 'trl 2', 'trl 3', 'trl 4', 'trl 5', 'trl 6', 'trl 7', 'trl 8', 'trl 9', 'scale'],
      content: `Technology Readiness Levels (TRL) is a type of measurement system used to assess the maturity level of a particular technology. Each technology project is evaluated against the parameters for each technology level and is then assigned a TRL rating based on the project's progress. TRLs range from 1 (lowest) to 9 (highest). TRL 1: Basic principles observed. TRL 2: Technology concept formulated. TRL 3: Experimental proof of concept. TRL 4: Technology validated in lab. TRL 5: Technology validated in relevant environment. TRL 6: Technology demonstrated in relevant environment. TRL 7: System prototype demonstration in operational environment. TRL 8: System complete and qualified. TRL 9: Actual system proven in operational environment. New technologies intended for use in space systems must typically reach TRL 6 before entering Phase C/D.`,
      table: {
        headers: ['TRL', 'Definition', 'Typical Environment'],
        rows: [
          ['1', 'Basic principles observed', 'Laboratory'],
          ['2', 'Technology concept formulated', 'Laboratory'],
          ['3', 'Experimental proof of concept', 'Laboratory'],
          ['4', 'Technology validated in lab', 'Laboratory'],
          ['5', 'Technology validated', 'Relevant environment'],
          ['6', 'Technology demonstrated', 'Relevant environment'],
          ['7', 'System prototype demonstration', 'Operational environment'],
          ['8', 'System complete and qualified', 'Operational environment'],
          ['9', 'Actual system proven', 'Mission operations'],
        ]
      },
      subsections: [
        { title: 'TRL 1–3: Basic Research', content: 'Technology concept formulated; basic research stage.' },
        { title: 'TRL 4–6: Applied Research', content: 'Laboratory to relevant environment validation.' },
        { title: 'TRL 7–9: Development', content: 'System prototype to mission proven technology.' },
      ],
    },
    {
      id: 'S3', num: '§3', title: 'System Design Process',
      page: '46–98',
      keywords: ['design', 'system design', 'architecture', 'requirements', 'concept', 'trade study', 'functional', 'logical', 'physical', 'decomposition', 'synthesis'],
      content: `The system design process establishes the system architecture, design, and interfaces that will satisfy the system requirements. The process proceeds through functional decomposition, trade study analysis, physical decomposition, and design synthesis. System architects must ensure traceability from mission objectives to functional requirements to design elements. CONOPS (Concept of Operations) documents how the system will operate in its intended environment. Trade studies are used to evaluate design alternatives against selection criteria including cost, performance, risk, and schedule. The logical decomposition transforms functional requirements into logical subsystems and components. Physical architecture maps logical components to hardware and software solutions.`,
      subsections: [
        { title: 'Functional Analysis', content: 'Decompose system functions into subfunctions and allocate requirements.' },
        { title: 'Trade Study Process', content: 'Identify alternatives, define evaluation criteria, score alternatives, select preferred solution.' },
        { title: 'Physical Architecture', content: 'Map functions to physical elements; define interfaces and data flows.' },
      ],
    },
    {
      id: 'S4', num: '§4', title: 'Requirements Management',
      page: '99–132',
      keywords: ['requirements', 'stakeholder', 'requirement', 'traceability', 'allocation', 'verification', 'derived', 'specification', 'SRR', 'baseline'],
      content: `Requirements management is the process of eliciting, analyzing, specifying, validating, and controlling requirements throughout the project lifecycle. Requirements must be complete, consistent, correct, feasible, necessary, unambiguous, and verifiable. Stakeholder requirements are derived from mission objectives and customer needs. System requirements are derived from stakeholder requirements through requirements analysis. Each requirement must be traceable (upward to its source and downward to its verification). The System Requirements Review (SRR) is the key milestone for requirements approval. Requirements are baselined after SRR and controlled through formal change management processes. ICD (Interface Control Documents) define requirements at system interfaces.`,
      subsections: [
        { title: 'Requirement Types', content: 'Functional, performance, interface, environment, constraints.' },
        { title: 'Traceability Matrix', content: 'Each requirement must trace to a source and to verification event.' },
        { title: 'Baseline Control', content: 'Changes after SRR require formal Configuration Control Board approval.' },
      ],
    },
    {
      id: 'S5', num: '§5', title: 'Verification and Validation (V&V)',
      page: '133–175',
      keywords: ['verification', 'validation', 'test', 'V&V', 'inspect', 'analysis', 'demonstration', 'acceptance', 'confirm', 'prove', 'check'],
      content: `Verification and Validation (V&V) are complementary activities. Verification answers "Did we build the system right?" by confirming the system meets its specified requirements. Validation answers "Did we build the right system?" by confirming the system satisfies mission objectives. Verification methods include: Test (applying stimuli and measuring response), Analysis (using mathematical models or simulations), Inspection (visual examination), and Demonstration (observing operation). A Verification Cross-Reference Matrix (VCRM) maps each requirement to its verification method and event. Validation is typically performed during operational testing or system-level acceptance testing. Both V&V activities are planned early but executed across all mission phases.`,
      subsections: [
        { title: 'Verification Methods', content: 'Test, Analysis, Inspection, Demonstration (TAID).' },
        { title: 'Validation Planning', content: 'Validation scenarios derived from mission CONOPS and stakeholder needs.' },
        { title: 'VCRM', content: 'Verification Cross-Reference Matrix ensures every requirement has a verification event.' },
      ],
    },
    {
      id: 'S6', num: '§6', title: 'Risk Management',
      page: '176–212',
      keywords: ['risk', 'mitigation', 'probability', 'consequence', 'likelihood', 'hazard', 'FMEA', 'fault tree', 'risk matrix', 'accept', 'watch', 'monitor'],
      content: `Risk management involves identifying, analyzing, mitigating, tracking, and communicating project risks. A risk is defined by its probability of occurrence and the consequence (severity) of its impact. Risks are classified using a 5×5 likelihood-consequence matrix into green (low), yellow (medium), and red (high) categories. Risk mitigation strategies include: Avoid (eliminate the risk source), Control (reduce probability or consequence), Accept (acknowledge and monitor), and Transfer (shift risk to another party). FMEA (Failure Mode and Effects Analysis) is a bottom-up technique to identify potential failure modes and their effects. Fault tree analysis is a top-down technique. All risks above a defined threshold must be reported to project management and tracked in the risk register.`,
      table: {
        headers: ['Likelihood', 'Consequence 1', 'Consequence 2', 'Consequence 3'],
        rows: [
          ['5 – Near Certain', 'Medium', 'High', 'High'],
          ['4 – Likely', 'Low', 'Medium', 'High'],
          ['3 – Possible', 'Low', 'Medium', 'Medium'],
          ['2 – Unlikely', 'Low', 'Low', 'Medium'],
          ['1 – Remote', 'Low', 'Low', 'Low'],
        ]
      },
      subsections: [
        { title: 'Risk Register', content: 'Living document tracking all identified risks, mitigations, and status.' },
        { title: 'FMEA', content: 'Structured analysis of failure modes, effects, and mitigation strategies.' },
        { title: 'Risk Reporting', content: 'Red risks escalated to mission management with mitigation plans.' },
      ],
    },
    {
      id: 'S7', num: '§7', title: 'Interface Management',
      page: '213–248',
      keywords: ['interface', 'ICD', 'integration', 'boundary', 'external', 'internal', 'data', 'electrical', 'mechanical', 'thermal', 'communication'],
      content: `Interface management ensures that all system interfaces are properly defined, controlled, and verified. An interface exists wherever two or more system elements interact. Interface Control Documents (ICDs) formally define the requirements at each interface boundary. Interface types include: mechanical (structural connections, mounting), electrical (power, signals), thermal (heat paths, temperature limits), data (protocols, formats, rates), and operational (procedural handoffs). Interface definitions must be bidirectional — both sides must agree on interface requirements. The Interface Requirements Document (IRD) captures interface requirements before the ICD is baselined. Interface verification is often the most complex verification activity for integrated systems.`,
      subsections: [
        { title: 'ICD Structure', content: 'Identifies both interface providers and consumers; specifies all interface parameters.' },
        { title: 'Interface Verification', content: 'Verified through interface testing at the system integration level.' },
      ],
    },
    {
      id: 'S8', num: '§8', title: 'Technical Reviews',
      page: '249–290',
      keywords: ['review', 'SRR', 'PDR', 'CDR', 'FRR', 'milestone', 'readiness', 'gate', 'technical review', 'phase'],
      content: `Technical reviews are formal assessments of design and development maturity at key project milestones. Key NASA technical reviews include: System Requirements Review (SRR) — confirms requirements are adequate and testable; Preliminary Design Review (PDR) — confirms design approach is feasible; Critical Design Review (CDR) — confirms detailed design is complete and ready for fabrication; System Integration Review (SIR) — confirms integration plan; Operational Readiness Review (ORR) — confirms readiness for operations; Flight Readiness Review (FRR) — final review before launch. Each review has entry and exit criteria defined in the project plan. Review boards evaluate against criteria and may issue Requests for Action (RFAs) that must be closed before proceeding.`,
      subsections: [
        { title: 'Review Entry Criteria', content: 'Documents and analyses required to enter each review must be completed beforehand.' },
        { title: 'Review Exit Criteria', content: 'All RFAs resolved; board consensus on technical readiness.' },
        { title: 'Review Phasing', content: 'Reviews are tied to mission phases: Pre-Phase A through Phase F.' },
      ],
    },
    {
      id: 'S9', num: '§9', title: 'Configuration Management',
      page: '291–320',
      keywords: ['configuration', 'baseline', 'change', 'CCB', 'version', 'document control', 'CM', 'configuration item', 'audit'],
      content: `Configuration Management (CM) ensures that the integrity of system configuration is maintained throughout the project lifecycle. Key CM activities include: Configuration Identification (defining baselines), Configuration Control (managing changes through CCB), Configuration Status Accounting (tracking changes), and Configuration Audits (verifying physical and functional configuration). Baselines are established at key reviews (SRR, PDR, CDR) and represent the official design state. Any change to a baselined item requires a Configuration Change Request (CCR) reviewed by the Configuration Control Board (CCB). Configuration audits — Physical Configuration Audit (PCA) and Functional Configuration Audit (FCA) — verify the delivered product matches the approved design.`,
      subsections: [
        { title: 'Baseline Types', content: 'Functional (SRR), Allocated (PDR), Product (CDR).' },
        { title: 'CCB Process', content: 'Submit CCR → impact assessment → CCB decision → implement and track.' },
        { title: 'Configuration Audits', content: 'FCA verifies performance; PCA verifies hardware configuration matches drawings.' },
      ],
    },
    {
      id: 'S10', num: '§10', title: 'Human Factors Engineering',
      page: '321–365',
      keywords: ['human factors', 'human', 'crew', 'habitability', 'ergonomics', 'usability', 'cognitive', 'display', 'interface', 'human error', 'human systems'],
      content: `Human Factors Engineering (HFE) integrates knowledge of human capabilities, limitations, and needs into the design of systems, equipment, and environments to optimize human performance and safety. HFE applies to both crewed spaceflight systems and ground systems operated by humans. Key HFE domains include: anthropometry (physical dimensions), cognition (information processing), workload, situational awareness, team performance, and habitability. Human error analysis (e.g., SHERPA, HAZOP) identifies where human mistakes can occur and how to design them out. NASA-STD-3001 defines human factors requirements for crewed spacecraft. HFE is integrated throughout the design process, not just at the end.`,
      subsections: [
        { title: 'NASA-STD-3001', content: 'The primary standard for human factors in crewed spaceflight systems.' },
        { title: 'Human Error Analysis', content: 'SHERPA and HAZOP techniques used to identify and mitigate human error risks.' },
      ],
    },
    {
      id: 'S11', num: '§11', title: 'Systems Integration',
      page: '366–408',
      keywords: ['integration', 'assembly', 'test', 'SIL', 'ATLO', 'verify', 'subsystem', 'build', 'mate', 'environmental', 'vibration', 'thermal vacuum'],
      content: `Systems integration is the process of combining system elements and verifying that the integrated system performs correctly. Integration follows a bottom-up approach: unit level → subsystem level → system level → vehicle level. The System Integration Laboratory (SIL) is used for early software and hardware integration testing. Assembly, Test, and Launch Operations (ATLO) is the final integration phase before launch. Key integration tests include: functional verification tests, interface verification tests, environmental testing (vibration, acoustic, thermal-vacuum), and end-to-end communication tests. Integration anomalies are tracked in a Problem/Failure Report (PFR) system and resolved before proceeding.`,
      subsections: [
        { title: 'Integration Levels', content: 'Component → Subsystem → System → Vehicle.' },
        { title: 'Environmental Testing', content: 'Vibration, acoustic, thermal-vacuum, EMI/EMC testing validates design margins.' },
        { title: 'ATLO', content: 'Final integration and test phase culminating in launch vehicle mate and FRR.' },
      ],
    },
    {
      id: 'S12', num: '§12', title: 'MBSE and Digital Engineering',
      page: '409–450',
      keywords: ['MBSE', 'model based', 'digital', 'SysML', 'model', 'simulation', 'digital twin', 'tool', 'capella', 'cameo', 'formal'],
      content: `Model-Based Systems Engineering (MBSE) is the formalized application of modeling to support system requirements, design, analysis, verification, and validation activities throughout the lifecycle. MBSE replaces document-centric approaches with a central system model. SysML (Systems Modeling Language) is the most common modeling language for MBSE in SE practice. Tools include Cameo Systems Modeler, Capella, and IBM Rhapsody. Benefits of MBSE include: improved consistency, reduced ambiguity, automated traceability, and digital thread from requirements to design to test. Digital twins are high-fidelity simulation models that mirror the actual system and can be used for design trades, anomaly resolution, and mission planning. NASA is progressively adopting MBSE across its programs.`,
      subsections: [
        { title: 'SysML', content: 'Block Definition Diagrams, Internal Block Diagrams, Activity Diagrams, and Sequence Diagrams are primary view types.' },
        { title: 'Digital Thread', content: 'Connected data flow from requirements through design, manufacturing, test, and operations.' },
        { title: 'Digital Twin', content: 'High-fidelity model of physical system used for anomaly resolution and mission planning.' },
      ],
    },
  ]
};

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════

const STATE = {
  chatSessions: JSON.parse(localStorage.getItem('axiom_sessions') || '[]'),
  currentSession: null,
  sidebarOpen: true,
  theme: localStorage.getItem('axiom_theme') || 'dark',
};

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(STATE.theme);
  initNeuralCanvas();
  buildSectionNav();
  buildHistoryList();
  buildSuggestionChips();

  // Responsive sidebar default
  if (window.innerWidth < 768) {
    STATE.sidebarOpen = false;
    document.getElementById('sidebar').classList.add('collapsed');
  }
});

// ══════════════════════════════════════════════
//  PAGE TRANSITIONS
// ══════════════════════════════════════════════

function launchApp() {
  document.getElementById('landing-page').classList.remove('active');
  document.getElementById('app-page').classList.add('active');
  newChat();
}

// ══════════════════════════════════════════════
//  THEME
// ══════════════════════════════════════════════

function toggleTheme() {
  STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
  applyTheme(STATE.theme);
  localStorage.setItem('axiom_theme', STATE.theme);
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const icons = document.querySelectorAll('#theme-icon, #app-theme-icon');
  icons.forEach(i => i.textContent = t === 'dark' ? '◑' : '◐');
}

// ══════════════════════════════════════════════
//  SIDEBAR
// ══════════════════════════════════════════════

function toggleSidebar() {
  STATE.sidebarOpen = !STATE.sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed', !STATE.sidebarOpen);
}

function buildSectionNav() {
  const nav = document.getElementById('section-nav');
  nav.innerHTML = KB.sections.map(s => `
    <button class="sec-nav-item" onclick="askAboutSection('${s.id}')">
      <span class="sec-num">${s.num}</span>
      <span class="sec-title">${s.title}</span>
    </button>
  `).join('');
}

function askAboutSection(id) {
  const sec = KB.sections.find(s => s.id === id);
  if (!sec) return;
  const input = document.getElementById('user-input');
  input.value = `Tell me about ${sec.title}`;
  handleInput();
  sendMessage();
  if (window.innerWidth < 768) toggleSidebar();
}

// ══════════════════════════════════════════════
//  CHAT SESSIONS
// ══════════════════════════════════════════════

function newChat() {
  const session = {
    id: Date.now(),
    title: 'New Session',
    messages: [],
    ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
  STATE.currentSession = session;
  STATE.chatSessions.unshift(session);
  saveHistory();
  renderChat();
  buildHistoryList();
}

function loadSession(id) {
  const s = STATE.chatSessions.find(s => s.id === id);
  if (!s) return;
  STATE.currentSession = s;
  renderChat();
  buildHistoryList();
}

function renderChat() {
  const container = document.getElementById('messages-container');
  container.innerHTML = '';

  const ws = document.createElement('div');
  ws.id = 'welcome-screen';
  ws.className = 'welcome-screen';
  ws.innerHTML = `
    <div class="welcome-icon">◈</div>
    <h2>Ask me anything</h2>
    <p>I have indexed the full NASA Systems Engineering Handbook. Try one of these:</p>
    <div class="suggestion-chips" id="suggestion-chips"></div>
  `;
  container.appendChild(ws);
  buildSuggestionChips();

  if (STATE.currentSession && STATE.currentSession.messages.length > 0) {
    ws.style.display = 'none';
    STATE.currentSession.messages.forEach(m => renderMessage(m, false));
  }
}

function buildHistoryList() {
  const list = document.getElementById('history-list');
  if (!STATE.chatSessions.length) {
    list.innerHTML = '<div class="no-history">No sessions yet</div>';
    return;
  }
  list.innerHTML = STATE.chatSessions.map(s => `
    <div class="history-item ${STATE.currentSession?.id === s.id ? 'active' : ''}"
         onclick="loadSession(${s.id})">
      <div class="history-q">${s.title}</div>
      <div class="history-time">${s.ts}</div>
    </div>
  `).join('');
}

function clearHistory() {
  STATE.chatSessions = [];
  STATE.currentSession = null;
  saveHistory();
  buildHistoryList();
  newChat();
}

function saveHistory() {
  // Keep last 20 sessions, truncate messages for storage
  const toSave = STATE.chatSessions.slice(0, 20).map(s => ({
    ...s,
    messages: s.messages.slice(-10),
  }));
  try { localStorage.setItem('axiom_sessions', JSON.stringify(toSave)); } catch(e) {}
}

// ══════════════════════════════════════════════
//  SUGGESTION CHIPS
// ══════════════════════════════════════════════

const SUGGESTED_QUESTIONS = [
  'What are TRL levels?',
  'Explain the V&V process',
  'What happens at CDR?',
  'How does MBSE work?',
  'What is FMEA?',
  'Describe the system design process',
  'What is configuration management?',
  'How are interfaces managed in NASA projects?',
];

function buildSuggestionChips() {
  const el = document.getElementById('suggestion-chips');
  if (!el) return;
  el.innerHTML = SUGGESTED_QUESTIONS.slice(0, 6).map(q => `
    <button class="chip" onclick="askChip('${q}')">${q}</button>
  `).join('');
}

function askChip(q) {
  document.getElementById('user-input').value = q;
  handleInput();
  sendMessage();
}

// ══════════════════════════════════════════════
//  INPUT HANDLING
// ══════════════════════════════════════════════

function handleKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function handleInput(e) {
  const ta = document.getElementById('user-input');
  const val = ta.value;

  // Auto-resize
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 160) + 'px';

  // Char count
  document.getElementById('char-count').textContent = val.length;

  // Search suggestions
  showSearchSuggestions(val);
}

function showSearchSuggestions(query) {
  const box = document.getElementById('search-suggestions');
  if (!query || query.length < 2) { box.style.display = 'none'; return; }

  const q = query.toLowerCase();
  const matches = SUGGESTED_QUESTIONS.filter(sq => sq.toLowerCase().includes(q) && sq.toLowerCase() !== q).slice(0, 4);

  if (!matches.length) { box.style.display = 'none'; return; }

  box.style.display = 'block';
  box.innerHTML = matches.map(m => `
    <div class="suggestion-item" onclick="pickSuggestion('${m}')">
      <span class="s-icon">⌕</span> ${m}
    </div>
  `).join('');
}

function pickSuggestion(q) {
  document.getElementById('user-input').value = q;
  document.getElementById('search-suggestions').style.display = 'none';
  handleInput();
  sendMessage();
}

// ══════════════════════════════════════════════
//  SEND MESSAGE
// ══════════════════════════════════════════════

async function sendMessage() {
  const input = document.getElementById('user-input');
  const query = input.value.trim();
  if (!query) return;

  // Close suggestions
  document.getElementById('search-suggestions').style.display = 'none';

  // Hide welcome screen
  const ws = document.getElementById('welcome-screen');
  if (ws) ws.style.display = 'none';

  // Clear input
  input.value = '';
  input.style.height = 'auto';
  document.getElementById('char-count').textContent = '0';

  // Disable send
  document.getElementById('send-btn').disabled = true;

  // Add user message
  const userMsg = { role: 'user', content: query };
  addToSession(userMsg);
  renderMessage(userMsg, true);

  // Update session title
  if (STATE.currentSession.messages.filter(m => m.role === 'user').length === 1) {
    STATE.currentSession.title = query.slice(0, 40) + (query.length > 40 ? '…' : '');
    buildHistoryList();
  }

  // Show typing indicator
  const typingEl = showTypingIndicator();

  // Simulate retrieval latency
  const delay = 800 + Math.random() * 700;
  await sleep(delay);

  // Run RAG
  const result = retrieve(query);

  // Remove typing indicator
  typingEl.remove();

  // Build AI message
  const aiMsg = {
    role: 'ai',
    content: result.answer,
    sources: result.sources,
    confidence: result.confidence,
    related: result.related,
    keywords: result.keywords,
  };
  addToSession(aiMsg);
  renderMessage(aiMsg, true);

  // Update retrieval info
  document.getElementById('retrieval-info').textContent =
    `Retrieved ${result.sources.length} section(s) · ${result.confidence}% confidence`;

  saveHistory();
  document.getElementById('send-btn').disabled = false;
  input.focus();
}

function addToSession(msg) {
  if (!STATE.currentSession) newChat();
  STATE.currentSession.messages.push(msg);
}

function showTypingIndicator() {
  const container = document.getElementById('messages-container');
  const row = document.createElement('div');
  row.className = 'message-row ai';
  row.innerHTML = `
    <div class="msg-avatar ai-av">◈</div>
    <div class="msg-body">
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  container.appendChild(row);
  scrollToBottom();
  return row;
}

// ══════════════════════════════════════════════
//  RAG RETRIEVAL ENGINE
// ══════════════════════════════════════════════

function retrieve(query) {
  const q = query.toLowerCase();
  const words = tokenize(q);

  // Score each section
  const scored = KB.sections.map(sec => {
    let score = 0;
    const allText = (sec.content + ' ' + sec.title + ' ' + sec.keywords.join(' ')).toLowerCase();

    // Keyword match scoring
    words.forEach(word => {
      if (word.length < 3) return;
      if (sec.keywords.some(k => k.toLowerCase().includes(word))) score += 4;
      if (sec.title.toLowerCase().includes(word)) score += 3;
      const occ = (allText.match(new RegExp(word, 'g')) || []).length;
      score += occ;
    });

    // Boost for exact phrase
    if (allText.includes(q.slice(0, 15))) score += 5;

    return { sec, score };
  });

  // Sort and take top matches
  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter(s => s.score > 0).slice(0, 3);

  if (!top.length) {
    return {
      answer: "I couldn't find specific information about that topic in the indexed knowledge base. Try rephrasing or browse the sections in the sidebar. Common topics include TRL levels, V&V, system design, risk management, and technical reviews.",
      sources: [],
      confidence: 10,
      related: [],
      keywords: [],
    };
  }

  // Build answer from top sections
  const primary = top[0].sec;
  const secondaries = top.slice(1).map(t => t.sec);

  // Extract relevant keywords
  const matchedKeywords = words.filter(w => w.length > 3 && primary.content.toLowerCase().includes(w));

  // Build context-merged answer
  let answer = buildAnswer(query, primary, secondaries, matchedKeywords);

  // Expand acronyms
  answer = expandAcronyms(answer);

  // Calculate confidence
  const maxPossibleScore = words.length * 8;
  const rawConf = Math.min(98, Math.round((top[0].score / Math.max(maxPossibleScore, 1)) * 100) + 50);
  const confidence = Math.min(98, Math.max(22, rawConf));

  // Related sections
  const related = scored
    .filter(s => s.score > 0 && s.sec.id !== primary.id)
    .slice(0, 4)
    .map(s => s.sec.num + ' ' + s.sec.title);

  // Sources
  const sources = top.map(t => ({
    section: t.sec.num + ' – ' + t.sec.title,
    page: t.sec.page,
  }));

  return { answer, sources, confidence, related, keywords: matchedKeywords };
}

function buildAnswer(query, primary, secondaries, keywords) {
  let ans = '';

  // Check if we should show a table
  const wantsTable = /table|level|list|compare|types|categories|scale|range/i.test(query);

  // Main answer paragraph
  ans += primary.content;

  // Add subsection info if specific
  if (primary.subsections && primary.subsections.length) {
    ans += `\n\n**Key areas covered:**`;
    primary.subsections.forEach(sub => {
      ans += `\n• **${sub.title}:** ${sub.content}`;
    });
  }

  // Merge context from secondaries
  if (secondaries.length) {
    ans += `\n\n**Related context from ${secondaries[0].title}:** ${secondaries[0].content.slice(0, 200)}…`;
  }

  // Inject table if relevant and available
  if (wantsTable && primary.table) {
    ans += `\n\n[TABLE:${primary.id}]`;
  }

  return ans;
}

function expandAcronyms(text) {
  let result = text;
  Object.entries(KB.acronyms).forEach(([acronym, expansion]) => {
    // Only expand first occurrence
    const regex = new RegExp(`\\b${acronym}\\b`, '');
    result = result.replace(regex, `${acronym} (${expansion})`);
  });
  return result;
}

function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1);
}

// ══════════════════════════════════════════════
//  RENDER MESSAGE
// ══════════════════════════════════════════════

function renderMessage(msg, animate) {
  const container = document.getElementById('messages-container');
  const row = document.createElement('div');
  row.className = `message-row ${msg.role}`;
  if (!animate) row.style.animation = 'none';

  if (msg.role === 'user') {
    row.innerHTML = `
      <div class="msg-avatar user-av">U</div>
      <div class="msg-body">
        <div class="msg-bubble">${escapeHtml(msg.content)}</div>
      </div>
    `;
  } else {
    const formattedContent = formatAIContent(msg.content, msg.keywords || []);
    const tableHtml = extractAndRenderTable(msg.content);
    const confidenceColor = msg.confidence > 75 ? '#4ade80' : msg.confidence > 50 ? '#fbbf24' : '#f87171';

    let sourceHtml = '';
    if (msg.sources && msg.sources.length) {
      sourceHtml = `
        <div class="msg-source">
          <div class="source-label">Sources</div>
          <div class="source-tags">
            ${msg.sources.map(s => `<span class="source-tag" title="Page ${s.page}">${s.section} · p.${s.page}</span>`).join('')}
          </div>
        </div>
      `;
    }

    let relatedHtml = '';
    if (msg.related && msg.related.length) {
      relatedHtml = `
        <div class="related-sections">
          <div class="related-label">↗ Related sections</div>
          <div class="related-chips">
            ${msg.related.map(r => `<span class="related-chip" onclick="askChip('Tell me about ${r}')">${r}</span>`).join('')}
          </div>
        </div>
      `;
    }

    let confidenceHtml = '';
    if (msg.confidence !== undefined) {
      confidenceHtml = `
        <div class="confidence-row">
          <span class="confidence-label">Confidence</span>
          <div class="confidence-bar">
            <div class="confidence-fill" style="width:0%; background:${confidenceColor}" data-target="${msg.confidence}"></div>
          </div>
          <span class="confidence-pct" style="color:${confidenceColor}">${msg.confidence}%</span>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="msg-avatar ai-av">◈</div>
      <div class="msg-body">
        <div class="msg-bubble">
          ${formattedContent}
          ${tableHtml}
        </div>
        ${sourceHtml}
        ${confidenceHtml}
        ${relatedHtml}
      </div>
    `;
  }

  container.appendChild(row);
  scrollToBottom();

  // Animate confidence bar
  if (msg.role === 'ai') {
    requestAnimationFrame(() => {
      const fill = row.querySelector('.confidence-fill');
      if (fill) {
        setTimeout(() => {
          fill.style.width = fill.dataset.target + '%';
        }, 100);
      }
    });
  }
}

function formatAIContent(text, keywords) {
  // Remove table placeholders
  text = text.replace(/\[TABLE:[A-Z0-9]+\]/g, '');

  // Format bullet points
  let html = text
    .split('\n')
    .map(line => {
      if (line.startsWith('• **')) {
        const match = line.match(/• \*\*(.+?)\*\*: (.+)/);
        if (match) return `<p style="margin:6px 0;"><strong style="color:var(--accent)">${match[1]}:</strong> ${match[2]}</p>`;
      }
      if (line.startsWith('**')) {
        const match = line.match(/\*\*(.+?)\*\*/);
        if (match) return `<p style="margin:10px 0 4px; font-weight:600; color:var(--text-0)">${match[1]}</p>`;
      }
      if (line.trim() === '') return '<br/>';
      return `<span>${line}</span>`;
    })
    .join('\n');

  // Bold **...**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Highlight matched keywords
  if (keywords && keywords.length) {
    keywords.forEach(kw => {
      if (kw.length < 4) return;
      const re = new RegExp(`\\b(${escapeRegex(kw)})\\b`, 'gi');
      html = html.replace(re, '<span class="highlight">$1</span>');
    });
  }

  // Wrap acronyms
  Object.keys(KB.acronyms).forEach(acr => {
    const re = new RegExp(`\\b${acr}\\b(?! \\()`, 'g');
    html = html.replace(re, `<span class="acronym" title="${KB.acronyms[acr]}">${acr}</span>`);
  });

  return `<div style="line-height:1.75">${html}</div>`;
}

function extractAndRenderTable(content) {
  const match = content.match(/\[TABLE:([A-Z0-9]+)\]/);
  if (!match) return '';
  const sec = KB.sections.find(s => s.id === match[1]);
  if (!sec || !sec.table) return '';

  const { headers, rows } = sec.table;
  return `
    <div style="overflow-x:auto;margin-top:14px">
      <table>
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  `;
}

// ══════════════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════════════

function scrollToBottom() {
  const c = document.getElementById('messages-container');
  requestAnimationFrame(() => { c.scrollTop = c.scrollHeight; });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ══════════════════════════════════════════════
//  NEURAL CANVAS — Landing page animation
// ══════════════════════════════════════════════

function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes, animId;
  const NODE_COUNT = 55;
  const MAX_DIST = 160;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.5 + 1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const nodeFill = isDark ? 'rgba(79, 195, 247, 0.7)' : 'rgba(37, 99, 235, 0.6)';

    // Update
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          const alpha = (1 - d / MAX_DIST) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = isDark
            ? `rgba(79, 195, 247, ${alpha})`
            : `rgba(37, 99, 235, ${alpha * 0.6})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = nodeFill;
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  resize();
  initNodes();
  draw();
  window.addEventListener('resize', () => { resize(); initNodes(); });
}
