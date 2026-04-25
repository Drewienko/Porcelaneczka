import { useStore } from '@/store/StoreContext';
import { Heart } from '@/components/icons';
import type { Product } from '@/types';

export function imgFallback(e: React.SyntheticEvent<HTMLImageElement>) {
  const el = e.currentTarget;
  if (el.dataset.fallback === '1') return;
  el.dataset.fallback = '1';
  el.style.opacity = '0';
  if (el.parentElement) el.parentElement.classList.add('pc-img-fallback');
}

interface ProductCardProps {
  p: Product;
}

export function ProductCard({ p }: ProductCardProps) {
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
