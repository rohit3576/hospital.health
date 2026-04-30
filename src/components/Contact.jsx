import AnimatedSection from './AnimatedSection.jsx';
import { contactItems } from '../assets/siteData.js';

function Contact() {
  return (
    <AnimatedSection id="contact" className="section-padding bg-white">
      <div className="container-wrap">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Reach our care desk anytime.</h2>
          <p className="section-copy">
            Visit us, call the emergency desk, or send a message. Our support team will help you find the right doctor,
            department, or appointment slot.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 rounded-3xl border border-blue-100 bg-slate-50 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-100 text-primary">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{item.label}</p>
                    <p className="mt-1 leading-6 text-slate-600">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-soft">
            <iframe
              title="MediCare Plus map"
              src="https://www.google.com/maps?q=Hyderabad%20Telangana%20hospital&output=embed"
              className="h-[360px] w-full border-0 sm:h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;
