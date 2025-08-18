import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * SiteHeader
 * - Server Component
 * - Semantic nav with anchor links to sections
 */
export default function SiteHeader() {
  return (
    <header className="bg-warm-white sticky top-0 z-50 shadow-md">
      <Container className="py-4 flex justify-between items-center">
        <div className="text-2xl font-bebas font-bold text-charcoal tracking-wider">
          <span className="text-salsa-red">Cali</span> SAP Tech
        </div>
        <nav className="hidden md:flex items-center space-x-8 font-inter" aria-label="Main">
          <Link href="#past-event" className="text-charcoal hover:text-chontaduro-gold transition-colors duration-300">
            Past Event
          </Link>
          <Link href="#founders" className="text-charcoal hover:text-chontaduro-gold transition-colors duration-300">
            Founders
          </Link>
          <Link href="#join" className="bg-chontaduro-gold text-charcoal font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
            Join Us
          </Link>
        </nav>
        <button className="md:hidden text-charcoal" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </Container>
    </header>
  );
}
