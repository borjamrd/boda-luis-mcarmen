import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WeddingDetails } from "@/components/WeddingDetails";
import { RSVPForm } from "@/components/RSVPForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WeddingDetails />
      <RSVPForm />
      <Footer />
    </main>
  );
}
