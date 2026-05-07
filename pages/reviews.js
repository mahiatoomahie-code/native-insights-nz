export default function Reviews() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#061006",
        color: "#F7F0E4",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1>Reviews | Ngā Kōrero Tautoko</h1>

      <p>
        Native Insights NZ works alongside Māori businesses and kaupapa-led
        organisations through systems, strategy, digital support, and AI.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          border: "1px solid #C3A46D",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        <p>
          “The support felt grounded, practical, and future-focused.”
        </p>

        <h3 style={{ color: "#C3A46D" }}>
          Kaupapa Organisation
        </h3>
      </div>
    </div>
  );
}
