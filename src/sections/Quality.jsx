import { ShieldCheck, TestTube, FileCheck, Leaf } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import './Quality.css';

const certs = [
  { icon: ShieldCheck, title: 'ISO 9001:2015', desc: 'Quality Management System' },
  { icon: TestTube, title: 'CIB&RC Approved', desc: 'Central Insecticides Board' },
  { icon: FileCheck, title: 'GMP Certified', desc: 'Good Manufacturing Practices' },
  { icon: Leaf, title: 'WHO/FAO Compliant', desc: 'International Standards' },
];

export default function Quality() {
  return (
    <section className="quality section-pad">
      <div className="container">
        <SectionTitle
          eyebrow="Quality Assurance"
          title="Uncompromising Quality at Every Step"
          subtitle="From raw material procurement to final dispatch — every batch undergoes rigorous multi-stage quality checks."
          align="center"
        />
        <div className="quality__certs">
          {certs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="quality__cert">
              <div className="quality__cert-icon"><Icon size={28} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="quality__banner">
          <div className="quality__banner-text">
            <span>Every product tested.</span>
            <span>Every batch certified.</span>
            <span>Every farmer protected.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
