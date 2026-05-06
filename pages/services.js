export default function Services() {
  const services = [
    "Te Pae Tawhiti | AI & Digital Navigation",
    "Te Kaihautū | Executive VA",
    "Te Puna Tautoko | Systems & Operations",
    "Te Ahu Itū | Funding & Growth",
    "Te Ara Rautaki | Strategy & Advisory",
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0B0B08", color: "#F7F0E4", fontFamily: "Arial, sans-serif", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#C3A46D", textDecoration: "none" }}>← Back Home</a>

        <h1 style={{ fontSize: "56px", marginTop: "40px" }}>Our Services</h1>

        <p style={{ fontSize: "22px", maxWidth: "750px", lineHeight: "1.6", color: "#d6d0c4" }}>
          Strategic support for Māori organisations navigating systems, growth, funding, and digital transformation.
        </p>

        <div style={{ marginTop: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {services.map((service) => (
            <div key={service} style={{ background: "#151512", padding: "28px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h2 style={{ color: "#C3A46D" }}>{service}</h2>
              <p style={{ color: "#d6d0c4", lineHeight: "1.6" }}>
                Practical, kaupapa-led support designed to strengthen operations, improve clarity, and support long-term sustainability.
              </p>
              <a href="mailto:tewaharoa@nativeinsights.co.nz" style={{ color: "#C3A46D", fontWeight: "bold" }}>
                Let&apos;s Kōrero →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
