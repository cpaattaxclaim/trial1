import { useState } from 'react';
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
import { Mail, Phone, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

// DATA CONSTANTS
const BUSINESS_TYPES = [
  "Individual/Self-Employed",
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
  "Company Dissolution",
  "IRS/State Resolution",
  "Bookkeeping",
  "Business Consulting",
  "Other/Not Sure"
];

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
    _gotcha: '' // Honeypot field for spam bots
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Formspree ID or process.env.NEXT_PUBLIC_FORMSPREE_ID
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_ID_HERE'}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '', email: '', phone: '', businessType: '', service: '', message: '', _gotcha: ''
        });
        // Return to form state after 5 seconds
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Ready to optimize your taxes? Reach out via the form or our direct channels. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sidebar Information */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-semibold text-slate-900">Contact Details</h2>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail className="text-teal-600" />} 
                  title="Email" 
                  value="cpa@taxclaim.co" 
                  href="mailto:cpa@taxclaim.co" 
                />
                <ContactItem 
                  icon={<Phone className="text-teal-600" />} 
                  title="Phone" 
                  value="+1 (415) 304-7262" 
                  href="tel:+14153047262" 
                />
                <ContactItem 
                  icon={<MessageSquare className="text-teal-600" />} 
                  title="WhatsApp" 
                  value="Chat with us instantly" 
                  href="https://wa.me/14153047262" 
                  isExternal
                />
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Office Hours (PST)</h3>
                <ul className="text-sm space-y-2 text-slate-600">
                  <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-slate-900">9AM - 6PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span className="text-slate-900">10AM - 2PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span className="text-slate-900 font-medium">Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                    <p className="text-slate-600">Thank you for reaching out. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                    {/* Honeypot field (hidden) */}
                    <input 
                      type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off"
                      onChange={(e) => handleChange('_gotcha', e.target.value)} 
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Business Type</Label>
                        <Select onValueChange={(v) => handleChange('businessType', v)}>
                          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {BUSINESS_TYPES.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Service Interested In *</Label>
                        <Select required onValueChange={(v) => handleChange('service', v)}>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>
                            {SERVICES.map(service => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="How can we help you?" />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg"
                    >
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

      <Footer />
    </div>
  );
}

// Sidebar Sub-component
function ContactItem({ icon, title, value, href, isExternal = false }: any) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
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
