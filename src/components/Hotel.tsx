import { MapPin, Building, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hotel() {
  return (
    <section id="hotel" className="container mx-auto px-4 space-y-24">
      <div className="text-center">
        <h3 className="text-3xl font-serif text-wedding-gold mb-10">
          Alojamiento
        </h3>
        <div className="max-w-4xl mx-auto bg-wedding-cream/30 rounded-xl overflow-hidden border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors">
          <div className="grid md:grid-cols-2">
            {/* Image Side with Map Button Overlay */}
            <div className="relative h-64 md:h-auto min-h-[300px] group">
              <Image
                src="/hotel.jpeg"
                alt="Hotel Condestable Iranzo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Button
                  variant="outline"
                  className="bg-white/95 hover:bg-white text-black hover:text-black border-none shadow-xl transform transition-transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/Fy5rXsJLNhBEARX48"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin size={16} className="mr-2" />
                    Abrir en Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-wedding-gold/10 flex items-center justify-center mb-6 text-wedding-gold">
                <Building size={32} />
              </div>
              <h4 className="text-2xl font-serif mb-4">
                Hotel Condestable Iranzo
              </h4>
              <p className="opacity-80 mb-6 leading-relaxed">Jaén</p>
              <p className="opacity-80 mb-8 text-sm">
                Si necesitáis reservar contamos con un descuento y se puede
                cancelar con 48h de antelación sin problema.
              </p>
              <div className="flex flex-col xl:flex-row gap-4 w-full justify-center">
                <Button
                  className="bg-wedding-gold hover:bg-wedding-gold/90 text-white"
                  asChild
                >
                  <a
                    href="https://www.hotelcondestableiranzo.com/?promotion_code=BODAMARICARMENYLUIS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Reservar con descuento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
