"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Modal from "@/components/ui/Modal";
import { founders } from "@/data/founders";
import { useState } from "react";

export default function Founders() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? founders[activeIndex] : null;

  return (
    <section id="founders" className="py-20 bg-warm-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bebas text-center text-charcoal">
          Founders
        </h2>
        <p className="text-center text-lg text-charcoal max-w-2xl mx-auto mt-4 font-inter">
          The people shaping Cali SAP Tech.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {founders.map((f, idx) => (
            <button
              key={f.name}
              onClick={() => setActiveIndex(idx)}
              className="text-left transform transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-chontaduro-gold rounded-xl"
            >
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar name={f.name} src={f.avatarUrl} size={64} />
                  <div>
                    <div className="font-bebas text-2xl text-charcoal">
                      {f.name}
                    </div>
                    <div className="font-inter text-gray-600">{f.role}</div>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>

        <Modal
          open={!!active}
          onClose={() => setActiveIndex(null)}
          title={active ? `${active.name} - Short CV` : "Short CV"}
        >
          {active && (
            <div className="flex items-start gap-4">
              <Avatar name={active.name} src={active.avatarUrl} size={72} className="flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bebas text-3xl text-pacifico-blue">
                  {active.name}
                </h3>
                <div className="font-inter text-gray-600">{active.role}</div>
                <div className="mt-4">
                  <ul className="list-disc pl-5 space-y-2 text-charcoal">
                    <li>SAP technologist and community builder</li>
                    <li>Focus areas: Next.js, CAP, SAP BTP</li>
                    <li>Contributing to Cali SAP Tech initiatives</li>
                  </ul>
                </div>
                <div className="text-right mt-6">
                  <button
                    className="px-4 py-2 rounded-lg bg-charcoal text-white hover:bg-pacifico-blue transition-colors"
                    onClick={() => setActiveIndex(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
}
