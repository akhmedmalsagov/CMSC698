import { clients } from '@/data/clients';

export default function ClientsGrid() {
  if (!clients.length) return null;
  return (
    <div className="grid-3">
      {clients.map((c) => (
        <article key={c.name} className="card" style={{ textAlign: 'center' }}>
          <img src={c.logo} alt={`${c.name} logo`} style={{ width: 120, margin: '0 auto 8px' }} />
          <div style={{ fontWeight: 700 }}>{c.name}</div>
          {c.note && <div style={{ color: 'var(--muted)' }}>{c.note}</div>}
        </article>
      ))}
    </div>
  );
}