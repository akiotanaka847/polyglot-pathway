import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { EXAM_DATA } from '@/data/exams';
import { getLangConfig, LANGUAGES } from '@/data/languages';

export default function ExamSelectPage() {
  const navigate = useNavigate();
  const { state, tt } = useApp();

  const langs = state.activeLangs.length > 0
    ? LANGUAGES.filter(l => state.activeLangs.includes(l.code))
    : LANGUAGES;

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[500px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/practice')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">📝 {tt('simulation')}</span>
        </div>
        <p className="text-sm text-foreground-secondary text-center mb-4">
          Selecciona un idioma y nivel para iniciar un simulacro de certificación
        </p>
        <div className="space-y-3">
          {langs.map(lang => {
            const exams = EXAM_DATA[lang.code];
            if (!exams) return null;
            const config = getLangConfig(lang.code);
            return (
              <div key={lang.code} className="border border-border rounded-2xl p-4 bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{config.flag}</span>
                  <span className="font-bold">{config.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(exams).map(([level, exam]) => (
                    <button
                      key={level}
                      onClick={() => navigate(`/exam/${lang.code}/${level}`)}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border border-border hover:bg-accent transition-colors"
                    >
                      {exam.title.split('—')[0].trim()}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
