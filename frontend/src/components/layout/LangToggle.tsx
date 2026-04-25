import { useStore } from '@/store/StoreContext';
import type { Lang } from '@/types';

export function LangToggle() {
  const { lang, setLang } = useStore();
  return (
    <div className="pc-lang" role="group" aria-label="Language">
      <button className={`pc-lang__b ${lang === 'pl' ? 'is-on' : ''}`} onClick={() => setLang('pl' as Lang)}>PL</button>
      <span className="pc-lang__slash">/</span>
      <button className={`pc-lang__b ${lang === 'en' ? 'is-on' : ''}`} onClick={() => setLang('en' as Lang)}>EN</button>
    </div>
  );
}
