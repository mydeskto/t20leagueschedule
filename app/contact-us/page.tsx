"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Globe, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'hellokashi',
        'template_ofl7tpn',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Szs8doA-A_rJ_Qngl'
      );

      if (result.status === 200) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#122754] text-white overflow-hidden pt-20">
      
      <div className="container mx-auto px-4 py-24 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[#f26522]">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-black tracking-[0.3em] uppercase">Connect With Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                  Have a <span className="text-transparent stroke-text-gold">Question?</span> <br />
                  We're Here to Help.
                </h2>
                <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                  Whether you're inquiring about tickets, team partnerships, or media accreditation, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8 pt-4">
                {/* <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f26522]/50 transition-all duration-500 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f26522]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Headquarters</h4>
                    <p className="font-bold text-white group-hover:text-[#f26522] transition-colors">Sher-e-Bangla National Cricket Stadium</p>
                    <p className="text-white/60 text-sm">Mirpur, Dhaka, Bangladesh</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f26522]/50 transition-all duration-500 flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#f26522]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Email Inquiry</h4>
                    <p className="font-medium md:font-bold text-white group-hover:text-[#f26522] transition-colors uppercase">contactnplschedule@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f26522]/50 transition-all duration-500 flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#f26522]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-widest uppercase text-white/40 mb-1">Official Website</h4>
                    <p className="font-bold text-white group-hover:text-[#f26522] transition-colors uppercase">www.nplschedule.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-sm border border-white/10 p-8 md:p-12 shadow-2xl relative"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-4 right-4 w-[1px] h-6 bg-[#f26522]" />
                <div className="absolute top-4 right-4 h-[1px] w-6 bg-[#f26522]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest uppercase text-white/40">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="EX: John Doe"
                      className="bg-white/5 border-white/10 text-white placeholder-white/20 rounded-sm focus:border-[#f26522]/50 transition-all h-14 uppercase font-bold text-xs"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest uppercase text-white/40">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EX: john@agency.com"
                      className="bg-white/5 border-white/10 text-white placeholder-white/20 rounded-sm focus:border-[#f26522]/50 transition-all h-14 uppercase font-bold text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest uppercase text-white/40">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry Topic"
                    className="bg-white/5 border-white/10 text-white placeholder-white/20 rounded-sm focus:border-[#f26522]/50 transition-all h-14 uppercase font-bold text-xs"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest uppercase text-white/40">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white placeholder-white/20 focus:border-[#f26522]/50 transition-all uppercase font-bold text-xs resize-none"
                    placeholder="How can we assist you?"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#f26522] hover:bg-white text-black font-black py-8 rounded-sm text-xs tracking-[0.3em] transition-all duration-500 shadow-xl shadow-[#f26522]/10 flex items-center justify-center gap-3"
                >
                  {isLoading ? 'PROCESSING...' : (
                    <>
                      SEND MESSAGE <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" />
      
      <style jsx global>{`
        .stroke-text-gold {
          -webkit-text-stroke: 1px #f26522;
        }
      `}</style>
    </div>
  );
}
