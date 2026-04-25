import { useStore } from '@/store/StoreContext';
import { Sheet } from '@/components/ui/Sheet';
import { Separator } from '@/components/ui/Separator';
import { Logo } from './Logo';
import { LangToggle } from './LangToggle';
import { X, ChevronRight, User } from '@/components/icons';

export function MobileNavSheet() {
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
          {([
            { k: 'home', label: t.nav.home, go: { page: 'home' } },
            { k: 'shop', label: t.nav.shop, go: { page: 'shop' } },
            { k: 'about', label: t.nav.about, go: undefined },
            { k: 'contact', label: t.nav.contact, go: undefined },
          ] as const).map((l) => (
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
