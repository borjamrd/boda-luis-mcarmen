import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function RSVPForm() {
  return (
    <section id="rsvp" className="py-20 bg-wedding-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-wedding-gold mb-4">
            Confirmar asistencia
          </h2>
          <p className="opacity-80 max-w-xl mx-auto">
            Por favor, confirma tu asistencia antes del 15 de septiembre de 2026
            para que podamos organizarlo todo.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            className="bg-wedding-gold hover:bg-wedding-gold/90 text-white text-lg px-8 py-6 h-auto"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/1L60J0To1ugtnHRgSqvK0QvrcUKu4QcedgHjQHmDfGWg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rellenar formulario
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
