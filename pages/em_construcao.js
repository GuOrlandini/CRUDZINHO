export default function EmConstrucao() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#06060c",
          color: "#e8eaf0",
          fontFamily: "DM Sans, sans-serif",
          textAlign: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚧</div>

        <h1 style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>Página em construção</h1>

        <p style={{ color: "#8a90a8", maxWidth: "400px", marginBottom: "2rem" }}>
          Esta seção ainda está sendo desenvolvida.
        </p>

        <a
          href="/"
          style={{
            background: "#1a6bff",
            color: "#fff",
            padding: "0.8rem 1.8rem",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Voltar para Página Inicial
        </a>
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background: #06060c;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
