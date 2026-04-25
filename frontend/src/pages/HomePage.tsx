import { useStore } from '@/store/StoreContext';
import { IMG, PRODUCTS } from '@/data/catalog';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from '@/components/icons';
import { ProductCard, imgFallback } from './ProductCard';
import type { HeroLayout } from '@/types';

interface HeroProps {
  layout?: HeroLayout;
}

function Hero({ layout }: HeroProps) {
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

interface HomePageProps {
  heroLayout?: HeroLayout;
}

export function HomePage({ heroLayout }: HomePageProps) {
  return (
    <>
      <Hero layout={heroLayout} />
      <FeaturedCategories />
      <FeaturedGrid />
    </>
  );
}
