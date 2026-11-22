import './PageHero.css';

export default function PageHero({ eyebrow, title, subtitle, bg }) {
  return (
    <section className="page-hero" style={bg ? { backgroundImage: `url(${bg})` } : {}}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
