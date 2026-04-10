import Head from "next/head";
import Nav from "../components/Nav";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";

const CONTATOS = [
  { label: "E-mail", value: "guorlandini@outlook.com", href: "mailto:guorlandini@outlook.com", icon: "✉" },
  { label: "Telefone / Phone", value: "+55 44 99804-0460", href: "tel:+5544998040460", icon: "☎" },
  { label: "LinkedIn", value: "linkedin.com/in/guorlandini", href: "https://linkedin.com/in/guorlandini", icon: "in" },
  { label: "GitHub", value: "github.com/GuOrlandini", href: "https://github.com/GuOrlandini", icon: "gh" },
];

export default function Contato() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>{t.contact.title} — Gustavo Orlandini</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="root">
        <Nav />

        <main className={`content ${loaded ? "content--in" : ""}`}>
          <header className="page-header">
            <p className="page-eyebrow">{t.contact.eyebrow}</p>
            <h1 className="page-title">{t.contact.title}</h1>
            <p className="page-intro">{t.contact.intro}</p>
          </header>

          <div className="grid">
            {CONTATOS.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card">
                <span className="card__icon">{c.icon}</span>
                <div>
                  <p className="card__label">{c.label}</p>
                  <p className="card__value">{c.value}</p>
                </div>
                <span className="card__arrow">→</span>
              </a>
            ))}
          </div>
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
          background: radial-gradient(ellipse 50% 40% at 50% 30%, rgba(26,107,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .content {
          max-width: 720px;
          margin: 0 auto;
          padding: 3rem 5vw 6rem;
          width: 100%;
          position: relative;
          z-index: 1;
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
          margin-bottom: 1rem;
        }
        .page-intro {
          font-size: 1rem;
          line-height: 1.75;
          color: #6a7090;
          margin-bottom: 3rem;
        }

        .grid { display: flex; flex-direction: column; gap: 1rem; }

        .card {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(26,107,255,0.15);
          border-radius: 10px;
          padding: 1.4rem 1.6rem;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          cursor: pointer;
        }
        .card:hover {
          border-color: rgba(26,107,255,0.5);
          background: rgba(26,107,255,0.06);
          transform: translateX(4px);
        }

        .card__icon {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(26,107,255,0.12);
          border: 1px solid rgba(26,107,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          color: #1a6bff;
        }

        .card__label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4a5090;
          margin-bottom: 0.25rem;
        }
        .card__value { font-size: 1rem; font-weight: 500; color: #e8eaf0; }

        .card__arrow {
          margin-left: auto;
          font-size: 1.1rem;
          color: #1a6bff;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
        }
        .card:hover .card__arrow { opacity: 1; transform: translateX(4px); }

        @media (max-width: 600px) {
          .nav__links { display: none; }
        }
      `}</style>
    </>
  );
}
