import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { id, name, category, crop, description, image, badge } = product;
  return (
    <Link to={`/products/${id}`} className="product-card">
      <div className="product-card__img-wrap">
        <img src={image} alt={name} onError={e => { e.target.src = `https://placehold.co/400x280/1a6b3c/ffffff?text=${encodeURIComponent(category)}`; }} />
        {badge && <span className="product-card__badge">{badge}</span>}
        <span className="product-card__cat">{category}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__crop">Crop: {crop}</p>
        <p className="product-card__desc">{description}</p>
        <span className="product-card__link">View Details <ArrowRight size={14} /></span>
      </div>
    </Link>
  );
}
