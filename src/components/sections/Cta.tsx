import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Cta() {
  return (
    <section id="join" className="py-16 bg-gray-50">
      <Container className="text-center">
        <h3 className="font-bebas text-3xl text-charcoal">
          Become Part of the Community
        </h3>
        <p className="font-inter text-gray-700 mt-2">
          Join us as we build the future of SAP in Cali.
        </p>
        <a href="#" className="inline-block mt-6">
          <Button variant="secondary" size="lg">
            Join the Community
          </Button>
        </a>
      </Container>
    </section>
  );
}
