import './SectionTitle.css';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
    </div>
  );
}
