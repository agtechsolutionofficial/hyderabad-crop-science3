import { useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const media = [
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg', alt: 'Crop science and farming' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/about-1.jpg', alt: 'Agriculture and crop care' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png', alt: 'Corn field' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg', alt: 'Agriculture' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/pexels-photo-461960-1000x500.jpeg', alt: 'Farm landscape' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/pexels-photo-265216-1000x500.jpeg', alt: 'Green crop field' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/SRI-hybrid-rice-field.jpg', alt: 'Rice field' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/05/CommercialFarming-1.jpg', alt: 'Commercial farming' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/slider-1-1000x500.jpg', alt: 'Growing crops' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/Farmkey.jpg', alt: 'Crop protection' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/1594113196_DUYgeA_Agritech_FINAL.jpg', alt: 'Agricultural technology' },
  { src: 'https://hyderabadcropscience.com/wp-content/uploads/2022/03/t01.png', alt: 'Crop care' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  return <><PageHero eyebrow="Gallery" title="A closer look at the fields we serve." subtitle="A visual collection of agriculture and crop growing imagery from Hyderabad Crop Science." bg={media[0].src}/>
    <section className="section-pad"><div className="container"><div className="gallery-intro"><div><span className="eyebrow">From our website</span><h2 className="display-title">Growing, season by season.</h2></div><p className="body-copy">Explore scenes of farming and crop care from across the Hyderabad Crop Science website.</p></div>
    <div className="gallery-grid">{media.map((image,index)=><button key={image.src} className={`gallery-item gallery-item--${index%6}`} onClick={()=>setSelected(image)} aria-label={`View image: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy"/><span>{image.alt}<ArrowUpRight size={16}/></span></button>)}</div>
    </div></section>
    {selected&&<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={()=>setSelected(null)}><button className="gallery-close" aria-label="Close image"><X/></button><img src={selected.src} alt={selected.alt} onClick={e=>e.stopPropagation()}/><span>{selected.alt}</span></div>}
  </>
}
