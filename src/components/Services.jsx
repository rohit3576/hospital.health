import AnimatedSection from './AnimatedSection.jsx';
import { services } from '../assets/siteData.js';

function Services() {
  return (
    <AnimatedSection id="services" className="section-padding bg-slate-50">
      <div className="container-wrap">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title">Complete care across essential specialties.</h2>
          <p className="section-copy">
            From preventive visits to emergency response, our departments are designed to work together so patients
            receive faster answers and smoother treatment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 text-primary">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Services;
