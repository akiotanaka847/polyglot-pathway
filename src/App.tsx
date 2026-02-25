import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AppProvider, useApp } from "@/contexts/AppContext";
import HomePage from "./pages/HomePage";
import LevelMapPage from "./pages/LevelMapPage";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import DashboardPage from "./pages/DashboardPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import StoryPage from "./pages/StoryPage";
import CulturePage from "./pages/CulturePage";
import ConversationPage from "./pages/ConversationPage";
import RanksPage from "./pages/RanksPage";
import PracticePage from "./pages/PracticePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function TopNav() {
  const { state } = useApp();
  const navigate = useNavigate();
  const totalXp = (state.xp.jp || 0) + (state.xp.fr || 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] flex items-center justify-between px-4 lg:px-7 h-[54px] bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="font-serif text-xl font-semibold cursor-pointer flex items-center gap-1.5" onClick={() => navigate('/')}>
        <span className="text-jp">言葉</span>
        <span className="text-foreground-muted">&</span>
        <span className="text-fr">Langue</span>
      </div>
      <div className="flex items-center gap-2">
        {totalXp > 0 && (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[0.74rem] font-semibold bg-gold-light text-gold">⚡ {totalXp} XP</span>
        )}
        {(state.streak.count || 0) > 0 && (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[0.74rem] font-semibold bg-jp-light text-jp">🔥 {state.streak.count}</span>
        )}
      </div>
    </nav>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const tabs = [
    { id: 'home', icon: '🏠', label: 'Inicio', path: '/' },
    { id: 'lessons', icon: '📚', label: 'Lecciones', path: '/levels/jp' },
    { id: 'progress', icon: '📊', label: 'Progreso', path: '/dashboard' },
    { id: 'practice', icon: '🎯', label: 'Práctica', path: '/practice' },
    { id: 'ranks', icon: '🏆', label: 'Logros', path: '/ranks' },
  ];

  // Hide during lessons/quizzes
  if (path.startsWith('/lesson/') || path.startsWith('/quiz/')) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[300] flex items-stretch bg-card border-t border-border shadow-[0_-2px_16px_rgba(0,0,0,0.08)] h-[62px]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {tabs.map(tab => {
        const active = tab.path === '/' ? path === '/' : path.startsWith(tab.path);
        return (
          <button key={tab.id} onClick={() => navigate(tab.path)} className={`flex-1 flex flex-col items-center justify-center gap-0.5 border-t-2 text-[0.6rem] font-medium transition-all ${active ? 'text-jp border-t-jp' : 'text-foreground-muted border-t-transparent'}`}>
            <span className={`text-xl leading-none ${active ? '-translate-y-0.5' : ''} transition-transform`}>{tab.icon}</span>
            <span className="text-[0.59rem] tracking-wide">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function AppLayout() {
  const location = useLocation();
  const hideChrome = location.pathname.startsWith('/lesson/') || location.pathname.startsWith('/quiz/');

  return (
    <div className="flex flex-col h-[100dvh]">
      {!hideChrome && <TopNav />}
      <main className={`flex-1 flex flex-col overflow-hidden ${!hideChrome ? 'pt-[54px] pb-[62px]' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/levels/:lang" element={<LevelMapPage />} />
          <Route path="/lesson/:lang/:level/:index" element={<LessonPage />} />
          <Route path="/quiz/:lang/:level" element={<QuizPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/conversation" element={<ConversationPage />} />
          <Route path="/ranks" element={<RanksPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideChrome && <BottomNav />}
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
