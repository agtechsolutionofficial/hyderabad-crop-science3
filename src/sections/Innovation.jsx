import { FlaskConical, Microscope, Award, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Innovation.css';

const pillars = [
  { icon: FlaskConical, title: 'Advanced Formulation', desc: 'Cutting-edge formulation technology for enhanced efficacy and reduced environmental impact.' },
  { icon: Microscope, title: 'R&D Excellence', desc: 'State-of-the-art laboratories with expert scientists driving next-gen solutions.' },
  { icon: Award, title: 'Regulatory Compliance', desc: 'All products meet stringent CIB&RC and international regulatory standards.' },
  { icon: Globe, title: 'Global Standards', desc: 'Manufacturing aligned with WHO, FAO and global agrochemical best practices.' },
];

export default function Innovation() {
  return (
    <section className="innovation section-pad">
      <div className="innovation__bg" />
      <div className="container innovation__inner">
        <div className="innovation__content">
          <SectionTitle
            eyebrow="Research & Innovation"
            title="Where Science Meets the Field"
            subtitle="Our dedicated R&D team works tirelessly to develop formulations that solve real farming challenges."
            light
          />
          <Button to="/research" variant="gold" className="innovation__cta">Explore Our Research</Button>
        </div>
        <div className="innovation__cards">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="innovation__card">
              <div className="innovation__card-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
