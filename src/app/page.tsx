import Hero from "@/components/sections/Hero";
import PastEvent from "@/components/sections/PastEvent";
import Founders from "@/components/sections/Founders";
import CommunityNotes from "@/components/sections/CommunityNotes";
import Projects from "@/components/sections/Projects";
import Cta from "@/components/sections/Cta";

/**
 * Home Page (Server Component)
 * - Composes presentational sections.
 * - Interactive behavior is encapsulated within client components (e.g., Founders modal, Projects modal).
 */
export default function Page() {
  return (
    <main>
      <Hero variant="formal" />
      <PastEvent />
      <Founders />
      <CommunityNotes />
      <Projects />
      <Cta />
    </main>
  );
}
