import {
  Activity,
  Ambulance,
  Baby,
  Brain,
  CalendarCheck,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '24/7', label: 'Emergency care' },
  { value: '45+', label: 'Specialist doctors' },
  { value: '18k+', label: 'Patients cared for' },
];

export const services = [
  {
    title: 'General Medicine',
    description: 'Complete primary care, diagnosis, and treatment plans for everyday and chronic health needs.',
    icon: Stethoscope,
  },
  {
    title: 'Cardiology',
    description: 'Heart screenings, cardiac consultations, and advanced care for cardiovascular conditions.',
    icon: HeartPulse,
  },
  {
    title: 'Emergency Care',
    description: 'Rapid response emergency support with trained clinicians available around the clock.',
    icon: Ambulance,
  },
  {
    title: 'Pediatrics',
    description: 'Friendly child-focused care, vaccinations, growth tracking, and family health guidance.',
    icon: Baby,
  },
  {
    title: 'Neurology',
    description: 'Specialized care for headaches, seizures, stroke recovery, and neurological disorders.',
    icon: Brain,
  },
  {
    title: 'Preventive Health',
    description: 'Wellness checks, screenings, and lifestyle planning to help patients stay healthier longer.',
    icon: ShieldCheck,
  },
];

export const doctors = [
  {
    name: 'Dr. Amelia Carter',
    role: 'Chief Cardiologist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Noah Williams',
    role: 'Emergency Medicine',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Sophia Bennett',
    role: 'Pediatric Specialist',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dr. Ethan Brooks',
    role: 'Neurologist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
  },
];

export const testimonials = [
  {
    quote:
      'The team handled my father’s emergency with calm, clarity, and kindness. We always knew what was happening next.',
    name: 'Priya Sharma',
    detail: 'Patient family member',
  },
  {
    quote:
      'From appointment booking to follow-up care, everything felt organized and personal. The doctors really listened.',
    name: 'Rahul Mehta',
    detail: 'Cardiology patient',
  },
  {
    quote:
      'Our pediatric visits are smooth and reassuring. The staff make children feel safe without rushing the parents.',
    name: 'Ananya Rao',
    detail: 'Parent',
  },
];

export const contactItems = [
  { icon: MapPin, label: 'Address', value: '42 Wellness Avenue, Hyderabad, Telangana' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email', value: 'care@medicareplus.com' },
  { icon: CalendarCheck, label: 'Hours', value: 'Open 24 hours, all week' },
];

export const highlights = [
  { icon: Activity, text: 'Advanced diagnostics and patient monitoring' },
  { icon: UsersRound, text: 'Coordinated care teams for each patient' },
  { icon: ShieldCheck, text: 'Strict safety, hygiene, and privacy standards' },
];
