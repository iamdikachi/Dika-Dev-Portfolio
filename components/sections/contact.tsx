import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Code2, Briefcase, Share2 } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-teal-400">
              Let's Build <br />
              <span className="text-gray-300">Something Together</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md italic">
              I'm always open to discussing new projects, creative AI ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through the form or my social media.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full border border-teal-400/20 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer group">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Github</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full border border-teal-400/20 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer group">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Linkedin</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full border border-teal-400/20 flex items-center justify-center hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Twitter</span>
            </div>
          </div>

          <div className="bg-teal-400/5 rounded-2xl p-8 space-y-6 border border-teal-400/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400 border border-teal-400/20">
                <Mail className="w-5 h-5" />
              </div>
              <p className="font-medium text-gray-300">hello@devportfolio.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400 border border-teal-400/20">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="font-medium text-gray-300">Remote / San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <Card className="p-8 md:p-10 bg-teal-400/2 border border-teal-400/10 rounded-4xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Email Address
                  </label>
                  <input
                    type="email"
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
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project visions..."
                  rows={4}
                  className="w-full px-5 py-4 bg-dark-bg border border-teal-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 transition-all text-gray-300 placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-teal-400 hover:bg-teal-500 text-dark-bg font-bold rounded-xl transition-all shadow-lg shadow-teal-400/10 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

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

