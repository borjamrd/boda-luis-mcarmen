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

        <div className="max-w-3xl mx-auto w-full flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/1L60J0To1ugtnHRgSqvK0QvrcUKu4QcedgHjQHmDfGWg/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulario de asistencia"
            className="w-full overflow-hidden"
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </section>
  );
}
