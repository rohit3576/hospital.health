import AnimatedSection from './AnimatedSection.jsx';
import { highlights } from '../assets/siteData.js';

function About() {
  return (
    <AnimatedSection id="about" className="section-padding bg-white">
      <div className="container-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-eyebrow">About us</p>
          <h2 className="section-title">Healthcare that feels clear, coordinated, and human.</h2>
          <p className="section-copy">
            MediCare Plus brings specialist care, diagnostics, and emergency support into one accessible hospital
            experience. Our mission is to deliver dependable treatment with empathy, transparency, and respect for
            every patient.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-ink">Our Mission</h3>
            <p className="mt-3 leading-7 text-slate-600">
              To provide safe, evidence-based healthcare that helps patients recover faster and feel supported at
              every step.
            </p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-ink">Our Vision</h3>
            <p className="mt-3 leading-7 text-slate-600">
              To be the region’s most trusted hospital for compassionate care, modern medicine, and accessible
              wellness.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:col-span-2">
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-100 text-primary">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold leading-6 text-slate-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;
