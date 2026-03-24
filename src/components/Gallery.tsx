import Image from "next/image";

const photos = [
  "/pareja6.jpeg",
  "/pareja1.jpeg",
  "/pareja2.jpeg",
  "/pareja3.jpeg",
  "/pareja4.jpeg",
  "/pareja5.jpeg",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-wedding-gold mb-4">
            Nosotros
          </h2>
          <p className="opacity-80 max-w-xl mx-auto">
            Algunos de nuestros momentos favoritos juntos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] max-w-5xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group shadow-sm border border-wedding-gold/10 ${
                index === 0
                  ? "col-span-2 md:col-span-2 row-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={photo}
                alt={`Nuestra foto ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
