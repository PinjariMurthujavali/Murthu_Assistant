/* ═══════════════════════════════════════════════════════════
   AXON.AI — ULTRA PREMIUM REDESIGN
   style.css — WOW-Factor Cosmic Ember Theme
   ═══════════════════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,700;12..96,800&family=JetBrains+Mono:wght@300;400;500&display=swap');

/* ════════════════════════════════
   CSS VARIABLES
════════════════════════════════ */
:root {
  --bg:            #060710;
  --bg-2:          #0a0c1a;
  --bg-3:          #0f1224;
  --surface:       rgba(255,255,255,0.03);
  --surface-2:     rgba(255,255,255,0.06);
  --surface-3:     rgba(255,255,255,0.10);
  --border:        rgba(255,255,255,0.06);
  --border-2:      rgba(255,255,255,0.11);
  --border-3:      rgba(255,255,255,0.18);
  --text:          #f0f2ff;
  --text-2:        #8892b8;
  --text-3:        #4a526e;
  --text-4:        #2e344d;

  /* COSMIC EMBER PALETTE */
  --fire:          #ff6b35;
  --amber:         #ff9500;
  --gold:          #ffcc02;
  --violet:        #7c3aed;
  --purple:        #a855f7;
  --cyan:          #06b6d4;
  --green:         #10b981;
  --red:           #ef4444;

  /* Glows */
  --glow-fire:     rgba(255,107,53,0.32);
  --glow-amber:    rgba(255,149,0,0.28);
  --glow-violet:   rgba(124,58,237,0.28);
  --glow-cyan:     rgba(6,182,212,0.22);

  /* Gradients */
  --grad-fire:     linear-gradient(135deg, #ff6b35 0%, #ff9500 100%);
  --grad-hero:     linear-gradient(135deg, #ff6b35 0%, #ff9500 45%, #ffcc02 100%);
  --grad-cool:     linear-gradient(135deg, #7c3aed 0%, #a855f7 60%, #06b6d4 100%);
  --grad-text:     linear-gradient(135deg, #ff6b35, #ffcc02);

  /* Shape */
  --r:             12px;
  --r-lg:          18px;
  --r-xl:          26px;
  --r-2xl:         36px;

  /* Shadows */
  --shadow:        0 4px 24px rgba(0,0,0,0.5);
  --shadow-lg:     0 12px 48px rgba(0,0,0,0.65);
  --shadow-fire:   0 8px 32px rgba(255,107,53,0.28);
  --shadow-card:   0 2px 0 rgba(255,255,255,0.04) inset, 0 8px 32px rgba(0,0,0,0.45);

  /* Type */
  --f-display:     'Bricolage Grotesque', sans-serif;
  --f-body:        'Bricolage Grotesque', sans-serif;
  --f-mono:        'JetBrains Mono', monospace;

  /* Motion */
  --ease:          cubic-bezier(0.4,0,0.2,1);
  --ease-b:        cubic-bezier(0.34,1.56,0.64,1);
  --t:             0.2s;
  --ts:            0.4s;
}

[data-theme="light"] {
  --bg:            #f6f7fb;
  --bg-2:          #eef0f8;
  --bg-3:          #e3e6f3;
  --surface:       rgba(255,255,255,0.80);
  --surface-2:     rgba(255,255,255,0.94);
  --surface-3:     rgba(255,255,255,1);
  --border:        rgba(0,0,0,0.055);
  --border-2:      rgba(0,0,0,0.09);
  --border-3:      rgba(0,0,0,0.14);
  --text:          #0c0d1a;
  --text-2:        #4a526e;
  --text-3:        #8892b8;
  --text-4:        #b8bfd4;
  --glow-fire:     rgba(255,107,53,0.14);
  --glow-amber:    rgba(255,149,0,0.12);
  --shadow:        0 4px 24px rgba(0,0,0,0.08);
  --shadow-lg:     0 12px 48px rgba(0,0,0,0.12);
  --shadow-fire:   0 8px 32px rgba(255,107,53,0.16);
  --shadow-card:   0 2px 0 rgba(255,255,255,1) inset, 0 4px 24px rgba(0,0,0,0.07);
}

/* ════════════════════════════
   RESET
════════════════════════════ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{
  font-family:var(--f-body);
  background:var(--bg);color:var(--text);
  min-height:100vh;overflow-x:hidden;
  transition:background var(--ts) var(--ease),color var(--ts) var(--ease);
  -webkit-font-smoothing:antialiased;
}
button{cursor:pointer;font-family:inherit;border:none;background:none}
textarea,input{font-family:inherit;border:none;outline:none;background:none}
.hidden{display:none!important}

.glass{
  background:var(--surface);
  backdrop-filter:blur(20px) saturate(180%);
  -webkit-backdrop-filter:blur(20px) saturate(180%);
  border:1px solid var(--border-2);
}

/* ════════════════════════════
   BACKGROUND LAYERS
════════════════════════════ */
/* Noise grain */
body::before{
  content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  opacity:0.03;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:180px 180px;
}
/* Hero radial */
body::after{
  content:'';position:fixed;top:-35vh;left:50%;transform:translateX(-50%);
  width:140vw;height:90vh;z-index:0;pointer-events:none;
  background:radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,107,53,0.11) 0%, rgba(124,58,237,0.06) 50%, transparent 70%);
}

.bg-grid{
  position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,107,53,0.045) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,107,53,0.045) 1px,transparent 1px);
  background-size:54px 54px;
  mask-image:radial-gradient(ellipse 90% 70% at 50% 0%,black 20%,transparent 75%);
}
[data-theme="light"] .bg-grid{
  background-image:
    linear-gradient(rgba(255,107,53,0.065) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,107,53,0.065) 1px,transparent 1px);
}

.bg-orb{position:fixed;border-radius:50%;pointer-events:none;z-index:0;animation:orbDrift 18s ease-in-out infinite}
.orb-1{width:750px;height:750px;background:radial-gradient(circle at 40% 40%,rgba(255,107,53,0.13) 0%,transparent 65%);top:-280px;left:-220px;animation-delay:0s;filter:blur(70px)}
.orb-2{width:580px;height:580px;background:radial-gradient(circle at 60% 60%,rgba(124,58,237,0.15) 0%,transparent 65%);top:15%;right:-220px;animation-delay:-6s;filter:blur(65px)}
.orb-3{width:460px;height:460px;background:radial-gradient(circle,rgba(6,182,212,0.10) 0%,transparent 65%);bottom:-80px;left:22%;animation-delay:-12s;filter:blur(60px)}
.orb-4{width:320px;height:320px;background:radial-gradient(circle,rgba(255,204,2,0.09) 0%,transparent 65%);top:45%;right:12%;animation-delay:-8s;filter:blur(55px)}

@keyframes orbDrift{
  0%,100%{transform:translate(0,0) scale(1)}
  25%{transform:translate(22px,-28px) scale(1.04)}
  50%{transform:translate(-14px,18px) scale(0.97)}
  75%{transform:translate(18px,8px) scale(1.02)}
}

/* ════════════════════════════
   SCROLLBAR
════════════════════════════ */
*{scrollbar-width:thin;scrollbar-color:rgba(255,107,53,0.25) transparent}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:rgba(255,107,53,0.25);border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:rgba(255,107,53,0.5)}

/* ════════════════════════════
   LANDING PAGE
════════════════════════════ */
.landing{position:relative;z-index:1;min-height:100vh;display:flex;flex-direction:column;overflow:hidden}

/* NAV */
.landing-nav{
  position:relative;z-index:20;
  display:flex;align-items:center;justify-content:space-between;
  padding:26px 48px;
  border-bottom:1px solid var(--border);
  backdrop-filter:blur(16px);
  animation:fadeDown 0.5s var(--ease) both;
}
.nav-logo{display:flex;align-items:center;gap:10px;font-family:var(--f-display);font-weight:800;font-size:1.22rem;letter-spacing:-0.02em}
.logo-icon{
  width:36px;height:36px;border-radius:10px;
  background:var(--grad-fire);
  display:flex;align-items:center;justify-content:center;font-size:1.05rem;
  box-shadow:0 4px 18px var(--glow-fire);
}
.logo-accent{background:var(--grad-hero);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-actions{display:flex;align-items:center;gap:10px}

.theme-toggle{
  width:40px;height:40px;border-radius:11px;
  display:flex;align-items:center;justify-content:center;
  background:var(--surface-2);border:1px solid var(--border-2);
  color:var(--text-2);font-size:1.05rem;
  transition:all var(--t) var(--ease);
}
.theme-toggle:hover{background:var(--surface-3);border-color:var(--fire);color:var(--fire);box-shadow:0 0 18px var(--glow-fire);transform:rotate(18deg)}

.nav-cta{
  padding:9px 22px;border-radius:11px;
  background:var(--grad-fire);color:#fff;
  font-family:var(--f-display);font-size:0.86rem;font-weight:700;letter-spacing:0.01em;
  box-shadow:0 4px 18px var(--glow-fire),0 2px 0 rgba(0,0,0,0.2);
  transition:all var(--t) var(--ease-b);
}
.nav-cta:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 8px 28px var(--glow-fire)}
.nav-cta:active{transform:scale(0.97)}

/* HERO */
.hero{
  position:relative;z-index:2;
  display:flex;flex-direction:column;align-items:center;
  text-align:center;padding:72px 24px 48px;
}

.hero-badge{
  display:inline-flex;align-items:center;gap:10px;
  padding:7px 18px 7px 10px;border-radius:100px;
  background:rgba(255,107,53,0.09);border:1px solid rgba(255,107,53,0.24);
  font-family:var(--f-mono);font-size:0.71rem;color:var(--amber);letter-spacing:0.05em;
  margin-bottom:36px;
  animation:fadeUp 0.6s 0.1s var(--ease) both;
}
.badge-pill{
  padding:2px 9px;border-radius:100px;
  background:var(--grad-fire);color:#fff;
  font-size:0.6rem;font-weight:700;letter-spacing:0.07em;
}
.badge-dot{
  width:7px;height:7px;border-radius:50%;background:var(--green);
  box-shadow:0 0 10px var(--green);animation:blink 2s ease infinite;
}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}

/* Title */
.hero-title{
  font-family:var(--f-display);font-weight:800;
  line-height:1.01;letter-spacing:-0.04em;margin-bottom:22px;
}
.title-line-1{
  display:block;font-size:clamp(3rem,7.5vw,6.6rem);color:var(--text);
  animation:fadeUp 0.6s 0.16s var(--ease) both;
}
.title-line-2{
  display:block;font-size:clamp(3rem,7.5vw,6.6rem);
  background:var(--grad-hero);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  filter:drop-shadow(0 0 50px rgba(255,107,53,0.45));
  animation:fadeUp 0.6s 0.22s var(--ease) both;
}

.hero-sub{
  font-size:clamp(1rem,2vw,1.22rem);color:var(--text-2);
  max-width:530px;line-height:1.7;margin-bottom:36px;
  animation:fadeUp 0.6s 0.3s var(--ease) both;
}

/* Stats */
.hero-stats{
  display:flex;align-items:center;gap:0;
  margin-bottom:40px;
  animation:fadeUp 0.6s 0.36s var(--ease) both;
  background:var(--surface-2);border:1px solid var(--border-2);
  border-radius:var(--r-2xl);padding:6px;
}
.stat-chip{padding:12px 26px;text-align:center;border-radius:var(--r-xl);transition:background var(--t) var(--ease)}
.stat-chip:hover{background:rgba(255,107,53,0.08)}
.stat-num{
  display:block;font-family:var(--f-display);font-size:1.75rem;font-weight:800;
  background:var(--grad-hero);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.stat-label{font-size:0.67rem;color:var(--text-3);letter-spacing:0.11em;text-transform:uppercase;margin-top:2px}
.stat-divider{width:1px;height:38px;background:var(--border-2);flex-shrink:0}

/* CTA */
.cta-btn{
  display:inline-flex;align-items:center;gap:12px;
  padding:17px 40px;border-radius:var(--r-2xl);
  background:var(--grad-fire);color:#fff;
  font-family:var(--f-display);font-size:1.05rem;font-weight:800;letter-spacing:0.01em;
  margin-bottom:64px;
  box-shadow:0 4px 0 rgba(0,0,0,0.28),0 8px 36px var(--glow-fire);
  transition:all var(--t) var(--ease-b);
  animation:fadeUp 0.6s 0.42s var(--ease) both;
  position:relative;overflow:hidden;
}
.cta-btn::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(255,255,255,0.18) 0%,transparent 60%);
  pointer-events:none;
}
.cta-btn:hover{transform:translateY(-4px);box-shadow:0 8px 0 rgba(0,0,0,0.22),0 18px 50px var(--glow-fire)}
.cta-btn:active{transform:translateY(1px);box-shadow:0 2px 0 rgba(0,0,0,0.28),0 4px 16px var(--glow-fire)}
.cta-text{position:relative}
.cta-arrow{position:relative;font-size:1.2rem;transition:transform var(--t) var(--ease-b)}
.cta-btn:hover .cta-arrow{transform:translateX(6px)}

/* Preview card */
.hero-preview{width:100%;max-width:700px;animation:fadeUp 0.8s 0.5s var(--ease) both}
.preview-card{
  border-radius:var(--r-xl);overflow:hidden;
  box-shadow:var(--shadow-lg),0 0 0 1px var(--border-2),0 0 80px rgba(255,107,53,0.07);
}
.preview-header{
  display:flex;align-items:center;gap:7px;
  padding:14px 18px;border-bottom:1px solid var(--border);
  background:var(--surface-2);
}
.preview-dot{width:11px;height:11px;border-radius:50%}
.preview-dot.red{background:#ef4444;box-shadow:0 0 7px #ef4444}
.preview-dot.yellow{background:#f59e0b;box-shadow:0 0 7px #f59e0b}
.preview-dot.green{background:#22c55e;box-shadow:0 0 7px #22c55e}
.preview-title{margin-left:6px;font-family:var(--f-mono);font-size:0.67rem;color:var(--text-3);letter-spacing:0.06em}
.preview-body{padding:22px;display:flex;flex-direction:column;gap:14px;text-align:left}
.preview-msg{padding:13px 17px;border-radius:var(--r-lg);font-size:0.87rem;line-height:1.65}
.user-msg{background:var(--grad-fire);color:#fff;align-self:flex-end;max-width:78%;box-shadow:0 4px 18px var(--glow-fire)}
.ai-msg{background:var(--surface-2);color:var(--text);border:1px solid var(--border-2);align-self:flex-start;max-width:92%}
.ai-badge{display:inline-block;padding:2px 8px;border-radius:6px;background:var(--grad-fire);color:#fff;font-size:0.61rem;font-weight:700;margin-right:6px;vertical-align:middle}
.preview-source{
  margin-top:10px;padding:5px 10px;border-radius:7px;display:inline-flex;align-items:center;gap:6px;
  background:rgba(255,107,53,0.10);border:1px solid rgba(255,107,53,0.22);
  font-family:var(--f-mono);font-size:0.65rem;color:var(--amber);
}

/* FEATURES */
.features{
  position:relative;z-index:2;
  display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:16px;padding:0 48px 72px;max-width:1100px;margin:0 auto;width:100%;
}
.feature-card{
  padding:30px 26px;border-radius:var(--r-xl);
  background:var(--surface);border:1px solid var(--border-2);
  box-shadow:var(--shadow-card);
  transition:all var(--ts) var(--ease);position:relative;overflow:hidden;
}
.feature-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,107,53,0.55),rgba(255,149,0,0.55),transparent);
  opacity:0;transition:opacity var(--ts)
}
.feature-card:hover{transform:translateY(-7px);border-color:rgba(255,107,53,0.3);box-shadow:var(--shadow-lg),0 0 50px rgba(255,107,53,0.09)}
.feature-card:hover::before{opacity:1}
.feature-icon{
  width:48px;height:48px;border-radius:13px;
  display:flex;align-items:center;justify-content:center;
  background:rgba(255,107,53,0.11);border:1px solid rgba(255,107,53,0.24);
  font-size:1.35rem;margin-bottom:18px;
  transition:all var(--t) var(--ease-b);
}
.feature-card:hover .feature-icon{background:rgba(255,107,53,0.2);box-shadow:0 6px 20px var(--glow-fire);transform:scale(1.12) rotate(-4deg)}
.feature-card h3{font-family:var(--f-display);font-size:1.02rem;font-weight:700;margin-bottom:10px;letter-spacing:-0.01em}
.feature-card p{font-size:0.83rem;color:var(--text-2);line-height:1.68}

@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}

/* ════════════════════════════
   APP LAYOUT
════════════════════════════ */
.app{display:flex;height:100vh;overflow:hidden;position:relative;z-index:1}

/* ════════════════════════════
   SIDEBAR
════════════════════════════ */
.sidebar{
  width:290px;min-width:290px;
  background:var(--bg-2);border-right:1px solid var(--border);
  display:flex;flex-direction:column;overflow:hidden;
  transition:transform var(--ts) var(--ease);z-index:100;position:relative;
}
.sidebar::after{
  content:'';position:absolute;top:0;right:0;width:1px;height:100%;
  background:linear-gradient(180deg,rgba(255,107,53,0.28) 0%,transparent 35%,transparent 65%,rgba(124,58,237,0.22) 100%);
}

.sidebar-header{
  display:flex;align-items:center;justify-content:space-between;
  padding:22px 18px 18px;border-bottom:1px solid var(--border);flex-shrink:0;
}
#sidebarClose{display:none}

.new-chat-btn{
  margin:14px 14px 0;padding:11px 18px;border-radius:var(--r-lg);
  border:1.5px dashed var(--border-3);color:var(--text-2);font-size:0.84rem;font-weight:600;
  display:flex;align-items:center;gap:9px;
  transition:all var(--t) var(--ease-b);flex-shrink:0;
}
.new-chat-btn:hover{background:rgba(255,107,53,0.08);border-color:var(--fire);color:var(--fire);box-shadow:0 0 20px var(--glow-fire);transform:scale(1.01)}

.history-section{padding:14px 14px 0;overflow-y:auto;flex-shrink:0}
.history-section+.history-section{border-top:1px solid var(--border);padding-top:14px;margin-top:8px}

.section-label{
  font-family:var(--f-mono);font-size:0.61rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-3);
  padding:0 4px 10px;display:flex;align-items:center;gap:8px;
}
.section-label::after{content:'';flex:1;height:1px;background:var(--border)}

.chat-history-list{display:flex;flex-direction:column;gap:2px;max-height:165px;overflow-y:auto}
.history-item{
  padding:9px 12px;border-radius:10px;cursor:pointer;font-size:0.81rem;color:var(--text-2);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  transition:all var(--t) var(--ease);border:1px solid transparent;
}
.history-item:hover{background:rgba(255,107,53,0.07);color:var(--text);border-color:rgba(255,107,53,0.15)}
.history-item.active{background:rgba(255,107,53,0.11);border-color:rgba(255,107,53,0.28);color:var(--fire)}

.sections-nav{display:flex;flex-direction:column;gap:1px;max-height:250px;overflow-y:auto}
.section-nav-item{
  padding:8px 12px;border-radius:9px;cursor:pointer;font-size:0.78rem;color:var(--text-2);line-height:1.4;
  transition:all var(--t) var(--ease);border:1px solid transparent;
}
.section-nav-item:hover{background:rgba(255,107,53,0.07);color:var(--fire);border-color:rgba(255,107,53,0.18);padding-left:16px}

.sidebar-footer{margin-top:auto;padding:14px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:6px;flex-shrink:0}
.theme-toggle-full{
  display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:10px;
  color:var(--text-2);font-size:0.82rem;font-weight:500;
  transition:all var(--t) var(--ease);width:100%;border:1px solid transparent;
}
.theme-toggle-full:hover{background:rgba(255,107,53,0.08);color:var(--fire);border-color:rgba(255,107,53,0.2)}
.nav-back{
  padding:9px 13px;border-radius:10px;color:var(--text-3);font-size:0.78rem;text-align:left;
  transition:all var(--t) var(--ease);border:1px solid transparent;
}
.nav-back:hover{background:var(--surface);color:var(--text-2);border-color:var(--border-2)}

/* ════════════════════════════
   CHAT MAIN
════════════════════════════ */
.chat-main{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--bg)}

.chat-header{
  display:flex;align-items:center;gap:12px;padding:16px 22px;
  border-bottom:1px solid var(--border);
  background:rgba(6,7,16,0.75);backdrop-filter:blur(20px);
  flex-shrink:0;position:relative;z-index:10;
}
[data-theme="light"] .chat-header{background:rgba(238,240,248,0.85)}
#sidebarOpen{display:none}

.icon-btn{
  width:38px;height:38px;border-radius:10px;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  color:var(--text-2);font-size:1rem;
  transition:all var(--t) var(--ease);border:1px solid transparent;
}
.icon-btn:hover{background:rgba(255,107,53,0.1);color:var(--fire);border-color:rgba(255,107,53,0.22);box-shadow:0 0 14px var(--glow-fire)}

.chat-title{flex:1;display:flex;flex-direction:column;gap:2px;overflow:hidden}
.chat-title span:first-child{font-family:var(--f-display);font-weight:700;font-size:0.96rem;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.chat-status{display:flex;align-items:center;gap:6px;font-family:var(--f-mono);font-size:0.62rem;color:var(--text-3);letter-spacing:0.04em}
.status-dot{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 9px var(--green);flex-shrink:0;animation:blink 2s ease infinite}
.header-actions{display:flex;align-items:center;gap:6px}

/* ════════════════════════════
   MESSAGES
════════════════════════════ */
.messages-container{
  flex:1;overflow-y:auto;padding:28px 26px;
  display:flex;flex-direction:column;gap:22px;scroll-behavior:smooth;
}

/* Welcome */
.welcome-state{
  display:flex;flex-direction:column;align-items:center;
  text-align:center;padding:52px 20px 28px;
  animation:fadeUp 0.5s var(--ease) both;
}
.welcome-icon{
  width:76px;height:76px;border-radius:22px;
  background:linear-gradient(135deg,rgba(255,107,53,0.18),rgba(255,149,0,0.12));
  border:1px solid rgba(255,107,53,0.3);
  display:flex;align-items:center;justify-content:center;font-size:2.2rem;
  margin-bottom:22px;box-shadow:0 0 50px var(--glow-fire),0 0 0 8px rgba(255,107,53,0.05);
  animation:orbDrift 5s ease-in-out infinite;
}
.welcome-state h2{
  font-family:var(--f-display);font-size:1.85rem;font-weight:800;letter-spacing:-0.025em;margin-bottom:10px;
  background:var(--grad-hero);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.welcome-state>p{color:var(--text-2);font-size:0.89rem;max-width:430px;line-height:1.68;margin-bottom:28px}

.suggestion-chips{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;max-width:640px;margin-bottom:32px}
.chip{
  padding:9px 17px;border-radius:100px;
  background:var(--surface-2);border:1px solid var(--border-2);
  font-size:0.79rem;color:var(--text-2);cursor:pointer;font-weight:500;
  transition:all var(--t) var(--ease-b);
}
.chip:hover{background:rgba(255,107,53,0.10);color:var(--fire);border-color:rgba(255,107,53,0.32);transform:translateY(-2px) scale(1.03);box-shadow:0 5px 18px var(--glow-fire)}

/* Step guide */
.how-to-steps{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:680px}
.step-card{
  flex:1;min-width:148px;max-width:196px;
  padding:16px;border-radius:var(--r-lg);
  background:var(--surface);border:1px solid var(--border-2);
  text-align:center;font-size:0.77rem;color:var(--text-2);
  transition:all var(--t) var(--ease);
}
.step-card:hover{border-color:rgba(255,107,53,0.28);background:rgba(255,107,53,0.05);transform:translateY(-3px)}
.step-num{
  width:28px;height:28px;border-radius:50%;
  background:var(--grad-fire);color:#fff;
  font-family:var(--f-display);font-weight:800;font-size:0.79rem;
  display:flex;align-items:center;justify-content:center;
  margin:0 auto 10px;box-shadow:0 4px 14px var(--glow-fire);
}
.step-title{font-weight:700;color:var(--text);margin-bottom:4px;font-size:0.81rem}

/* Messages */
.message{display:flex;gap:12px;animation:fadeUp 0.3s var(--ease) both;max-width:100%}
.message.user{justify-content:flex-end}
.message.user .bubble{
  background:var(--grad-fire);color:#fff;max-width:65%;
  box-shadow:0 4px 18px var(--glow-fire),0 2px 0 rgba(0,0,0,0.2);border:none;
}
.message.ai{justify-content:flex-start}
.message.ai .bubble{max-width:86%}

.avatar{
  width:35px;height:35px;border-radius:11px;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  font-size:1rem;font-weight:700;margin-top:2px;
  background:var(--grad-fire);color:#fff;
  box-shadow:0 4px 14px var(--glow-fire);
}
.avatar.user-av{
  background:var(--surface-3);color:var(--text-2);
  border:1px solid var(--border-2);box-shadow:none;font-size:0.78rem;
}

.bubble{
  padding:15px 20px;border-radius:var(--r-xl);
  background:var(--surface);border:1px solid var(--border-2);
  font-size:0.89rem;line-height:1.74;color:var(--text);
  box-shadow:var(--shadow-card);position:relative;overflow:hidden;
}
/* Shimmer top border */
.message.ai .bubble::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,107,53,0.45),rgba(255,149,0,0.45),transparent);
}
.bubble p+p{margin-top:10px}
.bubble strong{color:var(--amber);font-weight:700}
.bubble em{color:var(--purple);font-style:italic}

.answer-text{margin-bottom:14px}

/* Source bar */
.source-bar{
  display:flex;flex-wrap:wrap;align-items:center;gap:8px;
  padding:10px 14px;border-radius:12px;
  background:rgba(255,107,53,0.055);border:1px solid rgba(255,107,53,0.16);
  font-family:var(--f-mono);font-size:0.69rem;margin-bottom:10px;
}
.source-tag{
  display:inline-flex;align-items:center;gap:4px;
  padding:3px 9px;border-radius:6px;
  background:rgba(255,107,53,0.14);color:var(--amber);
  border:1px solid rgba(255,107,53,0.26);font-weight:600;
}
.confidence-bar{display:flex;align-items:center;gap:8px;flex:1;min-width:165px}
.conf-label{color:var(--text-3);white-space:nowrap}
.conf-track{flex:1;height:5px;border-radius:3px;background:var(--border);overflow:hidden}
.conf-fill{
  height:100%;border-radius:3px;
  background:linear-gradient(90deg,var(--fire),var(--amber),var(--green));
  transition:width 1.1s cubic-bezier(0.4,0,0.2,1);
  position:relative;overflow:hidden;
}
.conf-fill::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(90deg,transparent 30%,rgba(255,255,255,0.35) 55%,transparent 80%);
  animation:shimmer 2.2s linear infinite;
}
@keyframes shimmer{from{transform:translateX(-120%)}to{transform:translateX(220%)}}
.conf-pct{color:var(--green);font-weight:600;white-space:nowrap}

/* Related */
.related-section{padding:12px 16px;border-radius:12px;background:var(--surface);border:1px solid var(--border-2)}
.related-label{font-family:var(--f-mono);font-size:0.61rem;letter-spacing:0.11em;text-transform:uppercase;color:var(--text-3);margin-bottom:9px}
.related-chips{display:flex;flex-wrap:wrap;gap:6px}
.related-chip{
  padding:5px 12px;border-radius:100px;
  background:var(--surface-2);border:1px solid var(--border-2);
  color:var(--text-2);font-size:0.73rem;cursor:pointer;font-weight:500;
  transition:all var(--t) var(--ease-b);
}
.related-chip:hover{color:var(--fire);border-color:rgba(255,107,53,0.35);background:rgba(255,107,53,0.08);transform:translateY(-2px);box-shadow:0 4px 12px var(--glow-fire)}

/* Keyword */
.kw{background:rgba(255,149,0,0.15);color:var(--amber);border-radius:4px;padding:0 3px;border-bottom:1px solid rgba(255,149,0,0.35)}

/* Table */
.data-table{width:100%;border-collapse:collapse;font-size:0.77rem;margin-top:14px;border-radius:var(--r);overflow:hidden;border:1px solid var(--border-2)}
.data-table th{padding:9px 13px;text-align:left;font-family:var(--f-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--amber);background:rgba(255,107,53,0.08);border-bottom:1px solid var(--border-2)}
.data-table td{padding:8px 13px;color:var(--text-2);border-bottom:1px solid var(--border)}
.data-table tr:last-child td{border-bottom:none}
.data-table tr:nth-child(even) td{background:rgba(255,255,255,0.02)}
.data-table tr:hover td{background:rgba(255,107,53,0.04);color:var(--text)}

/* Typing */
.typing-bubble{display:flex;align-items:center;gap:5px;padding:18px 20px}
.typing-dot{width:7px;height:7px;border-radius:50%;background:var(--fire);animation:typeBounce 1.2s ease infinite}
.typing-dot:nth-child(2){animation-delay:0.18s;background:var(--amber)}
.typing-dot:nth-child(3){animation-delay:0.36s;background:var(--gold)}
@keyframes typeBounce{0%,80%,100%{transform:translateY(0) scale(1);opacity:0.4}40%{transform:translateY(-9px) scale(1.25);opacity:1}}

/* ════════════════════════════
   INPUT AREA
════════════════════════════ */
.input-area{
  padding:14px 22px 18px;border-top:1px solid var(--border);
  background:var(--bg-2);flex-shrink:0;position:relative;
}

.search-suggestions{
  position:absolute;bottom:calc(100% + 8px);left:22px;right:22px;
  background:var(--bg-3);border:1px solid var(--border-2);
  border-radius:var(--r-lg);overflow:hidden;
  box-shadow:var(--shadow-lg),0 0 35px rgba(255,107,53,0.09);
  z-index:50;display:none;
}
.search-suggestions.open{display:block;animation:fadeUp 0.2s var(--ease)}
.suggestion-item{
  padding:12px 18px;font-size:0.83rem;color:var(--text-2);cursor:pointer;
  border-bottom:1px solid var(--border);
  transition:all var(--t) var(--ease);display:flex;align-items:center;gap:10px;
}
.suggestion-item::before{content:'→';color:var(--text-4);font-size:0.8rem;flex-shrink:0}
.suggestion-item:last-child{border-bottom:none}
.suggestion-item:hover{background:rgba(255,107,53,0.08);color:var(--text);padding-left:22px}
.suggestion-item .match{color:var(--fire);font-weight:700}

.input-wrapper{
  display:flex;align-items:flex-end;gap:10px;
  padding:12px 12px 12px 18px;border-radius:var(--r-2xl);
  background:var(--surface-2);border:1.5px solid var(--border-2)!important;
  transition:all var(--t) var(--ease);
}
.input-wrapper:focus-within{
  border-color:rgba(255,107,53,0.42)!important;
  box-shadow:0 0 0 3px rgba(255,107,53,0.09),0 0 35px rgba(255,107,53,0.08);
  background:var(--surface-3);
}
.chat-input{flex:1;font-size:0.92rem;color:var(--text);line-height:1.62;max-height:160px;overflow-y:auto;background:transparent}
.chat-input::placeholder{color:var(--text-3)}

.send-btn{
  width:42px;height:42px;border-radius:13px;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  background:var(--grad-fire);color:#fff;font-size:1.2rem;font-weight:700;
  box-shadow:0 4px 16px var(--glow-fire),0 2px 0 rgba(0,0,0,0.2);
  transition:all var(--t) var(--ease-b);
}
.send-btn:hover{transform:scale(1.12) translateY(-1px);box-shadow:0 7px 24px var(--glow-fire)}
.send-btn:active{transform:scale(0.94)}
.send-btn:disabled{opacity:0.32;cursor:not-allowed;transform:none;box-shadow:none}

.input-footer{
  text-align:center;margin-top:10px;
  font-family:var(--f-mono);font-size:0.59rem;color:var(--text-4);letter-spacing:0.06em;
}

/* ════════════════════════════
   RESPONSIVE
════════════════════════════ */
@media(max-width:900px){.landing-nav{padding:20px 24px}.hero{padding:52px 18px 36px}.features{padding:0 24px 56px}}
@media(max-width:768px){
  .sidebar{position:fixed;inset:0 auto 0 0;transform:translateX(-100%);width:280px}
  .sidebar.open{transform:translateX(0);box-shadow:var(--shadow-lg),8px 0 30px rgba(0,0,0,0.3)}
  #sidebarClose{display:flex}#sidebarOpen{display:flex}
  .message.user .bubble{max-width:86%}.message.ai .bubble{max-width:96%}
  .features{grid-template-columns:1fr 1fr}
}
@media(max-width:520px){
  .features{grid-template-columns:1fr}
  .hero-stats{flex-wrap:wrap;border-radius:var(--r-lg)}
  .stat-chip{flex:1;min-width:80px;padding:10px 14px}
  .messages-container{padding:16px 14px;gap:16px}
  .input-area{padding:10px 14px 14px}
  .how-to-steps{gap:8px}
  .step-card{min-width:130px}
}
