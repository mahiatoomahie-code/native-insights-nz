export default function Story() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(3,10,5,0.82), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F7F0E4",
        fontFamily: "Arial, sans-serif",
        padding: "60px 8%",
      }}
    >
      <a
        href="/"
        style={{
          color: "#C3A46D",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Home
      </a>

      <div
        style={{
          maxWidth: "900px",
          marginTop: "60px",
          background: "rgba(0,0,0,0.6)",
          padding: "50px",
          borderRadius: "28px",
          border: "1px solid rgba(195,164,109,0.3)",
        }}
      >
        <p
          style={{
            color: "#C3A46D",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Our Story | Te Pūtaketanga
        </p>

        <h1
          style={{
            fontSize: "58px",
            lineHeight: "1.05",
            marginBottom: "30px",
          }}
        >
          Built from kaupapa, systems, strategy, and future thinking.
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#E8E1D5",
          }}
        >
          Native Insights NZ exists to support Māori businesses and
          kaupapa-led organisations to navigate growth, systems,
          operations, digital capability, and AI while staying grounded
          in identity, values, and purpose.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            marginTop: "24px",
            color: "#E8E1D5",
          }}
        >
          We believe modern systems and technology should strengthen
          communities — not disconnect them from who they are.
        </p>
      </div>
    </div>
  );
}
