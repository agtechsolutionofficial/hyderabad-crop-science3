import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Manufacturing.css';

const features = [
  { num: '01', title: 'GMP Certified Plant', desc: 'Our manufacturing facility follows Good Manufacturing Practices with zero-compromise quality protocols.' },
  { num: '02', title: 'Automated Production Lines', desc: 'High-capacity automated lines ensuring consistent product quality and output efficiency.' },
  { num: '03', title: 'ETP & ZLD Systems', desc: 'Effluent Treatment Plant with Zero Liquid Discharge for responsible environmental stewardship.' },
  { num: '04', title: 'Quality Control Labs', desc: 'In-house analytical labs with HPLC, GC and spectroscopy for rigorous batch testing.' },
];

export default function Manufacturing() {
  return (
    <section className="mfg section-pad" style={{ background: 'var(--off-white)' }}>
      <div className="container mfg__grid">
        <div className="mfg__content">
          <SectionTitle
            eyebrow="Manufacturing"
            title="World-Class Production Infrastructure"
            subtitle="Our Hyderabad facility spans 5 acres with state-of-the-art manufacturing capabilities."
          />
          <div className="mfg__features">
            {features.map(f => (
              <div key={f.num} className="mfg__feature">
                <span className="mfg__feature-num">{f.num}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button to="/manufacturing" variant="primary">View Manufacturing</Button>
        </div>
        <div className="mfg__visual">
          <img src="https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg" alt="Manufacturing facility" />
          <div className="mfg__visual-overlay">
            <span>ISO 9001:2015</span>
            <span>Certified Facility</span>
          </div>
        </div>
      </div>
    </section>
  );
}
