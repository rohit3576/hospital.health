import { Facebook, HeartPulse, Instagram, Linkedin, Twitter } from 'lucide-react';
import { navLinks } from '../assets/siteData.js';

function Footer() {
  const socialLinks = [
    { label: 'Facebook', icon: Facebook },
    { label: 'Instagram', icon: Instagram },
    { label: 'LinkedIn', icon: Linkedin },
    { label: 'Twitter', icon: Twitter },
  ];

  return (
    <footer className="bg-ink px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="container-wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary">
              <HeartPulse size={24} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold">MediCare Plus</span>
              <span className="block text-sm text-slate-300">Trusted care, every day</span>
            </span>
          </a>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-300 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href="#home"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-primary"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 MediCare Plus Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
