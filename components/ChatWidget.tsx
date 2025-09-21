
import React from 'react';
import { SOCIAL_MEDIA_URLS } from '../constants';

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


const ChatWidget: React.FC = () => {
    return (
        <a 
            href={SOCIAL_MEDIA_URLS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 z-50"
            aria-label="گفتگوی آنلاین در واتساپ"
        >
            <WhatsAppIcon />
        </a>
    );
};

export default ChatWidget;
