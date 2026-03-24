import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Places() {
  return (
    <section id="places" className="container mx-auto px-4 space-y-24">
      <div className="text-center">
        <h3 className="text-3xl font-serif text-wedding-gold mb-10">Lugares</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Iglesia / Ceremonia */}
          <div className="bg-wedding-cream/30 rounded-xl overflow-hidden border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors flex flex-col h-full group">
            <div className="relative aspect-square w-full overflow-hidden shrink-0">
              <Image
                src="/iglesia.png"
                alt="Sagrario Catedral de Jaén"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-6">
                <Button
                  variant="outline"
                  className="bg-white/95 hover:bg-white text-black hover:text-black border-none shadow-xl transform transition-transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/p6qqN8kdMexVRP4S6?g_st=i&utm_campaign=ac-im"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin size={16} className="mr-2" />
                    Abrir en Maps
                  </a>
                </Button>
              </div>
            </div>
            <div className="p-8 flex flex-col items-center justify-center text-center flex-grow">
              <h4 className="text-xl font-serif mb-2 text-balance leading-tight">
                Sagrario Catedral de Jaén
              </h4>
              <p className="opacity-80 text-sm">Jaén</p>
            </div>
          </div>

          {/* Restaurante / Celebración */}
          <div className="bg-wedding-cream/30 rounded-xl overflow-hidden border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors flex flex-col h-full group">
            <div className="relative aspect-square w-full overflow-hidden shrink-0">
              <Image
                src="/hacienda.jpeg"
                alt="Hacienda Molina de la Vega"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-6">
                <Button
                  variant="outline"
                  className="bg-white/95 hover:bg-white text-black hover:text-black border-none shadow-xl transform transition-transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/P5UmcvgqwWW9Q3QW9?g_st=i&utm_campaign=ac-im"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin size={16} className="mr-2" />
                    Abrir en Maps
                  </a>
                </Button>
              </div>
            </div>
            <div className="p-8 flex flex-col items-center justify-center text-center flex-grow">
              <h4 className="text-xl font-serif mb-2 text-balance leading-tight">
                Hacienda Molina de la Vega
              </h4>
              <p className="opacity-80 text-sm">La Guardia de Jaén</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
