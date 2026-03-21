import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useSEO } from '../../hooks/useSEO';
import { Textarea } from '../components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { Mail, Phone, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const BUSINESS_TYPES = [
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
    title: 'Contact TaxClaim | Free CPA Consultation - San Jose, CA',
    description: 'Schedule a free consultation with TaxClaim. Reach us by email, phone, or WhatsApp. We serve individuals and businesses across the US with expert tax and advisory services.',
    canonical: 'https://taxclaim.co/contact',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
    _gotcha: '' 
  });

  // Scroll to form if #contact-form is in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/mbdanaza`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', businessType: '', service: '', message: '', _gotcha: '' });
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
              Whether you are filing as an individual, running a business, or managing a US LLC from abroad, TaxClaim is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sidebar Information */}
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
                  <div className="flex justify-between"><span>Mon - Fri</span> <span className="text-slate-900">9AM - 6PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span> <span className="text-slate-900">9AM - 2PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span> <span className="text-slate-900">Closed</span></div>
                </div>
              </div>
            </div>

            {/* Form Section — id enables direct scroll from blog CTAs */}
            <div className="lg:col-span-2" id="contact-form">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-slate-900">Message Sent!</h2>
                    <p className="text-slate-600 mt-2">We'll respond to your inquiry within 24 hours.</p>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    data-netlify="true"
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

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
                          <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {BUSINESS_TYPES.map(type => <SelectItem className="cursor-pointer" key={type} value={type}>{type}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service Interested In *</Label>
                      <Select required onValueChange={(v) => handleChange('service', v)}>
                        <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {SERVICES.map(service => <SelectItem className="cursor-pointer" key={service} value={service}>{service}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="How can we help you?" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg cursor-pointer">
                      {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : 'Send Message'}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * We typically respond within 24 hours during business days
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
