'use client'
import { useMemo, useState } from 'react'


type Client = { id: string; name: string; position: string; league: string; country?: string }


export default function FilterBar({ source, onChange }: { source: Client[]; onChange: (filtered: Client[]) => void }) {
const [q, setQ] = useState('')
const [league, setLeague] = useState('All')
const leagues = useMemo(() => ['All', ...Array.from(new Set(source.map((s) => s.league)))], [source])


function apply(nextQ = q, nextLeague = league) {
const cleanQ = nextQ.toLowerCase()
const filtered = source.filter((c) => {
const okLeague = nextLeague === 'All' || c.league === nextLeague
const okQ = !cleanQ || `${c.name} ${c.position} ${c.league} ${c.country ?? ''}`.toLowerCase().includes(cleanQ)
return okLeague && okQ
})
onChange(filtered)
}


return (
<div className="flex flex-wrap items-center gap-3">
<input
value={q}
onChange={(e) => {
setQ(e.target.value)
apply(e.target.value, league)
}}
placeholder="Search players, league, position..."
className="w-full md:w-80 rounded border px-3 py-2"
/>
<select
value={league}
onChange={(e) => {
setLeague(e.target.value)
apply(q, e.target.value)
}}
className="rounded border px-3 py-2"
>
{leagues.map((l) => (
<option key={l}>{l}</option>
))}
</select>
</div>
)
}