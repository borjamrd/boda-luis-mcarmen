import { Bus, MapPin } from "lucide-react";

export function Transport() {
  return (
    <section id="transport" className="container mx-auto px-4 space-y-24">
      <div className="text-center">
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
    </section>
  );
}
