import React from "react";
import { Card } from "@/components/ui/card";
import { Coffee, Heart } from "lucide-react";

export const BuyMeCoffee: React.FC = () => {
  return (
    <Card className="text-center">
      <div className="bg-linear-to-br from-yellow-100 to-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
        <Coffee className="text-orange-600" size={48} />
      </div>

      <h2 className="text-4xl font-bold text-blue-900 mb-4">Buy Me a Coffee</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Support my work and fuel my passion for creating great content! Your
        contribution helps me continue building amazing projects and sharing
        knowledge with the community.
      </p>

      <button className="bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg">
        <Heart size={24} />
        Buy Me a Coffee
      </button>

      <div className="mt-8 pt-8 border-t">
        <p className="text-gray-600 mb-4">Every coffee helps me:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-800">
              ☕ Create More Content
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-800">🚀 Build New Projects</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-800">💡 Share Knowledge</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
