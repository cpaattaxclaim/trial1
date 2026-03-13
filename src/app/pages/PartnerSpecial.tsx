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
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  Loader2, 
  Building2
} from 'lucide-react';

const BUSINESS_TYPES = [
  "LLC",
  "Partnership",
  "S-Corporation",
  "C-Corporation"
];

export function FiveFourSevenTwoDirect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: 'Business Tax Filing',
    message: '',
    referralAgreement: false,
    _gotcha: ''
  });

  useEffect(() => {
    // Hidden page protection
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.title = "5472Direct | TaxClaim Partner Portal";
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
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          name: '', email: '', phone: '', businessType: '', 
          service: 'Business Tax Filing', message: '', referralAgreement: false, _gotcha: '' 
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      alert("Submission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTEtMS43ODkgNC00IDRzLTQtMS43ODkgNC00IDEuNzg5LTQgNC00IDQgMS43ODkgNCA0em0tNiAyNGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHptMTggMGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6 font-bold">5472Direct</h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Accelerated business tax compliance and reporting for corporate entities. Professional grade CPA filing services.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8" onClick={() => document.getElementById('form-anchor')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Business Tax Filing Section (Exact Service Page Replica) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-3 text-left">
              <div className="md:col-span-1 bg-slate-50 p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl mb-2 text-slate-900">Business Tax Filing</h3>
                <p className="text-sm text-gray-600 mb-4">Partnerships, S-Corps, C-Corps</p>
                <div className="text-3xl text-teal-600 mb-4 font-bold">Starting from $750</div>
                <p className="text-gray-700 mb-6 font-light">Comprehensive business tax preparation for partnerships, S-Corporations, and C-Corporations.</p>
              </div>
              <div className="md:col-span-2 p-8">
                <h4 className="text-lg mb-4 text-slate-900 font-bold">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Form 1065, 1120-S, or 1120 preparation',
                    'Schedule K-1 preparation for owners',
                    'State business tax returns',
                    'Strategic tax planning guidance'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TaxClaim Section (Home Page Replica) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-slate-900 font-bold">Why Choose TaxClaim?</h2>
              <p className="text-lg text-gray-600 mb-8 font-light">
                We're not just tax preparers. We're your strategic partners in business success.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Licensed & Certified', desc: 'CPA licensed in Washington State with expertise across all 50 states' },
                  { title: 'Transparent Pricing', desc: 'No hidden fees. Clear, upfront pricing for all services' },
                  { title: 'Dedicated Support', desc: 'Direct access to your advisor via email, phone, or WhatsApp' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-900 font-medium">{item.title}</div>
                      <div className="text-gray-600 text-sm font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600 font-bold">7+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-2 text-teal-600 font-bold">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form-anchor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 text-left">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">Direct Inquiries</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-teal-600" />
                  <span className="text-slate-600">cpa@taxclaim.co</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-teal-600" />
                  <span className="text-slate-600">WhatsApp Priority Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center">
                    <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-slate-900">Request Sent</h2>
                    <p className="text-slate-600 mt-2">We will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} onChange={(e) => handleChange('_gotcha', e.target.value)} />
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Email Address *</Label>
                        <Input required type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Business Type *</Label>
                        <Select required onValueChange={(v) => handleChange('businessType', v)}>
                          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {BUSINESS_TYPES.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Message *</Label>
                      <Textarea required rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Project details..." />
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <input 
                        type="checkbox" 
                        id="referral-check" 
                        className="w-5 h-5 accent-teal-600 mt-1 cursor-pointer"
                        checked={formData.referralAgreement}
                        onChange={(e) => handleChange('referralAgreement', e.target.checked)}
                        required
                      />
                      <Label htmlFor="referral-check" className="text-sm text-slate-700 cursor-pointer">
                        I am interested in the referral partnership program (up to 20% commission).
                      </Label>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700 h-12">
                      {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Submit 5472Direct Request'}
                    </Button>
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
