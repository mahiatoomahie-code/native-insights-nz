export default function Home() {
return (
<div
style={{
minHeight: "100vh",
background: "#0B0B08",
color: "#F7F0E4",
fontFamily: "Arial, sans-serif",
padding: "60px 20px",
}}
>
<div
style={{
maxWidth: "1100px",
margin: "0 auto",
}}
>
<h1
style={{
fontSize: "64px",
marginBottom: "20px",
lineHeight: "1",
}}
>
Native Insights NZ </h1>

```
    <p
      style={{
        fontSize: "22px",
        maxWidth: "700px",
        lineHeight: "1.6",
        color: "#d6d0c4",
      }}
    >
      Strategic systems grounded in kaupapa Māori —
      supporting organisations through AI, operations,
      growth, and long-term sustainability.
    </p>

    <div
      style={{
        marginTop: "40px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="mailto:tewaharoa@nativeinsights.co.nz"
        style={{
          background: "#C3A46D",
          color: "#111",
          padding: "14px 24px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Book a Consultation
      </a>

      <a
        href="mailto:tewaharoa@nativeinsights.co.nz"
        style={{
          border: "1px solid #C3A46D",
          color: "#F7F0E4",
          padding: "14px 24px",
          borderRadius: "999px",
          textDecoration: "none",
        }}
      >
        Let's Kōrero
      </a>
    </div>

    <div
      style={{
        marginTop: "80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
      }}
    >
      {[
        "Te Pae Tawhiti | AI & Digital",
        "Te Kaihautū | Executive VA",
        "Te Puna Tautoko | Systems & Operations",
        "Te Ahu Itū | Funding & Growth",
        "Te Ara Rautaki | Strategy & Advisory",
      ].map((service) => (
        <div
          key={service}
          style={{
            background: "#151512",
            padding: "24px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "12px",
              color: "#C3A46D",
            }}
          >
            {service}
          </h2>

          <p
            style={{
              lineHeight: "1.6",
              color: "#d6d0c4",
            }}
          >
            Strategic support designed to strengthen
            Māori organisations through systems,
            innovation, and sustainable growth.
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "80px",
        paddingTop: "40px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "#999",
      }}
    >
      <p>tewaharoa@nativeinsights.co.nz</p>
      <p>021 02855384</p>
      <p>Northland, Aotearoa New Zealand</p>

      <p style={{ marginTop: "30px", fontSize: "14px" }}>
        © 2026 Native Insights NZ
      </p>
    </div>
  </div>
</div>
```

);
}
