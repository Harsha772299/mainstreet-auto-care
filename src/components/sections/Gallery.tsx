import exteriorImage from "@/assets/gallery-exterior.jpg";
import bayImage from "@/assets/gallery-bay.png";
import teamImage from "@/assets/gallery-team.png";
import carImage from "@/assets/gallery-car.jpg";

const images = [
  { src: exteriorImage, alt: "Main Street Automotive - Vancouver", caption: "Main Street Automotive — Vancouver" },
  { src: bayImage, alt: "Clean, organized repair bays", caption: "Clean, organized bays" },
  { src: teamImage, alt: "Skilled technicians at work", caption: "Skilled technicians at work" },
  { src: carImage, alt: "Pride in every repair", caption: "Pride in every repair" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Our Shop, Up Close
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clean bays, careful workmanship, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
