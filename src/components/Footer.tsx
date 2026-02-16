export function Footer() {
  return (
    <footer className="bg-wedding-green text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-xl mb-4">Luis & Mª Carmen</p>
        <p className="text-sm opacity-80">20 de Noviembre de 2026</p>
        <div className="mt-8 text-xs opacity-50">
          © {new Date().getFullYear()} Diseñado con cariño para nuestra boda
        </div>
      </div>
    </footer>
  );
}
