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
    _gotcha: '' 
  });

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

      {/* Page Hero - MATCHED TO CODE 2 BLOG UI */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Professional tax strategy and business formation services. Reach out today for a consultation.
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

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-16 h-16 text-
