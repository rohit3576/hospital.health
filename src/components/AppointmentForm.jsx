import { useState } from 'react';
import AnimatedSection from './AnimatedSection.jsx';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  department: '',
};

function AppointmentForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (!/^[0-9+\-\s]{8,15}$/.test(values.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!values.date) nextErrors.date = 'Please choose a date.';
    if (!values.department) nextErrors.department = 'Please select a department.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  const inputClass =
    'mt-2 w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-blue-100';

  return (
    <AnimatedSection id="appointment" className="section-padding bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Appointment</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Book a visit with the right department.</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-blue-50 sm:text-lg">
            Share your details and our care desk will confirm your appointment slot. Emergency care remains available
            24/7 by phone.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-5 shadow-soft sm:p-8" noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Name
              <input name="name" value={values.name} onChange={updateField} className={inputClass} placeholder="Your name" />
              {errors.name && <span className="mt-2 block text-sm text-red-600">{errors.name}</span>}
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Email
              <input
                name="email"
                value={values.email}
                onChange={updateField}
                className={inputClass}
                placeholder="you@example.com"
              />
              {errors.email && <span className="mt-2 block text-sm text-red-600">{errors.email}</span>}
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Phone
              <input
                name="phone"
                value={values.phone}
                onChange={updateField}
                className={inputClass}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <span className="mt-2 block text-sm text-red-600">{errors.phone}</span>}
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Date
              <input name="date" type="date" value={values.date} onChange={updateField} className={inputClass} />
              {errors.date && <span className="mt-2 block text-sm text-red-600">{errors.date}</span>}
            </label>
            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Department
              <select name="department" value={values.department} onChange={updateField} className={inputClass}>
                <option value="">Select department</option>
                <option>General Medicine</option>
                <option>Cardiology</option>
                <option>Emergency Care</option>
                <option>Pediatrics</option>
                <option>Neurology</option>
              </select>
              {errors.department && <span className="mt-2 block text-sm text-red-600">{errors.department}</span>}
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-health px-6 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-600"
          >
            Submit Appointment
          </button>
          {submitted && (
            <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              Thank you. Your appointment request has been received.
            </p>
          )}
        </form>
      </div>
    </AnimatedSection>
  );
}

export default AppointmentForm;
