import { business } from "../data";

export default function Reviews() {
  return (
    <section className="section reviews">
      <p className="section-label">Reseñas</p>
      <div className="review-card">
        <div className="rating">{business.rating}<span>/ 5</span></div>
        <div><h2>Buena presencia en Google Maps.</h2><p>Más de 600 opiniones en Google Maps respaldan a esta marisquería de Chapalita.</p></div>
      </div>
    </section>
  );
}
