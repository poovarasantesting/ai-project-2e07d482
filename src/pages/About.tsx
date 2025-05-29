import { motion } from "framer-motion";
import { Code, Layout, Server, Paintbrush } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "TypeScript", level: 75 },
    { name: "UI/UX Design", level: 65 },
  ];

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces with modern technologies.",
      icon: <Layout className="h-10 w-10 text-primary" />,
    },
    {
      title: "Backend Development",
      description: "Creating reliable and scalable server-side applications and APIs.",
      icon: <Server className="h-10 w-10 text-primary" />,
    },
    {
      title: "Custom Web Apps",
      description: "Developing tailored web applications to meet specific business needs.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user experiences.",
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          About Me
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                John Doe
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                I am a passionate web developer with over 5 years of experience in creating beautiful
                and functional websites and web applications. My journey in web development started
                when I was in college, and since then, I've been constantly learning and improving my
                skills.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                I specialize in frontend development with React, but I'm also comfortable working
                with backend technologies. I believe in writing clean, maintainable code and creating
                intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          My Skills
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-800">
              <CardHeader className="flex items-center pb-2">
                {service.icon}
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;