// SWISS — Vignelli / Müller-Brockmann inspired grid
// Bone white, pure black, Helvetica, big numbers, vermillion micro-accent.

const swissStyles = `
.swiss-v {
  --bg: #F1ECDF;
  --bg-2: #E8E1D0;
  --ink: #0A0907;
  --ink-2: #2A2722;
  --ink-3: #6E695E;
  --rule: rgba(10, 9, 7, 0.92);
  --rule-soft: rgba(10, 9, 7, 0.14);
  --accent: #D8401C;
  --sans: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.4;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.swiss-v * { box-sizing: border-box; }

/* faint 12-col grid lines */
.swiss-v .grid-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  max-width: 1200px;
  margin: 0 auto;
  left: 0; right: 0;
  padding: 0 64px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.swiss-v .grid-lines > i {
  border-left: 0.5px solid rgba(10,9,7,0.05);
  height: 100%;
}
.swiss-v .grid-lines > i:last-child {
  border-right: 0.5px solid rgba(10,9,7,0.05);
}

.swiss-v .page {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 64px 56px;
  z-index: 1;
}

/* Top brand bar */
.swiss-v .topbar {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  border-top: 4px solid var(--ink);
  border-bottom: 0.5px solid var(--ink);
  padding: 14px 0;
  gap: 16px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 500;
}
.swiss-v .topbar .item { display: flex; gap: 10px; align-items: baseline; }
.swiss-v .topbar .item .l { color: var(--ink-3); font-size: 10px; letter-spacing: 0.16em; }
.swiss-v .topbar .item .v { color: var(--ink); font-weight: 500; }
.swiss-v .topbar .item.right { justify-content: flex-end; }
.swiss-v .topbar .dot { width: 8px; height: 8px; background: var(--accent); display: inline-block; margin-right: 6px; vertical-align: middle; transform: translateY(-1px); }

/* Hero — 12-col grid */
.swiss-v .hero {
  padding: 80px 0 96px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  border-bottom: 0.5px solid var(--ink);
}
.swiss-v .hero .eyebrow {
  grid-column: 1 / span 12;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.swiss-v .hero .eyebrow b { color: var(--ink); font-weight: 500; }
.swiss-v .hero h1 {
  grid-column: 1 / span 9;
  font-size: 122px;
  font-weight: 500;
  line-height: 0.92;
  letter-spacing: -0.045em;
  margin: 0;
  color: var(--ink);
}
.swiss-v .hero h1 .lo { color: var(--ink-3); font-weight: 500; }
.swiss-v .hero .sub {
  grid-column: 1 / span 6;
  margin-top: 32px;
  font-size: 19px;
  line-height: 1.4;
  color: var(--ink-2);
  font-weight: 400;
  letter-spacing: -0.005em;
}
.swiss-v .hero .ctas {
  grid-column: 7 / span 6;
  margin-top: 32px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.swiss-v .btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border: 2px solid var(--ink);
  background: var(--ink);
  color: var(--bg);
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}
.swiss-v .btn:hover { background: var(--accent); border-color: var(--accent); }
.swiss-v .btn--ghost { background: transparent; color: var(--ink); }
.swiss-v .btn--ghost:hover { background: var(--ink); color: var(--bg); }
.swiss-v .hero .index {
  grid-column: 10 / span 3;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 0;
  border-top: 0.5px solid var(--ink);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.swiss-v .hero .index a {
  padding: 9px 0;
  border-bottom: 0.5px solid var(--rule-soft);
  color: var(--ink);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.swiss-v .hero .index a .n { color: var(--ink-3); font-size: 10px; }

/* Numbers — gigantic Helvetica */
.swiss-v .numbers {
  padding: 64px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  border-bottom: 0.5px solid var(--ink);
}
.swiss-v .numbers .meta {
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.swiss-v .numbers .meta .lbl { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }
.swiss-v .numbers .meta .v { font-size: 11px; letter-spacing: 0.04em; color: var(--ink); font-weight: 500; text-transform: uppercase; }
.swiss-v .numbers .triplet {
  grid-column: 3 / span 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}
.swiss-v .numbers .triplet .stat {
  padding: 0 24px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
}
.swiss-v .numbers .triplet .stat + .stat { padding-left: 24px; border-left: 0.5px solid var(--rule-soft); }
.swiss-v .numbers .stat .num {
  font-size: 160px;
  font-weight: 500;
  line-height: 0.86;
  letter-spacing: -0.06em;
  color: var(--ink);
  display: flex;
  align-items: baseline;
}
.swiss-v .numbers .stat .num .u { font-size: 0.32em; color: var(--accent); margin-left: 4px; font-weight: 500; letter-spacing: -0.04em; }
.swiss-v .numbers .stat .lbl {
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); font-weight: 500;
}
.swiss-v .numbers .stat .desc {
  font-size: 13px; line-height: 1.45; color: var(--ink-2); max-width: 260px;
}

/* Services as columns */
.swiss-v .services {
  padding: 56px 0 72px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  border-bottom: 0.5px solid var(--ink);
}
.swiss-v .services .head {
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.swiss-v .services .head .num {
  font-size: 11px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase;
}
.swiss-v .services .head h2 {
  font-size: 13px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink); margin: 0;
}
.swiss-v .services .grid3 {
  grid-column: 3 / span 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.swiss-v .services .grid3 .svc {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-top: 14px;
  border-top: 2px solid var(--ink);
}
.swiss-v .services .grid3 .svc .id {
  font-size: 11px; letter-spacing: 0.18em; color: var(--ink-3); text-transform: uppercase;
}
.swiss-v .services .grid3 .svc h3 {
  font-size: 28px; font-weight: 500; letter-spacing: -0.015em; line-height: 1.1; margin: 18px 0 16px;
}
.swiss-v .services .grid3 .svc .price {
  display: flex; align-items: baseline; gap: 6px;
  font-size: 13px; padding: 10px 0 16px; border-bottom: 0.5px solid var(--rule-soft); margin-bottom: 16px;
}
.swiss-v .services .grid3 .svc .price .from { color: var(--ink-3); font-size: 11px; }
.swiss-v .services .grid3 .svc .price .v { color: var(--accent); font-weight: 500; font-size: 16px; }
.swiss-v .services .grid3 .svc .price .per { color: var(--ink-3); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; margin-left: auto; }
.swiss-v .services .grid3 .svc p { font-size: 14px; line-height: 1.55; color: var(--ink-2); margin: 0 0 18px; }
.swiss-v .services .grid3 .svc ul { list-style: none; padding: 0; margin: auto 0 0; display: flex; flex-direction: column; gap: 6px; padding-top: 16px; border-top: 0.5px solid var(--rule-soft); }
.swiss-v .services .grid3 .svc ul li { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-2); display: flex; gap: 10px; align-items: center; }
.swiss-v .services .grid3 .svc ul li::before { content: ""; width: 8px; height: 2px; background: var(--accent); }

/* Process */
.swiss-v .process {
  padding: 56px 0 72px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  border-bottom: 0.5px solid var(--ink);
}
.swiss-v .process .head {
  grid-column: 1 / span 2;
}
.swiss-v .process .head .num { font-size: 11px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px; display: block; }
.swiss-v .process .head h2 { font-size: 13px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; margin: 0; }
.swiss-v .process .steps {
  grid-column: 3 / span 10;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.swiss-v .process .steps .s {
  border-top: 2px solid var(--ink);
  padding-top: 14px;
  display: flex; flex-direction: column; gap: 12px;
}
.swiss-v .process .steps .s .id { font-size: 64px; font-weight: 500; line-height: 1; letter-spacing: -0.05em; color: var(--ink); }
.swiss-v .process .steps .s h4 { font-size: 16px; font-weight: 500; margin: 4px 0 0; letter-spacing: -0.005em; }
.swiss-v .process .steps .s .dur { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); }
.swiss-v .process .steps .s p { font-size: 13px; line-height: 1.5; color: var(--ink-2); margin: 0; }

/* About */
.swiss-v .about {
  padding: 64px 0 80px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  border-bottom: 0.5px solid var(--ink);
  background: var(--bg-2);
  margin-left: -64px; margin-right: -64px; padding-left: 64px; padding-right: 64px;
}
.swiss-v .about .head { grid-column: 1 / span 2; }
.swiss-v .about .head .num { font-size: 11px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px; display: block; }
.swiss-v .about .head h2 { font-size: 13px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 24px; }
.swiss-v .about .head dl { margin: 0; display: flex; flex-direction: column; gap: 16px; padding-top: 16px; border-top: 0.5px solid var(--rule-soft); }
.swiss-v .about .head dt { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px; }
.swiss-v .about .head dd { margin: 0; font-size: 12px; line-height: 1.4; color: var(--ink); font-weight: 500; letter-spacing: -0.005em; }
.swiss-v .about .head dd .acc { color: var(--accent); }
.swiss-v .about .body {
  grid-column: 3 / span 9;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.swiss-v .about .body .lead {
  grid-column: 1 / span 2;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0 0 8px;
  color: var(--ink);
  max-width: 920px;
}
.swiss-v .about .body .lead em { font-style: normal; color: var(--accent); }
.swiss-v .about .body p { font-size: 14px; line-height: 1.55; color: var(--ink-2); margin: 0; }

/* Final CTA */
.swiss-v .cta {
  padding: 96px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  border-bottom: 0.5px solid var(--ink);
  position: relative;
}
.swiss-v .cta::before {
  content: "06";
  position: absolute;
  bottom: -28px;
  right: -8px;
  font-size: 360px;
  font-weight: 500;
  line-height: 0.8;
  color: rgba(216, 64, 28, 0.06);
  letter-spacing: -0.06em;
  pointer-events: none;
}
.swiss-v .cta .head { grid-column: 1 / span 2; }
.swiss-v .cta .head .num { font-size: 11px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; }
.swiss-v .cta .body { grid-column: 3 / span 8; position: relative; z-index: 1; }
.swiss-v .cta h2 { font-size: 64px; line-height: 1.0; font-weight: 500; letter-spacing: -0.035em; margin: 0 0 24px; }
.swiss-v .cta h2 em { font-style: normal; color: var(--accent); }
.swiss-v .cta p { font-size: 17px; line-height: 1.5; color: var(--ink-2); max-width: 560px; margin: 0 0 28px; }
.swiss-v .cta .actions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.swiss-v .cta .contact {
  grid-column: 11 / span 2;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 4px;
  border-top: 2px solid var(--ink);
  align-self: start;
}
.swiss-v .cta .contact span { color: var(--ink-3); font-size: 9px; letter-spacing: 0.2em; margin-bottom: 0; }
.swiss-v .cta .contact a { color: var(--ink); text-decoration: none; font-weight: 500; }
.swiss-v .cta .contact a:hover { color: var(--accent); }

/* Footer */
.swiss-v .foot {
  padding: 24px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
}
.swiss-v .foot .col { display: flex; gap: 10px; align-items: baseline; }
.swiss-v .foot a { color: var(--ink); text-decoration: none; }
.swiss-v .foot a:hover { color: var(--accent); }
.swiss-v .foot .col:nth-child(1) { grid-column: 1 / span 4; }
.swiss-v .foot .col:nth-child(2) { grid-column: 5 / span 4; justify-content: center; }
.swiss-v .foot .col:nth-child(3) { grid-column: 9 / span 4; justify-content: flex-end; }
`;

function SwissVariation() {
  return (
    <div className="swiss-v">
      <style>{swissStyles}</style>
      <div className="grid-lines">
        {Array.from({length: 12}, (_, i) => <i key={i}></i>)}
      </div>
      <div className="page">

        <div className="topbar">
          <div className="item"><span className="dot"></span><span className="l">Issue</span><span className="v">N° 26 / 2026</span></div>
          <div className="item" style={{justifyContent:'center'}}><span className="l">—</span><span className="v">Ondřej Kamarýt · Sales Consulting</span></div>
          <div className="item right"><span className="l">Praha</span><span className="v">CZ · UTC+1</span></div>
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="eyebrow">
            <span style={{width:'24px', height:'2px', background:'var(--accent)', display:'inline-block'}}></span>
            <b>Sales Consulting</b> — Audit · Coaching · Fractional Sales
          </div>
          <h1>
            Stavím obchodní<br/>
            procesy, které<br/>
            <span style={{color:'var(--accent)'}}>fungují&nbsp;predikovatelně.</span>
          </h1>
          <p className="sub">
            Pomáhám firmám nastavit obchod, automatizovat rutinu a koučovat tým — aby výsledky nebyly o náhodě, ale o systému.
          </p>
          <div className="ctas">
            <a className="btn" href="mailto:ondrej.kamaryt@gmail.com">Domluvit konzultaci →</a>
            <a className="btn btn--ghost" href="#sluzby">Zjistit více ↓</a>
          </div>
          <nav className="index">
            <a href="#cisla"><span>Track Record</span><span className="n">01</span></a>
            <a href="#sluzby"><span>Služby</span><span className="n">02</span></a>
            <a href="#proces"><span>Proces</span><span className="n">03</span></a>
            <a href="#o-mne"><span>O mně</span><span className="n">04</span></a>
            <a href="#kontakt"><span>Kontakt</span><span className="n">05</span></a>
          </nav>
        </section>

        {/* NUMBERS */}
        <section className="numbers" id="cisla">
          <div className="meta">
            <span className="lbl">— 01</span>
            <span className="v">Track Record</span>
            <span className="lbl" style={{marginTop:'12px'}}>FY 2025</span>
          </div>
          <div className="triplet">
            <div className="stat">
              <span className="num">50<span className="u">%</span></span>
              <span className="lbl">— Osobní přínos</span>
              <span className="desc">obratu firmy, který jsem za poslední rok přinesl.</span>
            </div>
            <div className="stat">
              <span className="num">6<span className="u">h</span></span>
              <span className="lbl">— Týdně / 1 automatizace</span>
              <span className="desc">ušetřených jedinou automatizací rutinního procesu.</span>
            </div>
            <div className="stat">
              <span className="num">B<span className="u">2B</span></span>
              <span className="lbl">— Vybudováno od nuly</span>
              <span className="desc">segment, který se ukázal jako klíčový.</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="sluzby">
          <div className="head">
            <span className="num">— 02</span>
            <h2>Služby</h2>
          </div>
          <div className="grid3">
            <article className="svc">
              <span className="id">01 / Jednorázově</span>
              <h3>Obchodní<br/>audit</h3>
              <div className="price"><span className="from">od</span><span className="v">15 000 Kč</span><span className="per">Jednorázově</span></div>
              <p>Projdu váš obchod od leadu po deal. CRM, hovory, pipeline, konverze. Dostanete report s konkrétními prioritami.</p>
              <ul>
                <li>Mapování pipeline</li>
                <li>Analýza CRM &amp; dat</li>
                <li>Report &amp; akční plán</li>
              </ul>
            </article>
            <article className="svc">
              <span className="id">02 / Měsíčně</span>
              <h3>Coaching<br/>týmu</h3>
              <div className="price"><span className="from">od</span><span className="v">8 000 Kč</span><span className="per">Měsíčně</span></div>
              <p>Pravidelný feedback, přepis skriptů, individuální i skupinové session. Buduji tým, který umí prodávat konzultačně.</p>
              <ul>
                <li>1-on-1 sessions</li>
                <li>Call review &amp; skripty</li>
                <li>Skupinové workshopy</li>
              </ul>
            </article>
            <article className="svc">
              <span className="id">03 / Měsíčně</span>
              <h3>Externí obchodní<br/>ředitel</h3>
              <div className="price"><span className="from">od</span><span className="v">15 000 Kč</span><span className="per">Měsíčně</span></div>
              <p>Strategie, KPIs, pipeline review, forecasting, koučování. Vše bez fixních nákladů na plný úvazek.</p>
              <ul>
                <li>Strategie &amp; KPIs</li>
                <li>Forecasting &amp; pipeline</li>
                <li>Vedení týmu</li>
              </ul>
            </article>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process" id="proces">
          <div className="head">
            <span className="num">— 03</span>
            <h2>Proces</h2>
          </div>
          <div className="steps">
            <div className="s">
              <span className="id">01</span>
              <h4>Úvodní call</h4>
              <span className="dur">15 min · bez závazků</span>
              <p>Rychlé seznámení. Zjistím, kde dnes jste, kam chcete jít, a jestli si rozumíme.</p>
            </div>
            <div className="s">
              <span className="id">02</span>
              <h4>Audit</h4>
              <span className="dur">Report do týdne</span>
              <p>Projdu váš obchod, lidi, data, nástroje. Dostanete písemný akční plán s prioritami.</p>
            </div>
            <div className="s">
              <span className="id">03</span>
              <h4>Implementace</h4>
              <span className="dur">Procesy &amp; nástroje</span>
              <p>Nastavujeme procesy, automatizace, skripty, KPIs. Společně, krok po kroku.</p>
            </div>
            <div className="s">
              <span className="id">04</span>
              <h4>Výsledky</h4>
              <span className="dur">Měříme dopad</span>
              <p>Sledujeme konverzi, délku cyklu a hit-rate. Co nefunguje, ladíme. Co funguje, škálujeme.</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="o-mne">
          <div className="head">
            <span className="num">— 04</span>
            <h2>O mně</h2>
            <dl>
              <div><dt>Současná role</dt><dd>Obchodní ředitel <span className="acc">@ LifeScale Group</span></dd></div>
              <div><dt>Spoluzakladatel</dt><dd>FortiCore <span className="acc">— digitalizace &amp; automatizace</span></dd></div>
              <div><dt>Zaměření</dt><dd>Procesy, CRM, automatizace, coaching, L&amp;D</dd></div>
              <div><dt>Přístup</dt><dd><span className="acc">Konzultační</span> obchod — řešení reálné potřeby</dd></div>
            </dl>
          </div>
          <div className="body">
            <p className="lead">Hledám cesty, které <em>ještě nikdo</em> nešel.</p>
            <p>Minulý rok jsem přinesl polovinu obratu firmy. Mimo jiné tím, že mě napadlo zkusit cestu, kterou u nás ještě nikdo nešel — firemní vzdělávání jako B2B segment, který se ukázal jako klíčový. Ale nebylo to jen o prodeji. Zmapoval jsem dotační možnosti, které firmám otevřely cestu ke vzdělávání, a zformoval personální agenturu, která pomáhá studentům lépe se uplatnit na trhu práce.</p>
            <p>Vždycky mě bavilo hledat a vyšlapávat nové cesty — ideálně tam, kde pomůže automatizace místo dalšího člověka. Dnes jako obchodní ředitel v LifeScale Group propojuju svět firemního vzdělávání s reálnými obchodními výzvami firem. Věřím, že vzdělávání není školení z katalogu — je to nástroj, který řeší konkrétní byznysové problémy. Proto se na něj dívám očima konzultanta, ne školitele. Zároveň spoluzakládám FortiCore — pomáháme firmám digitalizovat a automatizovat firemní procesy.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="kontakt">
          <div className="head">
            <span className="num">— 05</span>
          </div>
          <div className="body">
            <h2>Řešíte, že váš obchod<br/><em>nefunguje</em> tak, jak by měl?</h2>
            <p>Ozvete se. Prvním klientům nabízím úvodní konzultaci zdarma — bez prezentací, bez závazků.</p>
            <div className="actions">
              <a className="btn" href="mailto:ondrej.kamaryt@gmail.com">Napsat email →</a>
            </div>
          </div>
          <div className="contact">
            <span>— Kontakt</span>
            <a href="mailto:ondrej.kamaryt@gmail.com">ondrej.kamaryt<br/>@gmail.com</a>
            <a href="tel:+420606786231">+420 606<br/>786 231</a>
          </div>
        </section>

        {/* FOOTER */}
        <div className="foot">
          <div className="col">© 2026 Ondřej Kamarýt</div>
          <div className="col">Set in Helvetica Neue</div>
          <div className="col"><a href="https://www.linkedin.com/in/ondrej-kamaryt/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
        </div>
      </div>
    </div>
  );
}

window.SwissVariation = SwissVariation;
