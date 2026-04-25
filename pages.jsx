// pages.jsx — HomePage and ProductPage (collector/flea-market framing)

const { useState: _pS, useEffect: _pE } = React;

const imgFallback = (e) => {
  const el = e.currentTarget;
  if (el.dataset.fallback === '1') return;
  el.dataset.fallback = '1';
  el.style.opacity = '0';
  if (el.parentElement) el.parentElement.classList.add('pc-img-fallback');
};

// ── shared: product card ────────────────────────────────────────────────────
function ProductCard({ p }) {
  const s = useStore();
  const t = s.t;
  const wished = s.wishlist.has(p.id);
  return (
    <article className="pc-card" onClick={() => s.navTo({ page: 'product', id: p.id })}>
      <div className="pc-card__media">
        <img src={p.images[0]} alt={p.name[s.lang]} loading="lazy" onError={imgFallback} />
        <img className="pc-card__alt" src={p.images[1]} alt="" loading="lazy" onError={imgFallback} />
        <div className="pc-card__badge">
          <span className="pc-card__badge-dot" />
          {t.oneInStock}
        </div>
        <button
          className={`pc-card__wish ${wished ? 'is-on' : ''}`}
          onClick={(e) => { e.stopPropagation(); s.toggleWish(p.id); }}
          aria-label={wished ? t.wishlisted : t.wishlist}
        >
          <Heart size={16} filled={wished} />
        </button>
      </div>
      <div className="pc-card__meta">
        <div className="pc-card__era">{p.era[s.lang]} · {p.maker[s.lang]}</div>
        <div className="pc-card__name">{p.name[s.lang]}</div>
        <div className="pc-card__price-row">
          <span className="pc-card__price">{t.price(p.price)}</span>
          <span className="pc-card__unique">· {t.unique}</span>
        </div>
      </div>
    </article>
  );
}

// ── HERO variants ───────────────────────────────────────────────────────────
function Hero({ layout }) {
  const s = useStore();
  const t = s.t;

  const metaStrip = (
    <div className="pc-hero__strip">
      <span className="pc-hero__dot" />
      <span>{t.heroMeta}</span>
    </div>
  );

  if (layout === 'split') {
    return (
      <section className="pc-hero pc-hero--split">
        <div className="pc-hero__text">
          <div className="pc-eyebrow">{t.heroEyebrow}</div>
          <h1 className="pc-hero__title">{t.heroTitle}</h1>
          <p className="pc-hero__sub">{t.heroSub}</p>
          <div className="pc-hero__actions">
            <Button size="lg" onClick={() => s.navTo({ page: 'product', id: 'karafka-krosno' })}>
              {t.heroCta} <ArrowRight size={16} />
            </Button>
            {metaStrip}
          </div>
        </div>
        <div className="pc-hero__media">
          <img src={IMG.heroPorcelain} alt="" onError={imgFallback} />
          <div className="pc-hero__tag">
            <span className="pc-hero__tag-label">{t.foundLabel}</span>
            <span className="pc-hero__tag-value">Koło · Warszawa</span>
          </div>
        </div>
      </section>
    );
  }
  if (layout === 'still') {
    return (
      <section className="pc-hero pc-hero--still">
        <div className="pc-hero__still-wrap">
          <img src={IMG.heroPorcelain} alt="" onError={imgFallback} />
        </div>
        <div className="pc-hero__still-cap">
          <div className="pc-eyebrow">{t.heroEyebrow}</div>
          <h1 className="pc-hero__title">{t.heroTitle}</h1>
          <p className="pc-hero__sub">{t.heroSub}</p>
          <Button size="lg" onClick={() => s.navTo({ page: 'product', id: 'karafka-krosno' })}>
            {t.heroCta} <ArrowRight size={16} />
          </Button>
          {metaStrip}
        </div>
      </section>
    );
  }
  // full-bleed overlay (default)
  return (
    <section className="pc-hero pc-hero--full">
      <img className="pc-hero__bg" src={IMG.heroPorcelain} alt="" onError={imgFallback} />
      <div className="pc-hero__overlay" />
      <div className="pc-hero__content pc-container">
        <div className="pc-eyebrow pc-eyebrow--on-dark">{t.heroEyebrow}</div>
        <h1 className="pc-hero__title pc-hero__title--on-dark">{t.heroTitle}</h1>
        <p className="pc-hero__sub pc-hero__sub--on-dark">{t.heroSub}</p>
        <div className="pc-hero__actions">
          <Button size="lg" className="pc-btn--on-light" onClick={() => s.navTo({ page: 'product', id: 'karafka-krosno' })}>
            {t.heroCta} <ArrowRight size={16} />
          </Button>
          <div className="pc-hero__strip pc-hero__strip--on-dark">
            <span className="pc-hero__dot" />
            <span>{t.heroMeta}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Featured categories ─────────────────────────────────────────────────────
function FeaturedCategories() {
  const s = useStore();
  const t = s.t;
  const cats = [
    { key: 'porcelain', label: t.cats.porcelain, img: IMG.catPorcelain, count: 42 },
    { key: 'glass', label: t.cats.glass, img: IMG.catGlass, count: 28 },
    { key: 'curio', label: t.cats.curio, img: IMG.catCurio, count: 12 },
  ];
  return (
    <section className="pc-section pc-container">
      <header className="pc-section__hd">
        <h2 className="pc-section__title">{t.categoriesTitle}</h2>
        <p className="pc-section__sub">{t.categoriesSub}</p>
      </header>
      <div className="pc-cats">
        {cats.map((c) => (
          <a key={c.key} href="#" onClick={(e) => e.preventDefault()} className="pc-cat">
            <div className="pc-cat__media">
              <img src={c.img} alt={c.label} loading="lazy" onError={imgFallback} />
            </div>
            <div className="pc-cat__meta">
              <span className="pc-cat__label">{c.label}</span>
              <span className="pc-cat__count">{t.catCount(c.count)}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FeaturedGrid() {
  const s = useStore();
  const t = s.t;
  const items = PRODUCTS.slice(0, 4);
  return (
    <section className="pc-section pc-container">
      <header className="pc-section__hd pc-section__hd--split">
        <div>
          <h2 className="pc-section__title">{t.featuredTitle}</h2>
          <p className="pc-section__sub">{t.featuredSub}</p>
        </div>
        <a href="#" onClick={(e) => e.preventDefault()} className="pc-section__link">
          {t.featuredLink} <ArrowRight size={14} />
        </a>
      </header>
      <div className="pc-grid pc-grid--4">
        {items.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}

// ── HOMEPAGE ────────────────────────────────────────────────────────────────
function HomePage({ heroLayout }) {
  return (
    <>
      <Hero layout={heroLayout} />
      <FeaturedCategories />
      <FeaturedGrid />
    </>
  );
}

// ── PRODUCT PAGE ────────────────────────────────────────────────────────────
function ProductPage({ productId }) {
  const s = useStore();
  const t = s.t;
  const p = PRODUCTS.find((x) => x.id === productId) || PRODUCTS[0];
  const [idx, setIdx] = _pS(0);
  const [added, setAdded] = _pS(false);
  const wished = s.wishlist.has(p.id);
  const inCart = !!s.cart.find((x) => x.id === p.id);

  _pE(() => { setIdx(0); }, [p.id]);

  const onAdd = () => {
    if (inCart) { s.setCartOpen(true); return; }
    s.addToCart(p.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const related = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);

  return (
    <article className="pc-pdp">
      <div className="pc-pdp__inner pc-container">
        <nav className="pc-crumb" aria-label="Breadcrumb">
          <a href="#" onClick={(e) => { e.preventDefault(); s.navTo({ page: 'home' }); }}>{t.nav.home}</a>
          <ChevronRight size={14} />
          <a href="#" onClick={(e) => e.preventDefault()}>{t.breadcrumb.shop}</a>
          <ChevronRight size={14} />
          <a href="#" onClick={(e) => e.preventDefault()}>{p.category[s.lang]}</a>
        </nav>

        <div className="pc-pdp__layout">
          {/* Gallery */}
          <div className="pc-gal">
            <div className="pc-gal__main">
              <img key={p.images[idx]} src={p.images[idx]} alt={p.name[s.lang]} onError={imgFallback} />
              <div className="pc-gal__badge">
                <span className="pc-card__badge-dot" />
                {t.oneInStock} · {t.unique}
              </div>
              <button className={`pc-gal__wish ${wished ? 'is-on' : ''}`} onClick={() => s.toggleWish(p.id)}
                      aria-label={wished ? t.wishlisted : t.wishlist}>
                <Heart size={18} filled={wished} />
              </button>
            </div>
            <div className="pc-gal__thumbs" role="listbox">
              {p.images.map((src, i) => (
                <button key={src + i}
                        className={`pc-gal__thumb ${i === idx ? 'is-active' : ''}`}
                        onClick={() => setIdx(i)}
                        aria-label={`Image ${i + 1}`} aria-selected={i === idx}>
                  <img src={src} alt="" onError={imgFallback} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pc-info">
            <div className="pc-info__cat">{p.category[s.lang]} · {p.era[s.lang]}</div>
            <h1 className="pc-info__title">{p.name[s.lang]}</h1>
            <div className="pc-info__price-row">
              <span className="pc-info__price">{t.price(p.price)}</span>
              <span className="pc-info__unique">· {t.unique}</span>
            </div>
            <p className="pc-info__desc">{p.desc[s.lang]}</p>

            <dl className="pc-facts">
              <div className="pc-facts__row">
                <dt>{t.foundLabel}</dt><dd>{p.foundAt[s.lang]}</dd>
              </div>
              <div className="pc-facts__row">
                <dt>{t.makerLabel}</dt><dd>{p.maker[s.lang]}</dd>
              </div>
              <div className="pc-facts__row">
                <dt>{t.eraLabel}</dt><dd>{p.era[s.lang]}</dd>
              </div>
              <div className="pc-facts__row">
                <dt>{t.conditionLabel}</dt><dd>{p.condition[s.lang]}</dd>
              </div>
            </dl>

            <div className="pc-info__buy">
              <Button full size="lg" onClick={onAdd}>
                {added ? (<><Check size={16} /> {t.addedToCart}</>)
                       : inCart ? (<><ShoppingCart size={16} /> {t.cartTitle}</>)
                       : (<><ShoppingCart size={16} /> {t.addToCart}</>)}
              </Button>
              <Button full size="lg" variant="outline" onClick={() => s.toggleWish(p.id)}>
                <Heart size={16} filled={wished} /> {wished ? t.wishlisted : t.wishlist}
              </Button>
            </div>

            <Separator className="pc-info__sep" />

            <Accordion
              defaultOpen={['desc']}
              items={[
                { id: 'desc', title: t.descTitle, body: <p>{p.desc[s.lang]}</p> },
                { id: 'prov', title: t.provTitle, body: (
                  <>
                    <p>{p.foundAt[s.lang]} — {p.era[s.lang]}.</p>
                    <p>{p.condition[s.lang]}</p>
                  </>
                )},
                { id: 'dim',  title: t.dimTitle,  body: <p>{p.dimensions[s.lang]}</p> },
                { id: 'care', title: t.careTitle, body: <p>{p.care[s.lang]}</p> },
                { id: 'ship', title: t.shipTitle, body: <p>{p.shipping[s.lang]}</p> },
              ]}
            />
          </div>
        </div>

        <section className="pc-section pc-section--related">
          <header className="pc-section__hd">
            <h2 className="pc-section__title">{t.relatedTitle}</h2>
          </header>
          <div className="pc-grid pc-grid--4">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </section>
      </div>
    </article>
  );
}

Object.assign(window, { HomePage, ProductPage, ProductCard });
