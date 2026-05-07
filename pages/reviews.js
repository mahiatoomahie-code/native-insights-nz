export default function Reviews() {
  const reviews = [
    {
      name: "Kaupapa Organisation",
      role: "Systems & Operations Support",
      text: "The support helped bring structure, clarity, and practical systems into our daily operations while keeping our kaupapa at the centre.",
    },
    {
      name: "Community Project",
      role: "Digital & Strategic Support",
      text: "The process felt grounded, professional, and future-focused. We gained confidence using digital tools and planning our next steps.",
    },
    {
      name: "Māori Business",
      role: "Growth & Advisory",
      text: "A strong blend of strategy, organisation, and understanding of Māori values. The process felt collaborative and easy to follow.",
    },
  ];

  return (
    <div style={page}>
      <nav style={nav}>
        <a href="/" style={navLink}>← Home</a>

        <div style={navRight}>
          <a href="/services" style={navLink}>Services</a>
          <a href="/story" style={navLink}>Story</a>
          <a href="/reviews" style={navLink}>Reviews</a>
          <a href="mailto:tewaharoa@nativeinsights.co.nz" style={goldButton}>
            Let&apos;s Kōrero
          </a>
        </div>
      </nav>

      <main style={content}>
        <section style={heroBox}>
          <p style={eyebrow}>Ngā Kōrero Tautoko</p>

          <h1 style={heading}>
            Reviews grounded in trust, kaupapa, and outcomes.
          </h1>

          <p style={lead}>
            This space holds client feedback, community reflections, and
            kaupapa-led outcomes as Native Insights NZ continues to grow.
          </p>
        </section>

        <section style={grid}>
          {reviews.map((review) => (
            <div key={review.name} style={card}>
              <div style={topPattern}>NI</div>

              <p style={quote}>“{review.text}”</p>

              <h3 style={name}>{review.name}</h3>
              <p style={role}>{review.role}</p>
            </div>
          ))}
        </section>

        <section style={ctaBox}>
          <h2 style={subHeading}>Share your experience</h2>

          <p style={body}>
            Worked with us? Send through your feedback and help others
            understand the value of kaupapa-led systems, strategy, and digital
            support.
          </p>

          <a href="mailto:tewaharoa@nativeinsights.co.nz" style={goldButton}>
            Send a Review
          </a>
        </section>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  backgroundImage:
    "linear-gradient(rgba(3,10,5,0.84), rgba(0,0,0,0.93)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  color: "#F7F0E4",
  fontFamily: "Arial, sans-serif",
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "28px 7%",
  flexWrap: "wrap",
  gap: "18px",
};

const navRight = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
  flexWrap: "wrap",
};

const navLink = {
  color: "#F7F0E4",
  textDecoration: "none",
  fontWeight: "bold",
};

const content = {
  padding: "40px 7% 90px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const heroBox = {
  maxWidth: "820px",
  background: "rgba(7,18,7,0.76)",
  border: "1px solid rgba(195,164,109,0.35)",
  borderRadius: "28px",
  padding: "40px",
  marginBottom: "36px",
};

const eyebrow = {
  color: "#C3A46D",
  fontWeight: "bold",
  marginBottom: "10px",
};

const heading = {
  fontSize: "52px",
  lineHeight: "1.08",
  marginBottom: "22px",
};

const lead = {
  fontSize: "20px",
  lineHeight: "1.7",
  color: "#E8E1D5",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
  marginBottom: "36px",
};

const card = {
  background:
    "linear-gradient(145deg, rgba(7,18,7,0.88), rgba(0,0,0,0.72))",
  border: "1px solid rgba(195,164,109,0.3)",
  borderRadius: "26px",
  padding: "30px",
  boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
};

const topPattern = {
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #0C3B1E, #C3A46D)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "#071007",
  marginBottom: "20px",
};

const quote = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#E8E1D5",
};

const name = {
  marginTop: "24px",
  color: "#C3A46D",
};

const role = {
  color: "#F7F0E4",
  opacity: 0.7,
};

const ctaBox = {
  background: "rgba(0,0,0,0.6)",
  border: "1px solid rgba(195,164,109,0.35)",
  borderRadius: "28px",
  padding: "36px",
};

const subHeading = {
  fontSize: "34px",
  color: "#C3A46D",
};

const body = {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#E8E1D5",
};

const goldButton = {
  display: "inline-block",
  marginTop: "18px",
  background: "#C3A46D",
  color: "#071007",
  padding: "13px 26px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};
