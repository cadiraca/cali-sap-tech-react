import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-warm-white py-20 md:py-32">
      <Container className="text-center">
        <h1 className="text-5xl md:text-7xl font-bebas font-extrabold text-charcoal leading-tight tracking-wide animate-fade-in-down">
          SAP Technical Research in the <br />
          <span className="text-pacifico-blue relative">
            Heart
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-chontaduro-gold"></span>
          </span>{" "}
          of <span className="text-salsa-red">Cali</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-charcoal max-w-3xl mx-auto font-inter animate-fade-in-up">
          A vibrant community for SAP professionals in Valle del Cauca. We explore,
          innovate, and share knowledge with the rhythm and energy of our city.
        </p>
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a href="#past-event">
            <Button variant="secondary" size="lg">
              View Our Recent Event
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
