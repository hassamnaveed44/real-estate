import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Globe } from 'lucide-react';

export default function ContactHero() {
  const contactCards = [
    {
      icon: <Mail className="w-[26px] h-[26px] lg:w-[34px] lg:h-[34px] text-[#A685FA]" />,
      label: 'info@estatein.com',
      link: 'mailto:info@estatein.com',
    },
    {
      icon: <Phone className="w-[26px] h-[26px] lg:w-[34px] lg:h-[34px] text-[#A685FA]" />,
      label: '+1 (123) 456-7890',
      link: 'tel:+11234567890',
    },
    {
      icon: <MapPin className="w-[26px] h-[26px] lg:w-[34px] lg:h-[34px] text-[#A685FA]" />,
      label: 'Main Headquarters',
      link: '#',
    },
    {
      icon: <Globe className="w-[26px] h-[26px] lg:w-[34px] lg:h-[34px] text-[#A685FA]" />,
      isSocial: true,
      socialLinks: [
        { name: 'Instagram', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Facebook', url: '#' },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#1a1a1a] border-b border-[#262626]">
      {/* Text Container */}
      <div 
        className="flex flex-col gap-[14px] pt-[50px] md:pt-[100px] lg:pt-[150px] pb-[50px] md:pb-[80px] lg:pb-[100px] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[120px]"
        style={{
          background: 'linear-gradient(117deg, #262626 26.8%, transparent 40.5%)'
        }}
      >
        <h1 className="text-[28px] md:text-[38px] lg:text-[48px] font-semibold text-white tracking-tight">
          Get in Touch with Estatein
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#999999] max-w-4xl leading-relaxed">
          Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. Whether you&apos;re looking to buy or sell a property, explore investment opportunities, or simply want to connect, we&apos;re just a message away. Reach out to us, and let&apos;s start a conversation.
        </p>
      </div>

      {/* Sub Container (Quick-Contact Card Row Wrapper) */}
      <div className="bg-[#141414] border-t border-[#262626] p-3 md:p-5 shadow-[0_0_0_4px_#191919] md:shadow-[0_0_0_6px_#191919] lg:shadow-[0_0_0_10px_#191919]">
        {/* Changed grid layout to grid-cols-2 on mobile */}
        <div className="max-w-[1550px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {contactCards.map((card, index) => (
            <div 
              key={index}
              className="relative bg-[#1A1A1A] border border-[#262626] rounded-[10px] lg:rounded-[12px] py-[24px] lg:py-[40px] px-3 lg:px-5 flex flex-col items-center justify-between group transition-all duration-300 hover:border-[#333] overflow-hidden min-h-[160px] lg:min-h-[180px]"
            >
              {/* Top-Right Arrow Icon */}
              <div className="absolute top-3 right-3 lg:top-5 lg:right-5 text-[#999] group-hover:text-white transition-colors">
                <ArrowUp className="w-[18px] h-[18px] lg:w-[34px] lg:h-[34px] rotate-45" />
              </div>

              {/* Icon Pill (Double Ring Effect) */}
              <div className="p-1.5 lg:p-[10px] rounded-full border border-[#A685FA]/30 mb-3 lg:mb-6 bg-[#1A1A1A]">
                <div className="p-2 lg:p-[14px] rounded-full border border-[#A685FA] flex items-center justify-center">
                  {card.icon}
                </div>
              </div>

              {/* Card Label or Social Links */}
              {card.isSocial ? (
                <div className="flex flex-wrap items-center justify-center gap-[8px] lg:gap-[18px] mt-auto w-full">
                  {card.socialLinks.map((social, sIdx) => (
                    <a 
                      key={sIdx}
                      href={social.url}
                      className="text-[11px] md:text-[14px] lg:text-[16px] font-semibold text-white underline underline-offset-4 hover:text-[#A685FA] transition-colors whitespace-nowrap"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              ) : (
                <a 
                  href={card.link}
                  className="text-[12px] sm:text-[14px] lg:text-[18px] font-semibold text-white text-center hover:text-[#A685FA] transition-colors mt-auto truncate max-w-full"
                >
                  {card.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}