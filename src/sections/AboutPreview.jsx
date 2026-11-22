import { ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './AboutPreview.css';

const pillars = [
  'ISO 9001:2015 certified company',
  'Serving Indian farmers since 2014',
  'Wide range of agro products',
  'Quality products and on-time delivery',
];

export default function AboutPreview() {
  return (
    <section className="about-preview section-pad">
      <div className="container about-preview__grid">
        <div className="about-preview__visual">
          <div className="about-preview__img-main">
            <img src="https://hyderabadcropscience.com/wp-content/uploads/2022/03/about-1.jpg" alt="Agriculture and crop care" />
          </div>
          <div className="about-preview__img-accent">
            <img src="https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg" alt="Agriculture" />
          </div>
          <div className="about-preview__badge">
            <span className="about-preview__badge-num">2014</span>
            <span className="about-preview__badge-text">Serving farmers</span>
          </div>
        </div>

        <div className="about-preview__content">
          <SectionTitle
            eyebrow="About Us"
            title="Dedicated to Indian farmers"
            subtitle="Hyderabad Crop Science Private Limited has served Indian farmers since 2014, with quality agro products and a commitment to improve farming productivity and sustainability."
          />
          <ul className="about-preview__pillars">
            {pillars.map(p => (
              <li key={p}><CheckCircle size={18} /><span>{p}</span></li>
            ))}
          </ul>
          <Button to="/about" variant="primary">Discover Our Story <ArrowRight size={16} /></Button>
        </div>
      </div>
    </section>
  );
}
