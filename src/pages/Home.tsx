import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Home as HomeIcon, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <HomeIcon className="h-8 w-8 mr-2 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Welcome Home</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your beautiful React application homepage with modern design and responsive layout.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <feature.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <Button size="lg" className="px-8">
          Get Started
        </Button>
      </section>

      <footer className="border-t pt-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Modern Design",
    description: "Clean and beautiful UI components built with shadcn/ui and Tailwind CSS.",
    icon: Star,
  },
  {
    title: "Responsive Layout",
    description: "Looks great on all devices, from mobile phones to desktop monitors.",
    icon: HomeIcon,
  },
  {
    title: "Easy to Customize",
    description: "Modify this template to fit your brand and content needs.",
    icon: ArrowRight,
  },
];