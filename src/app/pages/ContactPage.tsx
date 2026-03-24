import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useSEO } from '../../hooks/useSEO';
import { Textarea } from '../components/ui/textarea';
import * as Flags from 'country-flag-icons/react/3x2';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import { Mail, Phone, MessageSquare, CheckCircle2, Loader2, Globe } from 'lucide-react';

const COUNTRY_CODES = [
  { country: 'United States', code: '+1', flag: 'US' },
  { country: 'United Kingdom', code: '+44', flag: 'GB' },
  { country: 'India', code: '+91', flag: 'IN' },
  { country: 'Singapore', code: '+65', flag: 'SG' },
  { country: 'UAE', code: '+971', flag: 'AE' },
  { country: 'Germany', code: '+49', flag: 'DE' },
  { country: 'Netherlands', code: '+31', flag: 'NL' },
  { country: 'Canada', code: '+1 (CA)', flag: 'CA' },
  { country: 'China', code: '+86', flag: 'CN' },
  { country: 'New Zealand', code: '+64', flag: 'NZ' },
  { country: 'South Africa', code: '+27', flag: 'ZA' },
  { country: 'Australia', code: '+61', flag: 'AU' },
  { country: 'France', code: '+33', flag: 'FR' },
  { country: 'Sweden', code: '+46', flag: 'SE' },
  { country: 'Israel', code: '+972', flag: 'IL' },
  { country: 'Japan', code: '+81', flag: 'JP' },
  { country: 'South Korea', code: '+82', flag: 'KR' },
  { country: 'Brazil', code: '+55', flag: 'BR' },
  { country: 'Mexico', code: '+52', flag: 'MX' },
  { country: 'Nigeria', code: '+234', flag: 'NG' },
  { country: 'Other', code: '+', flag: 'Other' },
];

const COUNTRIES = [
  'United States', 'United Kingdom', 'India', 'Singapore',
  'UAE', 'Germany', 'Netherlands', 'Canada', 'China',
  'New Zealand', 'South Africa', 'Australia', 'France',
  'Sweden', 'Israel', 'Japan', 'South Korea', 'Brazil',
  'Mexico', 'Nigeria', 'Other'
];

const BUSINESS_TYPES = [
  "Foreign-Owned US Entity (LLC or Corporation)",
  "Non-US Founder / No US Entity Yet",
  "Salaried / W-2 Employee",
  "Individual / Self-Employed",
  "LLC",
  "Partnership",
  "S-Corporation",
  "C-Corporation",
  "Non-Profit",
  "Other"
];

const SERVICES = [
  "International Tax & Compliance",
  "Form 5471",
  "FBAR & FATCA Reporting",
  "Foreign Founder Setup (Formation + EIN + Compliance)",
  "Individual Tax Filing",
  "Business Tax Filing",
  "Sales & Use Tax",
  "Company Formation",
  "IRS / State Resolution",
  "Bookkeeping",
  "Business Consulting",
  "Other / Not Sure"
];

export function ContactPage() {
  useSEO({
    title: 'Contact TaxClaim | Free CPA Consultation',
    description: 'Schedule a free consultation with TaxClaim. Reach us by email, phone, or WhatsApp. We serve foreign founders and businesses across 11 countries with expert US tax and advisory services.',
    canonical: 'https://taxclaim.co/contact',
  });

  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    service: '',
    subject: '',
    message: '',
    _gotcha: ''
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const messageParam = searchParams.get('message');
    if (serviceParam || messageParam) {
      setFormData(prev => ({
        ...prev,
        ...(serviceParam ? { service: serviceParam } : {}),
        ...(messageParam ? { message: messageParam } : {}),
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      ...formData,
      phone: formData.phone ? `${countryCode} ${formData.phone}` : '',
    };
    try {
      const response = await fetch(`https://formspree.io/f/mbdanaza`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', country: '', businessType: '', service: '', subject: '', message: '', _gotcha: '' });
        setCountryCode('+1');
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Whether you are filing as an individual, running a business, or managing a US LLC or Corporation from abroad, TaxClaim is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
              <div className="space-y-6">
                <ContactItem icon={<Mail className="text-teal-600" />} title="Email" value="cpa&#64;taxclaim.co" href={`mailto:${"cpa"}@${"taxclaim"}.co`} />
                <ContactItem icon={<Phone className="text-teal-600" />} title="Phone" value="+1 (415) 304-7262" href="tel:+14153047262" />
                <ContactItem icon={<MessageSquare className="text-teal-600" />} title="WhatsApp" value="Chat instantly" href="https://wa.me/14153047262" isExternal />
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Office Hours (PST)</h3>
                <div className="text-sm space-y-2 text-slate-600">
                  <div className="flex justify-between"><span>Mon - Fri</span><span className="text-slate-900">9AM - 6PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-slate-900">9AM - 2PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-slate-900">Closed</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2" id="contact-form">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-slate-900">Message Sent!</h2>
                    <p className="text-slate-600 mt-2">We will respond to your inquiry within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    name="contact"
                    data-netlify="true"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>

                    <p className="text-sm text-teal-700 bg-teal-50 border border-teal-200 rounded-lg p-3">
                      Based outside the US? We handle foreign founder compliance across 11 countries. WhatsApp is the fastest way to reach us.
                    </p>

                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" onChange={(e) => handleChange('_gotcha', e.target.value)} />

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required name="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" required name="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="john@example.com" />
                      </div>
                    </div>

                    {/* Phone + Country */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <div className="flex gap-2">
                          <Select value={countryCode} onValueChange={setCountryCode}>
                            <SelectTrigger className="w-32 cursor-pointer flex-shrink-0">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {COUNTRY_CODES.map(({ country, code, flag }) => {
                                const FlagComponent = Flags[flag as keyof typeof Flags];
                                return (
                                  <SelectItem key={country} value={code} className="cursor-pointer">
                                    <div className="flex items-center gap-2">
                                      {FlagComponent ? <FlagComponent className="w-4 h-auto rounded-[1px]" /> : <Globe className="w-4 h-4 text-slate-400" />}
                                      <span>{code}</span>
                                    </div>
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => {
                              const digits = e.target.value.replace(/\D/g, '').slice(0, 12);
                              handleChange('phone', digits);
                            }}
                            placeholder="9876543210"
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Country</Label>
                        <Select value={formData.country} onValueChange={(v) => handleChange('country', v)}>
                          <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select country" /></SelectTrigger>
                          <SelectContent>
                            {COUNTRIES.map(c => <SelectItem className="cursor-pointer" key={c} value={c}>{c}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Business Type + Service */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Business Type</Label>
                        <Select value={formData.businessType} onValueChange={(v) => handleChange('businessType', v)}>
                          <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {BUSINESS_TYPES.map(type => <SelectItem className="cursor-pointer" key={type} value={type}>{type}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Service Interested In *</Label>
                        <Select value={formData.service} required onValueChange={(v) => handleChange('service', v)}>
                          <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>
                            {SERVICES.map(service => <SelectItem className="cursor-pointer" key={service} value={service}>{service}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        placeholder="e.g. Form 5471 filing for 2024, Delaware LLC compliance question"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="How can we help you?" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg cursor-pointer">
                      {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : 'Send Message'}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We respond across US, Asia, and European time zones - within 24 hours regardless of where you are.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}

function ContactItem({ icon, title, value, href, isExternal = false }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
