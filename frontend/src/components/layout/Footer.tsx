import { useStore } from '@/store/StoreContext';
import { Logo } from './Logo';

export function Footer() {
  const s = useStore();
  const t = s.t.footer;
  return (
    <footer className="pc-foot">
      <div className="pc-container pc-foot__inner">
        <div className="pc-foot__brand">
          <Logo />
          <p className="pc-foot__tag">{t.tagline}</p>
          {s.t.fleaStory && <p className="pc-foot__note">{s.t.fleaStory}</p>}
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
              {t.address && t.address.split('\n').map((l, i) => <div key={i}>{l}</div>)}
              {t.email && <div style={{ marginTop: t.address ? 8 : 0 }}>{t.email}</div>}
              {t.phone && <div>{t.phone}</div>}
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
