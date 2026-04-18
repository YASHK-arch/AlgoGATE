// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import { Code2, TrendingUp, Lock, BookOpen, MessageSquare, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const FEATURES = [
  { icon: TrendingUp, title: 'Progressive Difficulty', desc: 'Start at CF-800 and climb to 1500 with structured level gates. No more jumping into the deep end.', color: 'text-brand-400' },
  { icon: Lock,       title: 'Smart Unlock System', desc: 'Advanced levels (1300+) unlock only after mastering multiple topics. Forces balanced growth.', color: 'text-amber-400' },
  { icon: Zap,        title: 'CF Auto-Sync', desc: 'Connect your Codeforces handle. Solved problems are auto-detected and marked across all topics.', color: 'text-blue-400' },
  { icon: BookOpen,   title: 'Study Notes',  desc: 'DSA, IITM BS, and Dev notes organised by topic — open PDF notes directly in the browser.', color: 'text-purple-400' },
  { icon: MessageSquare, title: 'Discussion Threads', desc: 'Each problem has a live discussion. Post solutions, ask doubts, reply to peers in real-time.', color: 'text-rose-400' },
  { icon: CheckCircle2,  title: 'Progress Tracking', desc: 'GitHub-style heatmap, streak counter, per-topic rings — see your journey at a glance.', color: 'text-orange-400' },
];

const TOPICS = ['Arrays','Strings','Math','Greedy','Binary Search','Sorting','DP','Graphs','Trees','Implementation'];

const STEPS = [
  { n: '01', title: 'Create Account', desc: 'Sign up in seconds and link your Codeforces handle.' },
  { n: '02', title: 'Pick a Topic', desc: 'Choose from 10 core CP topics. Start with level 800.' },
  { n: '03', title: 'Solve & Progress', desc: 'Complete a level fully to unlock the next one. CF sync auto-marks solved problems.' },
  { n: '04', title: 'Master Advanced Levels', desc: 'Finish 1200 in 3+ topics to unlock 1300+. Your big differentiator.' },
];

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-dark-900">
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-0 w-[250px] h-[250px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
            Structured CP Learning — 800 → 1500
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-[1.08] animate-slide-up">
            Stop Getting{' '}
            <span className="gradient-text">TLE'd</span>
            <br />on Your Career
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            AlgoGATE is the structured competitive programming platform that takes you from CF-800 to CF-1500
            through curated topic ladders, smart progression locks, and real-time CF sync.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {user ? (
              <Link to="/dashboard" className="btn-primary text-base px-7 py-3.5">
                Go to Dashboard <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link to="/auth" className="btn-primary text-base px-7 py-3.5">
                  Start for Free <ArrowRight size={18} />
                </Link>
                <Link to="/auth" className="btn-secondary text-base px-7 py-3.5">
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Topic pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-14 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {TOPICS.map(t => (
              <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/8 bg-white/5 text-gray-400 hover:border-brand-500/40 hover:text-brand-300 transition-all duration-200 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Why AlgoGATE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to level up</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass-hover p-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <Icon size={22} className={color} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How AlgoGATE works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-500/40 to-transparent z-10" />
                )}
                <div className="glass p-6">
                  <div className="text-4xl font-black gradient-text mb-4">{s.n}</div>
                  <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Smart Unlock Callout ──────────────── */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass border border-amber-500/20 bg-amber-500/5 p-8 sm:p-12 rounded-3xl text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Smart Unlock System
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
              To access <span className="text-amber-300 font-semibold">Level 1300+</span>, you must complete Level 1200 in at least{' '}
              <span className="text-amber-300 font-semibold">3 different topics</span>. This prevents blind problem-grinding
              and forces you to build a well-rounded algorithmic foundation.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {['Arrays ✅', 'Strings ✅', 'Greedy ✅', 'DP 🔒', 'Graphs 🔒'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to <span className="gradient-text">escape TLE</span>?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join thousands of CP learners building a solid algorithmic foundation.
          </p>
          <Link to={user ? '/dashboard' : '/auth'} className="btn-primary text-base px-8 py-4">
            {user ? 'Go to Dashboard' : 'Get Started Free'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 text-center text-xs text-gray-600">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Code2 size={14} className="text-brand-500" />
          <span className="font-semibold text-gray-400">AlgoGATE</span>
        </div>
        <p>Built for competitive programmers. Problems from Codeforces. Not affiliated with Codeforces.</p>
      </footer>
    </div>
  );
}
