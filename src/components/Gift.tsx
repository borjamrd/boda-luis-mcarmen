import { Gift as GiftIcon } from "lucide-react";

export function Gift() {
  return (
    <div className="max-w-2xl mx-auto text-center bg-wedding-gold/5 p-10 rounded-xl border border-wedding-gold/20">
      <GiftIcon className="mx-auto text-wedding-gold mb-4" size={32} />
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
  );
}
