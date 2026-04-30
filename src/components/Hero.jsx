import { CalendarCheck, CirclePlay, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { stats } from '../assets/siteData.js';

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pt-16"
    >
      <div className="container-wrap grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm lg:mx-0">
            <ShieldCheck size={17} aria-hidden="true" />
            Trusted care for every family
          </div>
          <h1 className="mx-auto mt-6 max-w-[18rem] text-3xl font-bold leading-tight text-ink sm:max-w-none sm:text-5xl lg:mx-0 lg:text-6xl">
            MediCare Plus Hospital
          </h1>
          <p className="mx-auto mt-5 max-w-[21rem] text-base leading-8 text-slate-600 sm:max-w-2xl sm:text-lg lg:mx-0">
            Compassionate specialists, modern technology, and 24/7 emergency care designed around your comfort,
            safety, and recovery.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-100 bg-white px-6 py-4 font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              <CirclePlay size={20} aria-hidden="true" />
              Explore Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] sm:overflow-visible"
        >
          <div className="absolute -left-3 top-8 hidden rounded-2xl bg-white p-4 shadow-soft sm:block">
            <p className="text-sm font-semibold text-slate-500">Next available</p>
            <p className="mt-1 font-bold text-ink">Today, 10:30 AM</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1100&q=80"
            alt="Modern hospital reception and medical care team"
            className="h-[320px] w-full rounded-[2rem] object-cover shadow-soft sm:h-[420px]"
          />
          <div className="absolute bottom-4 right-4 max-w-[13rem] rounded-2xl bg-white/95 p-4 shadow-soft">
            <p className="text-sm font-semibold text-health">98% patient satisfaction</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Care teams focused on calm, clear communication.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
