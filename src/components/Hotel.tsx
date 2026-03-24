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
            {/* Map Side */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <iframe
                src="https://maps.google.com/maps?q=Hotel+Condestable+Iranzo,+Jaen&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa del Hotel Condestable Iranzo"
                className="absolute inset-0"
              />
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
