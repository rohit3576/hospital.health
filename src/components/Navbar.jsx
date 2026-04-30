import { useState } from 'react';
import { HeartPulse, Menu, X } from 'lucide-react';
import { navLinks } from '../assets/siteData.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl">
      <nav className="container-wrap flex min-h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-blue-200">
            <HeartPulse size={24} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-bold leading-tight text-ink">MediCare Plus</span>
            <span className="block text-xs font-medium text-slate-500">Modern Hospital</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#appointment"
          className="hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 lg:inline-flex"
        >
          Book Appointment
        </a>

        <button
          type="button"
          className="inline-grid h-11 w-11 place-items-center rounded-xl border border-blue-100 text-ink lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-blue-100 bg-white px-4 pb-5 shadow-soft lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
