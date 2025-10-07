import Section from './Section'
import { consultants } from '@/data/consultants'


export default function Consultants() {
return (
<Section id="consultants" kicker="Consultants" title="Global Network">
<div className="grid gap-4 md:grid-cols-2">
{consultants.map((c) => (
<div key={c.id} className="rounded-2xl border p-6">
<div className="font-semibold">{c.name}</div>
<div className="text-sm text-neutral-600">{c.region}</div>
</div>
))}
</div>
</Section>
)
}