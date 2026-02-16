import { Clock } from "lucide-react";

export function TheWedding() {
  return (
    <section id="wedding" className="container mx-auto px-4 space-y-24">
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
    </section>
  );
}
