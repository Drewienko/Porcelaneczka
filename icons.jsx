// icons.jsx — Lucide-style icons (inline SVG, stroke-based, matches lucide visually)
// 24x24 viewBox, 1.5 stroke, round caps & joins.

const Icon = ({ children, size = 20, stroke = 1.5, className = '', style = {} }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    className={className} style={style} aria-hidden="true"
  >{children}</svg>
);

const ShoppingBag = (p) => (
  <Icon {...p}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </Icon>
);
const ShoppingCart = (p) => (
  <Icon {...p}>
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </Icon>
);
const Heart = ({ filled, ...p }) => (
  <Icon {...p} style={{ ...(p.style || {}), fill: filled ? 'currentColor' : 'none' }}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </Icon>
);
const User = (p) => (
  <Icon {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </Icon>
);
const Menu = (p) => (
  <Icon {...p}>
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </Icon>
);
const X = (p) => (
  <Icon {...p}>
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </Icon>
);
const Plus = (p) => (
  <Icon {...p}>
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </Icon>
);
const Minus = (p) => (
  <Icon {...p}>
    <path d="M5 12h14"/>
  </Icon>
);
const ChevronRight = (p) => (
  <Icon {...p}>
    <path d="m9 18 6-6-6-6"/>
  </Icon>
);
const ChevronDown = (p) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6"/>
  </Icon>
);
const ChevronLeft = (p) => (
  <Icon {...p}>
    <path d="m15 18-6-6 6-6"/>
  </Icon>
);
const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </Icon>
);
const Check = (p) => (
  <Icon {...p}>
    <path d="M20 6 9 17l-5-5"/>
  </Icon>
);
const Search = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </Icon>
);
const Monitor = (p) => (
  <Icon {...p}>
    <rect width="20" height="14" x="2" y="3" rx="2"/>
    <line x1="8" x2="16" y1="21" y2="21"/>
    <line x1="12" x2="12" y1="17" y2="21"/>
  </Icon>
);
const Smartphone = (p) => (
  <Icon {...p}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </Icon>
);

Object.assign(window, {
  ShoppingBag, ShoppingCart, Heart, User, Menu, X, Plus, Minus,
  ChevronRight, ChevronDown, ChevronLeft, ArrowRight, Check, Search,
  Monitor, Smartphone,
});
