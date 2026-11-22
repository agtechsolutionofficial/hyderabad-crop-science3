import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Research from './pages/Research'
import Manufacturing from './pages/Manufacturing'
import Quality from './pages/Quality'
import Sustainability from './pages/Sustainability'
import Media from './pages/Media'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import './App.css'

export default function App() {
  return <BrowserRouter><MainLayout><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} /><Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/research" element={<Research />} /><Route path="/manufacturing" element={<Manufacturing />} />
    <Route path="/quality" element={<Quality />} /><Route path="/sustainability" element={<Sustainability />} />
    <Route path="/media" element={<Media />} /><Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes></MainLayout></BrowserRouter>
}
