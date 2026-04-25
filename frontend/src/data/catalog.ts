import type { Lang, Product } from '@/types';

interface CopyLang {
  nav: { home: string; shop: string; about: string; contact: string };
  navShort: { journal: string };
  account: string;
  cart: string;
  menu: string;
  close: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSub: string;
  heroCta: string;
  heroMeta: string;
  categoriesTitle: string;
  categoriesSub: string;
  cats: { porcelain: string; glass: string; curio: string };
  catCount: (n: number) => string;
  featuredTitle: string;
  featuredSub: string;
  featuredLink: string;
  price: (v: number) => string;
  addToCart: string;
  addedToCart: string;
  wishlist: string;
  wishlisted: string;
  qty: string;
  oneInStock: string;
  unique: string;
  foundLabel: string;
  eraLabel: string;
  makerLabel: string;
  conditionLabel: string;
  breadcrumb: { shop: string };
  descTitle: string;
  provTitle: string;
  dimTitle: string;
  careTitle: string;
  shipTitle: string;
  relatedTitle: string;
  cartTitle: string;
  cartEmpty: string;
  cartSubtotal: string;
  cartShipping: string;
  cartShippingNote: string;
  cartCheckout: string;
  cartRemove: string;
  fleaStory: string;
  footer: {
    tagline: string;
    shop: string;
    about: string;
    contact: string;
    address: string;
    email: string;
    phone: string;
    rights: string;
  };
}

export const COPY: Record<Lang, CopyLang> = {
  en: {
    nav: { home: 'Home', shop: 'Shop', about: 'About', contact: 'Contact' },
    navShort: { journal: 'Journal' },
    account: 'Account',
    cart: 'Cart',
    menu: 'Menu',
    close: 'Close',
    heroEyebrow: 'New arrivals',
    heroTitle: 'Vintage porcelain & glassware — every piece unique',
    heroSub: 'Original porcelain and glassware in good condition. Each item is one of a kind.',
    heroCta: 'Browse the shop',
    heroMeta: 'Updated regularly · 23 items available',
    categoriesTitle: 'Categories',
    categoriesSub: 'Browse our selection.',
    cats: { porcelain: 'Porcelain', glass: 'Glassware', curio: 'Curiosities' },
    catCount: (n) => `${n} items`,
    featuredTitle: 'Recently added',
    featuredSub: 'The latest additions to our shop.',
    featuredLink: 'See all',
    price: (v) => `${v.toLocaleString('pl-PL')} zł`,
    addToCart: 'Add to cart',
    addedToCart: 'Added',
    wishlist: 'Save for later',
    wishlisted: 'Saved',
    qty: 'Quantity',
    oneInStock: 'Only 1 left',
    unique: 'one of a kind',
    foundLabel: 'Found at',
    eraLabel: 'Era',
    makerLabel: 'Maker',
    conditionLabel: 'Condition',
    breadcrumb: { shop: 'Shop' },
    descTitle: 'About this piece',
    provTitle: 'Details',
    dimTitle: 'Dimensions',
    careTitle: 'Care',
    shipTitle: 'Shipping & returns',
    relatedTitle: 'You might also like',
    cartTitle: 'Cart',
    cartEmpty: 'Your cart is empty.',
    cartSubtotal: 'Subtotal',
    cartShipping: 'Shipping',
    cartShippingNote: 'Each piece packed carefully by hand. Calculated at checkout.',
    cartCheckout: 'Checkout',
    cartRemove: 'Remove',
    fleaStory: '',
    footer: {
      tagline: 'Original vintage porcelain and glassware in good condition.',
      shop: 'Shop',
      about: 'About us',
      contact: 'Contact',
      address: '',
      email: 'kontakt@porcelaneczka.pl',
      phone: '',
      rights: '© 2026 Porcelaneczka',
    },
  },
  pl: {
    nav: { home: 'Strona główna', shop: 'Oferta', about: 'O nas', contact: 'Kontakt' },
    navShort: { journal: 'Blog' },
    account: 'Konto',
    cart: 'Koszyk',
    menu: 'Menu',
    close: 'Zamknij',
    heroEyebrow: 'Nowe w ofercie',
    heroTitle: 'Oryginalna porcelana i szkło — każda sztuka niepowtarzalna',
    heroSub: 'Stara porcelana i szkło w dobrym stanie. Każdy przedmiot jest unikatem.',
    heroCta: 'Zobacz ofertę',
    heroMeta: 'Regularnie uzupełniana oferta · 23 przedmioty',
    categoriesTitle: 'Kategorie',
    categoriesSub: 'Przeglądaj naszą ofertę.',
    cats: { porcelain: 'Porcelana', glass: 'Szkło', curio: 'Inne' },
    catCount: (n) => `${n} przedmiotów`,
    featuredTitle: 'Ostatnio dodane',
    featuredSub: 'Najnowsze przedmioty w ofercie.',
    featuredLink: 'Zobacz wszystko',
    price: (v) => `${v.toLocaleString('pl-PL')} zł`,
    addToCart: 'Do koszyka',
    addedToCart: 'Dodano',
    wishlist: 'Dodaj do ulubionych',
    wishlisted: 'W ulubionych',
    qty: 'Ilość',
    oneInStock: 'Ostatnia sztuka',
    unique: 'unikat',
    foundLabel: 'Pochodzenie',
    eraLabel: 'Epoka',
    makerLabel: 'Wytwórnia',
    conditionLabel: 'Stan',
    breadcrumb: { shop: 'Oferta' },
    descTitle: 'Opis',
    provTitle: 'Szczegóły',
    dimTitle: 'Wymiary',
    careTitle: 'Pielęgnacja',
    shipTitle: 'Wysyłka i zwroty',
    relatedTitle: 'Może Cię zainteresować',
    cartTitle: 'Koszyk',
    cartEmpty: 'Twój koszyk jest pusty.',
    cartSubtotal: 'Razem',
    cartShipping: 'Wysyłka',
    cartShippingNote: 'Każdy przedmiot pakujemy starannie. Koszt wysyłki wyliczany przy zamówieniu.',
    cartCheckout: 'Zamów',
    cartRemove: 'Usuń',
    fleaStory: '',
    footer: {
      tagline: 'Oryginalna porcelana i szkło w dobrym stanie.',
      shop: 'Oferta',
      about: 'O nas',
      contact: 'Kontakt',
      address: '',
      email: 'kontakt@porcelaneczka.pl',
      phone: '',
      rights: '© 2026 Porcelaneczka',
    },
  },
};

export const IMG: Record<string, string> = {
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

export const PRODUCTS: Product[] = [
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
      en: "A dessert plate in soft cream with the gilt rim Chodzież was known for — six decades in and barely grazed. Maker's stamp underneath. Came out of a complete service from a Żoliborz estate; the rest will find homes separately.",
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
      en: "Clear lead-crystal decanter, hand-cut. The stopper still seats cleanly — rare after half a century. Came out of a Kraków professor's sideboard; reportedly there since their daughter's christening.",
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
    condition: { pl: 'Bardzo dobry · ślad sygnatury na spodzie', en: "Very good · maker's signature on underside" },
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
