export type TSection = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: TSection) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__wrapper">{children}</div>
    </section>
  );
}
