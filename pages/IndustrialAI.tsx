
import React from 'react';

const IndustrialAI: React.FC = () => {
  const features = [
    {
      title: 'Computer Vision Quality Inspection',
      desc: 'Real-time inspectie van producten op de band. Detecteer micro-fouten die het menselijk oog mist.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Predictive Maintenance',
      desc: 'Analyseer trillingen en temperatuur om falen te voorspellen vóórdat het gebeurt.',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Energy Optimisation',
      desc: 'AI-gestuurde aansturing van zware machines om piekverbruik te minimaliseren en kosten te besparen.',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Production Planning Optimisation',
      desc: 'Slimme algoritmes die rekening houden met shifts, materiaal en machine-beschikbaarheid.',
      img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Anomaly Detection',
      desc: 'Identificeer ongebruikelijke patronen in uw OT-netwerk om veiligheid en continuïteit te borgen.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Digital Twin Integration',
      desc: 'Verbind real-time sensordata met een 3D model voor ongekende controle over uw proces.',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-black mb-6 italic tracking-tighter">Industrial <span className="text-th-red">AI</span></h1>
          <p className="text-xl text-gray-600">
            De technische maakindustrie staat voor een enorme transformatie. Bij TechnoHUB vertalen we complexe AI naar concrete tools die vandaag nog ROI opleveren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all flex flex-col">
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                <img 
                  src={f.img} 
                  alt={f.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black mb-3 leading-tight tracking-tight">{f.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{f.desc}</p>
                <div className="pt-4 mt-auto">
                  <a href="#/contact" className="inline-flex items-center text-th-red font-bold text-sm uppercase tracking-widest hover:translate-x-1 transition-transform">
                    Meer informatie <span className="ml-2 text-xl">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-black text-white p-12 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-th-red/20 blur-[100px] -z-0" />
          <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
            <h2 className="text-4xl font-black mb-4 tracking-tighter">Nieuwsgierig naar uw potentie?</h2>
            <p className="text-lg text-gray-400">Onze experts komen langs voor een Quick Scan op uw fabrieksvloer. Ontdek binnen 1 dag waar de grootste winst zit.</p>
          </div>
          <a href="#/contact" className="relative z-10 bg-th-red text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-th-red/30 text-center">
            Plan een companyscan
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustrialAI;
