'use client'
import { useMemo, useState } from 'react'
import { clients as source } from '@/data/clients'
import Section from './Section'
import FilterBar from './FilterBar'


export default function ClientsGrid() {
const [filtered, setFiltered] = useState(source)
const count = filtered.length
const leagues = useMemo(() => Array.from(new Set(source.map((s) => s.league))), [])


return (
<Section id="clients" kicker="Clients" title="Featured Players">
<div className="flex items-center justify-between gap-3 flex-wrap">
<div className="text-sm text-neutral-600">{count} players • Leagues: {leagues.join(', ')}</div>
<FilterBar source={source} onChange={setFiltered} />
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{filtered.map((c) => (
<div key={c.id} className="rounded-2xl border overflow-hidden">
<div
className="aspect-[4/3] bg-neutral-100"
style={{ backgroundImage: `url(${c.headshot ?? 'https://picsum.photos/640/480?grayscale'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
/>
<div className="p-4">
<div className="font-semibold">{c.name}</div>
<div className="text-sm text-neutral-600">
{c.position} • {c.league}
{c.country ? ` • ${c.country}` : ''}
</div>
{c.accolades?.length ? (
<ul className="mt-2 text-sm text-neutral-700 list-disc pl-5">
{c.accolades.slice(0, 2).map((a) => (
<li key={a}>{a}</li>
))}
</ul>
) : null}
</div>
</div>
))}
</div>
</Section>
)
}