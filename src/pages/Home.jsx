import HeroSection from '../sections/HeroSection';
import Statistics from '../sections/Statistics';
import AboutPreview from '../sections/AboutPreview';
import ProductPortfolio from '../sections/ProductPortfolio';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <AboutPreview />
      <ProductPortfolio />
      <section className="home-gallery section-pad"><div className="container"><div className="catalog-head"><div><span className="eyebrow">Gallery</span><h2 className="display-title">Scenes from growing India.</h2></div><Link to="/gallery" className="text-link">View gallery <span>↗</span></Link></div><div className="home-gallery__images">{[
        'https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg',
        'https://hyderabadcropscience.com/wp-content/uploads/2022/05/SRI-hybrid-rice-field.jpg',
        'https://hyderabadcropscience.com/wp-content/uploads/2022/03/Farmkey.jpg',
      ].map(image=><img key={image} src={image} alt="Agriculture and crop growing" loading="lazy" />)}</div></div></section>
    </>
  );
}
