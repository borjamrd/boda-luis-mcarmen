import { MapPin, Building } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hotel() {
  return (
    <section id="hotel" className="container mx-auto px-4 space-y-24">
      <div className="text-center">
        <h3 className="text-3xl font-serif text-wedding-gold mb-10">Hotel</h3>
        <div className="max-w-4xl mx-auto bg-wedding-cream/30 rounded-xl overflow-hidden border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <Image
                src="/hotel.jpg"
                alt="Hotel Recomendado"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-wedding-gold/10 flex items-center justify-center mb-6 text-wedding-gold">
                <Building size={32} />
              </div>
              <h4 className="text-2xl font-serif mb-4">Hotel Principal</h4>
              <p className="opacity-80 mb-8 leading-relaxed">
                Calle Ficticia, 123
                <br />
                22520 Fraga, Huesca
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://maps.google.com/?q=Hotel+Fraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} className="mr-2" />
                  Ver en mapa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
