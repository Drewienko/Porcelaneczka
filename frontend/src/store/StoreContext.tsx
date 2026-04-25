import { createContext, useContext, useState } from 'react';
import { COPY, PRODUCTS } from '@/data/catalog';
import type { Lang, CartLine } from '@/types';

interface StoreValue {
  t: typeof COPY['pl'];
  lang: Lang;
  setLang: (lang: Lang) => void;
  cart: CartLine[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  wishlist: Set<string>;
  toggleWish: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  route: { page: string; id?: string };
  navTo: (r: { page: string; id?: string }) => void;
}

export const StoreCtx = createContext<StoreValue | null>(null);

export function useStore(): StoreValue {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pl');
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cartOpen, setCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [route, setRoute] = useState<{ page: string; id?: string }>({ page: 'home' });

  const t = COPY[lang];

  const addToCart = (id: string) => {
    setCart((c) => (c.find((x) => x.id === id) ? c : [...c, { id, qty: 1 }]));
    setCartOpen(true);
  };
  const removeFromCart = (id: string) => setCart((c) => c.filter((x) => x.id !== id));
  const toggleWish = (id: string) =>
    setWishlist((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const navTo = (r: { page: string; id?: string }) => {
    setRoute(r);
    setNavOpen(false);
    requestAnimationFrame(() => {
      const scroller = document.querySelector('[data-scroll-root]');
      if (scroller) (scroller as HTMLElement).scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  const cartCount = cart.length;
  const cartSubtotal = cart.reduce(
    (s, x) => s + (PRODUCTS.find((p) => p.id === x.id)?.price || 0),
    0,
  );

  return (
    <StoreCtx.Provider
      value={{
        t, lang, setLang,
        cart, cartCount, cartSubtotal,
        addToCart, removeFromCart,
        wishlist, toggleWish,
        cartOpen, setCartOpen,
        navOpen, setNavOpen,
        route, navTo,
      }}
    >
      {children}
    </StoreCtx.Provider>
  );
}
