import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-4xl font-bold text-blue-900 mb-2">Contact</h2>
        <p className="text-gray-600">
          Get in touch with me for collaborations and opportunities.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-blue-600" size={32} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">your.email@example.com</p>
        </Card>

        <Card className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-blue-600" size={32} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+234 XXX XXX XXXX</p>
        </Card>

        <Card className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-blue-600" size={32} />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
          <p className="text-gray-600">Lagos, Nigeria</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-2xl font-bold text-blue-800 mb-4">
          Send Me a Message
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </Card>
    </div>
  );
};
