import HeroCarousel from '@/components/HeroCarousel'
import Section from '@/components/Section'
import PillarCard from '@/components/PillarCard'
import ClientsGrid from '@/components/ClientsGrid'
import StaffGrid from '@/components/StaffGrid'
import Consultants from '@/components/Consultants'
import StatsBlock from '@/components/StatsBlock'
import ImageGrid from '@/components/ImageGrid'
import { pillars } from '@/data/pillars'


export default function HomePage() {
return (
<>
<HeroCarousel />


<Section id="about" kicker="About ERZI Hockey" title="Committed to our players' success.">
<p className="text-neutral-700 max-w-3xl">
ERZI is a full‑service hockey development agency for prospects 14+ across Europe, Asia, and North America.
We design individualized programs, track progress and connect each player to a
dedicated mentor—on and off the ice.
</p>
</Section>


<Section id="what" kicker="What We Do" title="A 360° approach to development">
<div className="grid gap-4 md:grid-cols-3">
{pillars.map((p) => (
<PillarCard key={p.title} title={p.title} body={p.body} />
))}
</div>
</Section>


<ImageGrid />


<ClientsGrid />


<StatsBlock />


<Section id="team" kicker="Our Team" title="Coaches & Mentors">
<StaffGrid />
</Section>


<Consultants />


<Section id="contact" kicker="Get Started" title="Let's build your plan">
<form className="mt-2 grid max-w-xl gap-3">
<input className="rounded border p-2" placeholder="Full name" />
<input className="rounded border p-2" placeholder="Email" />
<textarea rows={5} className="rounded border p-2" placeholder="Tell us your goals and current level…" />
<button type="button" className="rounded bg-black px-4 py-2 text-white">Request a Call</button>
</form>
</Section>
</>
)
}