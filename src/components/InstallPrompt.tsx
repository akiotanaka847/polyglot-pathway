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
    // Check if already dismissed this session
    if (sessionStorage.getItem('pwa-dismissed')) {
      setDismissed(true);
      return;
    }

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setDismissed(true);
      return;
    }

    // Detect iOS
    const ua = navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    setIsIOS(isiOS);
    if (isiOS) return; // Show iOS banner directly

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
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

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('pwa-dismissed', '1');
  };

  if (dismissed) return null;
  if (!deferredPrompt && !isIOS) return null;

  return (
    <>
      <div className="fixed bottom-[70px] left-3 right-3 z-[400] animate-fade-in">
        <div className="bg-card border-[1.5px] border-border rounded-2xl p-4 shadow-xl flex items-center gap-3">
          <span className="text-3xl">📲</span>
          <div className="flex-1 min-w-0">
            <div className="font-serif text-sm font-semibold">Lingora</div>
            <div className="text-[0.72rem] text-foreground-muted">
              {isIOS
                ? 'Añade Lingora a tu pantalla de inicio'
                : 'Instala la app en tu teléfono'}
            </div>
          </div>
          {isIOS ? (
            <button
              onClick={() => setShowIOSGuide(true)}
              className="px-4 py-2 rounded-full bg-foreground text-background text-[0.78rem] font-bold whitespace-nowrap"
            >
              Cómo instalar
            </button>
          ) : (
            <button
              onClick={handleInstall}
              className="px-4 py-2 rounded-full bg-foreground text-background text-[0.78rem] font-bold whitespace-nowrap"
            >
              Instalar
            </button>
          )}
          <button onClick={handleDismiss} className="text-foreground-muted text-lg leading-none p-1">✕</button>
        </div>
      </div>

      {/* iOS instruction modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-[500] flex items-end justify-center bg-black/40 animate-fade-in" onClick={() => setShowIOSGuide(false)}>
          <div className="bg-card rounded-t-3xl p-6 pb-10 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-4">
              <span className="text-4xl">📲</span>
              <h2 className="font-serif text-lg font-semibold mt-2">Instalar Lingora en iPhone</h2>
            </div>
            <ol className="space-y-3 text-sm text-foreground-secondary">
              <li className="flex gap-3"><span className="font-bold text-foreground">1.</span> Toca el botón <span className="inline-flex items-center gap-1 font-semibold text-foreground">Compartir <span>⬆️</span></span> en Safari</li>
              <li className="flex gap-3"><span className="font-bold text-foreground">2.</span> Desplázate y selecciona <span className="font-semibold text-foreground">"Añadir a pantalla de inicio"</span></li>
              <li className="flex gap-3"><span className="font-bold text-foreground">3.</span> Toca <span className="font-semibold text-foreground">"Añadir"</span> para confirmar</li>
            </ol>
            <button
              onClick={() => { setShowIOSGuide(false); handleDismiss(); }}
              className="mt-6 w-full py-3 rounded-xl bg-foreground text-background font-bold text-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}
