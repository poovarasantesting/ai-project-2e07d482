import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides current conditions and forecasts for locations worldwide.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=500&auto=format&fit=crop",
      tags: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Recipe Finder App",
      description:
        "An application for discovering and saving recipes based on available ingredients.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "API Integration", "CSS Grid"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A web application for tracking workouts, progress, and fitness goals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Chart.js", "Firebase"],
      liveLink: "#",
      repoLink: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        My Projects
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center mb-12">
        Here are some of the projects I've worked on. Each project represents different skills and
        technologies I've mastered throughout my journey.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    Code <Github className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;