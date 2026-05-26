// TERMINAL — Bloomberg-style trader terminal aesthetic
// Pure black, amber primary, all monospace, ASCII frames, ticker, live data feel.

const termStyles = `
.term-v {
  --bg: #16130C;
  --bg-2: #1D1A12;
  --bg-3: #25211A;
  --amber: #D9B070;
  --amber-dim: #9B7F4D;
  --green: #9CBFA0;
  --red: #C98989;
  --cyan: #93B5C0;
  --fg: #E0D7C2;
  --fg-dim: #918A76;
  --fg-mute: #5C5648;
  --rule: rgba(217, 176, 112, 0.16);
  --rule-soft: rgba(217, 176, 112, 0.07);
  --mono: "JetBrains Mono", "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;

  background: var(--bg);
  color: var(--amber);
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.5;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.term-v * { box-sizing: border-box; font-family: var(--mono); }

/* CRT scanlines + vignette — very subtle */
.term-v::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 100;
  background:
    repeating-linear-gradient(to bottom, rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 4px),
    radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.35) 100%);
  mix-blend-mode: overlay;
  opacity: 0.5;
}
.term-v::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 99;
  background: radial-gradient(ellipse at 50% 30%, rgba(217, 176, 112, 0.025), transparent 60%);
}

.term-v .page {
  position: relative;
  z-index: 1;
  padding: 0;
  max-width: 1280px;
  margin: 0 auto;
}

/* Top status bar */
.term-v .statusbar {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 10px 24px;
  background: var(--bg-2);
  border-bottom: 1px solid var(--amber-dim);
  font-size: 11px;
  letter-spacing: 0.04em;
}
.term-v .statusbar .l { color: var(--amber); font-weight: 500; display: flex; align-items: center; gap: 12px; }
.term-v .statusbar .l .dot { width: 7px; height: 7px; background: var(--green); border-radius: 50%; box-shadow: 0 0 6px rgba(156, 191, 160, 0.5); animation: blink 2.4s ease-in-out infinite; }
.term-v .statusbar .c { text-align: center; color: var(--fg-dim); }
.term-v .statusbar .c b { color: var(--amber); }
.term-v .statusbar .r { text-align: right; color: var(--fg-dim); display: flex; justify-content: flex-end; gap: 16px; }
.term-v .statusbar .r b { color: var(--amber); }
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Ticker */
.term-v .ticker {
  background: var(--bg);
  padding: 8px 0;
  border-bottom: 1px dashed var(--rule);
  overflow: hidden;
  position: relative;
  font-size: 11px;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.term-v .ticker-track {
  display: inline-flex;
  gap: 36px;
  animation: ticker 60s linear infinite;
  padding-left: 100%;
}
.term-v .ticker-track .item { display: inline-flex; gap: 8px; color: var(--fg-dim); }
.term-v .ticker-track .item b { color: var(--amber); }
.term-v .ticker-track .item .up { color: var(--green); }
.term-v .ticker-track .item .down { color: var(--red); }
.term-v .ticker-track .item .sep { color: var(--fg-mute); }
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Function bar */
.term-v .fnbar {
  display: flex;
  background: var(--bg);
  border-bottom: 1px solid var(--rule);
  padding: 0;
  font-size: 11px;
  letter-spacing: 0.02em;
}
.term-v .fnbar a {
  padding: 10px 16px;
  border-right: 1px solid var(--rule-soft);
  color: var(--fg-dim);
  text-decoration: none;
  display: flex;
  gap: 8px;
}
.term-v .fnbar a:hover { background: var(--bg-2); color: var(--amber); }
.term-v .fnbar a.active { background: var(--amber); color: var(--bg); font-weight: 500; }
.term-v .fnbar a .k { color: var(--amber); font-weight: 500; }
.term-v .fnbar a.active .k { color: var(--bg); }

/* Body padding */
.term-v .panel { padding: 28px 28px 0; }
.term-v .panel + .panel { padding-top: 24px; }

/* Section header — ASCII style */
.term-v .panel-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  font-size: 12px;
  color: var(--amber);
  letter-spacing: 0.04em;
}
.term-v .panel-head .lbl { font-weight: 500; }
.term-v .panel-head .rule { flex: 1; border-top: 1px solid var(--rule); height: 0; }
.term-v .panel-head .meta { color: var(--fg-mute); font-size: 11px; }

/* Prompt lines */
.term-v .prompt { color: var(--green); margin: 12px 0 4px; font-size: 12px; }
.term-v .prompt::before { content: "ondrej@sales:~$ "; color: var(--cyan); }
.term-v .out { color: var(--fg); font-size: 13px; margin: 0 0 6px; white-space: pre-wrap; }
.term-v .out .a { color: var(--amber); }
.term-v .out .c { color: var(--cyan); }
.term-v .out .g { color: var(--green); }
.term-v .out .d { color: var(--fg-dim); }
.term-v .out .r { color: var(--red); }

/* Hero block */
.term-v .hero {
  padding: 36px 28px 40px;
  border-bottom: 1px solid var(--rule);
  position: relative;
}
.term-v .hero .ascii-frame {
  border: 1px solid var(--amber-dim);
  padding: 32px 36px 36px;
  position: relative;
  background: linear-gradient(180deg, rgba(217, 176, 112, 0.03), transparent);
}
.term-v .hero .ascii-frame::before {
  content: "[ MISSION_BRIEF.txt ]";
  position: absolute;
  top: -10px;
  left: 16px;
  background: var(--bg);
  padding: 0 10px;
  font-size: 11px;
  color: var(--amber);
  letter-spacing: 0.04em;
}
.term-v .hero h1 {
  font-family: var(--mono);
  font-size: 56px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0;
  color: var(--amber);
  text-shadow: 0 0 18px rgba(217, 176, 112, 0.12);
}
.term-v .hero h1 .em { color: var(--green); }
.term-v .hero h1 .blink { animation: cursorBlink 1s steps(1, end) infinite; color: var(--amber); }
@keyframes cursorBlink {
  50% { opacity: 0; }
}
.term-v .hero .sub {
  margin-top: 24px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--fg);
  max-width: 720px;
}
.term-v .hero .sub::before { content: "// "; color: var(--fg-mute); }
.term-v .hero .ctas {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.term-v .btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  border: 1px solid var(--amber);
  background: transparent;
  color: var(--amber);
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}
.term-v .btn:hover { background: var(--amber); color: var(--bg); box-shadow: 0 0 18px rgba(217, 176, 112, 0.25); }
.term-v .btn--primary { background: var(--amber); color: var(--bg); }
.term-v .btn--primary:hover { background: transparent; color: var(--amber); }
.term-v .hero .breadcrumb {
  margin-top: 28px;
  font-size: 11px;
  color: var(--fg-mute);
  letter-spacing: 0.04em;
}
.term-v .hero .breadcrumb b { color: var(--amber); }

/* Stats panel */
.term-v .stats {
  padding: 32px 28px;
  border-bottom: 1px solid var(--rule);
  background: var(--bg-2);
}
.term-v .stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid var(--rule);
  background: var(--bg);
}
.term-v .stats-grid .cell {
  padding: 24px 24px 24px;
  border-right: 1px solid var(--rule);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.term-v .stats-grid .cell:last-child { border-right: 0; }
.term-v .stats-grid .cell .sym {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--fg-mute);
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
}
.term-v .stats-grid .cell .sym .live {
  color: var(--green);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.term-v .stats-grid .cell .sym .live::before {
  content: "";
  width: 6px; height: 6px;
  background: var(--green);
  border-radius: 50%;
  display: inline-block;
  animation: blink 2s ease-in-out infinite;
  box-shadow: 0 0 6px rgba(156, 191, 160, 0.5);
}
.term-v .stats-grid .cell .val {
  font-size: 72px;
  line-height: 1;
  color: var(--amber);
  font-weight: 500;
  letter-spacing: -0.05em;
  display: flex;
  align-items: baseline;
}
.term-v .stats-grid .cell .val .pct { color: var(--green); font-size: 0.42em; margin-left: 6px; letter-spacing: -0.02em; }
.term-v .stats-grid .cell .val .pct.minus { color: var(--red); }
.term-v .stats-grid .cell .lbl { color: var(--fg); font-size: 12px; letter-spacing: 0.04em; }
.term-v .stats-grid .cell .desc { color: var(--fg-dim); font-size: 11px; line-height: 1.5; margin-top: 4px; }
.term-v .stats-grid .cell .chart {
  margin-top: 12px;
  height: 32px;
  display: flex;
  align-items: flex-end;
  gap: 3px;
}
.term-v .stats-grid .cell .chart i {
  flex: 1;
  background: var(--amber-dim);
  display: block;
}

/* Services as table */
.term-v .services-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: 13px;
}
.term-v .services-table thead th {
  text-align: left;
  padding: 10px 16px;
  border-bottom: 1px solid var(--amber);
  background: var(--bg-2);
  color: var(--amber);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
}
.term-v .services-table thead th:last-child { text-align: right; }
.term-v .services-table tbody tr { border-bottom: 1px solid var(--rule-soft); transition: background 0.2s; cursor: pointer; }
.term-v .services-table tbody tr:hover { background: rgba(217, 176, 112, 0.04); }
.term-v .services-table tbody td { padding: 18px 16px; vertical-align: top; }
.term-v .services-table tbody td.id { color: var(--cyan); font-weight: 500; width: 50px; }
.term-v .services-table tbody td.name { color: var(--amber); font-weight: 500; width: 220px; }
.term-v .services-table tbody td.name .tags { display: block; color: var(--fg-mute); font-size: 10px; margin-top: 4px; letter-spacing: 0.08em; }
.term-v .services-table tbody td.desc { color: var(--fg); font-size: 12px; line-height: 1.55; max-width: 560px; }
.term-v .services-table tbody td.price { color: var(--green); text-align: right; white-space: nowrap; }
.term-v .services-table tbody td.price .per { display: block; color: var(--fg-mute); font-size: 10px; letter-spacing: 0.1em; }

/* Process progress bars */
.term-v .proc-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
}
.term-v .proc-row {
  display: grid;
  grid-template-columns: 60px 200px 1fr 100px;
  gap: 16px;
  align-items: center;
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--rule-soft);
}
.term-v .proc-row .id { color: var(--cyan); }
.term-v .proc-row .name { color: var(--amber); font-weight: 500; display: flex; align-items: baseline; gap: 12px; }
.term-v .proc-row .name .desc-inline { color: var(--fg-dim); font-weight: 400; font-size: 11px; }
.term-v .proc-row .bar {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 14px;
}
.term-v .proc-row .bar i {
  flex: 1;
  height: 100%;
  background: var(--bg-3);
}
.term-v .proc-row .bar i.f { background: var(--amber); }
.term-v .proc-row .bar i.h { background: var(--amber-dim); }
.term-v .proc-row .dur { color: var(--green); text-align: right; font-size: 11px; }

.term-v .proc-desc {
  margin-top: 18px;
  padding: 14px 18px;
  background: var(--bg-2);
  border-left: 2px solid var(--amber);
  font-size: 12px;
  color: var(--fg);
  line-height: 1.55;
}
.term-v .proc-desc::before { content: "$ status --explain"; display: block; color: var(--cyan); font-size: 11px; margin-bottom: 6px; }

/* About */
.term-v .about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  margin-top: 8px;
}
.term-v .about-grid .col {
  background: var(--bg-2);
  border: 1px solid var(--rule);
  padding: 24px 26px;
}
.term-v .about-grid .col.code { padding: 24px 26px; font-size: 12px; line-height: 1.6; color: var(--fg); }
.term-v .about-grid .col.code p { margin: 0 0 12px; }
.term-v .about-grid .col.code .lead { color: var(--amber); font-size: 14px; }
.term-v .about-grid .col.code .lead::before { content: "/* "; color: var(--fg-mute); }
.term-v .about-grid .col.code .lead::after { content: " */"; color: var(--fg-mute); }
.term-v .about-grid .col.code em { font-style: normal; color: var(--green); }
.term-v .about-grid .col.json { font-size: 11px; color: var(--fg); line-height: 1.7; }
.term-v .about-grid .col.json .header { color: var(--cyan); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; }
.term-v .about-grid .col.json .row { display: flex; gap: 10px; padding: 4px 0; align-items: baseline; }
.term-v .about-grid .col.json .k { color: var(--amber); min-width: 100px; }
.term-v .about-grid .col.json .v { color: var(--fg); }
.term-v .about-grid .col.json .v .s { color: var(--green); }
.term-v .about-grid .col.json .v .c { color: var(--cyan); }

/* Final CTA */
.term-v .cta {
  padding: 56px 28px 56px;
  border-bottom: 1px solid var(--rule);
  background:
    radial-gradient(ellipse at center, rgba(217, 176, 112, 0.04), transparent 60%),
    var(--bg);
  text-align: center;
}
.term-v .cta .alert {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--amber-dim);
  padding: 8px 14px;
  color: var(--amber);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 24px;
  background: rgba(217, 176, 112, 0.04);
}
.term-v .cta .alert::before { content: "▲"; font-size: 14px; }
.term-v .cta h2 {
  font-size: 42px;
  line-height: 1.1;
  font-weight: 500;
  color: var(--amber);
  margin: 0 0 16px;
  letter-spacing: -0.025em;
  text-shadow: 0 0 18px rgba(217, 176, 112, 0.1);
}
.term-v .cta h2 em { font-style: normal; color: var(--green); }
.term-v .cta p { color: var(--fg); font-size: 14px; max-width: 580px; margin: 0 auto 28px; line-height: 1.6; }
.term-v .cta .contact {
  margin-top: 28px;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--rule);
  padding: 18px 26px;
  background: var(--bg-2);
  font-size: 12px;
  text-align: left;
}
.term-v .cta .contact .row { display: flex; gap: 14px; align-items: center; }
.term-v .cta .contact .k { color: var(--cyan); width: 80px; }
.term-v .cta .contact .v { color: var(--amber); }
.term-v .cta .contact a { color: var(--amber); text-decoration: none; }
.term-v .cta .contact a:hover { text-decoration: underline; }

/* Footer */
.term-v .foot {
  padding: 18px 28px;
  background: var(--bg-2);
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--fg-mute);
}
.term-v .foot a { color: var(--amber); text-decoration: none; }
.term-v .foot a:hover { text-decoration: underline; }
.term-v .foot .l, .term-v .foot .r { display: flex; gap: 14px; align-items: center; }
.term-v .foot .mem { color: var(--green); }
`;

function TerminalVariation() {
  const ticker = [
    {sym:'CONV', val:'+12.4%', dir:'up'},
    {sym:'CYCLE', val:'-18d', dir:'up'},
    {sym:'REV/REP', val:'+50.0%', dir:'up'},
    {sym:'PIPELINE', val:'14.2M CZK', dir:'up'},
    {sym:'HIT_RATE', val:'31.6%', dir:'up'},
    {sym:'SAVED/WK', val:'6h', dir:'up'},
    {sym:'CHURN', val:'-4.1%', dir:'up'},
    {sym:'LEADS_Q', val:'+38%', dir:'up'},
    {sym:'AVG_DEAL', val:'+22%', dir:'up'},
    {sym:'CALLS/D', val:'18', dir:'up'},
  ];

  return (
    <div className="term-v">
      <style>{termStyles}</style>
      <div className="page">

        {/* STATUS BAR */}
        <div className="statusbar">
          <div className="l">
            <span className="dot"></span>
            <span>ONDREJ.SH <b>v26.1</b></span>
          </div>
          <div className="c">
            <span>SALES_OPS_TERMINAL · </span>
            <b>OPEN FOR ENGAGEMENT</b>
            <span> · 2026 Q2</span>
          </div>
          <div className="r">
            <span>PRAHA</span>
            <span>UTC+01</span>
            <span>14:32:08</span>
            <span><b>MEM: 87%</b></span>
          </div>
        </div>

        {/* TICKER */}
        <div className="ticker">
          <div className="ticker-track">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span className="item" key={i}>
                <b>{t.sym}</b>
                <span className={t.dir === 'up' ? 'up' : 'down'}>{t.dir === 'up' ? '▲' : '▼'} {t.val}</span>
                <span className="sep">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* FUNCTION BAR */}
        <div className="fnbar">
          <a href="#" className="active"><span className="k">F1</span> HOME</a>
          <a href="#stats"><span className="k">F2</span> TRACK_RECORD</a>
          <a href="#svc"><span className="k">F3</span> SERVICES</a>
          <a href="#proc"><span className="k">F4</span> PROCESS</a>
          <a href="#about"><span className="k">F5</span> ABOUT</a>
          <a href="#cta"><span className="k">F6</span> CONTACT</a>
          <a href="https://www.linkedin.com/in/ondrej-kamaryt/" target="_blank" rel="noopener noreferrer"><span className="k">F12</span> LINKEDIN ↗</a>
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="ascii-frame">
            <div style={{color:'var(--fg-mute)', fontSize:'11px', marginBottom:'18px', letterSpacing:'0.1em'}}>
              {'> '} <span style={{color:'var(--green)'}}>cat</span> mission.txt
            </div>
            <h1>
              STAVÍM OBCHODNÍ<br/>
              PROCESY, KTERÉ<br/>
              FUNGUJÍ <span className="em">PREDIKOVATELNĚ</span><span className="blink">_</span>
            </h1>
            <p className="sub">
              Pomáhám firmám nastavit obchod, automatizovat rutinu a koučovat tým — aby výsledky nebyly o náhodě, ale o systému.
            </p>
            <div className="ctas">
              <a className="btn btn--primary" href="mailto:ondrej.kamaryt@gmail.com">[ DOMLUVIT_KONZULTACI ] →</a>
              <a className="btn" href="#svc">[ ZJISTIT_VÍCE ] ↓</a>
            </div>
            <div className="breadcrumb">
              <b>ondrej@sales</b> ~ <span style={{color:'var(--cyan)'}}>mission/2026</span> · awaiting input...
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats" id="stats">
          <div className="panel-head">
            <span>[ 01 ]</span>
            <span className="lbl">TRACK_RECORD.csv</span>
            <span className="rule"></span>
            <span className="meta">--source=lifescale --year=2025</span>
          </div>
          <div className="stats-grid">
            <div className="cell">
              <div className="sym"><span>REV_SHARE</span><span className="live">LIVE</span></div>
              <div className="val">50<span className="pct">+%</span></div>
              <div className="lbl">Osobní přínos obratu</div>
              <div className="desc">{'// '} obratu firmy, který jsem přinesl za poslední rok</div>
              <div className="chart">
                {[35, 42, 38, 50, 48, 55, 52, 60, 58, 65, 70, 50].map((v, i) => (
                  <i key={i} style={{height: v + '%'}}></i>
                ))}
              </div>
            </div>
            <div className="cell">
              <div className="sym"><span>TIME_SAVED</span><span className="live">LIVE</span></div>
              <div className="val">6<span className="pct">h/wk</span></div>
              <div className="lbl">Jediná automatizace</div>
              <div className="desc">{'// '} ušetřených týdně na rutinním procesu</div>
              <div className="chart">
                {[1, 1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6].map((v, i) => (
                  <i key={i} style={{height: (v / 6 * 100) + '%'}}></i>
                ))}
              </div>
            </div>
            <div className="cell">
              <div className="sym"><span>NEW_SEGMENT</span><span className="live">LIVE</span></div>
              <div className="val">B2B<span className="pct">∞</span></div>
              <div className="lbl">Vybudováno od nuly</div>
              <div className="desc">{'// '} segment, který se ukázal jako klíčový</div>
              <div className="chart">
                {[0, 0, 5, 12, 20, 32, 48, 60, 72, 80, 88, 95].map((v, i) => (
                  <i key={i} style={{height: v + '%'}}></i>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="panel" id="svc">
          <div className="panel-head">
            <span>[ 02 ]</span>
            <span className="lbl">ENGAGEMENT_MODELS.json</span>
            <span className="rule"></span>
            <span className="meta">3 records · sorted by price ASC</span>
          </div>
          <table className="services-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Model</th>
                <th>Popis</th>
                <th>Investice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="id">01</td>
                <td className="name">Coaching týmu<span className="tags">tag: coaching · monthly</span></td>
                <td className="desc">Pravidelný feedback, přepis skriptů, individuální i skupinové session. Buduji tým, který umí prodávat konzultačně.</td>
                <td className="price">od 8 000 Kč<span className="per">/ MĚSÍČNĚ</span></td>
              </tr>
              <tr>
                <td className="id">02</td>
                <td className="name">Obchodní audit<span className="tags">tag: audit · one-time</span></td>
                <td className="desc">Projdu váš obchod od leadu po deal. CRM, hovory, pipeline, konverze. Dostanete report s konkrétními prioritami.</td>
                <td className="price">od 15 000 Kč<span className="per">/ JEDNORÁZOVĚ</span></td>
              </tr>
              <tr>
                <td className="id">03</td>
                <td className="name">Externí obchodní ředitel<span className="tags">tag: fractional-cso · monthly</span></td>
                <td className="desc">Strategie, KPIs, pipeline review, forecasting, koučování. Vše bez fixních nákladů na plný úvazek.</td>
                <td className="price">od 15 000 Kč<span className="per">/ MĚSÍČNĚ</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* PROCESS */}
        <section className="panel" id="proc">
          <div className="panel-head">
            <span>[ 03 ]</span>
            <span className="lbl">PROCESS_PIPELINE.sh</span>
            <span className="rule"></span>
            <span className="meta">$ run --stages=4 --verbose</span>
          </div>
          <div className="proc-list">
            <div className="proc-row">
              <span className="id">[01]</span>
              <span className="name">CALL <span className="desc-inline">/ úvodní call</span></span>
              <span className="bar">
                {Array.from({length: 14}).map((_, i) => <i key={i} className={i < 2 ? 'f' : ''}></i>)}
              </span>
              <span className="dur">15 min</span>
            </div>
            <div className="proc-row">
              <span className="id">[02]</span>
              <span className="name">AUDIT <span className="desc-inline">/ report do týdne</span></span>
              <span className="bar">
                {Array.from({length: 14}).map((_, i) => <i key={i} className={i < 5 ? 'f' : ''}></i>)}
              </span>
              <span className="dur">~ 1 týden</span>
            </div>
            <div className="proc-row">
              <span className="id">[03]</span>
              <span className="name">IMPLEMENT <span className="desc-inline">/ procesy + nástroje</span></span>
              <span className="bar">
                {Array.from({length: 14}).map((_, i) => <i key={i} className={i < 10 ? 'f' : i < 12 ? 'h' : ''}></i>)}
              </span>
              <span className="dur">průběžně</span>
            </div>
            <div className="proc-row">
              <span className="id">[04]</span>
              <span className="name">MEASURE <span className="desc-inline">/ konverze · cyklus · hit-rate</span></span>
              <span className="bar">
                {Array.from({length: 14}).map((_, i) => <i key={i} className="f"></i>)}
              </span>
              <span className="dur">continuous</span>
            </div>
          </div>
          <div className="proc-desc">
            Žádný marketing, žádné prezentace. Začínáme audit­em, končíme čísly, která se dají sledovat v dashboardu. Co nefunguje, ladíme. Co funguje, škálujeme.
          </div>
        </section>

        {/* ABOUT */}
        <section className="panel" id="about">
          <div className="panel-head">
            <span>[ 04 ]</span>
            <span className="lbl">ABOUT_CONSULTANT.md</span>
            <span className="rule"></span>
            <span className="meta">--profile</span>
          </div>
          <div className="about-grid">
            <div className="col code">
              <p className="lead">Hledám cesty, které ještě nikdo nešel.</p>
              <p>Minulý rok jsem přinesl polovinu obratu firmy. Mimo jiné tím, že mě napadlo zkusit cestu, kterou u nás ještě nikdo nešel — firemní vzdělávání jako <em>B2B segment</em>, který se ukázal jako klíčový.</p>
              <p>Ale nebylo to jen o prodeji. Zmapoval jsem dotační možnosti, které firmám otevřely cestu ke vzdělávání, a zformoval personální agenturu, která pomáhá studentům lépe se uplatnit na trhu práce.</p>
              <p>Vždycky mě bavilo hledat a vyšlapávat nové cesty — ideálně tam, kde pomůže <em>automatizace</em> místo dalšího člověka.</p>
              <p>Dnes jako obchodní ředitel v LifeScale Group propojuju svět firemního vzdělávání s reálnými obchodními výzvami firem. Věřím, že vzdělávání není školení z katalogu — je to nástroj, který řeší konkrétní byznysové problémy.</p>
              <p>Zároveň spoluzakládám <em>FortiCore</em> — pomáháme firmám digitalizovat a automatizovat firemní procesy.</p>
            </div>
            <div className="col json">
              <div className="header">consultant.config.json</div>
              <div className="row"><span className="k">"role"</span><span className="v">: <span className="s">"Obchodní ředitel"</span>,</span></div>
              <div className="row"><span className="k">"company"</span><span className="v">: <span className="c">"LifeScale Group"</span>,</span></div>
              <div className="row"><span className="k">"co_founder"</span><span className="v">: <span className="c">"FortiCore"</span>,</span></div>
              <div className="row"><span className="k">"focus"</span><span className="v">: [</span></div>
              <div className="row" style={{paddingLeft:'14px'}}><span className="v"><span className="s">"sales_ops"</span>,</span></div>
              <div className="row" style={{paddingLeft:'14px'}}><span className="v"><span className="s">"crm"</span>,</span></div>
              <div className="row" style={{paddingLeft:'14px'}}><span className="v"><span className="s">"automation"</span>,</span></div>
              <div className="row" style={{paddingLeft:'14px'}}><span className="v"><span className="s">"coaching"</span>,</span></div>
              <div className="row" style={{paddingLeft:'14px'}}><span className="v"><span className="s">"L&amp;D"</span></span></div>
              <div className="row"><span className="v">],</span></div>
              <div className="row"><span className="k">"approach"</span><span className="v">: <span className="s">"konzultační"</span>,</span></div>
              <div className="row"><span className="k">"location"</span><span className="v">: <span className="s">"Praha · CZ"</span>,</span></div>
              <div className="row"><span className="k">"status"</span><span className="v">: <span style={{color:'var(--green)'}}>"available"</span></span></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="cta">
          <div className="alert">SYSTEM ALERT · OPEN FOR INQUIRY</div>
          <h2>Řešíte, že váš obchod nefunguje<br/>tak, jak by <em>měl</em>?</h2>
          <p>Ozvete se. Prvním klientům nabízím úvodní konzultaci zdarma — bez prezentací, bez závazků.</p>
          <a className="btn btn--primary" href="mailto:ondrej.kamaryt@gmail.com" style={{marginTop:'6px'}}>[ NAPSAT_EMAIL ] →</a>
          <div className="contact">
            <div className="row"><span className="k">$ mail</span><span className="v"><a href="mailto:ondrej.kamaryt@gmail.com">ondrej.kamaryt@gmail.com</a></span></div>
            <div className="row"><span className="k">$ tel</span><span className="v"><a href="tel:+420606786231">+420 606 786 231</a></span></div>
            <div className="row"><span className="k">$ linkedin</span><span className="v"><a href="https://www.linkedin.com/in/ondrej-kamaryt/" target="_blank" rel="noopener noreferrer">/in/ondrej-kamaryt</a></span></div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="foot">
          <div className="l">
            <span>© 2026 ONDREJ_KAMARYT</span>
            <span>·</span>
            <span>BUILD 26.1.0</span>
          </div>
          <div className="r">
            <span className="mem">● UPTIME 100%</span>
            <span>·</span>
            <span>SET IN JETBRAINS_MONO</span>
            <span>·</span>
            <a href="https://www.linkedin.com/in/ondrej-kamaryt/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
}

window.TerminalVariation = TerminalVariation;
