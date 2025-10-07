import { staff } from '@/data/staff'


export default function StaffGrid() {
return (
<div className="grid gap-4 md:grid-cols-4">
{staff.map((s) => (
<div key={s.id} className="rounded-2xl border overflow-hidden">
<div
className="aspect-[4/3] bg-neutral-100"
style={{ backgroundImage: `url(${s.headshot ?? 'https://picsum.photos/640/480'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
/>
<div className="p-4">
<div className="font-semibold">{s.name}</div>
<div className="text-sm text-neutral-600">{s.role}</div>
{s.bio && <p className="mt-2 text-sm text-neutral-700">{s.bio}</p>}
</div>
</div>
))}
</div>
)
}