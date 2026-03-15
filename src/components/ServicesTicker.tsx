import { Video, Smartphone, TrendingUp, PenTool, Palette, Briefcase, ClipboardList, GraduationCap } from "lucide-react";

const services = [
  { icon: Video, text: "Vídeo & Foto" },
  { icon: Smartphone, text: "Gerenciamento de Publicações" },
  { icon: TrendingUp, text: "Tráfego Pago" },
  { icon: PenTool, text: "Conteúdo" },
  { icon: Palette, text: "Design" },
  { icon: Briefcase, text: "CRM" },
  { icon: ClipboardList, text: "Script e Rotina Comercial" },
  { icon: GraduationCap, text: "Treinamento comercial" },
];

const ServicesTicker = () => {
  const duplicatedServices = [...services, ...services];

  return (
    <section 
      className="py-5 overflow-hidden"
      style={{ backgroundColor: '#350328' }}
    >
      <div className="flex animate-scroll-left">
        {duplicatedServices.map((service, index) => {
          const IconComp = service.icon;
          return (
            <div 
              key={index}
              className="flex items-center gap-3 px-6 whitespace-nowrap"
            >
              <IconComp size={22} style={{ color: '#E6B281' }} strokeWidth={1.8} />
              <span style={{ color: '#F6FAFF' }} className="font-ui text-base">
                {service.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesTicker;
