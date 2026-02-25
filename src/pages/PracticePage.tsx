import { useNavigate } from 'react-router-dom';

export default function PracticePage() {
  const navigate = useNavigate();

  const items = [
    { icon: '📝', title: 'Simulacros', desc: 'JLPT y DELF/DALF formato real', path: '/levels/jp' },
    { icon: '🃏', title: 'Flashcards', desc: 'Repaso con memoria espaciada', path: '/flashcards' },
    { icon: '💬', title: 'Conversación', desc: 'Situaciones reales interactivas', path: '/conversation' },
    { icon: '📖', title: 'Historias', desc: 'Aprende con narrativas', path: '/story' },
    { icon: '🌍', title: 'Cultura', desc: 'Contexto real de cada idioma', path: '/culture' },
    { icon: '🏆', title: 'Logros', desc: 'Rangos, XP y mapa de progreso', path: '/ranks' },
  ];

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[500px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← Inicio</button>
          <span className="flex-1 text-center font-serif font-semibold">Práctica</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {items.map(item => (
            <button key={item.title} onClick={() => navigate(item.path)} className="border-[1.5px] border-border rounded-[16px] p-5 bg-card text-center hover:-translate-y-1 hover:shadow-md hover:border-jp transition-all">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold text-sm mb-1">{item.title}</div>
              <div className="text-[0.73rem] text-foreground-secondary leading-snug">{item.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
