import { consultants } from '@/data/consultants';

export default function ConsultantsGrid() {
  if (!consultants.length) return null;
  return (
    <div className="team-grid">
      {consultants.map((c) => (
        <article key={c.name} className="coach">
          <div
            className="avatar"
            style={c.photo ? { backgroundImage: `url(${c.photo})` } : undefined}
          />
          <h5>{c.name}</h5>
          <p>{c.title}</p>
        </article>
      ))}
    </div>
  );
}