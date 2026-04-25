import { useEffect } from 'react';
import { StoreProvider, useStore } from '@/store/StoreContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileNavSheet } from '@/components/layout/MobileNavSheet';
import { CartSheet } from '@/components/layout/CartSheet';
import { HomePage } from '@/pages/HomePage';
import { ProductPage } from '@/pages/ProductPage';
import { MonitorIcon, SmartphoneIcon } from '@/components/icons';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakRadio, TweakSelect,
} from '@/components/tweaks/TweaksPanel';
import type { HeroLayout, Viewport, TweakValues } from '@/types';

const TWEAK_DEFAULTS: TweakValues = {
  accentColor: '#a86a3d',
  serif: 'Fraunces',
  sans: 'Inter Tight',
  heroLayout: 'full',
  viewport: 'desktop',
};

function ViewportSwitch({ viewport, onChange }: { viewport: Viewport; onChange: (v: Viewport) => void }) {
  return (
    <div className="pc-vswitch" role="group" aria-label="Viewport">
      <button className={viewport === 'desktop' ? 'is-on' : ''} onClick={() => onChange('desktop')}>
        <MonitorIcon size={14} /> Desktop
      </button>
      <button className={viewport === 'mobile' ? 'is-on' : ''} onClick={() => onChange('mobile')}>
        <SmartphoneIcon size={14} /> Mobile
      </button>
    </div>
  );
}

function Main({ heroLayout }: { heroLayout: HeroLayout }) {
  const s = useStore();
  if (s.route.page === 'product' && s.route.id) {
    return <ProductPage productId={s.route.id} />;
  }
  return <HomePage heroLayout={heroLayout} />;
}

function AppInner() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const compact = t.viewport === 'mobile';

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accentColor);
    root.style.setProperty('--serif', `'${t.serif}', Georgia, serif`);
    root.style.setProperty('--sans', `'${t.sans}', -apple-system, sans-serif`);
    root.style.setProperty('--accent-soft', `color-mix(in oklab, ${t.accentColor} 14%, #faf9f6)`);
  }, [t.accentColor, t.serif, t.sans]);

  return (
    <StoreProvider>
      <ViewportSwitch viewport={t.viewport} onChange={(v) => setTweak('viewport', v)} />
      <div className="pc-stage">
        <div className={`pc-frame ${compact ? 'pc-frame--mobile' : ''}`}>
          <div className="pc-scroll" data-scroll-root="">
            <Navbar compact={compact} />
            <Main heroLayout={t.heroLayout as HeroLayout} />
            <Footer />
          </div>
          <MobileNavSheet />
          <CartSheet />
        </div>
      </div>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accentColor} onChange={(v) => setTweak('accentColor', v)} />
        <TweakRadio
          label="Palette"
          value={t.accentColor}
          options={[
            { value: '#a86a3d', label: 'Brass' },
            { value: '#b65d49', label: 'Terra' },
            { value: '#8b6f47', label: 'Wax' },
            { value: '#7a5230', label: 'Walnut' },
          ]}
          onChange={(v) => setTweak('accentColor', v)}
        />
        <TweakSelect
          label="Serif"
          value={t.serif}
          options={[
            { value: 'Fraunces', label: 'Fraunces (warm)' },
            { value: 'Libre Caslon Text', label: 'Libre Caslon' },
            { value: 'EB Garamond', label: 'EB Garamond' },
            { value: 'Playfair Display', label: 'Playfair Display' },
            { value: 'Cormorant Garamond', label: 'Cormorant' },
          ]}
          onChange={(v) => setTweak('serif', v)}
        />
        <TweakSelect
          label="Sans"
          value={t.sans}
          options={[
            { value: 'Inter Tight', label: 'Inter Tight' },
            { value: 'Inter', label: 'Inter' },
            { value: 'Manrope', label: 'Manrope' },
          ]}
          onChange={(v) => setTweak('sans', v)}
        />
        <TweakSection label="Hero layout" />
        <TweakRadio
          label="Style"
          value={t.heroLayout}
          options={[
            { value: 'full', label: 'Full-bleed' },
            { value: 'split', label: 'Split' },
            { value: 'still', label: 'Still life' },
          ]}
          onChange={(v) => setTweak('heroLayout', v)}
        />
        <TweakSection label="Viewport" />
        <TweakRadio
          label="Device"
          value={t.viewport}
          options={[
            { value: 'desktop', label: 'Desktop' },
            { value: 'mobile', label: 'Mobile' },
          ]}
          onChange={(v) => setTweak('viewport', v)}
        />
      </TweaksPanel>
    </StoreProvider>
  );
}

export function App() {
  return <AppInner />;
}
