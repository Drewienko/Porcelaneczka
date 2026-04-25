// layout.jsx — Navbar, MobileNav, Footer, CartSheet

const { useState: _lS, useEffect: _lE } = React;

function Logo({ onClick }) {
  return (
    <button className="pc-logo" onClick={onClick} aria-label="Porcelaneczka home">
      <span className="pc-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 28 28" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M5 16c0-4.5 4-8 9-8s9 3.5 9 8"/>
          <path d="M3 16h22"/>
          <path d="M6.5 16c.6 3.5 3.7 6 7.5 6s6.9-2.5 7.5-6"/>
          <path d="M14 22v3"/><path d="M11 25h6"/>
        </svg>
      </span>
      <span className="pc-logo__word">Porcelaneczka</span>
    </button>
  );
}

function LangToggle() {
  const s = useStore();
  const setLang = window.__setLang;
  const lang = s.lang;
  return (
    <div className="pc-lang" role="group" aria-label="Language">
      <button className={`pc-lang__b ${lang === 'pl' ? 'is-on' : ''}`} onClick={() => setLang('pl')}>PL</button>
      <span className="pc-lang__slash">/</span>
      <button className={`pc-lang__b ${lang === 'en' ? 'is-on' : ''}`} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}

function Navbar({ compact }) {
  const s = useStore();
  const t = s.t;
  const [scrolled, setScrolled] = _lS(false);

  _lE(() => {
    const root = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 8);
    };
    onScroll();
    (root === window ? window : root).addEventListener('scroll', onScroll);
    return () => (root === window ? window : root).removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`pc-nav ${scrolled ? 'is-scrolled' : ''} ${compact ? 'pc-nav--compact' : ''}`}>
      <div className="pc-nav__inner pc-container">
        <div className="pc-nav__left">
          {compact && (
            <button className="pc-icon-btn" aria-label={t.menu} onClick={() => s.setNavOpen(true)}>
              <Menu size={20} />
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

function MobileNavSheet() {
  const s = useStore();
  const t = s.t;
  return (
    <Sheet open={s.navOpen} onClose={() => s.setNavOpen(false)} side="left" width={340} label={t.menu}>
      <div className="pc-msheet">
        <div className="pc-msheet__hd">
          <Logo onClick={() => s.navTo({ page: 'home' })} />
          <button className="pc-icon-btn" aria-label={t.close} onClick={() => s.setNavOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="pc-msheet__nav" aria-label="Mobile">
          {[
            { k: 'home', label: t.nav.home, go: { page: 'home' } },
            { k: 'shop', label: t.nav.shop, go: { page: 'shop' } },
            { k: 'about', label: t.nav.about },
            { k: 'contact', label: t.nav.contact },
          ].map((l) => (
            <button key={l.k} className="pc-msheet__link" onClick={() => l.go && s.navTo(l.go)}>
              <span>{l.label}</span>
              <ChevronRight size={18} />
            </button>
          ))}
        </nav>
        <Separator />
        <div className="pc-msheet__foot">
          <LangToggle />
          <button className="pc-msheet__acct">
            <User size={16} /><span>{t.account}</span>
          </button>
        </div>
      </div>
    </Sheet>
  );
}

function CartSheet() {
  const s = useStore();
  const t = s.t;
  return (
    <Sheet open={s.cartOpen} onClose={() => s.setCartOpen(false)} side="right" width={460} label={t.cartTitle}>
      <div className="pc-cart">
        <div className="pc-cart__hd">
          <h2 className="pc-cart__title">{t.cartTitle} <span className="pc-cart__count">{s.cartCount > 0 ? `(${s.cartCount})` : ''}</span></h2>
          <button className="pc-icon-btn" aria-label={t.close} onClick={() => s.setCartOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <Separator />
        {s.cart.length === 0 ? (
          <div className="pc-cart__empty">
            <p>{t.cartEmpty}</p>
            <Button variant="outline" onClick={() => { s.setCartOpen(false); s.navTo({ page: 'home' }); }}>
              {t.heroCta}
            </Button>
          </div>
        ) : (
          <>
            <ul className="pc-cart__list">
              {s.cart.map((line) => {
                const p = PRODUCTS.find((x) => x.id === line.id);
                if (!p) return null;
                return (
                  <li key={line.id} className="pc-cart__row">
                    <button className="pc-cart__thumb" onClick={() => { s.setCartOpen(false); s.navTo({ page: 'product', id: p.id }); }}>
                      <img src={p.images[0]} alt="" />
                    </button>
                    <div className="pc-cart__body">
                      <div className="pc-cart__name">{p.name[s.lang]}</div>
                      <div className="pc-cart__cat">{p.era[s.lang]} · {p.maker[s.lang]}</div>
                      <div className="pc-cart__ctrls">
                        <span className="pc-chip">{t.unique}</span>
                        <button className="pc-cart__rm" onClick={() => s.removeFromCart(p.id)}>{t.cartRemove}</button>
                      </div>
                    </div>
                    <div className="pc-cart__price">{t.price(p.price)}</div>
                  </li>
                );
              })}
            </ul>
            <div className="pc-cart__foot">
              <div className="pc-cart__line">
                <span>{t.cartShipping}</span>
                <span className="pc-muted">{t.cartShippingNote}</span>
              </div>
              <div className="pc-cart__line pc-cart__total">
                <span>{t.cartSubtotal}</span>
                <span>{t.price(s.cartSubtotal)}</span>
              </div>
              <Button full size="lg">{t.cartCheckout}</Button>
            </div>
          </>
        )}
      </div>
    </Sheet>
  );
}

function Footer({ compact }) {
  const s = useStore();
  const t = s.t.footer;
  return (
    <footer className="pc-foot">
      <div className="pc-container pc-foot__inner">
        <div className="pc-foot__brand">
          <Logo />
          <p className="pc-foot__tag">{t.tagline}</p>
          <p className="pc-foot__note">{s.t.fleaStory}</p>
        </div>
        <div className="pc-foot__cols">
          <div>
            <div className="pc-foot__h">{t.shop}</div>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>{s.t.cats.porcelain}</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>{s.t.cats.glass}</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>{s.t.cats.curio}</a></li>
            </ul>
          </div>
          <div>
            <div className="pc-foot__h">{t.contact}</div>
            <address>
              {t.address.split('\n').map((l, i) => <div key={i}>{l}</div>)}
              <div style={{ marginTop: 8 }}>{t.email}</div>
              <div>{t.phone}</div>
            </address>
          </div>
        </div>
      </div>
      <div className="pc-container pc-foot__rights">
        <span>{t.rights}</span>
        <span className="pc-muted">Koło · Kraków · Wrocław</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, MobileNavSheet, CartSheet, Footer, Logo });
