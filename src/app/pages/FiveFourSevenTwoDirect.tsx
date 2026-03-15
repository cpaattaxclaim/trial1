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
  FileText,
} from 'lucide-react';

const BUSINESS_TYPES = [
  "Foreign-Owned Single-Member LLC",
];

const SERVICES = [
  "Form 5472 / Pro Forma 1120 CPA Support"
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
          className="text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

export function FiveFourSevenTwoDirect() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.title = "Form 5472 CPA Support | TaxClaim";
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Foreign-Owned Single-Member LLC',
    service: 'Form 5472 / Pro Forma 1120 CPA Support',
    message: '',
    referralAgreement: false,
    _gotcha: ''
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/mlgplgkj`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          name: '', email: '', phone: '', businessType: 'Foreign-Owned Single-Member LLC', 
          service: 'Form 5472 / Pro Forma 1120 CPA Support', message: '', 
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Complex Form 5472 case? We can help.</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Foreign-owned single-member LLCs have unique U.S. tax obligations. Missing or incorrect Form 5472 filings can trigger penalties of $25,000 or more. We provide licensed CPA support for complex Form 5472 and pro forma 1120 filings, ensuring your LLC stays compliant without the stress of navigating it alone.
            </p>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-lg px-8 cursor-pointer"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Talk to a CPA
            </Button>
            <p className="text-gray-400 text-sm mt-4">Remote CPA support available across all 50 states.</p>

            {/* Support bullets */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                'Form 5472 + pro forma 1120 support',
                'Foreign-owned single-member LLC cases',
                'CPA help for more complex filing situations',
                'Remote service across all 50 states',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What TaxClaim Can Help With */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3">
                {/* Left */}
                <div className="md:col-span-1 bg-slate-50 p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl mb-2 text-slate-900">CPA support for complex filing cases</h3>
                  <div className="text-3xl text-teal-600 mb-4 mt-4">Starting from $750</div>
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 cursor-pointer"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Talk to a CPA
                  </Button>
                </div>

                {/* Right */}
                <div className="md:col-span-2 p-8">
                  <h4 className="text-lg mb-2 text-slate-900">What TaxClaim can help with</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Form 5472 compliance for foreign-owned single-member LLCs is one of the most commonly mishandled filings with the IRS. Missing or incorrect filings can result in penalties of $25,000 or more, even when no tax is owed.
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    We work directly with you to review your LLC's structure, prepare the required forms accurately, and file on time, giving you confidence that your U.S. tax obligations are fully covered.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Complex Form 5472 + pro forma 1120 cases',
                      'Foreign-owned single-member LLC compliance support',
                      'Non-standard or higher-complexity filing situations',
                      'Related U.S. tax filing support when additional forms are required',
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
        </div>
      </section>

      {/* Why Choose TaxClaim */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-4xl mb-6 text-slate-900">Why Choose TaxClaim?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand that foreign-owned LLC compliance in the U.S. is not straightforward. TaxClaim brings the expertise, attention to detail, and direct communication that complex Form 5472 cases require.
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
                    desc: 'Direct access via email, phone, or WhatsApp'
                  },
                  {
                    title: 'Remote Convenience',
                    desc: 'Fully remote services. Work with us from anywhere in the US'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-900 mb-1 font-semibold">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600">7+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600">150+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600">100%</div>
                <div className="text-sm text-gray-600">On-Time Filing</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-2 text-teal-600">24hr</div>
                <div className="text-sm text-gray-600">Response Time</div>
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
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Talk to a CPA about your Form 5472 case</h2>
                <p className="text-gray-600 text-sm">Tell us about your LLC and why your case was referred from 5472Direct. We'll review the details and walk you through the best next step.</p>
              </div>
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
                        <Select value={formData.businessType} onValueChange={(v) => handleChange('businessType', v)}>
                          <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {BUSINESS_TYPES.map(type => (
                              <SelectItem className="cursor-pointer" key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service *</Label>
                      <Select value={formData.service} onValueChange={(v) => handleChange('service', v)}>
                        <SelectTrigger className="cursor-pointer"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {SERVICES.map(service => (
                            <SelectItem className="cursor-pointer" key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Briefly describe your LLC and why you need CPA help with Form 5472 / pro forma 1120."
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <input
                        type="checkbox"
                        id="referral"
                        className="w-4 h-4 mt-0.5 accent-teal-600 cursor-pointer flex-shrink-0"
                        checked={formData.referralAgreement}
                        onChange={(e) => handleChange('referralAgreement', e.target.checked)}
                        required
                      />
                      <Label htmlFor="referral" className="text-xs text-slate-500 cursor-pointer leading-relaxed">
                        I acknowledge that TaxClaim may pay a standard referral fee to 5472Direct for this introduction. This fee is paid entirely by TaxClaim and does not increase the cost of my services.
                      </Label>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg cursor-pointer">
                      {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : 'Talk to a CPA'}
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
