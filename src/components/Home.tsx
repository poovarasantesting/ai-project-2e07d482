import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold text-blue-700">MyApp</h1>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to your new React application
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            This is a simple and clean homepage ready for your content.
            Start building your amazing project today!
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3">Feature {item}</h3>
              <p className="text-gray-600">
                Describe an amazing feature of your application here. Explain why users will love it.
              </p>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="container mx-auto py-8 px-4 mt-16 border-t border-gray-100">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
}