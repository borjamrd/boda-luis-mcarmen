import { MapPin, Clock, Bus, Gift } from "lucide-react";
import { Button } from "./ui/button";

export function WeddingDetails() {
  return (
    <section id="details" className="py-20 bg-white text-wedding-text">
      <div className="container mx-auto px-4 space-y-24">
        {/* 1. The Wedding */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-gold mb-8">
            La Boda
          </h2>
          <p className="text-lg opacity-80 mb-12">
            Nos casamos, y lo más importante para nosotros es poder disfrutar de
            vuestra compañía. ¡Y queremos un sí por respuesta!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-wedding-gold/10 flex items-center justify-center mb-4 text-wedding-gold">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-2">Ceremonia</h3>
              <p className="font-bold text-xl">13:00h</p>
            </div>

            <div className="hidden md:block w-px h-24 bg-wedding-gold/30"></div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-wedding-gold/10 flex items-center justify-center mb-4 text-wedding-gold">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-2">Celebración</h3>
              <p className="font-bold text-xl">A continuación</p>
            </div>
          </div>
        </div>

        {/* 2. Places */}
        <div className="text-center">
          <h3 className="text-3xl font-serif text-wedding-gold mb-10">
            Lugares
          </h3>
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

        {/* 3. Transport */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif text-wedding-green mb-4 flex justify-center items-center gap-2">
              <Bus className="text-wedding-gold" /> Transporte
            </h3>
            <p className="opacity-80 max-w-2xl mx-auto">
              Para que podáis disfrutar al máximo sin preocupaciones, ponemos a
              vuestra disposición un servicio de autobús gratuito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-wedding-green/5 p-8 rounded-xl text-center border border-wedding-green/10">
              <span className="inline-block px-3 py-1 bg-wedding-green/10 text-wedding-green rounded-full text-sm font-medium mb-4">
                IDA
              </span>
              <h4 className="font-serif text-xl mb-2">Hacia la Ceremonia</h4>
              <p className="text-sm opacity-70 mb-1">Salida desde</p>
              <p className="font-medium mb-4">Discoteca Florida 135</p>
              <a
                href="https://maps.google.com/?q=Florida+135+Fraga"
                target="_blank"
                className="text-wedding-gold hover:underline text-sm inline-flex items-center"
              >
                <MapPin size={14} className="mr-1" /> Ver ubicación
              </a>
            </div>

            <div className="bg-wedding-green/5 p-8 rounded-xl text-center border border-wedding-green/10">
              <span className="inline-block px-3 py-1 bg-wedding-green/10 text-wedding-green rounded-full text-sm font-medium mb-4">
                VUELTA
              </span>
              <h4 className="font-serif text-xl mb-2">Regreso a Casa</h4>
              <p className="text-sm opacity-70 mb-1">Salida desde</p>
              <p className="font-medium mb-4">La Boscana</p>
              <p className="text-sm opacity-70 mt-2">Horarios a confirmar</p>
            </div>
          </div>
        </div>

        {/* 4. Gift */}
        <div className="max-w-2xl mx-auto text-center bg-wedding-gold/5 p-10 rounded-xl border border-wedding-gold/20">
          <Gift className="mx-auto text-wedding-gold mb-4" size={32} />
          <h3 className="text-2xl font-serif mb-4">¿Regalo?</h3>
          <p className="mb-6 opacity-80 leading-relaxed">
            Estamos más que convencidos de que nuestro mejor regalo es poder
            compartir este día con todos vosotros. Pero si deseáis hacernos un
            detalle, podéis hacerlo en el siguiente número de cuenta:
          </p>
          <div className="relative group">
            <p className="text-lg md:text-xl font-mono bg-white inline-block px-6 py-3 rounded border border-dashed border-wedding-gold/50 select-all shadow-sm">
              ES00 1234 1234 1234 1234 1234
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
