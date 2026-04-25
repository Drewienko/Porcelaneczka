// app.jsx — Porcelaneczka storefront
// Vintage/antique porcelain & glassware sourced from Polish flea markets and estate sales.
// Bilingual (PL/EN). Responsive prototype with Desktop/Mobile toggle.

const { useState, useEffect, useRef, useMemo, createContext, useContext } = React;

// ─────────────────────────────────────────────────────────────────────────────
// COPY (bilingual)
// ─────────────────────────────────────────────────────────────────────────────
const COPY = {
  en: {
    nav: { home: 'Home', shop: 'Shop', about: 'About', contact: 'Contact' },
    navShort: { journal: 'Journal' },
    account: 'Account',
    cart: 'Cart',
    menu: 'Menu',
    close: 'Close',
    heroEyebrow: "This week's finds",
    heroTitle: "Someone else's heirloom, waiting for you",
    heroSub: 'Vintage porcelain and glass pulled from flea markets, estate sales and quiet attics across Poland. Every piece is one of one — once it ships, it is gone.',
    heroCta: 'Browse the stall',
    heroMeta: 'Last updated Sunday · 23 new pieces',
    categoriesTitle: 'Poking around',
    categoriesSub: 'What I\u2019ve been finding lately.',
    cats: {
      porcelain: 'Porcelain',
      glass: 'Glassware',
      curio: 'Curiosities',
    },
    catCount: (n) => `${n} pieces`,
    featuredTitle: 'Just unpacked',
    featuredSub: 'Most recent additions — still dusty.',
    featuredLink: 'See everything',
    price: (v) => `${v.toLocaleString('pl-PL')} zł`,
    addToCart: 'Add to cart',
    addedToCart: 'Added',
    wishlist: 'Save for later',
    wishlisted: 'Saved',
    qty: 'Quantity',
    oneInStock: '1 in stock',
    unique: 'one of one',
    foundLabel: 'Found at',
    eraLabel: 'Era',
    makerLabel: 'Maker',
    conditionLabel: 'Condition',
    breadcrumb: { shop: 'Shop' },
    descTitle: 'About this piece',
    provTitle: 'Provenance',
    dimTitle: 'Dimensions',
    careTitle: 'Care',
    shipTitle: 'Shipping & returns',
    relatedTitle: 'Other finds you might like',
    cartTitle: 'Cart',
    cartEmpty: 'Your cart is empty.',
    cartSubtotal: 'Subtotal',
    cartShipping: 'Shipping',
    cartShippingNote: 'Each piece wrapped by hand. Calculated at checkout.',
    cartCheckout: 'Checkout',
    cartRemove: 'Remove',
    fleaStory: 'Handpicked from Koło, Wrocław, and every dusty corner in between.',
    footer: {
      tagline: 'Vintage porcelain and glass, found across Poland.',
      shop: 'Shop',
      about: 'About the stall',
      contact: 'Say hello',
      address: 'ul. Mokotowska 48\n00-543 Warszawa',
      email: 'marek@porcelaneczka.pl',
      phone: '+48 22 625 18 40',
      rights: '© 2026 Porcelaneczka · Marek Kucharski',
    },
  },
  pl: {
    nav: { home: 'Start', shop: 'Znaleziska', about: 'O straganie', contact: 'Kontakt' },
    navShort: { journal: 'Dziennik' },
    account: 'Konto',
    cart: 'Koszyk',
    menu: 'Menu',
    close: 'Zamknij',
    heroEyebrow: 'Znaleziska tego tygodnia',
    heroTitle: 'Cudza pamiątka czeka na Ciebie',
    heroSub: 'Stara porcelana i szkło z pchlich targów, licytacji spadkowych i cichych strychów w całej Polsce. Każda rzecz jest jedna — gdy wyjedzie, znika.',
    heroCta: 'Przejrzyj stragan',
    heroMeta: 'Ostatnio w niedzielę · 23 nowe sztuki',
    categoriesTitle: 'Grzebanie',
    categoriesSub: 'Co ostatnio wpada w ręce.',
    cats: {
      porcelain: 'Porcelana',
      glass: 'Szkło',
      curio: 'Osobliwości',
    },
    catCount: (n) => `${n} sztuk`,
    featuredTitle: 'Dopiero rozpakowane',
    featuredSub: 'Ostatnie przybytki — jeszcze zakurzone.',
    featuredLink: 'Zobacz wszystko',
    price: (v) => `${v.toLocaleString('pl-PL')} zł`,
    addToCart: 'Do koszyka',
    addedToCart: 'Dodano',
    wishlist: 'Odłóż na później',
    wishlisted: 'Odłożone',
    qty: 'Ilość',
    oneInStock: '1 sztuka',
    unique: 'unikat',
    foundLabel: 'Znalezione',
    eraLabel: 'Epoka',
    makerLabel: 'Wytwórnia',
    conditionLabel: 'Stan',
    breadcrumb: { shop: 'Znaleziska' },
    descTitle: 'O tej rzeczy',
    provTitle: 'Pochodzenie',
    dimTitle: 'Wymiary',
    careTitle: 'Pielęgnacja',
    shipTitle: 'Wysyłka i zwroty',
    relatedTitle: 'Inne znaleziska dla Ciebie',
    cartTitle: 'Koszyk',
    cartEmpty: 'Twój koszyk jest pusty.',
    cartSubtotal: 'Razem',
    cartShipping: 'Wysyłka',
    cartShippingNote: 'Każdą rzecz pakuję ręcznie. Obliczana przy zamówieniu.',
    cartCheckout: 'Do kasy',
    cartRemove: 'Usuń',
    fleaStory: 'Wybierane z Koła, Wrocławia i każdego zakurzonego zakątka po drodze.',
    footer: {
      tagline: 'Stara porcelana i szkło, znalezione w całej Polsce.',
      shop: 'Znaleziska',
      about: 'O straganie',
      contact: 'Napisz',
      address: 'ul. Mokotowska 48\n00-543 Warszawa',
      email: 'marek@porcelaneczka.pl',
      phone: '+48 22 625 18 40',
      rights: '© 2026 Porcelaneczka · Marek Kucharski',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CATALOG — verified Unsplash IDs
// ─────────────────────────────────────────────────────────────────────────────
const IMG = {
  heroPorcelain: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=2000&q=80',
  catPorcelain:  'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
  catGlass:      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80',
  catCurio:      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
  p1:  'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=80',
  p1b: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1400&q=80',
  p1c: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
  p1d: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1400&q=80',
  p2:  'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1400&q=80',
  p3:  'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1400&q=80',
  p4:  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=80',
  p5:  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80',
  p6:  'https://images.unsplash.com/photo-1516600164266-f3b8166ae679?auto=format&fit=crop&w=1400&q=80',
  p7:  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80',
  p8:  'https://images.unsplash.com/photo-1563889362352-b0492c224f62?auto=format&fit=crop&w=1400&q=80',
  p9:  'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1400&q=80',
  p10: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1400&q=80',
  p11: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80',
  p12: 'https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?auto=format&fit=crop&w=1400&q=80',
};

// Each piece is unique: stock=1. Rich provenance fields replace "artisan" claims.
const PRODUCTS = [
  {
    id: 'talerz-chodziez',
    name: { pl: 'Talerz deserowy Chodzież, lata 60.', en: 'Chodzież dessert plate, 1960s' },
    category: { pl: 'Porcelana', en: 'Porcelain' },
    price: 68,
    era: { pl: 'ok. 1964', en: 'c. 1964' },
    maker: { pl: 'Porcelana Chodzież', en: 'Porcelana Chodzież' },
    foundAt: { pl: 'Pchli targ Koło, Warszawa', en: 'Koło flea market, Warsaw' },
    condition: { pl: 'Bardzo dobry · drobne ślady użytkowania na spodzie', en: 'Very good · light wear on underside' },
    images: [IMG.p1, IMG.p1b, IMG.p1c, IMG.p1d],
    desc: {
      pl: 'Talerz deserowy o delikatnym, kremowym odcieniu z charakterystycznym złoconym brzegiem, który przetrwał sześć dekad ledwo musnięty. Znak wytwórni ostemplowany na spodzie. Kupiony z całym serwisem po pewnej pani z Żoliborza — reszta znajdzie nowych właścicieli osobno.',
      en: 'A dessert plate in soft cream with the gilt rim Chodzież was known for — six decades in and barely grazed. Maker\u2019s stamp underneath. Came out of a complete service from a Żoliborz estate; the rest will find homes separately.',
    },
    dimensions: { pl: 'Ø 18 cm · wys. 2 cm', en: 'Ø 18 cm · h 2 cm' },
    care: { pl: 'Mycie ręczne zalecane — złocenie nie znosi zmywarki.', en: 'Hand wash. The gilt edge does not love dishwashers.' },
    shipping: { pl: 'Pakowane w bibułę i ścinki lnu. Wysyłka w 2 dni roboczych.', en: 'Wrapped in tissue and linen offcuts. Ships in 2 business days.' },
  },
  {
    id: 'karafka-krosno',
    name: { pl: 'Karafka Krosno z szlifowanym korkiem', en: 'Krosno decanter with cut stopper' },
    category: { pl: 'Szkło', en: 'Glassware' },
    price: 245,
    era: { pl: 'lata 70.', en: '1970s' },
    maker: { pl: 'Huta Szkła Krosno', en: 'Krosno Glassworks' },
    foundAt: { pl: 'Licytacja spadkowa, Kraków', en: 'Estate sale, Kraków' },
    condition: { pl: 'Doskonały · bez odprysków, korek pasuje idealnie', en: 'Excellent · no chips, stopper seats perfectly' },
    images: [IMG.p2, IMG.p7, IMG.p5, IMG.p8],
    desc: {
      pl: 'Karafka z bezbarwnego szkła kryształowego, szlifowana ręcznie. Korek pasuje jak ulał — rzadko się zdarza po pół wieku. Wyszła z kredensu pewnej krakowskiej profesorskiej rodziny; podobno stała tam od chrzcin ich córki.',
      en: 'Clear lead-crystal decanter, hand-cut. The stopper still seats cleanly — rare after half a century. Came out of a Kraków professor\u2019s sideboard; reportedly there since their daughter\u2019s christening.',
    },
    dimensions: { pl: 'Ø 11 cm · wys. 24 cm · 900 ml', en: 'Ø 11 cm · h 24 cm · 900 ml' },
    care: { pl: 'Mycie ręczne w letniej wodzie.', en: 'Hand wash in lukewarm water.' },
    shipping: { pl: 'Podwójnie pakowana. Wysyłka w 2 dni roboczych.', en: 'Double-wrapped. Ships in 2 business days.' },
  },
  {
    id: 'filizanka-wisla',
    name: { pl: 'Filiżanka Włocławek, wzór Mazur', en: 'Włocławek cup, "Mazur" pattern' },
    category: { pl: 'Porcelana', en: 'Porcelain' },
    price: 54,
    era: { pl: 'ok. 1972', en: 'c. 1972' },
    maker: { pl: 'Fajans Włocławek', en: 'Włocławek Faience' },
    foundAt: { pl: 'Strych, Toruń', en: 'Attic find, Toruń' },
    condition: { pl: 'Dobry · drobny ślad po łyżeczce wewnątrz', en: 'Good · faint spoon mark inside' },
    images: [IMG.p3, IMG.p1, IMG.p4, IMG.p6],
    desc: {
      pl: 'Ręcznie malowany kobaltowy wzór, charakterystyczny dla Włocławka tamtych lat. Każda z filiżanek z tej serii jest nieco inna — ta ma najżywszy liść. Z pary; drugą sprzedałem w zeszłym tygodniu.',
      en: 'Hand-painted cobalt pattern, unmistakably Włocławek of that decade. No two cups in the series match exactly — this one has the liveliest leaf. From a pair; sold the other last week.',
    },
    dimensions: { pl: 'Ø 8,5 cm · wys. 7 cm · 220 ml', en: 'Ø 8.5 cm · h 7 cm · 220 ml' },
    care: { pl: 'Mycie ręczne.', en: 'Hand wash.' },
    shipping: { pl: 'Wysyłka w 2 dni roboczych.', en: 'Ships in 2 business days.' },
  },
  {
    id: 'zestaw-warta',
    name: { pl: 'Komplet dzbanek + mlecznik, Bogucice', en: 'Pitcher & creamer set, Bogucice' },
    category: { pl: 'Porcelana', en: 'Porcelain' },
    price: 320,
    era: { pl: 'lata 50.', en: '1950s' },
    maker: { pl: 'Bogucice', en: 'Bogucice' },
    foundAt: { pl: 'Targ Hala Koło, Warszawa', en: 'Hala Koło market, Warsaw' },
    condition: { pl: 'Bardzo dobry · naturalna patyna glazury', en: 'Very good · natural glaze patina' },
    images: [IMG.p4, IMG.p1c, IMG.p5, IMG.p8],
    desc: {
      pl: 'Dzbanek i mlecznik w niemal-identycznej matowej bieli — pasują do siebie nie dlatego, że tak je wykonano, ale dlatego, że stały obok siebie przez siedemdziesiąt lat. Lubię takie komplety.',
      en: 'A pitcher and creamer in nearly-identical matte white — they match not because they were made together but because they sat beside each other for seventy years. I love pairs like this.',
    },
    dimensions: { pl: 'Dzbanek wys. 19 cm · mlecznik wys. 10 cm', en: 'Pitcher h 19 cm · creamer h 10 cm' },
    care: { pl: 'Mycie ręczne.', en: 'Hand wash.' },
    shipping: { pl: 'Pakowane razem, osobno w bibule.', en: 'Packed together, each wrapped separately.' },
  },
  {
    id: 'kieliszek-odra',
    name: { pl: 'Kieliszki do wina, Zawiercie (komplet 4)', en: 'Wine glasses, Zawiercie (set of 4)' },
    category: { pl: 'Szkło', en: 'Glassware' },
    price: 180,
    era: { pl: 'lata 60.', en: '1960s' },
    maker: { pl: 'Huta Szkła Zawiercie', en: 'Zawiercie Glassworks' },
    foundAt: { pl: 'Piwnica, Lublin', en: 'Cellar, Lublin' },
    condition: { pl: 'Dobry · jeden kieliszek ma mikrorysę na nóżce', en: 'Good · one glass has a hairline on the stem' },
    images: [IMG.p5, IMG.p2, IMG.p7, IMG.p8],
    desc: {
      pl: 'Czwórka kieliszków znalezionych w kartonie w lubelskiej piwnicy. Smukłe, lekkie, dmuchane w formie. Trzy w doskonałym stanie, czwarty z mikrorysą — zostawiłem go w komplecie, bo żal rozbijać czwórkę.',
      en: 'Four glasses found in a Lublin cellar carton. Slender, light, mould-blown. Three perfect, the fourth with a hairline — kept it together because splitting a four felt wrong.',
    },
    dimensions: { pl: 'Ø 8 cm · wys. 22 cm · 420 ml', en: 'Ø 8 cm · h 22 cm · 420 ml' },
    care: { pl: 'Mycie ręczne.', en: 'Hand wash.' },
    shipping: { pl: 'Wysyłka w 2 dni roboczych.', en: 'Ships in 2 business days.' },
  },
  {
    id: 'misa-bug',
    name: { pl: 'Misa salaterka Ćmielów, forma A-22', en: 'Ćmielów bowl, form A-22' },
    category: { pl: 'Porcelana', en: 'Porcelain' },
    price: 156,
    era: { pl: 'ok. 1968', en: 'c. 1968' },
    maker: { pl: 'Ćmielów', en: 'Ćmielów' },
    foundAt: { pl: 'Targ staroci, Wrocław', en: 'Antiques market, Wrocław' },
    condition: { pl: 'Bardzo dobry · ślad sygnatury na spodzie', en: 'Very good · maker\u2019s signature on underside' },
    images: [IMG.p6, IMG.p1b, IMG.p4, IMG.p1],
    desc: {
      pl: 'Duża misa w kształcie owalnym, typowa forma A-22 z Ćmielowa. Matowa kremowa glazura. Prawdopodobnie nigdy nieużywana — trzymana na półce, nie na stole.',
      en: 'A large oval bowl, the classic A-22 form from Ćmielów. Matte cream glaze. Most likely never used — lived on a shelf, not on a table.',
    },
    dimensions: { pl: '34 × 22 cm · wys. 9 cm', en: '34 × 22 cm · h 9 cm' },
    care: { pl: 'Mycie ręczne.', en: 'Hand wash.' },
    shipping: { pl: 'Wysyłka w 2 dni roboczych.', en: 'Ships in 2 business days.' },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STORE (context)
// ─────────────────────────────────────────────────────────────────────────────
const StoreCtx = createContext(null);
const useStore = () => useContext(StoreCtx);

function StoreProvider({ children, lang }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(new Set());
  const [cartOpen, setCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [route, setRoute] = useState({ page: 'home' });

  const t = COPY[lang];

  // Since every piece is unique (stock=1), adding enforces qty=1
  const addToCart = (id) => {
    setCart((c) => (c.find((x) => x.id === id) ? c : [...c, { id, qty: 1 }]));
    setCartOpen(true);
  };
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const toggleWish = (id) =>
    setWishlist((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const navTo = (r) => {
    setRoute(r);
    setNavOpen(false);
    requestAnimationFrame(() => {
      const scroller = document.querySelector('[data-scroll-root]');
      if (scroller) scroller.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  const cartCount = cart.length;
  const cartSubtotal = cart.reduce((s, x) => s + (PRODUCTS.find((p) => p.id === x.id)?.price || 0), 0);

  return (
    <StoreCtx.Provider value={{
      t, lang,
      cart, cartCount, cartSubtotal,
      addToCart, removeFromCart,
      wishlist, toggleWish,
      cartOpen, setCartOpen,
      navOpen, setNavOpen,
      route, navTo,
    }}>
      {children}
    </StoreCtx.Provider>
  );
}

Object.assign(window, { COPY, PRODUCTS, IMG, StoreCtx, useStore, StoreProvider });
