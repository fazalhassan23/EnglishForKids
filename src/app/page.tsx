const foundationChecks = [
  "Parent-managed learner profiles",
  "Structured curriculum and reusable activities",
  "Explainable progress and mastery tracking",
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Foundation environment</p>
        <h1 id="page-title">BrightPath English</h1>
        <p className="lede">
          A safe, structured learning journey from first letters to confident English.
        </p>
        <p className="notice" role="status">
          The product foundation is being prepared. Learning content is not yet available.
        </p>
      </section>

      <section aria-labelledby="foundation-title" className="card">
        <h2 id="foundation-title">What this foundation protects</h2>
        <ul>
          {foundationChecks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
