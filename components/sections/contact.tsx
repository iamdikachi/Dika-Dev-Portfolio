import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "72cecd5f-f0de-4915-a6a7-9373713edd3e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-400">
              Let&apos;s Build <br />
              <span className="text-gray-300">Something Together</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md italic">
              I&apos;m always open to discussing new projects, creative AI ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through the form or my social media.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/iamdikachukwu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full border border-teal-400/20 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer">
                <FaFacebook className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest group-hover:text-teal-400 transition-colors">Facebook</span>
            </a>
            <a href="https://www.instagram.com/iamdikachukwu?igsh=Zzh0d2VndGRtdGJo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full border border-teal-400/20 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer">
                <FaInstagram className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest group-hover:text-teal-400 transition-colors">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@iamdikachukwu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full border border-teal-400/20 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer">
                <FaTiktok className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest group-hover:text-teal-400 transition-colors">TikTok</span>
            </a>
          </div>

          <div className="bg-teal-400/5 rounded-2xl p-8 space-y-6 border border-teal-400/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400 border border-teal-400/20">
                <Mail className="w-5 h-5" />
              </div>
              <p className="font-medium text-gray-300">emmanuelnnadi097@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400 border border-teal-400/20">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="font-medium text-gray-300">Remote / Nigeria</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Card className="p-6 md:p-10 bg-teal-400/2 border border-teal-400/10 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project visions..."
                  rows={4}
                  className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-teal-400 hover:bg-teal-500 disabled:bg-teal-400/50 text-dark-bg font-bold rounded-xl transition-all shadow-lg shadow-teal-400/10 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitStatus === "success" && (
                <p className="text-teal-400 text-sm font-medium text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm font-medium text-center">Something went wrong. Please try again.</p>
              )}

              <p className="text-center text-xs text-gray-400 font-medium pt-2">
                Typically responds within 24-48 hours.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

