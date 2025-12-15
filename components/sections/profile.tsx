import React from "react";
import { Card } from "../ui/card";


export const Profile: React.FC = () => {
  return (
    <Card>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">Profile</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Full Name
          </h3>
          <p className="text-gray-700">Your Name</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Title</h3>
          <p className="text-gray-700">Full Stack Developer</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Location</h3>
          <p className="text-gray-700">Lagos, Nigeria</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Email</h3>
          <p className="text-gray-700">your.email@example.com</p>
        </div>
      </div>
    </Card>
  );
};
