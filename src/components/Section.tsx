type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container two-col">
        <div className="left">
          {eyebrow && <h2 className="section-title">{eyebrow}</h2>}
          {title && <h3 className="big">{title}</h3>}
        </div>
        <div className="right body">{children}</div>
      </div>
    </section>
  );
}