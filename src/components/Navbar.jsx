import { business } from "../data";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span className="brand-mark">LC</span>
        <span>{business.name}</span>
      </a>
      <div className="nav-links">
        <a href="#menu">Menú</a>
        <a href="#especialidades">Especialidades</a>
        <a href="#galeria">Galería</a>
        <a href="#ubicacion">Ubicación</a>
        <a className="nav-whatsapp" href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </nav>
  );
}
