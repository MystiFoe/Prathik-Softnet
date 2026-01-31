import React from 'react';
import { COMPANY } from '@/data/content';
import { Icons } from '@/utils/icons';

export default function WhatsAppButton() {
  return (
    <a
      href={`${COMPANY.whatsapp}?text=Hi%20Prathik%20Softnet%2C%20I%27m%20interested%20in%20your%20IT%20infrastructure%20solutions.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Icons.whatsapp size={28} className="text-white" />
    </a>
  );
}
