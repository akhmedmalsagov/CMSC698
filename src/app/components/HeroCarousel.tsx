'use client'
export default function HeroCarousel() {
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 })
const [selected, setSelected] = useState(0)


const onSelect = useCallback(() => {
if (!emblaApi) return
setSelected(emblaApi.selectedScrollSnap())
}, [emblaApi])


useEffect(() => {
if (!emblaApi) return
emblaApi.on('select', onSelect)
const id = setInterval(() => emblaApi.scrollNext(), 4500)
return () => clearInterval(id)
}, [emblaApi, onSelect])


return (
<section className="relative overflow-hidden rounded-2xl border bg-black text-white">
<div className="p-8 md:p-12">
<div className="text-sm uppercase tracking-wide opacity-80">Creating opportunities on and off the ice.</div>
<h1 className="mt-2 text-4xl md:text-5xl font-extrabold">ERZI Hockey</h1>
</div>


<div className="embla" ref={emblaRef}>
<div className="embla__container flex">
{slides.map((s) => (
<div className="embla__slide min-w-0 flex-[0_0_100%]" key={s.src}>
<div
className="h-[42vh] md:h-[56vh] bg-cover bg-center"
style={{ backgroundImage: `url(${s.src})` }}
role="img"
aria-label={s.alt}
/>
</div>
))}
</div>
</div>


<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
{slides.map((_, i) => (
<button
key={i}
onClick={() => emblaApi?.scrollTo(i)}
className={`h-2 w-2 rounded-full ${selected === i ? 'bg-white' : 'bg-white/40'}`}
aria-label={`Slide ${i + 1}`}
/>
))}
</div>
</section>
)
}