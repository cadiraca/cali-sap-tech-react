import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { pastEvent } from "@/data/events";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function PastEvent() {
  const eventDate = new Date(pastEvent.date);
  const formatted = eventDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section id="past-event" className="py-20 bg-gray-50">
      <Container>
        <div className="bg-pacifico-blue text-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 transform transition-all duration-500 hover:scale-[1.02]">
          <div className="flex-grow">
            <Badge variant="outline">Past Event</Badge>
            <h2 className="font-bebas text-4xl md:text-5xl mt-3 leading-tight">
              {pastEvent.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 font-inter text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-chontaduro-gold" />
                <span>{formatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-chontaduro-gold" />
                <span>
                  {pastEvent.location} ({pastEvent.type})
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <a href="#">
              <Button variant="primary" size="lg" className="text-pacifico-blue">
                View Details <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
