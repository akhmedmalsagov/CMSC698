export default function PillarCard({ title, body }: { title: string; body: string }) {
return (
<div className="rounded-2xl border p-6">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="mt-2 text-sm text-neutral-700">{body}</p>
</div>
)
}