import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Places() {
  return (
    <section id="places" className="container mx-auto px-4 space-y-24">
      <div className="text-center">
        <h3 className="text-3xl font-serif text-wedding-gold mb-10">Lugares</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Iglesia */}
          <div className="bg-wedding-cream/30 p-8 rounded-xl border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors">
            <h4 className="text-2xl font-serif mb-4">Iglesia San Pedro</h4>
            <p className="opacity-80 mb-6">
              Plaza de San Pedro, s/n
              <br />
              22520 Fraga, Huesca
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://maps.google.com/?q=Iglesia+San+Pedro+Fraga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} className="mr-2" />
                Ver en mapa
              </a>
            </Button>
          </div>

          {/* Restaurante */}
          <div className="bg-wedding-cream/30 p-8 rounded-xl border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors">
            <h4 className="text-2xl font-serif mb-4">La Boscana</h4>
            <p className="opacity-80 mb-6">
              Ctra. Bellvís, Km. 1
              <br />
              25142 Bellvís, Lleida
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://maps.google.com/?q=La+Boscana+Bellvis"
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
    </section>
  );
}
