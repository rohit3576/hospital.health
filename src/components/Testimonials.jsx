import AnimatedSection from './AnimatedSection.jsx';
import { testimonials } from '../assets/siteData.js';

function Testimonials() {
  return (
    <AnimatedSection className="section-padding bg-slate-50">
      <div className="container-wrap">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title">Patients trust us with the moments that matter.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-blue-100 pt-5">
                <h3 className="font-bold text-ink">{testimonial.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{testimonial.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Testimonials;
