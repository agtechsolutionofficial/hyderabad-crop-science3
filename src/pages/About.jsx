import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const categories = ['Pesticides', 'Fungicides', 'Herbicides', 'Weedicides', 'Insecticides', 'Plant Growth Regulators', 'Fertilizers', 'Organic Manure']

export default function About() {
  return <><PageHero eyebrow="About Hyderabad Crop Science" title="Committed to Indian farmers." subtitle="Quality-focused agro products and service, supporting growers since 2014." bg="https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg" />
    <section className="section-pad" id="story"><div className="container split-feature"><div className="feature-image feature-image--about"/><div><SectionTitle eyebrow="Our company" title="Supporting productive, sustainable farming."/><p className="body-copy">Hyderabad Crop Science Private Limited is an ISO 9001:2015 certified company dedicated to Indian farmers since 2014. The company offers quality-based agro products to serve the needs of the farming community.</p><p className="body-copy">Its aim is to provide growers with technologies and solutions that improve productivity and sustainability without impacting environmental balance.</p><Link className="button button--dark" to="/products">Explore our products <ArrowUpRight size={16}/></Link></div></div></section>
    <section className="section-pad about-categories" id="vision"><div className="container"><SectionTitle eyebrow="Our portfolio" title="Products for a range of agricultural needs."/><div className="category-list">{categories.map((category,index)=><div key={category}><span>0{index+1}</span><h3>{category}</h3><CheckCircle2 size={18}/></div>)}</div></div></section>
    <section className="editorial-band" id="leadership"><div className="container editorial-band__inner"><div><span className="eyebrow">Certified company</span><h2>ISO 9001:2015</h2><p className="band-support">A commitment to quality and customer satisfaction.</p></div><Link className="button button--light" to="/contact">Get in touch <ArrowUpRight size={16}/></Link></div></section>
  </>
}
