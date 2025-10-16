export default function ImageGrid({ images }: { images: string[] }) {
  if (!images.length) return null;
  return (
    <div className="grid-3">
      {images.map((src, i) => (
        <div key={i} className="card">
          <img src={src} alt={`gallery-${i}`} style={{ borderRadius: 12 }} />
        </div>
      ))}
    </div>
  );
}