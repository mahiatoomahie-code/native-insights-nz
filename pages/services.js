export default function Services() {
  const services = [
    {
      id: "ai",
      title: "Te Pae Tawhiti",
      subtitle: "AI & Digital Navigation",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80",
      offer: [
        offer: [
  "AI integration for daily mahi",
  "Automating repetitive tasks",
  "Digital workflow design",
  "Website design and digital presence support",
  "Brand-aligned online experiences",
  "Safe, practical AI guidance",
],
    },
    {
      id: "va",
      title: "Te Kaihautū",
      subtitle: "Executive Virtual Assistant",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      offer: [
        "Diary and inbox management",
        "Board and project support",
        "Travel and document preparation",
        "Follow-up systems for leaders",
      ],
    },
    {
      id: "systems",
      title: "Te Puna Tautoko",
      subtitle: "Systems & Operations",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      offer: [
        "CRM and database management",
        "Process improvement",
        "SOPs and templates",
        "Operational structure and support",
      ],
    },
    {
      id: "funding",
      title: "Te Ahu Itū",
      subtitle: "Funding & Growth",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      offer: [
        "Grant application support",
        "Funding strategy",
        "Financial tracking",
        "Strategic reporting",
      ],
    },
    {
      id: "strategy",
      title: "Te Ara Rautaki",
      subtitle: "Strategy & Advisory",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      offer: [
        "Business strategy planning",
        "Leadership advisory",
        "Organisational alignment",
        "Long-term sustainability planning",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(3,10,5,0.84), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        color: "#F7F0E4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "28px 7%",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "18px",
        }}
      >
        <a href="/" style={{ color: "#C3A46D", textDecoration: "none", fontWeight: "bold" }}>
          ← Home
        </a>

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <a href="/services" style={navLink}>Services</a>
          <a href="/story" style={navLink}>Story</a>
          <a href="/reviews" style={navLink}>Reviews</a>
          <a href="mailto:tewaharoa@nativeinsights.co.nz" style={goldButton}>Let&apos;s Kōrero</a>
        </div>
      </nav>

      <section style={{ padding: "50px 7% 30px" }}>
        <h1 style={{ fontSize: "56px", lineHeight: "1.05", marginBottom: "18px" }}>
          Our Services
        </h1>

        <p style={{ maxWidth: "760px", fontSize: "20px", lineHeight: "1.65", color: "#E8E1D5" }}>
          Kaupapa-led support for Māori businesses and organisations strengthening systems,
          growth, leadership, and digital capability.
        </p>
      </section>

      <section
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "24px",
          padding: "30px 7% 60px",
          scrollSnapType: "x mandatory",
        }}
      >
        {services.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            style={{
              minWidth: "310px",
              maxWidth: "310px",
              height: "420px",
              borderRadius: "28px",
              overflow: "hidden",
              position: "relative",
              textDecoration: "none",
              color: "#F7F0E4",
              scrollSnapAlign: "start",
              border: "1px solid rgba(195,164,109,0.35)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.62)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.15))",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                padding: "24px",
              }}
            >
              <h2 style={{ color: "#C3A46D", fontSize: "26px", marginBottom: "8px" }}>
                {service.title}
              </h2>
              <p style={{ fontSize: "18px", lineHeight: "1.4" }}>{service.subtitle}</p>
              <p style={{ marginTop: "16px", color: "#E8E1D5" }}>Tap to view what we offer →</p>
            </div>
          </a>
        ))}
      </section>

      <section style={{ padding: "20px 7% 90px" }}>
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            style={{
              marginBottom: "36px",
              padding: "34px",
              borderRadius: "28px",
              background: "rgba(7,18,7,0.78)",
              border: "1px solid rgba(195,164,109,0.3)",
            }}
          >
            <h2 style={{ fontSize: "34px", color: "#C3A46D", marginBottom: "8px" }}>
              {service.title}
            </h2>
            <h3 style={{ fontSize: "22px", marginBottom: "20px" }}>{service.subtitle}</h3>

            <h4 style={{ fontSize: "18px", color: "#E8E1D5" }}>What we offer:</h4>

            <ul style={{ lineHeight: "1.9", fontSize: "18px", color: "#E8E1D5" }}>
              {service.offer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href="mailto:tewaharoa@nativeinsights.co.nz" style={goldButton}>
              Let&apos;s Kōrero
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

const navLink = {
  color: "#F7F0E4",
  textDecoration: "none",
  fontSize: "17px",
};

const goldButton = {
  display: "inline-block",
  background: "#C3A46D",
  color: "#071007",
  padding: "12px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};
