import { Sprout, Droplets, Wind, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Sustainability.css';

const goals = [
  { icon: Sprout, title: 'Soil Health', value: '40%', desc: 'Reduction in chemical load through bio-integrated solutions' },
  { icon: Droplets, title: 'Water Conservation', value: '30%', desc: 'Water usage reduction in our manufacturing processes' },
  { icon: Wind, title: 'Carbon Neutral', value: '2030', desc: 'Target year for carbon neutrality across operations' },
  { icon: Users, title: 'Farmer Training', value: '50K+', desc: 'Farmers trained in safe and sustainable usage annually' },
];

export default function Sustainability() {
  return (
    <section className="sustain section-pad" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="sustain__header">
          <SectionTitle
            eyebrow="Sustainability"
            title="Growing Responsibly for Future Generations"
            subtitle="Our commitment to sustainable agriculture goes beyond compliance — it's our core philosophy."
          />
          <Button to="/sustainability" variant="ghost">Our ESG Report</Button>
        </div>
        <div className="sustain__goals">
          {goals.map(({ icon: Icon, title, value, desc }) => (
            <div key={title} className="sustain__goal">
              <div className="sustain__goal-top">
                <div className="sustain__goal-icon"><Icon size={22} /></div>
                <span className="sustain__goal-value">{value}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
