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
  Check
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

      {/* Hero Section - Left Aligned */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTEtMS43ODkgNC00IDRzLTQtMS43ODkgNC00IDEuNzg5LTQgNC00IDQgMS43ODkgNCA0em0tNiAyNGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHptMTggMGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Business Tax & Advisory</h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert tax guidance and compliance for business entities. Experience direct CPA access and professional processing for all your corporate filing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8" onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}>
                View Service Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - $750 Starting */}
      <section id="pricing-section" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-teal-600 rounded-2xl p-8 shadow-xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Featured Service
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Business Tax Filing</h3>
                <p className="text-gray-600 mt-1 text-left">For Corporations & Multi-Member LLCs</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-slate-900">$750</div>
                <div className="text-sm text-gray-500">Starting at</div>
              </div>
            </div>
            <ul className="space-y-4 mb-8 text-left">
              {[
                'Federal & State Tax Returns',
                'K-1 Issuance for Partners',
                'Balance Sheet Reconciliation',
                'Year-round Tax Strategy',
                'IRS Audit Protection'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-teal-600 hover:bg-teal-700 py-6 text-lg" onClick={() => document.getElementById('priority-intake')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Business Filing
            </Button>
          </div>
        </div>
      </section>

      {/* Workflow Section - Left Aligned */}
      <section className="py-16 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl text-slate-900 font-medium">How We Work Together</h2>
            <p className="text-gray-600 mt-2">A seamless hand-off designed for professional bookkeeping firms</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-left">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-medium">Referral</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Introduce your client through this portal for priority intake.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-left">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">2</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-medium">Preparation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We handle complex C-Corp compliance and technical reporting.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-left">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-medium">Finalization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We sync with your books to ensure tax-ready accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="priority-intake" className="py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl mb-6 text-slate-900">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-teal-600" /> <span className="text-gray-600">cpa@taxclaim.co</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-teal-600" /> <span className="text-gray-600">WhatsApp Available</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h3 className="text-2xl mb-2 text-slate-900">Thank You!</h3>
                    <p className="text-gray-600">Your inquiry has been received. We will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required value={formData.message} onChange={(e) => handleChange('message', e.target.value)} rows={5} />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">Send Message</Button>
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
