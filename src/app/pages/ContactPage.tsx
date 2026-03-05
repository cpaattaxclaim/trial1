import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '../components/ui/select';
import { Mail, Phone, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

export function ContactPage() {
  // Use a status enum for cleaner UI state management
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
    _gotcha: '' // Honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      // REPLACE with your actual Formspree endpoint ID
      const response = await fetch("https://formspree.io/f/mbdanaza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', phone: '', businessType: '', service: '', message: '', _gotcha: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ... Hero Section remains the same ... */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar (keep your existing code here) */}
            <div className="lg:col-span-1">...</div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl mb-6 text-slate-900">Send us a Message</h2>
                
                {status === 'SUCCESS' ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl mb-2 text-slate-900">Thank You!</h3>
                    <p className="text-gray-600">We've received your message and will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field (hidden from users) */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} onChange={(e) => handleChange('_gotcha', e.target.value)} />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="john@example.com" className="mt-1.5" />
                      </div>
                    </div>

                    {/* For Select components, we add a hidden input or ensure the name is passed */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+1 (555) 000-0000" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="businessType">Business Type</Label>
                        <input type="hidden" name="businessType" value={formData.businessType} />
                        <Select value={formData.businessType} onValueChange={(v) => handleChange('businessType', v)}>
                          <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual/Self-Employed</SelectItem>
                            <SelectItem value="llc">LLC</SelectItem>
                            {/* ... rest of your items ... */}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interested In *</Label>
                      <input type="hidden" name="service" value={formData.service} />
                      <Select value={formData.service} onValueChange={(v) => handleChange('service', v)} required>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tax-filing">Individual Tax Filing</SelectItem>
                          {/* ... rest of your items ... */}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your needs..." rows={6} className="mt-1.5" />
                    </div>

                    {status === 'ERROR' && (
                      <p className="text-red-500 text-sm text-center">Something went wrong. Please check your internet connection.</p>
                    )}

                    <Button type="submit" disabled={status === 'SUBMITTING'} size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-lg">
                      {status === 'SUBMITTING' ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : 'Send Message'}
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
