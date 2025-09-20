"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface HeroProps {
  variant?: "default" | "formal";
}

export default function Hero({ variant = "default" }: HeroProps) {
  return (
    <section className="bg-warm-white py-20 md:py-28">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bebas font-extrabold text-charcoal leading-tight tracking-wide animate-fade-in-down">
            SAP Technical{" "}
            <span className="relative inline-block">
              <span className="invisible">Collaboration</span>
              <span className="absolute left-0 top-0">
                <TypeAnimation
                  sequence={[
                    "Research",
                    2000,
                    "Development",
                    2000,
                    "Exploration",
                    2000,
                    "Collaboration",
                    2000,
                    "Innovation",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-pacifico-blue"
                />
              </span>
            </span>
            <br />
            in the{" "}
            <span className="text-pacifico-blue relative">
              Heart
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-chontaduro-gold"></span>
            </span>{" "}
            of <span className="text-salsa-red">Cali</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-charcoal max-w-2xl mx-auto md:mx-0 font-inter animate-fade-in-up">
            A vibrant community for SAP professionals in Valle del Cauca. We
            explore, innovate, and share knowledge with the rhythm and energy of
            our city.
          </p>
          <div
            className="mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#past-event">
              <Button variant="secondary" size="lg">
                View Our Recent Event
              </Button>
            </a>
          </div>
        </div>
        <div
          className="hidden md:block animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Image
            src="/cali-illustration.png"
            alt="Illustration of Cali with the Gato del Rio and salsa dancers"
            width={600}
            height={600}
            className={cn(
              "shadow-xl",
              variant === "formal" ? "rounded-full grayscale" : "rounded-lg"
            )}
            priority
          />
        </div>
      </Container>
    </section>
  );
}
