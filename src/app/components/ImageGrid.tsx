export default function ImageGrid() {
const imgs = [1011, 1027, 1005, 1015]
return (
<section className="mt-16">
<div className="mb-2 text-xs uppercase tracking-wide text-neutral-500">Camps & Training</div>
<h2 className="text-3xl font-bold">Summer intensives</h2>
<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
{imgs.map((id) => (
<div key={id} className="rounded-xl border overflow-hidden">
<img src={`https://picsum.photos/id/${id}/500/500`} alt="Training photo" className="h-full w-full object-cover" />
</div>
))}
</div>
</section>
)
}