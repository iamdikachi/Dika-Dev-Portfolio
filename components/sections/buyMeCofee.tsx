import React from "react";
import { Card } from "@/components/ui/card";
import { Coffee, Heart } from "lucide-react";
import Link from "next/link";

export const BuyMeCoffee: React.FC = () => {
  return (
    <Card className="text-center">
      <div className="bg-teal-400/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-400/10">
        <Coffee className="text-teal-400" size={48} />
      </div>

      <h2 className="text-4xl font-bold text-teal-400 mb-4">Buy Me a Coffee</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto italic">
        Support my work and fuel my passion for creating exceptional digital experiences! Your
        contribution helps me continue building amazing projects and sharing
        knowledge with the community.
      </p>
    <Link href="buymeacoffee.com/emmanuelnno">
         <button className="cursor-pointer bg-teal-400 hover:bg-teal-500 text-dark-bg px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg shadow-teal-400/10">
        <Heart size={24} className="fill-current" />
        Buy Me a Coffee
      </button>
    </Link>
 

      <div className="mt-8 pt-8 border-t border-teal-400/10">
        <p className="text-gray-500 mb-4 font-mono text-xs uppercase tracking-widest">Every coffee helps me:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-teal-400/2 p-4 rounded-lg border border-teal-400/5 hover:border-teal-400/20 transition-colors">
            <p className="font-semibold text-teal-400">
              ☕ Create More Content
            </p>
          </div>
          <div className="bg-teal-400/2 p-4 rounded-lg border border-teal-400/5 hover:border-teal-400/20 transition-colors">
            <p className="font-semibold text-teal-400">🚀 Build New Projects</p>
          </div>
          <div className="bg-teal-400/2 p-4 rounded-lg border border-teal-400/5 hover:border-teal-400/20 transition-colors">
            <p className="font-semibold text-teal-400">💡 Share Knowledge</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
