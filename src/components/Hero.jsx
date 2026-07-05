import { business } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Marisquería en Chapalita · Sabor de costa en plena ciudad</p>
        <h1>Mariscos con sabor a Pacífico en Chapalita.</h1>
        <p className="hero-text">Ven por ceviches, aguachiles, cocteles, tacos de pulpo y platos fuertes preparados con el sabor fresco de La Carreta de Real Pacífico.</p>
        <div className="hero-actions">
          <a className="btn coral" href="#menu">Ver menú</a>
          <a className="btn light" href={business.maps} target="_blank" rel="noreferrer">Cómo llegar</a>
          <a className="btn outline" href={business.whatsapp} target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
        </div>
      </div>
      <div className="hero-card" aria-label="Fachada costera de La Carreta">
        <img src="/hero.jpg" alt="Fachada blanca con ventanas turquesa de La Carreta de Real Pacífico" />
        <div className="menu-ticket"><strong>4.4 ★</strong><span>Más de 600 opiniones</span></div>
      </div>
    </header>
  );
}
