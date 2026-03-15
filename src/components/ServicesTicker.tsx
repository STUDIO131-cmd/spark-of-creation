const services = [
  { icon: "🎬", text: "Vídeo & Foto" },
  { icon: "📱", text: "Gerenciamento de Publicações" },
  { icon: "📈", text: "Tráfego Pago" },
  { icon: "✍️", text: "Conteúdo" },
  { icon: "🎨", text: "Design" },
  { icon: "💼", text: "CRM" },
  { icon: "📋", text: "Script e Rotina Comercial" },
  { icon: "🎓", text: "Treinamento comercial" },
];

const ServicesTicker = () => {
  const duplicatedServices = [...services, ...services];

  return (
    <section 
      className="py-5 overflow-hidden"
      style={{ backgroundColor: '#350328' }}
    >
      <div className="flex animate-scroll-left">
        {duplicatedServices.map((service, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 px-6 whitespace-nowrap"
          >
            <span style={{ color: '#E6B281' }} className="text-2xl">
              {service.icon}
            </span>
            <span style={{ color: '#F6FAFF' }} className="font-ui text-base">
              {service.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTicker;
