import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Hotel } from "@/components/Hotel";
import { Navbar } from "@/components/Navbar";
import { Places } from "@/components/Places";
import { RSVPForm } from "@/components/RSVPForm";
import { TheWedding } from "@/components/TheWedding";
import { Transport } from "@/components/Transport";

export default function Home() {
  return (
    <main className="min-h-screen bg-background space-y-24 pb-20">
      <Navbar />
      <Hero />
      <TheWedding />
      <Places />
      <Hotel />
      <Transport />
      <Gallery />
      <RSVPForm />
      <Footer />
    </main>
  );
}
