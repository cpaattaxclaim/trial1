import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  CheckCircle2, 
  ArrowRight, 
  Mail,
  MessageSquare,
  Check,
  Phone,
  Clock
} from 'lucide-react';

export function PartnerSpecial() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'business-tax',
    message: ''
  });

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'business-tax', message: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Left Aligned matching Home Page */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTEtMS43ODkgNC00IDRzLTQtMS43ODkgNC00IDEuNzg5LTQgNC00IDQgMS43ODkgNCA0em0tNiAyNGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHptMTggMGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6 font-bold">Business Tax & Advisory</h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Expert tax guidance and compliance for business entities. Experience direct CPA access and professional processing for all your corporate filing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card - Services UI */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-600 text-white px-6 py-2 rounded-bl-2xl text-sm font-medium">
              Professional
            </div>
            <div className="mb-8 text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Business Tax Filing</h3>
              <p className="text-gray-600">For Corporations & Multi-Member LLCs</p>
            </div>
            <div className="mb-8 text-left">
              <span className="text-5xl font-bold text-slate-900">$750</span>
              <span className="text-gray-500 ml-2 text-lg">Starting at</span>
            </div>
            <ul className="space-y-4 mb-10 text-left">
              {[
                'Federal & State Tax Returns',
                'K-1 Issuance for Partners',
                'Balance Sheet Reconciliation',
                'Year-round Tax Strategy',
                'IRS Audit Protection'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-teal-50 p-1 rounded-full">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Replicated from Contact Us Page */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-600 mb-12 font-light">
                Ready to optimize your business taxes? Contact us for a consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                    <p className="text-gray-600 font-light">cpa@taxclaim.co</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
                    <p className="text-gray-600 italic font-light text-sm">Priority consultation messaging enabled.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Working Hours</h3>
                    <p className="text-gray-600 font-light">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 text-left">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-900 font-medium">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-none h-12 focus:ring-2 focus:ring-teal-600" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-900 font-medium">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-slate-50 border-none h-12 focus:ring-2 focus:ring-teal-600" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-900 font-medium">Message</Label>
                    <Textarea id="message" required placeholder="Tell us about your business tax needs..." rows={5} className="bg-slate-50 border-none focus:ring-2 focus:ring-teal-600 p-4" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} />
                  </div>

                  {/* Referral Fee Disclosure */}
                  <div className="flex items-center gap-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                    <div className="bg-teal-600 rounded-full p-1 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-sm text-slate-700 font-medium">
                      We offer referral commissions on our services referred by a partner. It can go up to 20% of the fees charged.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 rounded-xl text-lg font-bold transition-all shadow-lg shadow-teal-600/20">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
