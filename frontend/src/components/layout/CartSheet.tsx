import { useStore } from '@/store/StoreContext';
import { PRODUCTS } from '@/data/catalog';
import { Sheet } from '@/components/ui/Sheet';
import { Separator } from '@/components/ui/Separator';
import { Button } from '@/components/ui/Button';
import { X } from '@/components/icons';

export function CartSheet() {
  const s = useStore();
  const t = s.t;
  return (
    <Sheet open={s.cartOpen} onClose={() => s.setCartOpen(false)} side="right" width={460} label={t.cartTitle}>
      <div className="pc-cart">
        <div className="pc-cart__hd">
          <h2 className="pc-cart__title">
            {t.cartTitle} <span className="pc-cart__count">{s.cartCount > 0 ? `(${s.cartCount})` : ''}</span>
          </h2>
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
