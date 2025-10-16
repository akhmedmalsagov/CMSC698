type Props = { title: string; body: string };
export default function PillarCard({ title, body }: Props) {
  return (
    <article className="card">
      <h4>{title}</h4>
      <p>{body}</p>
    </article>
  );
}