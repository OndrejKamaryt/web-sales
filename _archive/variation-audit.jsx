// AUDIT — site as a real consulting proposal / deliverable document
// Cream paper, full serif, marginalia, footnotes, § numbered sections.

const auditStyles = `
.audit-v {
  --paper: #F2EDE2;
  --paper-2: #EAE3D4;
  --ink: #1A1612;
  --ink-2: #4A4138;
  --ink-3: #7B7165;
  --rule: rgba(26, 22, 18, 0.18);
  --rule-soft: rgba(26, 22, 18, 0.08);
  --stamp: #8A1F18;
  --serif: "Newsreader", "Source Serif Pro", "PT Serif", Georgia, serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 15px;
  line-height: 1.6;
  width: 100%;
  position: relative;
  padding: 0;
  overflow: hidden;
}
.audit-v * { box-sizing: border-box; }
.audit-v::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(ellipse at 20% 10%, rgba(180, 150, 100, 0.06), transparent 60%),
    radial-gradient(ellipse at 90% 80%, rgba(120, 80, 50, 0.05), transparent 50%),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.4   0 0 0 0 0.3   0 0 0 0 0.2   0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  opacity: 0.12;
  mix-blend-mode: multiply;
}
.audit-v .page {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 96px 96px;
  z-index: 1;
}
.audit-v .doc-mark {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 0.5px solid var(--ink);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-2);
}
.audit-v .doc-mark .left,
.audit-v .doc-mark .right { display: flex; flex-direction: column; gap: 4px; }
.audit-v .doc-mark .right { text-align: right; }
.audit-v .doc-mark .crest {
  font-family: var(--serif);
  font-style: italic;
  font-size: 18px;
  letter-spacing: 0;
  text-transform: none;
  color: var(--ink);
}

/* Cover area */
.audit-v .cover { padding: 72px 0 48px; position: relative; }
.audit-v .cover .kicker {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--stamp);
  margin-bottom: 32px;
}
.audit-v .cover h1 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 78px;
  line-height: 1.02;
  letter-spacing: -0.018em;
  margin: 0 0 32px;
  color: var(--ink);
  max-width: 880px;
}
.audit-v .cover h1 em { font-style: italic; color: var(--stamp); }
.audit-v .cover .sub {
  font-family: var(--serif);
  font-style: italic;
  font-size: 20px;
  line-height: 1.55;
  color: var(--ink-2);
  max-width: 640px;
  margin-top: 8px;
}
.audit-v .cover .meta {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 0.5px solid var(--ink);
  border-bottom: 0.5px solid var(--ink);
  padding: 18px 0;
}
.audit-v .cover .meta div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.audit-v .cover .meta .k {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-3);
}
.audit-v .cover .meta .v {
  font-family: var(--serif);
  font-size: 15px;
  color: var(--ink);
  font-style: italic;
}
.audit-v .cover .stamp {
  position: absolute;
  top: 80px;
  right: 0;
  transform: rotate(-8deg);
  border: 2px solid var(--stamp);
  color: var(--stamp);
  padding: 10px 18px 8px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.85;
  font-weight: 600;
  background: transparent;
}

/* Table of contents */
.audit-v .toc {
  margin: 56px 0 80px;
  padding: 32px 0 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 56px;
}
.audit-v .toc h6 {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin: 0;
  font-weight: 400;
}
.audit-v .toc ol {
  margin: 0; padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  column-count: 2;
  column-gap: 56px;
}
.audit-v .toc li {
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-family: var(--serif);
  font-size: 16px;
  break-inside: avoid;
  padding: 4px 0;
}
.audit-v .toc .num { font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; color: var(--ink-3); min-width: 28px; }
.audit-v .toc .title { flex: 1; }
.audit-v .toc .dots { flex: 1; border-bottom: 1px dotted var(--rule); transform: translateY(-4px); margin: 0 8px; }
.audit-v .toc .pg { font-family: var(--mono); font-size: 11px; color: var(--ink-3); }

/* Section blocks with marginalia */
.audit-v .section {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 48px;
  padding: 56px 0;
  border-top: 0.5px solid var(--ink);
  position: relative;
}
.audit-v .section .gutter {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.audit-v .section .gutter .marker {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--stamp);
}
.audit-v .section .gutter h2 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 30px;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}
.audit-v .section .gutter h2 em { font-style: italic; color: var(--stamp); }
.audit-v .section .gutter .note {
  font-family: var(--serif);
  font-style: italic;
  font-size: 13px;
  line-height: 1.55;
  color: var(--ink-3);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 0.5px dashed var(--rule);
}
.audit-v .section .gutter .note .lbl {
  font-family: var(--mono);
  font-style: normal;
  font-size: 9px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  color: var(--ink-3);
}
.audit-v .section .body { display: flex; flex-direction: column; gap: 18px; }
.audit-v .section .body p {
  font-family: var(--serif);
  font-size: 17px;
  line-height: 1.7;
  color: var(--ink);
  text-align: justify;
  hyphens: auto;
  margin: 0;
}
.audit-v .section .body p.lead {
  font-size: 22px;
  line-height: 1.55;
  font-style: italic;
  color: var(--ink);
}
.audit-v .section .body p.lead::first-letter {
  font-size: 3.2em;
  float: left;
  line-height: 0.92;
  margin: 4px 12px -6px -2px;
  font-style: normal;
  font-weight: 400;
  color: var(--stamp);
}

/* Stats — Track record */
.audit-v .stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 12px;
}
.audit-v .stats .stat {
  padding: 24px 24px 24px 0;
  border-right: 0.5px solid var(--rule);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.audit-v .stats .stat:last-child { border-right: 0; }
.audit-v .stats .stat:not(:first-child) { padding-left: 24px; }
.audit-v .stats .num {
  font-family: var(--serif);
  font-size: 64px;
  line-height: 0.95;
  color: var(--ink);
  font-weight: 400;
  letter-spacing: -0.03em;
}
.audit-v .stats .num em { font-style: italic; color: var(--stamp); font-size: 0.6em; margin-left: 2px; }
.audit-v .stats .desc { font-family: var(--serif); font-style: italic; font-size: 14px; line-height: 1.5; color: var(--ink-2); }
.audit-v .stats .ref { font-family: var(--mono); font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }

/* Engagement table */
.audit-v table.engagements {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-family: var(--serif);
}
.audit-v table.engagements thead th {
  text-align: left;
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-3);
  font-weight: 400;
  padding: 0 0 12px;
  border-bottom: 0.5px solid var(--ink);
}
.audit-v table.engagements tbody td {
  padding: 22px 0;
  border-bottom: 0.5px solid var(--rule);
  vertical-align: top;
  font-size: 15px;
  line-height: 1.6;
}
.audit-v table.engagements tbody td.title-cell {
  font-family: var(--serif);
  font-size: 22px;
  width: 28%;
  padding-right: 16px;
}
.audit-v table.engagements tbody td.title-cell em { font-style: italic; color: var(--stamp); display: block; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-family: var(--mono); margin-bottom: 4px; }
.audit-v table.engagements tbody td.desc-cell { width: 40%; color: var(--ink-2); padding-right: 24px; font-size: 14px; }
.audit-v table.engagements tbody td.price-cell {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--ink);
  text-align: right;
  white-space: nowrap;
}
.audit-v table.engagements tbody td.price-cell .from { font-family: var(--serif); font-style: italic; font-size: 12px; color: var(--ink-3); margin-right: 4px; }
.audit-v table.engagements tbody td.price-cell .per { display: block; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); margin-top: 4px; }

/* Process steps - roman numerals */
.audit-v .steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 4px;
}
.audit-v .step {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 0.5px solid var(--ink);
}
.audit-v .step .rn {
  font-family: var(--serif);
  font-style: italic;
  font-size: 24px;
  color: var(--stamp);
  margin-bottom: 4px;
}
.audit-v .step h4 {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  letter-spacing: -0.005em;
}
.audit-v .step .dur {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-3);
}
.audit-v .step p {
  font-family: var(--serif);
  font-size: 13px;
  line-height: 1.55;
  color: var(--ink-2);
}

/* Footnotes */
.audit-v .footnotes {
  margin-top: 12px;
  padding-top: 16px;
  border-top: 0.5px dashed var(--rule);
  font-family: var(--serif);
  font-size: 12px;
  line-height: 1.55;
  color: var(--ink-3);
}
.audit-v .footnotes p { margin: 0 0 6px; font-size: 12px; }
.audit-v .footnotes sup { color: var(--stamp); font-weight: 600; margin-right: 4px; }
.audit-v .fn { color: var(--stamp); font-size: 0.7em; vertical-align: super; font-weight: 600; line-height: 0; margin-left: 1px; }

/* Closing / signature */
.audit-v .closing {
  margin-top: 64px;
  padding: 56px 0 0;
  border-top: 2px double var(--ink);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: end;
}
.audit-v .closing .pitch h3 {
  font-family: var(--serif);
  font-style: italic;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.audit-v .closing .pitch p { font-size: 15px; line-height: 1.6; color: var(--ink-2); margin-bottom: 18px; }
.audit-v .closing .pitch a.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--paper);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;
}
.audit-v .closing .pitch a.btn:hover { background: var(--stamp); border-color: var(--stamp); }
.audit-v .closing .sig {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.audit-v .closing .sig .sig-img {
  font-family: "Snell Roundhand", "Brush Script MT", "Lucida Handwriting", cursive;
  font-style: italic;
  font-size: 44px;
  color: var(--stamp);
  line-height: 1;
  margin-bottom: 6px;
  transform: rotate(-3deg);
  letter-spacing: -0.02em;
}
.audit-v .closing .sig .line {
  width: 280px;
  border-bottom: 0.5px solid var(--ink);
  margin-bottom: 8px;
}
.audit-v .closing .sig .name { font-family: var(--serif); font-size: 15px; color: var(--ink); }
.audit-v .closing .sig .role { font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }
.audit-v .closing .sig .contact {
  margin-top: 18px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--ink-2);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.audit-v .colophon {
  margin-top: 64px;
  padding-top: 18px;
  border-top: 0.5px solid var(--ink);
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-3);
}
`;

function AuditVariation() {
  return (
    <div className="audit-v">
      <style>{auditStyles}</style>
      <div className="page">
        <div className="doc-mark">
          <div className="left">
            <span>Confidential · Proposal</span>
            <span>No. 2026 / 001</span>
          </div>
          <div className="crest">Ondřej Kamarýt &middot; <em style={{fontStyle:'italic'}}>Sales Consulting</em></div>
          <div className="right">
            <span>Praha · CZ</span>
            <span>Květen 2026</span>
          </div>
        </div>

        {/* COVER */}
        <div className="cover">
          <div className="stamp">Open for inquiry</div>
          <div className="kicker">— Engagement Proposal · čj. 001/26</div>
          <h1>
            Stavím obchodní procesy,<br/>
            které fungují <em>predikovatelně.</em>
          </h1>
          <p className="sub">
            Nastavení obchodu, automatizace rutiny a koučování týmu — pro firmy, kde výsledky nemají být o náhodě, ale o systému.
          </p>

          <div className="meta">
            <div><span className="k">Prepared by</span><span className="v">Ondřej Kamarýt</span></div>
            <div><span className="k">Date</span><span className="v">Květen 2026</span></div>
            <div><span className="k">Pages</span><span className="v">8</span></div>
            <div><span className="k">Status</span><span className="v">Draft</span></div>
          </div>
        </div>

        {/* TOC */}
        <div className="toc">
          <h6>— Obsah</h6>
          <ol>
            <li><span className="num">§ 1.0</span><span className="title">Executive Summary</span><span className="dots"></span><span className="pg">02</span></li>
            <li><span className="num">§ 2.0</span><span className="title">Track Record</span><span className="dots"></span><span className="pg">03</span></li>
            <li><span className="num">§ 3.0</span><span className="title">Engagement Models</span><span className="dots"></span><span className="pg">04</span></li>
            <li><span className="num">§ 4.0</span><span className="title">Methodology</span><span className="dots"></span><span className="pg">06</span></li>
            <li><span className="num">§ 5.0</span><span className="title">About the Consultant</span><span className="dots"></span><span className="pg">07</span></li>
            <li><span className="num">§ 6.0</span><span className="title">Next Steps</span><span className="dots"></span><span className="pg">08</span></li>
          </ol>
        </div>

        {/* § 1.0 Executive Summary */}
        <div className="section">
          <div className="gutter">
            <span className="marker">§ 1.0</span>
            <h2>Executive<br/>Summary</h2>
            <div className="note">
              <span className="lbl">— Pozn. autora</span>
              Tento dokument supluje běžnou home­page. Jeho forma sama je odpovědí na otázku: <em>„Co od spolupráce čekat?"</em>
            </div>
          </div>
          <div className="body">
            <p className="lead">
              Pomáhám firmám nastavit obchod, automatizovat rutinu a koučovat tým — aby výsledky nebyly o náhodě, ale o systému<span className="fn">1</span>.
            </p>
            <p>
              Posledních pět let stavím obchodní funkce pro firmy, které vyrostly z fáze, kdy „prodával zakladatel", ale nedostaly se ještě do fáze řízeného obchodu. Typicky řeším tři věci současně: <em>(i)</em> proč pipeline nedokáže předpovídat, <em>(ii)</em> kde se v rutině spaluje čas, který by měl jít do hovorů, a <em>(iii)</em> proč obchodníci nedělají to, na co byli najati.
            </p>
            <p>
              Výstupem je systém — ne školení, ne SaaS, ne deck. Funkční obchodní operations, který firma po skončení spolupráce drží sama.
            </p>
            <div className="footnotes">
              <p><sup>1</sup> Systém ≠ rigidita. Systém = opakovatelné rozhodování. Když odejde top obchodník, výkon se nezhroutí.</p>
            </div>
          </div>
        </div>

        {/* § 2.0 Track Record */}
        <div className="section">
          <div className="gutter">
            <span className="marker">§ 2.0</span>
            <h2>Track <em>Record</em></h2>
            <div className="note">
              <span className="lbl">— Reference</span>
              Vybraná data za fiskální rok 2025, LifeScale Group a partneři.
            </div>
          </div>
          <div className="body">
            <div className="stats">
              <div className="stat">
                <span className="num">50<em>%</em></span>
                <span className="desc">obratu firmy, osobní přínos za poslední rok</span>
                <span className="ref">— Lifescale 2025</span>
              </div>
              <div className="stat">
                <span className="num">6<em>h</em></span>
                <span className="desc">týdně ušetřených jedinou automatizací rutinního procesu</span>
                <span className="ref">— FortiCore 2025</span>
              </div>
              <div className="stat">
                <span className="num">B<em>2B</em></span>
                <span className="desc">segment, který jsem postavil od nuly a ukázal se jako klíčový</span>
                <span className="ref">— Lifescale 2024–25</span>
              </div>
            </div>
            <p style={{marginTop:'12px'}}>
              Vedle čísel: zmapování dotačních možností, které firmám otevřely cestu ke vzdělávání; spoluzaložení personální agentury pro studenty; spoluzaložení <em>FortiCore</em> (digitalizace a automatizace firemních procesů).
            </p>
          </div>
        </div>

        {/* § 3.0 Engagement Models */}
        <div className="section">
          <div className="gutter">
            <span className="marker">§ 3.0</span>
            <h2>Engagement <em>Models</em></h2>
            <div className="note">
              <span className="lbl">— Pozn.</span>
              Ceny jsou výchozí, finální nabídka vždy reflektuje rozsah. Prvním klientům jeden krok zdarma.
            </div>
          </div>
          <div className="body">
            <table className="engagements">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Popis</th>
                  <th style={{textAlign:'right'}}>Investice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="title-cell"><em>3.1 · Jednorázově</em>Obchodní audit</td>
                  <td className="desc-cell">Projdu váš obchod od leadu po deal. CRM, hovory, pipeline, konverze. Dostanete písemný report s konkrétními prioritami a akčním plánem.</td>
                  <td className="price-cell"><span className="from">od</span>15 000 Kč<span className="per">Jednorázově</span></td>
                </tr>
                <tr>
                  <td className="title-cell"><em>3.2 · Měsíčně</em>Coaching týmu</td>
                  <td className="desc-cell">Pravidelný feedback, přepis skriptů, individuální i skupinové sessions. Buduji tým, který umí prodávat konzultačně.</td>
                  <td className="price-cell"><span className="from">od</span>8 000 Kč<span className="per">Měsíčně</span></td>
                </tr>
                <tr>
                  <td className="title-cell"><em>3.3 · Měsíčně</em>Externí obchodní ředitel</td>
                  <td className="desc-cell">Strategie, KPIs, pipeline review, forecasting, koučování. Vše bez fixních nákladů na plný úvazek.</td>
                  <td className="price-cell"><span className="from">od</span>15 000 Kč<span className="per">Měsíčně</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* § 4.0 Methodology */}
        <div className="section">
          <div className="gutter">
            <span className="marker">§ 4.0</span>
            <h2>Methodology</h2>
            <div className="note">
              <span className="lbl">— Princip</span>
              Žádné prezentace, žádný marketing. Jen audit, plán, implementace a měření.
            </div>
          </div>
          <div className="body">
            <div className="steps">
              <div className="step">
                <span className="rn">I.</span>
                <h4>Úvodní call</h4>
                <span className="dur">15 min · bez závazků</span>
                <p>Rychlé seznámení. Zjistím, kde dnes jste, kam chcete jít, a jestli si rozumíme.</p>
              </div>
              <div className="step">
                <span className="rn">II.</span>
                <h4>Audit</h4>
                <span className="dur">Report do týdne</span>
                <p>Projdu váš obchod, lidi, data, nástroje. Dostanete písemný akční plán s prioritami.</p>
              </div>
              <div className="step">
                <span className="rn">III.</span>
                <h4>Implementace</h4>
                <span className="dur">Procesy &amp; nástroje</span>
                <p>Nastavujeme procesy, automatizace, skripty, KPIs. Společně, krok po kroku.</p>
              </div>
              <div className="step">
                <span className="rn">IV.</span>
                <h4>Měření</h4>
                <span className="dur">Konverze · Cyklus · Hit-rate</span>
                <p>Sledujeme dopad. Co nefunguje, ladíme. Co funguje, škálujeme.</p>
              </div>
            </div>
          </div>
        </div>

        {/* § 5.0 About */}
        <div className="section">
          <div className="gutter">
            <span className="marker">§ 5.0</span>
            <h2>About the<br/><em>Consultant</em></h2>
            <div className="note">
              <span className="lbl">— Krátký profil</span>
              Obchodní ředitel @ LifeScale Group. Spolu­zakladatel FortiCore. Sales consultant.
            </div>
          </div>
          <div className="body">
            <p className="lead">
              Minulý rok jsem přinesl polovinu obratu firmy. Mimo jiné tím, že mě napadlo zkusit cestu, kterou u nás ještě nikdo nešel — firemní vzdělávání jako B2B segment.
            </p>
            <p>
              Ale nebylo to jen o prodeji. Zmapoval jsem dotační možnosti, které firmám otevřely cestu ke vzdělávání, a zformoval personální agenturu, která pomáhá studentům lépe se uplatnit na trhu práce. Vždycky mě bavilo hledat a vyšlapávat nové cesty — ideálně tam, kde pomůže automatizace místo dalšího člověka.
            </p>
            <p>
              Dnes jako obchodní ředitel v <em>LifeScale Group</em> propojuju svět firemního vzdělávání s reálnými obchodními výzvami firem. Věřím, že vzdělávání není školení z katalogu — je to nástroj, který řeší konkrétní byznysové problémy. Proto se na něj dívám očima konzultanta, ne školitele. Zároveň spoluzakládám <em>FortiCore</em> — pomáháme firmám digitalizovat a automatizovat firemní procesy.
            </p>
          </div>
        </div>

        {/* § 6.0 Next Steps / closing */}
        <div className="closing">
          <div className="pitch">
            <span style={{fontFamily:'var(--mono)', fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--stamp)'}}>§ 6.0 · Next Steps</span>
            <h3>Řešíte, že váš obchod nefunguje<br/>tak, jak by měl?</h3>
            <p>Ozvete se. Prvním klientům nabízím úvodní konzultaci zdarma — bez prezentací, bez závazků.</p>
            <a href="mailto:ondrej.kamaryt@gmail.com" className="btn">Napsat email →</a>
          </div>
          <div className="sig">
            <span className="sig-img">Ondřej Kamarýt</span>
            <div className="line"></div>
            <span className="name">Ondřej Kamarýt</span>
            <span className="role">Sales Consultant · Praha</span>
            <div className="contact">
              <span>ondrej.kamaryt@gmail.com</span>
              <span>+420 606 786 231</span>
              <span>linkedin.com/in/ondrej-kamaryt</span>
            </div>
          </div>
        </div>

        <div className="colophon">
          <span>© MMXXVI · Ondřej Kamarýt</span>
          <span>Doc. v1.0 — set in Newsreader &amp; JetBrains Mono</span>
          <span>Page 08 / 08</span>
        </div>
      </div>
    </div>
  );
}

window.AuditVariation = AuditVariation;
