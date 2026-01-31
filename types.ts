
export enum View {
  HOME = 'home',
  SOLUTIONS = 'solutions',
  PRODUCTS = 'products',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
