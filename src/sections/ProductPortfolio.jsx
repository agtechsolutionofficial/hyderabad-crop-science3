import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products, categories } from '../data/products';
import './ProductPortfolio.css';

export default function ProductPortfolio() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? products.slice(0, 6) : products.filter(p => p.category === active).slice(0, 6);

  return (
    <section className="portfolio section-pad" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="portfolio__header">
          <SectionTitle
            eyebrow="Product Portfolio"
            title="Comprehensive Crop Protection"
            subtitle="From seed to harvest — our science-backed formulations protect your crops at every stage."
          />
          <Button to="/products" variant="ghost">View All Products <ArrowRight size={16} /></Button>
        </div>

        <div className="portfolio__filters">
          {categories.map(cat => (
            <button key={cat.id} className={`portfolio__filter ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
