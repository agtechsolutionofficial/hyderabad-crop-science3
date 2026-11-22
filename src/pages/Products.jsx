import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowUpRight, Search } from 'lucide-react'
import PageHero from '../components/PageHero'
import { products, categories } from '../data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const category = params.get('category') || 'all'
  const visible = useMemo(() => products.filter(p => (category === 'all' || p.category === category) && `${p.name} ${p.crop}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  return <><PageHero eyebrow="Our portfolio" title="Products for agricultural needs." subtitle="Explore pesticides, fungicides, herbicides, weedicides, insecticides, plant growth regulators, fertilizers and organic manure." bg="https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png" />
    <section className="section-pad"><div className="container">
      <div className="catalog-head"><div><span className="eyebrow">Explore by need</span><h2 className="display-title">A considered portfolio.</h2></div><label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products or crops"/></label></div>
      <div className="filter-row">{categories.map(c=><button key={c.id} className={`filter-chip ${category===c.id?'selected':''}`} onClick={()=>setParams(c.id==='all'?{}:{category:c.id})}>{c.label}</button>)}</div>
      <div className="product-grid">{visible.map(p=><Link className="product-tile" to={`/products/${p.id}`} key={p.id}><div className="product-tile__art"><img src={p.image} alt={p.name} loading="lazy"/><span>{p.name}</span></div><div className="product-tile__body"><small>Hyderabad Crop Science product range</small><h3>{p.name}</h3><p>{p.description}</p><span className="text-link">Explore category <ArrowUpRight size={16}/></span></div></Link>)}</div>
      {!visible.length&&<div className="empty-state">No products match that search. Try another crop or category.</div>}
    </div></section></>
}
