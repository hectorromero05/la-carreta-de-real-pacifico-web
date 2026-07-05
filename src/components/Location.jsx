import { business } from "../data";

export default function Location() {
  return (
    <section className="section location" id="ubicacion">
      <div>
        <p className="section-label">Ubicación</p>
        <h2>La parada ideal para comer como en el Pacífico.</h2>
        <p>{business.address}</p>
        <a className="btn coral" href={business.maps} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
      </div>
      <iframe title="Mapa de La Carreta de Real Pacífico" src="https://www.google.com/maps?q=Calle%20Fray%20Juan%20de%20Zum%C3%A1rraga%20653%2C%20Chapalita%2C%20Guadalajara%2C%20Jal.&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
}
