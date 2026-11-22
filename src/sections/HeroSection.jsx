import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './HeroSection.css';

const slides = [
  {
    id: 1,
    eyebrow: 'Serving Indian farmers since 2014',
    title: 'Solutions for\nIndian agriculture',
    subtitle: 'Quality-focused agro products for growers, backed by an ISO 9001:2015 certified company.',
    cta: { label: 'Explore Products', to: '/products' },
    ctaSecondary: { label: 'Our Story', to: '/about' },
    bg: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png',
    accent: 'Serving since 2014',
  },
  {
    id: 2,
    eyebrow: 'Our product range',
    title: 'Crop care for\nevery growing need',
    subtitle: 'Explore fungicides, insecticides, herbicides, weedicides, PGR, fertilizers and organic manure.',
    cta: { label: 'Research & Innovation', to: '/research' },
    ctaSecondary: { label: 'View Products', to: '/products' },
    bg: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png',
    accent: 'Eight categories',
  },
  {
    id: 3,
    eyebrow: 'Quality commitment',
    title: 'Quality products.\nTrusted service.',
    subtitle: 'Hyderabad Crop Science is committed to quality products, on-time delivery and customer satisfaction.',
    cta: { label: 'Sustainability', to: '/sustainability' },
    ctaSecondary: { label: 'Contact Us', to: '/contact' },
    bg: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/SRI-hybrid-rice-field.jpg',
    accent: 'ISO 9001:2015',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div key={s.id} className={`hero__bg ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.bg})` }} />
      ))}
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className={`hero__text ${animating ? 'hero__text--exit' : 'hero__text--enter'}`}>
          <span className="hero__eyebrow">{slide.eyebrow}</span>
          <h1 className="hero__title">{slide.title.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}</h1>
          <p className="hero__subtitle">{slide.subtitle}</p>
          <div className="hero__actions">
            <Button to={slide.cta.to} variant="gold">{slide.cta.label} <ArrowRight size={16} /></Button>
            <Button to={slide.ctaSecondary.to} variant="outline">{slide.ctaSecondary.label}</Button>
          </div>
        </div>

        <div className="hero__accent-card">
          <span className="hero__accent-label">Focus Area</span>
          <span className="hero__accent-value">{slide.accent}</span>
        </div>
      </div>

      <div className="hero__controls">
        <button className="hero__arrow" onClick={() => goTo((current - 1 + slides.length) % slides.length)}>
          <ChevronLeft size={20} />
        </button>
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={`hero__dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="hero__arrow" onClick={() => goTo((current + 1) % slides.length)}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
