import { menuCategories } from "../data";

export default function Menu() {
  return (
    <section className="section menu" id="menu">
      <p className="section-label">Menú digital</p>
      <h2>Una carta aqua con acentos rojos, como buena marisquería.</h2>
      <div className="menu-board">
        {menuCategories.map((category) => <article className="menu-category" key={category.title}><h3>{category.title}</h3><ul>{category.items.map((item) => <li key={item}>{item}<span>consulta disponibilidad</span></li>)}</ul></article>)}
      </div>
      <p className="menu-note">Precios y productos sujetos a disponibilidad del día.</p>
    </section>
  );
}
