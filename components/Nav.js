import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/sobre-mim" },
  { key: "portfolio", href: "/portfolio" },
  { key: "contact", href: "/contato" },
];

export default function Nav() {
  const [loaded, setLoaded] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className={`nav ${loaded ? "nav--in" : ""}`}>
      <Link href="/" className="nav__logo">
        Gu<span>Orlandini</span>
      </Link>

      <ul className="nav__links">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className={router.pathname === item.href ? "active" : ""}
            >
              {t.nav[item.key]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lang-switcher">
        {["pt", "en", "es"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`lang-btn ${lang === l ? "lang-btn--active" : ""}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <style jsx>{`
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 5vw;
          position: relative;
          z-index: 10;
          opacity: 0;
          transform: translateY(-16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
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
          color: #e8eaf0;
          text-decoration: none;
        }
        .nav__logo :global(span) {
          color: #1a6bff;
        }

        .nav__links {
          display: flex;
          gap: 2.4rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav__links :global(a) {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #8a90a8;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }
        .nav__links :global(a)::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #1a6bff;
          transition: width 0.25s ease;
        }
        .nav__links :global(a:hover),
        .nav__links :global(a.active) {
          color: #e8eaf0;
        }
        .nav__links :global(a:hover)::after,
        .nav__links :global(a.active)::after {
          width: 100%;
        }

        .lang-switcher {
          display: flex;
          gap: 0.4rem;
        }
        .lang-btn {
          background: none;
          border: 1px solid rgba(26, 107, 255, 0.2);
          border-radius: 4px;
          color: #4a5090;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          font-family: "DM Sans", sans-serif;
        }
        .lang-btn:hover {
          border-color: #1a6bff;
          color: #1a6bff;
        }
        .lang-btn--active {
          border-color: #1a6bff;
          color: #1a6bff;
          background: rgba(26, 107, 255, 0.1);
        }

        @media (max-width: 768px) {
          .nav__links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
