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

import StoryPage from "./pages/StoryPage";
import CulturePage from "./pages/CulturePage";
import ConversationPage from "./pages/ConversationPage";
import RanksPage from "./pages/RanksPage";
import PracticePage from "./pages/PracticePage";
import ReferencePage from "./pages/ReferencePage";
import ExamSelectPage from "@/pages/ExamSelectPage";
import ExamPage from "@/pages/ExamPage";
import NotFound from "@/pages/NotFound";
import InstallPrompt from "@/components/InstallPrompt";

const queryClient = new QueryClient();

function TopNav() {
  const { state, tt } = useApp();
  const navigate = useNavigate();
  const totalXp = Object.values(state.xp).reduce((a, b) => a + b, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] flex items-center justify-between px-4 lg:px-7 h-[56px] bg-card/90 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="font-display text-xl font-bold cursor-pointer flex items-center gap-2" onClick={() => navigate('/')}>
        <img src="/voxia-icon.png" alt="Voxia" className="w-8 h-8 rounded-lg" />
        <span className="bg-gradient-to-r from-[hsl(263,70%,50%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">
          Voxia
        </span>
      </div>
      <div className="flex items-center gap-2">
        {totalXp > 0 && (
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[0.74rem] font-bold bg-[hsl(45,93%,90%)] text-[hsl(45,93%,35%)] shadow-sm">⚡ {totalXp}</span>
        )}
        {(state.streak.count || 0) > 0 && (
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[0.74rem] font-bold bg-[hsl(25,95%,92%)] text-[hsl(25,95%,40%)] shadow-sm">🔥 {state.streak.count}</span>
        )}
        {state.activeLangs.length > 0 && (
          <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[0.74rem] font-bold bg-[hsl(152,69%,92%)] text-[hsl(152,69%,32%)] shadow-sm">🌐 {state.activeLangs.length}</span>
        )}
      </div>
    </nav>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, tt } = useApp();
  const path = location.pathname;

  const activeLangs = [...new Set(state.activeLangs || [])].filter(c => c !== state.nativeLang);
  const lessonsLang = activeLangs.length > 0
    ? [...activeLangs].sort((a, b) => (state.xp[b] || 0) - (state.xp[a] || 0))[0]
    : 'jp';

  const tabs = [
    { id: 'home', icon: '🏠', label: tt('home'), path: '/', color: 'hsl(263, 70%, 50%)' },
    { id: 'lessons', icon: '📚', label: tt('lessons'), path: `/levels/${lessonsLang}`, color: 'hsl(217, 91%, 60%)' },
    { id: 'progress', icon: '📊', label: tt('progress'), path: '/dashboard', color: 'hsl(152, 69%, 46%)' },
    { id: 'practice', icon: '🎯', label: tt('practice'), path: '/practice', color: 'hsl(25, 95%, 53%)' },
    { id: 'reference', icon: '📖', label: tt('reference'), path: '/reference', color: 'hsl(330, 81%, 60%)' },
  ];

  if (path.startsWith('/lesson/') || path.startsWith('/quiz/')) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[300] flex items-stretch bg-card/95 backdrop-blur-xl border-t border-border shadow-[0_-2px_20px_rgba(0,0,0,0.06)] h-[64px]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {tabs.map(tab => {
        const active = tab.path === '/' ? path === '/' : path.startsWith(tab.path);
        return (
          <button key={tab.id} onClick={() => navigate(tab.path)} className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all ${active ? 'scale-105' : 'opacity-60'}`}>
            <span className={`text-xl leading-none transition-transform ${active ? 'animate-bounce-in' : ''}`}>{tab.icon}</span>
            <span className="text-[0.58rem] font-bold tracking-wide" style={active ? { color: tab.color } : undefined}>{tab.label}</span>
            {active && <div className="w-5 h-[3px] rounded-full mt-0.5" style={{ background: tab.color }} />}
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
      <main className={`flex-1 flex flex-col overflow-hidden ${!hideChrome ? 'pt-[56px] pb-[64px]' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/levels/:lang" element={<LevelMapPage />} />
          <Route path="/lesson/:lang/:level/:index" element={<LessonPage />} />
          <Route path="/quiz/:lang/:level" element={<QuizPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/story" element={<StoryPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/conversation" element={<ConversationPage />} />
          <Route path="/ranks" element={<RanksPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/reference" element={<ReferencePage />} />
          <Route path="/exams" element={<ExamSelectPage />} />
          <Route path="/exam/:lang/:level" element={<ExamPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideChrome && <BottomNav />}
      {!hideChrome && <InstallPrompt />}
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