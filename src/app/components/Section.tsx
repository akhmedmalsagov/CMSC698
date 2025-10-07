export default function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
return (
<section id={id} className="mt-16">
{kicker && <div className="mb-2 text-xs uppercase tracking-wide text-neutral-500">{kicker}</div>}
<h2 className="text-3xl font-bold">{title}</h2>
<div className="mt-6">{children}</div>
</section>
)
}