'use client'
import Section from './Section'
import { useEffect, useRef, useState } from 'react'
import { stats } from '@/data/stats'


function useCounter(target: number, duration = 1600) {
const [val, setVal] = useState(0)
const start = useRef<number | null>(null)
useEffect(() => {
let raf = 0
const step = (ts: number) => {
if (start.current === null) start.current = ts
const p = Math.min(1, (ts - start.current) / duration)
setVal(Math.floor(p * target))
if (p < 1) raf = requestAnimationFrame(step)
}
raf = requestAnimationFrame(step)
return () => cancelAnimationFrame(raf)
}, [target, duration])
return val
}


export default function StatsBlock() {
return (
<Section id="numbers" kicker="By the Numbers" title="Our clients' success speaks for itself.">
<div className="grid gap-4 md:grid-cols-2">
{stats.map((s) => (
<Stat key={s.label} label={s.label} value={s.value} />
))}
</div>
<div className="mt-8 grid gap-4 md:grid-cols-3">
{[{ label: 'Art Ross Trophies', value: 7 }, { label: 'Calder Trophies', value: 6 }, { label: 'Ted Lindsay Awards', value: 6 }].map((b) => (
<Bullet key={b.label} {...b} />
))}
</div>
</Section>
)
}


function Stat({ label, value }: { label: string; value: number }) {
const n = useCounter(value)
return (
<div className="rounded-2xl border p-6">
<div className="text-sm text-neutral-600">{label}</div>
<div className="text-4xl font-extrabold">{n}</div>
</div>
)
}


function Bullet({ label, value }: { label: string; value: number }) {
const n = useCounter(value, 1200)
return (
<div className="rounded-2xl border p-6 flex items-center gap-4">
<div className="text-3xl font-bold w-12 text-right">{n}</div>
<div className="text-sm">{label}</div>
</div>
)
}