'use client';
import { useState } from 'react';

export default function FilterBar({ onChange }: { onChange?: (q: string) => void }) {
  const [q, setQ] = useState('');
  return (
    <div className="card" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); onChange?.(e.target.value); }}
        placeholder="Search players, mentors, topics…"
        style={{
          flex: 1, background: 'transparent', border: '1px solid var(--line)',
          color: 'var(--text)', padding: '10px 12px', borderRadius: 10
        }}
      />
      <button className="btn btn-outline small" onClick={() => onChange?.(q)}>Search</button>
    </div>
  );
}