"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { projects } from "@/data/projects";
import { useState } from "react";
import { ExternalLink, Code, Zap, Users, Globe } from "lucide-react";
import type { Project, ProjectStatus, ProjectCategory } from "@/types";

const statusConfig: Record<ProjectStatus, { variant: "default" | "gold" | "outline"; label: string }> = {
  active: { variant: "default", label: "Active" },
  alpha: { variant: "gold", label: "Alpha" },
  beta: { variant: "outline", label: "Beta" },
  "coming-soon": { variant: "outline", label: "Coming Soon" }
};

const categoryIcons: Record<ProjectCategory, React.ComponentType<{ className?: string }>> = {
  "ai-marketplace": Globe,
  "development-tool": Code,
  "integration": Zap,
  "analytics": Users
};

const categoryLabels: Record<ProjectCategory, string> = {
  "ai-marketplace": "AI Marketplace",
  "development-tool": "Development Tool",
  "integration": "Integration",
  "analytics": "Analytics"
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? projects[activeIndex] : null;

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bebas text-center text-charcoal">
          Our Projects & Initiatives
        </h2>
        <p className="text-center text-lg text-charcoal max-w-3xl mx-auto mt-4 font-inter">
          Innovative SAP solutions and tools developed by our community. 
          From AI-powered development assistants to enterprise marketplaces.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => {
            const IconComponent = categoryIcons[project.category];
            return (
              <button
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                className="text-left transform transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-chontaduro-gold rounded-xl"
              >
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-pacifico-blue/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-pacifico-blue" />
                      </div>
                      <div className="flex flex-col">
                        <Badge variant={statusConfig[project.status].variant} className="mb-1">
                          {statusConfig[project.status].label}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bebas text-2xl text-charcoal mb-1">
                      {project.title}
                    </h3>
                    <p className="font-inter text-pacifico-blue font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="font-inter text-gray-600 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-inter">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </button>
            );
          })}
        </div>

        <Modal
          open={!!active}
          onClose={() => setActiveIndex(null)}
          title={active ? `${active.title} - Project Details` : "Project Details"}
        >
          {active && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                {(() => {
                  const IconComponent = categoryIcons[active.category];
                  return (
                    <div className="p-3 bg-pacifico-blue/10 rounded-lg flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-pacifico-blue" />
                    </div>
                  );
                })()}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bebas text-3xl text-pacifico-blue">
                      {active.title}
                    </h3>
                    <Badge variant={statusConfig[active.status].variant}>
                      {statusConfig[active.status].label}
                    </Badge>
                  </div>
                  <p className="font-inter text-gray-600 font-medium mb-2">
                    {active.subtitle}
                  </p>
                  <p className="font-inter text-sm text-gray-500">
                    {categoryLabels[active.category]}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="font-inter text-charcoal leading-relaxed">
                  {active.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-bebas text-xl text-charcoal mb-3">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {active.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-inter text-sm text-charcoal">
                      <div className="w-1.5 h-1.5 bg-pacifico-blue rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-bebas text-xl text-charcoal mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {active.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pacifico-blue/10 text-pacifico-blue text-sm rounded-full font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team */}
              {active.team && active.team.length > 0 && (
                <div>
                  <h4 className="font-bebas text-xl text-charcoal mb-3">Team</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.team.map((member) => (
                      <span
                        key={member}
                        className="px-3 py-1 bg-chontaduro-gold/20 text-charcoal text-sm rounded-full font-inter"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {active.links.website && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => openExternalLink(active.links.website!)}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </Button>
                )}
                {active.links.demo && active.links.demo !== active.links.website && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => openExternalLink(active.links.demo!)}
                    className="flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    Try Demo
                  </Button>
                )}
                {active.links.documentation && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => openExternalLink(active.links.documentation!)}
                    className="flex items-center gap-2"
                  >
                    <Code className="w-4 h-4" />
                    Documentation
                  </Button>
                )}
                {active.links.earlyAccess && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => openExternalLink(active.links.earlyAccess!)}
                    className="flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Early Access
                  </Button>
                )}
              </div>

              {/* Close button */}
              <div className="flex justify-end pt-4">
                <Button
                  variant="secondary"
                  onClick={() => setActiveIndex(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
}
