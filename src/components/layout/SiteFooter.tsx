import Container from "@/components/ui/Container";

/**
 * SiteFooter
 * - Server Component
 * - Semantic footer with navigation links
 */
export default function SiteFooter() {
  return (
    <footer className="bg-pacifico-blue text-white">
      <Container className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bebas text-2xl text-chontaduro-gold tracking-wider">
              Cali SAP Tech
            </h3>
            <p className="font-inter mt-2 text-gray-300">
              El Alma Digital of the SAP Technical Research Group of Cali.
            </p>
          </div>
          <div>
            <h4 className="font-bebas text-xl text-chontaduro-gold tracking-wider">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 font-inter">
              <li>
                <a href="#past-event" className="hover:text-chontaduro-gold transition-colors">
                  Past Event
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-chontaduro-gold transition-colors">
                  Founders
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-chontaduro-gold transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bebas text-xl text-chontaduro-gold tracking-wider">
              Connect
            </h4>
            <p className="mt-2 font-inter text-gray-300">
              Find us on social media and join the conversation.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-gray-400 font-inter">
          <p>&copy; {new Date().getFullYear()} Cali SAP Tech. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
