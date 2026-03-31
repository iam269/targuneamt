import { Smartphone, Tablet, Monitor } from 'lucide-react';

const DeviceShowcase = () => {
  const devices = [
    {
      icon: Smartphone,
      label: 'Mobile',
      description: 'Optimizat pentru telefon',
    },
    {
      icon: Tablet,
      label: 'Tabletă',
      description: 'Adaptat pentru tabletă',
    },
    {
      icon: Monitor,
      label: 'Desktop',
      description: 'Experiență completă pe PC',
    },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Vizualizare pe Toate Dispozitivele
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Site-ul nostru este complet responsiv și funcționează perfect pe orice tip de dispozitiv
        </p>
        
        <div className="flex justify-center items-end gap-8 flex-wrap">
          {devices.map((device, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
            >
              <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <device.icon className="w-16 h-16 text-primary" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{device.label}</h3>
                <p className="text-sm text-muted-foreground">{device.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;