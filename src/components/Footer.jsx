import { business } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>{business.name}</h3>
      <p>{business.address}</p>
      <p><a href={business.phoneHref}>{business.phone}</a> · <a href={business.maps} target="_blank" rel="noreferrer">Google Maps</a></p>
      <p>{business.hours}</p>
      <small>Menú sujeto a disponibilidad. © 2026 {business.name}.</small>
    </footer>
  );
}
