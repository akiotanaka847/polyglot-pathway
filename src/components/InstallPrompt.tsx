import { useState, useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { tt } = useApp();

  useEffect(() => {
    if (sessionStorage.getItem('pwa-dismissed')) { setDismissed(true); return; }
    if (window.matchMedia('(display-mode: standalone)').matches) { setDismissed(true); return; }

    const ua = navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    setIsIOS(isiOS);
    if (isiOS) return;

    const handler = (e: Event) => { e.preventDefault(); setDeferredPrompt(e as BeforeInstallPromptEvent); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDismissed(true);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => { setDismissed(true); sessionStorage.setItem('pwa-dismissed', '1'); };

  if (dismissed || (!deferredPrompt && !isIOS)) return null;

  return (
    <>
      <div className="fixed bottom-[70px] left-3 right-3 z-[400] animate-fade-in">
        <div className="bg-card border-[1.5px] border-border rounded-2xl p-4 shadow-xl flex items-center gap-3">
          <span className="text-3xl">📲</span>
          <div className="flex-1 min-w-0">
            <div className="font-display text-sm font-semibold">Voxia</div>
            <div className="text-[0.72rem] text-muted-foreground">
              {isIOS ? tt('install_ios_desc') : tt('install_desc')}
            </div>
          </div>
          {isIOS ? (
            <button onClick={() => setShowIOSGuide(true)} className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-[0.78rem] font-bold whitespace-nowrap">
              {tt('how_install')}
            </button>
          ) : (
            <button onClick={handleInstall} className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-[0.78rem] font-bold whitespace-nowrap">
              {tt('install_app')}
            </button>
          )}
          <button onClick={handleDismiss} className="text-muted-foreground text-lg leading-none p-1">✕</button>
        </div>
      </div>

      {showIOSGuide && (
        <div className="fixed inset-0 z-[500] flex items-end justify-center bg-black/40 animate-fade-in" onClick={() => setShowIOSGuide(false)}>
          <div className="bg-card rounded-t-3xl p-6 pb-10 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-4">
              <span className="text-4xl">📲</span>
              <h2 className="font-display text-lg font-semibold mt-2">{tt('install_ios_title')}</h2>
            </div>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="font-bold text-foreground">1.</span> {tt('install_ios_1')}</li>
              <li className="flex gap-3"><span className="font-bold text-foreground">2.</span> {tt('install_ios_2')}</li>
              <li className="flex gap-3"><span className="font-bold text-foreground">3.</span> {tt('install_ios_3')}</li>
            </ol>
            <button
              onClick={() => { setShowIOSGuide(false); handleDismiss(); }}
              className="mt-6 w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm"
            >
              {tt('understood')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
