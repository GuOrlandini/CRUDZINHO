import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>{t.nav.portfolio} — Gustavo Orlandini</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="root">
        <Nav />

        <main className={`center ${loaded ? "center--in" : ""}`}>
          <div className="icon">🚧</div>
          <h1 className="title">{t.portfolio.title}</h1>
          <p className="sub">{t.portfolio.sub}</p>
          <Link href="/" className="btn">{t.portfolio.back}</Link>
        </main>
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          height: 100%;
          background: #06060c;
          color: #e8eaf0;
          font-family: "DM Sans", sans-serif;
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
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .center--in { opacity: 1; transform: translateY(0); }
        .icon { font-size: 3rem; margin-bottom: 1.2rem; }
        .title {
          font-family: "Syne", sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #f0f2ff;
          margin-bottom: 0.8rem;
        }
        .sub { color: #6a7090; max-width: 360px; margin-bottom: 2rem; line-height: 1.6; }
        .btn {
          background: #1a6bff;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.85rem 2rem;
          border-radius: 3px;
          transition: background 0.2s, transform 0.15s;
        }
        .btn:hover { background: #0f56e0; transform: translateY(-2px); }
      `}</style>
    </>
  );
}
