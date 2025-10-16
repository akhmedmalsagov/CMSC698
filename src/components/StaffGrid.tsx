export type Person = {
  name: string;
  title: string;
  photo?: string; // optional; CSS placeholder is used if not provided
  blurb?: string;
};

export default function StaffGrid({ people }: { people: Person[] }) {
  return (
    <div className="team-grid">
      {people.map((p) => (
        <article key={p.name} className="coach">
          <div
            className="avatar"
            style={p.photo ? { backgroundImage: `url(${p.photo})` } : undefined}
          />
          <h5>{p.name}</h5>
          <p>{p.title}</p>
          {p.blurb ? <p style={{ marginTop: 8 }}>{p.blurb}</p> : null}
        </article>
      ))}
    </div>
  );
}