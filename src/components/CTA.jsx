import { business } from "../data";

export default function CTA() {
  return (
    <section className="cta">
      <p className="section-label">Antojo costero</p>
      <h2>¿Antojo de mariscos? La Carreta te espera.</h2>
      <div className="cta-actions"><a className="btn light" href={business.phoneHref}>Llamar</a><a className="btn coral" href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a className="btn outline" href={business.maps} target="_blank" rel="noreferrer">Cómo llegar</a></div>
    </section>
  );
}
