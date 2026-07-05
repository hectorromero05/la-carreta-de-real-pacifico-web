const photos = [
  ["/hero.jpg", "Fachada blanca con ventanas turquesa"],
  ["/galeria1.jpg", "Platillos de mariscos de la casa"],
  ["/galeria2.jpg", "Menú aqua con títulos rojos"],
  ["/galeria3.jpg", "Ambiente relajado para comer mariscos"],
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="ambiente">
        <p className="section-label">Ambiente</p>
        <h2>Local blanco, ventanas turquesa y alma de playa.</h2>
        <p>Una parada casual y familiar para el antojo de mariscos: terraza, fachada fresca, carta amplia y ese mood de costa que aterriza en Chapalita.</p>
      </div>
      <div className="gallery-grid">
        {photos.map(([src, alt], index) => <figure className={`gallery-item item-${index + 1}`} key={src}><img src={src} alt={alt} /><figcaption>{alt}</figcaption></figure>)}
        <div className="gallery-placeholder"><span>🌊</span><strong>Mariscos frescos, ambiente relajado y antojo asegurado.</strong></div>
      </div>
    </section>
  );
}
