import { useState, useEffect } from 'react';
import { useStore } from '@/store/StoreContext';
import { PRODUCTS } from '@/data/catalog';
import { Button } from '@/components/ui/Button';
import { Separator } from '@/components/ui/Separator';
import { Accordion } from '@/components/ui/Accordion';
import { Heart, ChevronRight, ShoppingCart, Check } from '@/components/icons';
import { ProductCard, imgFallback } from './ProductCard';

interface ProductPageProps {
  productId: string;
}

export function ProductPage({ productId }: ProductPageProps) {
  const s = useStore();
  const t = s.t;
  const p = PRODUCTS.find((x) => x.id === productId) || PRODUCTS[0];
  const [idx, setIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const wished = s.wishlist.has(p.id);
  const inCart = !!s.cart.find((x) => x.id === p.id);

  useEffect(() => { setIdx(0); }, [p.id]);

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
          <div className="pc-gal">
            <div className="pc-gal__main">
              <img key={p.images[idx]} src={p.images[idx]} alt={p.name[s.lang]} onError={imgFallback} />
              <div className="pc-gal__badge">
                <span className="pc-card__badge-dot" />
                {t.oneInStock} · {t.unique}
              </div>
              <button
                className={`pc-gal__wish ${wished ? 'is-on' : ''}`}
                onClick={() => s.toggleWish(p.id)}
                aria-label={wished ? t.wishlisted : t.wishlist}
              >
                <Heart size={18} filled={wished} />
              </button>
            </div>
            <div className="pc-gal__thumbs" role="listbox">
              {p.images.map((src, i) => (
                <button
                  key={src + i}
                  className={`pc-gal__thumb ${i === idx ? 'is-active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Image ${i + 1}`}
                  aria-selected={i === idx}
                >
                  <img src={src} alt="" onError={imgFallback} />
                </button>
              ))}
            </div>
          </div>

          <div className="pc-info">
            <div className="pc-info__cat">{p.category[s.lang]} · {p.era[s.lang]}</div>
            <h1 className="pc-info__title">{p.name[s.lang]}</h1>
            <div className="pc-info__price-row">
              <span className="pc-info__price">{t.price(p.price)}</span>
              <span className="pc-info__unique">· {t.unique}</span>
            </div>
            <p className="pc-info__desc">{p.desc[s.lang]}</p>

            <dl className="pc-facts">
              <div className="pc-facts__row"><dt>{t.makerLabel}</dt><dd>{p.maker[s.lang]}</dd></div>
              <div className="pc-facts__row"><dt>{t.eraLabel}</dt><dd>{p.era[s.lang]}</dd></div>
              <div className="pc-facts__row"><dt>{t.conditionLabel}</dt><dd>{p.condition[s.lang]}</dd></div>
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
                  <><p>{p.era[s.lang]} · {p.maker[s.lang]}</p><p>{p.condition[s.lang]}</p></>
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
