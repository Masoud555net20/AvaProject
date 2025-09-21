// FIX: Import React to make React types available in this file.
import React from 'react';

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
