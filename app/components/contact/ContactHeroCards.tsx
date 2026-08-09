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
    <section className="w-full bg-[#141414] border-b border-[#262626]">
      {/* Text Container */}
      <div 
        className="w-full border-b border-[#262626] px-4 sm:px-8 lg:px-12 pt-[40px] sm:pt-[60px] lg:pt-[70px] pb-[40px] sm:pb-[60px] lg:pb-[70px]"
        style={{
          background: 'linear-gradient(117deg, #262626 26.8%, transparent 40.5%)'
        }}
      >
        <div className="max-w-[1360px] mx-auto flex flex-col gap-2.5">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-[1.2]">
            Get in Touch with Estatein
          </h1>
          <p className="text-sm lg:text-[15px] font-medium text-[#999999] max-w-[1100px] leading-relaxed">
            Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. Whether you&apos;re looking to buy or sell a property, explore investment opportunities, or simply want to connect, we&apos;re just a message away.
          </p>
        </div>
      </div>

      {/* Sub Container (Quick-Contact Card Row) */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-10">
        <div className="w-full bg-[#141414] border border-[#262626] rounded-[12px] p-4 sm:p-5 shadow-[0px_0px_0px_6px_#191919]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, index) => (
              <div 
                key={index}
                className="relative bg-[#1A1A1A] border border-[#262626] rounded-[10px] p-4 flex flex-col items-center justify-between group transition-all duration-300 hover:border-[#703BF7] overflow-hidden min-h-[130px] sm:min-h-[140px]"
              >
                {/* Top-Right Arrow Icon */}
                <div className="absolute top-3 right-3 text-[#999] group-hover:text-white transition-colors">
                  <ArrowUp className="w-3.5 h-3.5 rotate-45" />
                </div>

                {/* Icon Pill */}
                <div className="p-1 rounded-full border border-[#A685FA]/30 mb-2 bg-[#1A1A1A]">
                  <div className="p-2 rounded-full border border-[#A685FA] flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>

                {/* Card Label or Social Links */}
                {card.isSocial ? (
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-auto w-full">
                    {card.socialLinks.map((social, sIdx) => (
                      <a 
                        key={sIdx}
                        href={social.url}
                        className="text-[11px] sm:text-[12px] font-semibold text-white underline underline-offset-4 hover:text-[#A685FA] transition-colors whitespace-nowrap"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a 
                    href={card.link}
                    className="text-[12px] sm:text-[13px] font-semibold text-white text-center hover:text-[#A685FA] transition-colors mt-auto truncate max-w-full"
                  >
                    {card.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}