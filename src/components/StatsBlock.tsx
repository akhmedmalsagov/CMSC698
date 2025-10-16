export type Stat = { label: string; value: string; note?: string };
export default function StatsBlock({ stats }: { stats: Stat[] }) {
  if (!stats?.length) return null;
  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
          gap: '16px'
        }}>
          {stats.map((s) => (
            <div key={s.label} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800 }}>{s.value}</div>
              <div style={{ color: 'var(--muted)', marginTop: 6 }}>{s.label}</div>
              {s.note && <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 6 }}>{s.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}