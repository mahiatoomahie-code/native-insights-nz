export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
        color: "#F7F0E4",
        background: "#061006",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(4,12,4,0.45), rgba(0,0,0,0.78))",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 7%",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/logo.png"
              alt="Native Insights logo"
              style={{
                width: "72px",
                height: "72px",
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              flexWrap: "wrap",
              fontWeight: "bold",
            }}
          >
            <a href="/services" style={navLink}>Services</a>
            <a href="/story" style={navLink}>Story</a>
            <a href="/reviews" style={navLink}>Reviews</a>
            <a href="mailto:tewaharoa@nativeinsights.co.nz" style={goldButton}>
              Let&apos;s Kōrero
            </a>
          </div>
        </nav>

        <main
          style={{
            minHeight: "78vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px 20px",
          }}
        >
          <section
            style={{
              width: "100%",
              maxWidth: "760px",
              textAlign: "center",
              background: "rgba(7, 18, 7, 0.68)",
              border: "1px solid rgba(195,164,109,0.38)",
              borderRadius: "24px",
              padding: "34px 36px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            }}
          >
            <img
              src="/logo.png"
              alt="Native Insights"
              style={{
                width: "135px",
                marginBottom: "18px",
              }}
            />

            <h1
              style={{
                fontSize: "48px",
                lineHeight: "1.08",
                margin: "0 0 22px",
                color: "#F7F0E4",
              }}
            >
              Native Insights |<br />
              Ngā Māramatanga ā-Iwi
            </h1>

            <p style={bodyText}>
              We support Māori businesses and kaupapa-led organisations to
              strengthen the way they work, grow, and navigate the future.
            </p>

            <p style={bodyText}>
              We bring together kaupapa Māori, practical systems, AI, digital
              tools, and strategic support so your organisation can move forward
              with clarity while staying grounded in who you are.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "18px",
                flexWrap: "wrap",
                marginTop: "28px",
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
          </section>
        </main>
      </div>
    </div>
  );
}

const navLink = {
  color: "#F7F0E4",
  textDecoration: "none",
  fontSize: "18px",
};

const bodyText = {
  fontSize: "18px",
  lineHeight: "1.65",
  color: "#E8E1D5",
  margin: "18px 0",
};

const goldButton = {
  background: "#C3A46D",
  color: "#071007",
  padding: "14px 28px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const outlineButton = {
  border: "1px solid #C3A46D",
  color: "#F7F0E4",
  padding: "14px 28px",
  borderRadius: "999px",
  textDecoration: "none",
};
