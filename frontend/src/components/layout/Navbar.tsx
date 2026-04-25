import { useState, useEffect } from 'react';
import { useStore } from '@/store/StoreContext';
import { Logo } from './Logo';
import { LangToggle } from './LangToggle';
import { MenuIcon, User, ShoppingBag } from '@/components/icons';

interface NavbarProps {
  compact: boolean;
}

export function Navbar({ compact }: NavbarProps) {
  const s = useStore();
  const t = s.t;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : (root as HTMLElement).scrollTop;
      setScrolled(y > 8);
    };
    onScroll();
    const target = root === window ? window : root;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`pc-nav ${scrolled ? 'is-scrolled' : ''} ${compact ? 'pc-nav--compact' : ''}`}>
      <div className="pc-nav__inner pc-container">
        <div className="pc-nav__left">
          {compact && (
            <button className="pc-icon-btn" aria-label={t.menu} onClick={() => s.setNavOpen(true)}>
              <MenuIcon size={20} />
            </button>
          )}
          <Logo onClick={() => s.navTo({ page: 'home' })} />
        </div>

        {!compact && (
          <nav className="pc-nav__links" aria-label="Primary">
            <a onClick={(e) => { e.preventDefault(); s.navTo({ page: 'home' }); }} href="#"
               className={`pc-nav__link ${s.route.page === 'home' ? 'is-active' : ''}`}>{t.nav.home}</a>
            <a onClick={(e) => { e.preventDefault(); s.navTo({ page: 'shop' }); }} href="#" className="pc-nav__link">{t.nav.shop}</a>
            <a onClick={(e) => e.preventDefault()} href="#" className="pc-nav__link">{t.nav.about}</a>
            <a onClick={(e) => e.preventDefault()} href="#" className="pc-nav__link">{t.nav.contact}</a>
          </nav>
        )}

        <div className="pc-nav__right">
          <LangToggle />
          {!compact && (
            <button className="pc-icon-btn" aria-label={t.account}>
              <User size={18} />
            </button>
          )}
          <button className="pc-icon-btn pc-nav__cart" aria-label={t.cart} onClick={() => s.setCartOpen(true)}>
            <ShoppingBag size={18} />
            {s.cartCount > 0 && <span className="pc-nav__cart-dot">{s.cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
