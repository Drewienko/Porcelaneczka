export type Lang = 'pl' | 'en';

export interface LangString {
  pl: string;
  en: string;
}

export interface Product {
  id: string;
  name: LangString;
  category: LangString;
  price: number;
  era: LangString;
  maker: LangString;
  foundAt: LangString;
  condition: LangString;
  images: string[];
  desc: LangString;
  dimensions: LangString;
  care: LangString;
  shipping: LangString;
}

export interface CartLine {
  id: string;
  qty: number;
}

export type HeroLayout = 'full' | 'split' | 'still';
export type Viewport = 'desktop' | 'mobile';

export interface TweakValues {
  accentColor: string;
  serif: string;
  sans: string;
  heroLayout: HeroLayout;
  viewport: Viewport;
}
