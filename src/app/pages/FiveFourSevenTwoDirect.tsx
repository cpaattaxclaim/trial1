import { useState, useEffect } from 'react';
import { Link } from 'react-router';
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
} from 'lucide-react';

const BUSINESS_TYPES = [
  "LLC",
  "Partnership",
  "S-Corporation",
  "C-Corporation"
];

const SERVICES = [
  "Business Tax Filing"
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

  // Business Tax Filing service data — from Code 1
  const businessTaxService = {
    id: 'business-tax',
    icon: Building2,
    title: 'Business Tax Filing',
    price: 'Starting from $750',
    subtitle: 'Partnerships, S-Corps, C-Corps',
    description: 'Comprehensive business tax preparation for partnerships, S-Corporations, and C-Corporations.',
    included: [
      'Form 1065, 1120-S, or 1120 preparation',
      'Schedule K-1 preparation for owners',
      'State business tax returns',
    ],
    notIncluded: [
      'Year-round support',
      'Quarterly estimated tax calculations',
      'Tax strategy consultation',
      'Multi-state filings',
      'Complex corporate structures',
      'Audit defence assistance'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 font-normal">Business Advisory & Services</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Professional tax strategy and business formation services. Reach out today for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Business Tax Filing Section — UI from Code 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id={businessTaxService.id}
            className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="grid md:grid-cols-3">
              {/* Left: Service Info */}
              <div className="md:col-span-1 bg-slate-50 p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <businessTaxService.icon className="w-8 h-8 text-teal-600" />
                </div>

                <h3 className="text-2xl mb-2 text-slate-900">{businessTaxService.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{businessTaxService.subtitle}</p>

                <div className="text-3xl text-teal-600 mb-4">{businessTaxService.price}</div>

                <p className="text-gray-700 mb-6">{businessTaxService.description}</p>

                <Link to="/contact">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Right: What's Included */}
              <div className="md:col-span-2 p-8">
                <h4 className="text-lg mb-4 text-slate-900">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {businessTaxService.included.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {businessTaxService.notIncluded.length > 0 && (
                  <>
                    <h4 className="text-lg mb-4 text-slate-900">Additional Services Available</h4>
                    <div className="space-y-2">
                      {businessTaxService.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          </div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
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
                      <div className="text-slate-900 mb-1 font-normal">{item.title}</div>
                      <div className="text-gray-600 text-sm font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600 font-normal">7+</div>
                <div className="text-sm text-gray-600 font-light">Years of Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600 font-normal">150+</div>
                <div className="text-sm text-gray-600 font-light">Clients Served</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600 font-normal">100%</div>
                <div className="text-sm text-gray-600 font-light">On-Time Filing</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600 font-normal">24hr</div>
                <div className="text-sm text-gray-600 font-light">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 text-left">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
              <div className="space-y-6">
                <ContactItem icon={<Mail className="text-teal-600" />} title="Email" value="cpa@taxclaim.co" href="mailto:cpa@taxclaim.co" />
                <ContactItem icon={<Phone className="text-teal-600" />} title="Phone" value="+1 (415) 304-7262" href="tel:+14153047262" />
                <ContactItem icon={<MessageSquare className="text-teal-600" />} title="WhatsApp" value="Chat instantly" href="https://wa.me/14153047262" isExternal />
              </div>

              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Office Hours (PST)</h3>
                <div className="text-sm space-y-2 text-slate-600">
                  <div className="flex justify-between"><span>Mon - Fri</span> <span className="text-slate-900">9AM - 6PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span> <span className="text-slate-900">10AM - 2PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span> <span className="text-slate-900">Closed</span></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
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
                          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {BUSINESS_TYPES.map(type => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service Interested In *</Label>
                      <Select required onValueChange={(v) => handleChange('service', v)}>
                        <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {SERVICES.map(service => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="How can we help you?" />
                    </div>

                    <div className="rounded-xl border border-slate-200 overflow-hidden">
                      <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Referral Fee Acknowledgement</span>
                      </div>
                      <div className="p-4 flex items-start gap-4">
                        <div className="relative flex-shrink-0 mt-0.5">
                          <input 
                            type="checkbox" 
                            id="referral" 
                            className="peer sr-only"
                            checked={formData.referralAgreement}
                            onChange={(e) => handleChange('referralAgreement', e.target.checked)}
                            required
                          />
                          <div 
                            onClick={() => handleChange('referralAgreement', !formData.referralAgreement)}
                            className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all ${
                              formData.referralAgreement 
                                ? 'bg-teal-600 border-teal-600' 
                                : 'bg-white border-slate-300 hover:border-teal-400'
                            }`}
                          >
                            {formData.referralAgreement && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <Label htmlFor="referral" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                          This engagement may be subject to a referral fee of <span className="font-semibold text-slate-800">up to 20%</span>. By checking this box, you acknowledge and agree to these terms.
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg">
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
