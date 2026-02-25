import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';

export default function PracticePage() {
  const navigate = useNavigate();
  const { tt } = useApp();

  const items = [
    { icon: '📝', title: tt('simulation'), desc: tt('real_situations'), path: '/levels/jp' },
    { icon: '🃏', title: tt('flashcards'), desc: tt('spaced_rep'), path: '/flashcards' },
    { icon: '💬', title: tt('conversation'), desc: tt('real_situations'), path: '/conversation' },
    { icon: '📖', title: tt('story_mode'), desc: tt('learn_stories'), path: '/story' },
    { icon: '🌍', title: tt('culture'), desc: tt('real_context'), path: '/culture' },
    { icon: '📚', title: tt('reference'), desc: tt('grammar') + ' & ' + tt('vocabulary'), path: '/reference' },
    { icon: '🏆', title: tt('achievements'), desc: tt('ranks_xp'), path: '/ranks' },
  ];

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[500px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">{tt('practice')}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {items.map(item => (
            <button key={item.title} onClick={() => navigate(item.path)} className="border-[1.5px] border-border rounded-[16px] p-5 bg-card text-center hover:-translate-y-1 hover:shadow-md transition-all">
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
