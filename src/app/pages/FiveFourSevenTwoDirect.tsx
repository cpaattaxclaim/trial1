import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Loader2, 
  Building2, 
  ArrowRight 
} from 'lucide-react';

const BUSINESS_TYPES = [
  "LLC",
  "Partnership",
  "S-Corporation",
  "C-Corporation"
];

const SERVICES = [
  "Business Tax Filing",
  "Tax Planning",
  "Business Formation",
  "Other"
];

function ContactItem({ icon, title, value, href, isExternal = false }: any) {
  return (
    <div className="flex items-start gap-4 text-left">
      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <a 
          href={href} 
          target={isExternal ? "_blank" : undefined} 
          rel={isExternal ? "noopener noreferrer" : undefined} 
          className="text-slate-600 hover:text-teal-600 transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

export function FiveFourSevenTwoDirect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
    referralAgreement: false,
    _gotcha: '' 
  });

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.title = "Business Advisory & Services | TaxClaim";
  }, []);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/mbdanaza`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          name: '', email: '', phone: '', businessType: '', 
          service: '', message: '', 
          referralAgreement: false, _gotcha: '' 
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Business Advisory & Services</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Professional tax strategy and business formation services. Reach out today for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Business Tax Filing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-3 text-left">
              <div className="md:col-span-1 bg-slate-50 p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Business Tax Filing</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">Partnerships, S-Corps, C-Corps</p>
                <div className="text-3xl font-bold text-teal-600 mb-4">Starting from $750</div>
                <p className="text-slate-600 mb-6 font-light">Comprehensive business tax preparation for partnerships, S-Corporations, and C-Corporations.</p>
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700" 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="md:col-span-2 p-8 border-l border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Form 1065, 1120-S, or 1120 preparation',
                    'Schedule K-1 preparation for owners',
                    'State business tax returns',
                    'Balance Sheet Reconciliation',
                    'Strategic tax planning guidance',
                    'Direct CPA review and filing'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl mb-6 text-slate-900">
                Why Choose TaxClaim?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just tax preparers – we're your strategic partners in business success. Our comprehensive approach ensures you're not only compliant but positioned for growth.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Licensed & Certified',
                    desc: 'CPA licensed in Washington State with expertise across all 50 states'
                  },
                  {
                    title: 'Transparent Pricing',
                    desc: 'No hidden fees. Clear, upfront pricing for all services'
                  },
                  {
                    title: 'Dedicated Support',
                    desc: 'Direct access to your advisor via email, phone, or WhatsApp'
                  },
                  {
                    title: 'Remote Convenience',
                    desc: 'Fully remote services - work with us from anywhere in the US'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-900 mb-1">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600 font-normal">7+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600 font-normal">150+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600 font-normal">100%</div>
                <div className="text-sm text-gray-600">On-Time Filing</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600 font-normal">24hr</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 text-left">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
              <div className="space-y-6">
                <ContactItem icon={<Mail className="text-teal-600" />} title="Email" value="cpa@taxclaim.co" href="mailto:cpa@taxclaim.co" />
                <ContactItem icon={<Phone className="text-teal-600" />} title="Phone" value="+1 (415) 304-7262" href="tel:+14153047262" />
                <ContactItem icon={<MessageSquare className="text-teal-600" />} title="WhatsApp" value="Chat instantly" href="https://wa.me/14153047262" isExternal />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-slate-900 font-normal">Message Sent!</h2>
                    <p className="text-slate-600 mt-2">We'll respond to your inquiry within 24 hours.</p>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    data-netlify="true"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 font-normal">Send us a Message</h2>

                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" onChange={(e) => handleChange('_gotcha', e.target.value)} />

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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label>Business Type</Label>
                        <Select onValueChange={(v) => handleChange('businessType', v)}>
                          <SelectTrigger><SelectValue
