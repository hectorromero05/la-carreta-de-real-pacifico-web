import { specialties } from "../data";

export default function Specialties() {
  return (
    <section className="section specialties" id="especialidades">
      <p className="section-label">Especialidades de la casa</p>
      <h2>Ceviches, aguachiles y cocteles para compartir.</h2>
      <div className="specialty-grid">
        {specialties.map(([icon, title, text]) => <article className="specialty" key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}
