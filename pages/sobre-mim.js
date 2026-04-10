import Head from "next/head";
import Nav from "../components/Nav";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";

const EMPRESAS = ["Redz", "Codeflow", "BIT Empresa Jr."];
const LOCAIS_EXP = ["Cascavel", "Cascavel", "UNIOESTE, Cascavel"];
const PERIODOS_EXP = ["Out 2023 – Set 2025", "Jul 2023 – Out 2023", "Jun 2022 – Jun 2023"];

const INSTITUICOES = ["UNIOESTE", "CNA"];
const LOCAIS_EDU = ["Cascavel", "Umuarama"];
const PERIODOS_EDU = ["Jan 2019 – Fev 2026", "Jan 2015 – Dez 2018"];

export default function SobreMim() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>{t.about.title} — Gustavo Orlandini</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="root">
        <Nav />

        <main className={`content ${loaded ? "content--in" : ""}`}>
          <header className="page-header">
            <p className="page-eyebrow">{t.about.eyebrow}</p>
            <h1 className="page-title">{t.about.title}</h1>
            <p className="page-intro">{t.about.intro}</p>
          </header>

          <section className="section">
            <h2 className="section__title">{t.about.expTitle}</h2>
            <div className="timeline">
              {t.about.experiences.map((e, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__dot" />
                  <div className="timeline__body">
                    <div className="timeline__header">
                      <span className="timeline__empresa">{EMPRESAS[i]}</span>
                      <span className="timeline__local">{LOCAIS_EXP[i]}</span>
                      <span className="timeline__periodo">{PERIODOS_EXP[i]}</span>
                    </div>
                    <p className="timeline__cargo">{e.cargo}</p>
                    <p className="timeline__desc">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section__title">{t.about.eduTitle}</h2>
            <div className="timeline">
              {t.about.education.map((f, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__dot" />
                  <div className="timeline__body">
                    <div className="timeline__header">
                      <span className="timeline__empresa">{INSTITUICOES[i]}</span>
                      <span className="timeline__local">{LOCAIS_EDU[i]}</span>
                      <span className="timeline__periodo">{PERIODOS_EDU[i]}</span>
                    </div>
                    <p className="timeline__cargo">{f.curso}</p>
                    <p className="timeline__desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section__title">{t.about.skillsTitle}</h2>
            <ul className="skills">
              {t.about.skills.map((s) => (
                <li key={s} className="skills__item">{s}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h2 className="section__title">{t.about.certsTitle}</h2>
            <div className="cards">
              <div className="card">
                <p className="card__label">{t.about.certLabel}</p>
                <p className="card__value">{t.about.certValue}</p>
                <p className="card__sub">{t.about.certSub}</p>
              </div>
              <div className="card">
                <p className="card__label">{t.about.langLabel}</p>
                <p className="card__value">{t.about.langValue}</p>
                <p className="card__sub">{t.about.langSub}</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          background: #06060c;
          color: #e8eaf0;
          font-family: "DM Sans", sans-serif;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }
      `}</style>

      <style jsx>{`
        .root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #06060c;
          position: relative;
        }
        .root::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 70% 20%, rgba(26,107,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .content {
          max-width: 860px;
          margin: 0 auto;
          padding: 3rem 5vw 6rem;
          width: 100%;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .content--in { opacity: 1; transform: translateY(0); }

        .page-eyebrow {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a6bff;
          margin-bottom: 0.6rem;
        }
        .page-title {
          font-family: "Syne", sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin-bottom: 1.2rem;
        }
        .page-intro {
          font-size: 1rem;
          line-height: 1.75;
          color: #6a7090;
          max-width: 68ch;
          margin-bottom: 3.5rem;
        }

        .section { margin-bottom: 3.5rem; }
        .section__title {
          font-family: "Syne", sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a6bff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.6rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(26,107,255,0.2);
        }

        .timeline { display: flex; flex-direction: column; gap: 2rem; }
        .timeline__item { display: flex; gap: 1.2rem; }
        .timeline__dot {
          flex-shrink: 0;
          margin-top: 6px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #1a6bff;
          box-shadow: 0 0 8px rgba(26,107,255,0.5);
        }
        .timeline__body { flex: 1; }
        .timeline__header {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.3rem;
        }
        .timeline__empresa {
          font-family: "Syne", sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #e8eaf0;
        }
        .timeline__local { color: #6a7090; font-size: 0.85rem; }
        .timeline__periodo {
          margin-left: auto;
          font-size: 0.8rem;
          color: #4a5090;
          white-space: nowrap;
        }
        .timeline__cargo {
          font-size: 0.9rem;
          color: #8a90a8;
          font-style: italic;
          margin-bottom: 0.6rem;
        }
        .timeline__desc { font-size: 0.92rem; line-height: 1.7; color: #6a7090; }

        .skills { display: flex; flex-wrap: wrap; gap: 0.7rem; }
        .skills__item {
          background: rgba(26,107,255,0.08);
          border: 1px solid rgba(26,107,255,0.2);
          border-radius: 999px;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: #aab0d0;
        }

        .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(26,107,255,0.15);
          border-radius: 8px;
          padding: 1.4rem;
        }
        .card__label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a6bff;
          margin-bottom: 0.5rem;
        }
        .card__value {
          font-family: "Syne", sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #e8eaf0;
          margin-bottom: 0.4rem;
        }
        .card__sub { font-size: 0.85rem; color: #6a7090; line-height: 1.5; }

        @media (max-width: 600px) {
          .cards { grid-template-columns: 1fr; }
          .timeline__periodo { margin-left: 0; }
        }
      `}</style>
    </>
  );
}
