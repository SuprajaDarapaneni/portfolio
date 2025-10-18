"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  Calendar,
  Users,
  Zap,
  Award,
  MessageCircle,
  Globe,
  Smartphone,
  Briefcase,
} from "lucide-react";

const projects = [
  {
    title: "Mongoride Driver App",
    icon: <Smartphone className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase"],
    desc: "Driver mobile app for ride management — features include trip scheduling, live tracking, and earnings dashboard.",
    type: "Mobile App",
    deliveryTime: "6 weeks",
    client: "Mongoride",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.mongoride.driver",
  },
  {
    title: "Mongoride User App",
    icon: <Smartphone className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase"],
    desc: "User app for booking rides with real-time driver tracking and seamless payment experience.",
    type: "Mobile App",
    deliveryTime: "6 weeks",
    client: "Mongoride",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.mongoride.user",
  },
  {
    title: "Mongoride Website",
    icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
    tech: ["Next.js", "Tailwind CSS", "Node.js", "AWS Hosting"],
    desc: "Official landing website for Mongoride with modern UI, SEO optimization, and fast-loading pages.",
    type: "Web App",
    deliveryTime: "4 weeks",
    client: "Mongoride",
    demoUrl: "https://mongoride.com",
  },
  {
    title: "CareerKit",
    icon: <Briefcase className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    desc: "Career management and job portal platform for professionals to explore career paths and learning resources.",
    type: "Full Stack Project",
    deliveryTime: "8 weeks",
    client: "Indstack",
    demoUrl: "https://careerkit.indstack.com/",
  },
  {
    title: "Sree Brunda Projects",
    icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React", "Tailwind CSS", "Node.js"],
    desc: "Real estate company website showcasing ongoing and completed property developments with modern UI.",
    type: "Web App",
    deliveryTime: "5 weeks",
    client: "Sree Brunda Projects",
    demoUrl: "https://sreebrundaprojects.com",
  },
  {
    title: "AGX International",
    icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
    tech: ["Next.js", "Tailwind CSS", "AWS"],
    desc: "Corporate website for AGX International, designed to highlight export-import services and global presence.",
    type: "Web App",
    deliveryTime: "5 weeks",
    client: "AGX International",
    demoUrl: "https://agx-international.com",
  },
  {
    title: "AS Techno Solutions",
    icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React", "Tailwind CSS", "Firebase"],
    desc: "Professional tech company website with dynamic service listings and responsive modern layout.",
    type: "Web App",
    deliveryTime: "4 weeks",
    client: "AS Techno Solutions",
    demoUrl: "https://astechnosolutions.com",
  },
  {
    title: "Rapen Technologies",
    icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
    tech: ["Next.js", "Tailwind CSS"],
    desc: "Technology firm website built with performance and scalability in mind. Includes contact automation and inquiry forms.",
    type: "Web App",
    deliveryTime: "4 weeks",
    client: "Rapen Technologies",
    demoUrl: "https://rapentechnologies.com",
  },
  {
    title: "CrudBook",
    icon: <Globe className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
    desc: "A CRUD-based social platform enabling users to create, update, and manage posts efficiently.",
    type: "Full Stack Project",
    deliveryTime: "3 weeks",
    client: "Internal Project",
    demoUrl: "https://crudbook.in",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-white dark:text-black" />
            <span className="text-sm font-medium text-white dark:text-black">
              9 Live Projects Deployed
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Featured <span>Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Production-grade apps and websites built using modern frameworks and
            scalable backend systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">High Performance</span>
            </div>
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Users className="h-5 w-5" />
              <span className="font-semibold">Trusted by Clients</span>
            </div>
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Production Deployed</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                      {project.icon}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    >
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-black dark:text-white">
                  {project.title}
                </CardTitle>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Delivered in {project.deliveryTime}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-black text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Project
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Let’s build something exceptional — crafted for scalability,
            performance, and design excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918374330906?text=Can%20we%20meet"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Me Now
            </a>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <div className="w-3 h-3 bg-black dark:bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold">
              Currently Available for New Projects
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Accepting new clients this month • Response within 2 hours
          </p>
        </div>
      </div>
    </section>
  );
}