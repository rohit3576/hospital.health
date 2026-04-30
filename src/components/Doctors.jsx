import AnimatedSection from './AnimatedSection.jsx';
import { doctors } from '../assets/siteData.js';

function Doctors() {
  return (
    <AnimatedSection id="doctors" className="section-padding bg-white">
      <div className="container-wrap">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Doctors</p>
            <h2 className="section-title">Meet our experienced specialists.</h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-600">
            Our doctors combine clinical expertise with clear communication, making treatment plans easier to
            understand and follow.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
              <img src={doctor.image} alt={doctor.name} className="h-72 w-full object-cover sm:h-64" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink">{doctor.name}</h3>
                <p className="mt-1 font-medium text-primary">{doctor.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Doctors;
