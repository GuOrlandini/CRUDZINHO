import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONTENT = {
  name: "Gustavo Orlandini",
  navLinks: ["Página Inicial", "Sobre Mim", "Portfólio", "Contato"],
};

const routes = {
  "Página Inicial": "/",
  "Sobre Mim": "/sobre-mim",
  "Portfólio": "/portfolio",
  "Contato": "/contato",
};

export default function Layout({ children }) {
  const [loaded, setLoaded] = useState(false);

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
        {/* NAV */}
        <nav className={`nav ${loaded ? "nav--in" : ""}`}>
          <span className="nav__logo">
            Gu<span>Orlandini</span>
          </span>

          <ul className="nav__links">
            {CONTENT.navLinks.map((l) => (
              <li key={l}>
                <Link href={routes[l]}>{l}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTEÚDO DINÂMICO */}
        {children}
      </div>

      {/* estilos globais (copia da Home) */}
      <style jsx global>{`
        html,
        body {
          background: #06060c;
          color: #e8eaf0;
          font-family: "DM Sans", sans-serif;
        }
      `}</style>
    </>
  );
}
