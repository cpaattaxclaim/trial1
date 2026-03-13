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
  Users, 
  Award, 
  Clock,
  Mail,
  MessageSquare
} from 'lucide-react';

export function PartnerSpecial() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: ''
  });

  // Keep it hidden from Google Search
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Priority Lead:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', businessType: '', service: '', message: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Matching Home Page Exactly */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTEtMS43ODkgNC00IDRzLTQtMS43ODkgNC00IDEuNzg5LTQgNC00IDQgMS43ODkgNCA0em0tNiAyNGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHptMTggMGMwIDIuMjExLTEuNzg5IDQtNCA0cy00LTEuNzg5LTQtNCAxLjc4OS00IDQtNCA0IDEuNzg5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-block px-4 py-2 bg-teal-600/20 rounded-full border border-teal-500/30 mb-6">
            <span className="text-teal-300 text-sm">Priority Partner Referral Offer</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">Specialist Business Tax & Advisory</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Expert tax guidance and compliance for referred partners. Experience direct CPA access and priority processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8" onClick={() => document.getElementById('priority-intake')?.scrollIntoView({ behavior: 'smooth' })}>
              Claim Priority Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats - Matching Home Page (Removed 99% Success) */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-teal-600" />
              <div className="text-3xl mb-1 text-slate-900 font-medium">150+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-teal-600" />
              <div className="text-3xl mb-1 text-slate-900 font-medium">7+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-teal-600" />
              <div className="text-3xl mb-1 text-slate-900 font-medium">24hrs</div>
              <div className="text-sm text-gray-600">Priority Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Contact Section - Styled like Home Sections */}
      <section id="priority-intake" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl mb-6 text-slate-900">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to get started? Fill out the form or reach out directly. We typically respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-slate-900 font-medium">Email</h3>
                  </div>
                  <span className="text-gray-600 ml-13">cpa@taxclaim.co</span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-slate-900 font-medium">WhatsApp</h3>
                  </div>
                  <span className="text-gray-600 ml-13 italic">Priority Messaging Enabled</span>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-gray-200">
                <h3 className="text-lg mb-3 text-slate-900">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-slate-900 font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column - High Quality UI Styling */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl mb-8 text-slate-900">Send us a Message</h2>
                
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl mb-2 text-slate-900">Thank You!</h3>
                    <p className="text-gray-600">We've received your priority inquiry and will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select onValueChange={(v) => handleChange('service', v)} required>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business-tax">Business Tax Filing</SelectItem>
                            <SelectItem value="formation">Company Formation</SelectItem>
                            <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                            <SelectItem value="resolution">IRS Notice Resolution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your business needs..." rows={5} />
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" required className="mt-1" />
                      <Label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                        I agree to be contacted regarding my inquiry. Information is kept confidential.
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">
                      Send Priority Message
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
