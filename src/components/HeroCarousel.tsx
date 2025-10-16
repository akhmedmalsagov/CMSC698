// Minimal static "carousel" for future enhancement
import { slides } from '@/data/slides';

export default function HeroCarousel() {
  if (!slides.length) return null;
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'grid', gap: 12 }}>
        {slides.map((s) => (
          <div key={s.title} style={{ display: 'grid', gap: 8 }}>
            <img src={s.image} alt={s.title} style={{ borderRadius: 12, border: '1px solid var(--line)' }} />
            <div style={{ fontWeight: 700 }}>{s.title}</div>
            {s.caption && <div style={{ color: 'var(--muted)' }}>{s.caption}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}