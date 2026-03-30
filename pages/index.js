import Head from "next/head";
import { useEffect, useState } from "react";

const CONTENT = {
  name: "Gustavo Orlandini",
  role: "Desenvolvedor Web",
  tagline:
    "Formado em Ciência da Computação pela UNIOESTE, com foco em Desenvolvimento Web e Engenharia de Software. Atuação consolidada em liderança técnica, gestão de equipes e engenharia de requisitos, com forte domínio de soft skills aplicadas ao contexto de qualidade de software.",
  ctaLabel: "Me contrate",
  ctaHref: "mailto:guorlandini@outlook.com",
  photo: "/gustavo.png",
  navLinks: ["Página Inicial", "Sobre", "Serviços", "Portfólio", "Contato"],
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // efeito do cursor glow
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>{CONTENT.name} — Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="root">
        {/* ── NAV ── */}
        <nav className={`nav ${loaded ? "nav--in" : ""}`}>
          <span className="nav__logo">
            Gu<span>Orlandini</span>
          </span>
          <ul className="nav__links">
            {CONTENT.navLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── HERO ── */}
        <main className="hero">
          {/* left column */}
          <div className={`hero__text ${loaded ? "hero__text--in" : ""}`}>
            <p className="hero__eyebrow">Bem vindo ao meu portfólio</p>
            <h1 className="hero__name">{CONTENT.name}</h1>
            <h2 className="hero__role">
              <span className="hero__role-accent">{CONTENT.role}</span>
              <span className="hero__cursor">|</span>
            </h2>
            <p className="hero__tagline">{CONTENT.tagline}</p>
            <a href={CONTENT.ctaHref} className="hero__cta">
              {CONTENT.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* social dots */}
            <div className="social">
              {["pt", "in", "es"].map((s) => (
                <a key={s} href="#" className="social__dot">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* right column — photo */}
          <div className={`hero__photo-wrap ${loaded ? "hero__photo-wrap--in" : ""}`}>
            <div className="hero__photo-bg" />
            <img src={CONTENT.photo} alt={CONTENT.name} className="hero__photo" />
            <div className="hero__photo-ring" />
          </div>

          {/* scroll hint */}
          <div className="scroll-hint">
            <div className="scroll-hint__track">
              <div className="scroll-hint__thumb" />
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          height: 100%;
          background: #06060c;
          color: #e8eaf0;
          font-family: "DM Sans", sans-serif;
          overflow-x: hidden;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        ul {
          list-style: none;
        }
      `}</style>

      <style jsx>{`
        /* ── ROOT ── */
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

        /* ── NAV ── */
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 5vw;
          position: relative;
          z-index: 10;
          opacity: 0;
          transform: translateY(-16px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }
        .nav--in {
          opacity: 1;
          transform: translateY(0);
        }

        .nav__logo {
          font-family: "Syne", sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .nav__logo span {
          color: #1a6bff;
        }

        .nav__links {
          display: flex;
          gap: 2.4rem;
        }
        .nav__links a {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #8a90a8;
          transition: color 0.2s;
          position: relative;
        }
        .nav__links a::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #1a6bff;
          transition: width 0.25s ease;
        }
        .nav__links a:hover {
          color: #e8eaf0;
        }
        .nav__links a:hover::after {
          width: 100%;
        }

        /* ── HERO ── */
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

        /* text */
        .hero__text {
          opacity: 0;
          transform: translateX(-32px);
          transition:
            opacity 0.7s ease 0.2s,
            transform 0.7s ease 0.2s;
        }
        .hero__text--in {
          opacity: 1;
          transform: translateX(0);
        }

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
        .hero__role-accent {
          color: #1a6bff;
        }
        .hero__cursor {
          display: inline-block;
          color: #1a6bff;
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
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
          transition:
            background 0.2s,
            transform 0.15s,
            box-shadow 0.2s;
          box-shadow: 0 0 0 0 rgba(26, 107, 255, 0.4);
          margin-bottom: 2.8rem;
        }
        .hero__cta:hover {
          background: #0f56e0;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(26, 107, 255, 0.35);
        }

        /* social */
        .social {
          display: flex;
          gap: 0.7rem;
        }
        .social__dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(26, 107, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #4a5090;
          letter-spacing: 0;
          transition:
            border-color 0.2s,
            color 0.2s,
            background 0.2s;
        }
        .social__dot:hover {
          border-color: #1a6bff;
          color: #1a6bff;
          background: rgba(26, 107, 255, 0.08);
        }

        /* photo */
        .hero__photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          opacity: 0;
          transform: translateX(32px);
          transition:
            opacity 0.7s ease 0.35s,
            transform 0.7s ease 0.35s;
        }
        .hero__photo-wrap--in {
          opacity: 1;
          transform: translateX(0);
        }

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
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .hero__badge {
          position: absolute;
          bottom: 20px;
          left: 0;
          background: rgba(6, 6, 20, 0.85);
          border: 1px solid rgba(26, 107, 255, 0.3);
          backdrop-filter: blur(12px);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #aab0d0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 3;
        }
        .hero__badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22d46a;
          box-shadow: 0 0 8px #22d46a;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        /* scroll hint */
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
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(400%);
            opacity: 0;
          }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 2rem;
          }
          .hero__photo-wrap {
            order: -1;
          }
          .hero__tagline {
            margin-inline: auto;
          }
          .social {
            justify-content: center;
          }
          .scroll-hint {
            display: none;
          }
          .nav__links {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
