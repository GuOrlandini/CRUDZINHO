import Head from "next/head";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo Orlandini — Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="root">
        <Nav />

        {/* ── HERO ── */}
        <main className="hero">
          <div className={`hero__text ${loaded ? "hero__text--in" : ""}`}>
            <p className="hero__eyebrow">{t.home.eyebrow}</p>
            <h1 className="hero__name">Gustavo Orlandini</h1>
            <h2 className="hero__role">
              <span className="hero__role-accent">{t.home.role}</span>
              <span className="hero__cursor">|</span>
            </h2>
            <p className="hero__tagline">{t.home.tagline}</p>
            <a href="mailto:guorlandini@outlook.com" className="hero__cta">
              {t.home.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={`hero__photo-wrap ${loaded ? "hero__photo-wrap--in" : ""}`}>
            <div className="hero__photo-bg" />
            <img src="/gustavo.png" alt="Gustavo Orlandini" className="hero__photo" />
            <div className="hero__photo-ring" />
          </div>

          <div className="scroll-hint">
            <div className="scroll-hint__track">
              <div className="scroll-hint__thumb" />
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          height: 100%;
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
          overflow: hidden;
        }
        .root::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26, 107, 255, 0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0, 60, 180, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          padding: 0 5vw 4rem;
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        .hero__text {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .hero__text--in { opacity: 1; transform: translateX(0); }

        .hero__eyebrow {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a6bff;
          margin-bottom: 1rem;
        }

        .hero__name {
          font-family: "Syne", sans-serif;
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin-bottom: 0.6rem;
        }

        .hero__role {
          font-family: "Syne", sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 700;
          color: #5a6080;
          margin-bottom: 1.6rem;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .hero__role-accent { color: #1a6bff; }
        .hero__cursor {
          display: inline-block;
          color: #1a6bff;
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero__tagline {
          font-size: 1rem;
          line-height: 1.75;
          color: #6a7090;
          max-width: 42ch;
          margin-bottom: 2.4rem;
        }

        .hero__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #1a6bff;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.85rem 2rem;
          border-radius: 3px;
          letter-spacing: 0.04em;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 0 0 0 rgba(26, 107, 255, 0.4);
          margin-bottom: 2.8rem;
        }
        .hero__cta:hover {
          background: #0f56e0;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(26, 107, 255, 0.35);
        }

        .hero__photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s;
        }
        .hero__photo-wrap--in { opacity: 1; transform: translateX(0); }

        .hero__photo-bg {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          height: 88%;
          background: linear-gradient(160deg, rgba(26, 107, 255, 0.15), rgba(0, 30, 100, 0.3));
          border-radius: 12px 12px 0 0;
          border: 1px solid rgba(26, 107, 255, 0.15);
        }

        .hero__photo {
          position: relative;
          z-index: 2;
          width: min(380px, 80%);
          height: 380px;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 10px 10px 0 0;
          filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.6));
        }

        .hero__photo-ring {
          position: absolute;
          top: -24px;
          right: 8%;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1.5px dashed rgba(26, 107, 255, 0.35);
          animation: spin 18s linear infinite;
          z-index: 1;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          z-index: 5;
        }
        .scroll-hint__track {
          width: 1.5px;
          height: 64px;
          background: rgba(26, 107, 255, 0.15);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }
        .scroll-hint__thumb {
          width: 100%;
          height: 30%;
          background: #1a6bff;
          border-radius: 999px;
          animation: scrollDown 2.2s ease-in-out infinite;
        }
        @keyframes scrollDown {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; text-align: center; padding-top: 2rem; }
          .hero__photo-wrap { order: -1; }
          .hero__tagline { margin-inline: auto; }
          .scroll-hint { display: none; }
        }
      `}</style>
    </>
  );
}
