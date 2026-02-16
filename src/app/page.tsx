import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheWedding } from "@/components/TheWedding";
import { Places } from "@/components/Places";
import { Transport } from "@/components/Transport";
import { Gift } from "@/components/Gift";
import { RSVPForm } from "@/components/RSVPForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background space-y-24 pb-20">
      <Navbar />
      <Hero />
      <TheWedding />
      <Places />
      <Transport />
      <RSVPForm />
      <Gift />
      <Footer />
    </main>
  );
}
