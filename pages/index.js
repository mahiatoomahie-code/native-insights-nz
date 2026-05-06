export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
        color: "#F7F0E4",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      >
        <source
          src=src="https://cdn.coverr.co/videos/coverr-aerial-view-of-rocky-coastline-1560082467046?download=1080p"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))",
          zIndex: -1,
        }}
      />

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 60px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <img
            src="/logo.png"
            alt="NI Logo"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            Native Insights
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a href="/services" style={navStyle}>
            Services
          </a>

          <a href="/" style={navStyle}>
            Story
          </a>

          <a href="/" style={navStyle}>
            Reviews
          </a>

          <a
            href="mailto:tewaharoa@nativeinsights.co.nz"
            style={goldButton}
          >
            Let&apos;s Kōrero
          </a>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            textAlign: "center",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
            padding: "50px",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src="/logo.png"
            alt="Native Insights"
            style={{
              width: "140px",
              marginBottom: "30px",
            }}
          />

          <h1
            style={{
              fontSize: "64px",
              marginBottom: "20px",
              lineHeight: "1.1",
            }}
          >
            Native Insights |<br />
            Ngā Māramatanga ā-Iwi
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.7",
              color: "#E8E1D5",
              marginBottom: "40px",
            }}
          >
            Native Insights supports Māori businesses and
            kaupapa-led organisations to strengthen the
            way they work, grow, and navigate the future.
            <br /><br />
            We bring together kaupapa Māori, practical
            systems, AI, digital tools, and strategic
            support so your organisation can move forward
            with clarity while staying grounded in who you are.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a href="/services" style={goldButton}>
              View Services
            </a>

            <a
              href="mailto:tewaharoa@nativeinsights.co.nz"
              style={outlineButton}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const navStyle = {
  color: "#F7F0E4",
  textDecoration: "none",
  fontSize: "18px",
};

const goldButton = {
  background: "#C3A46D",
  color: "#111",
  padding: "14px 26px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const outlineButton = {
  border: "1px solid #C3A46D",
  color: "#F7F0E4",
  padding: "14px 26px",
  borderRadius: "999px",
  textDecoration: "none",
};
