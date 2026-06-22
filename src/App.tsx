/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Sun, 
  Compass, 
  Heart, 
  Coffee, 
  Shield, 
  Smile, 
  User, 
  Copy, 
  Check, 
  RotateCw, 
  Languages,
  ArrowLeftRight
} from "lucide-react";
import { BLESSINGS, Blessing } from "./data";

// Helper component to map the string database configurations to live Lucide Icons safely
const BlessingIcon = ({ name, className }: { name: string; className?: string }) => {
  const props = { className: className || "w-6 h-6", strokeWidth: 1.8 };
  switch (name) {
    case "Sparkles": return <Sparkles {...props} />;
    case "Sun": return <Sun {...props} />;
    case "Compass": return <Compass {...props} />;
    case "Heart": return <Heart {...props} />;
    case "Coffee": return <Coffee {...props} />;
    case "Shield": return <Shield {...props} />;
    case "Smile": return <Smile {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export default function App() {
  const [userName, setUserName] = useState<string>("");
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [greetingTone, setGreetingTone] = useState<'traditional' | 'warm' | 'modern'>('warm');

  // Multi-state animated pulse effect on the heart button
  const [heartClicks, setHeartClicks] = useState<number>(0);
  const [heartSparks, setHeartSparks] = useState<{ id: number; x: number; y: number }[]>([]);

  const activeBlessing: Blessing = BLESSINGS[currentIdx];

  const handleNextBlessing = () => {
    let nextIdx = currentIdx;
    // ensure it changes
    while (nextIdx === currentIdx && BLESSINGS.length > 1) {
      nextIdx = Math.floor(Math.random() * BLESSINGS.length);
    }
    setCurrentIdx(nextIdx);
  };

  const handleCopyText = () => {
    const textToCopy = `"${activeBlessing.hebrewText}"\n(${activeBlessing.englishTranslation}) — שלום חבר 🌸`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
    });
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const triggerHeartSpark = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHeartClicks(prev => prev + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newSpark = {
      id: Date.now() + Math.random(),
      x,
      y
    };
    
    setHeartSparks(prev => [...prev, newSpark]);
    
    // Auto-clean sparkles
    setTimeout(() => {
      setHeartSparks(prev => prev.filter(s => s.id !== newSpark.id));
    }, 1000);
  };

  // Compose the dynamic personal greeting
  const getDynamicGreeting = () => {
    const trimmed = userName.trim();
    if (!trimmed) {
      switch (greetingTone) {
        case "traditional": return "אָחִי וְחָבֵרִי, שָׁלוֹם";
        case "modern": return "היי חבר, שלום!";
        case "warm":
        default:
          return "שָׁלוֹם, חָבֵר";
      }
    }
    
    switch (greetingTone) {
      case "traditional": return `שָׁלוֹם עָלֶיךָ, ${trimmed} חָבֵר`;
      case "modern": return `שלום, ${trimmed}! איזה כיף שהגעת`;
      case "warm":
      default:
        return `שָׁלוֹם, ${trimmed} חָבֵר יָקָר`;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-850 font-sans selection:bg-[#EAE4D9] selection:text-stone-900 overflow-x-hidden flex flex-col justify-between py-8 px-4 md:px-8">
      
      {/* Decorative top header ornament of high craftsmanship */}
      <header className="max-w-2xl mx-auto w-full flex items-center justify-between border-b border-stone-200/60 pb-5">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-9 h-9 rounded-full bg-[#EAE4D9] flex items-center justify-center text-stone-700 font-serif font-bold text-lg select-none">
            ש
          </div>
          <div>
            <h1 className="text-stone-950 font-semibold text-sm tracking-tight leading-none">שלום חבר</h1>
            <p className="text-stone-400 font-mono text-[10px] tracking-widest uppercase mt-1">Shalom Haver • Greeting Card</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-[#F2EDE4]/80 p-0.5 rounded-full border border-stone-200/50">
          <button 
            onClick={() => setGreetingTone('warm')}
            className={`px-3 py-1 text-xs font-medium rounded-full cursor-pointer transition-all ${greetingTone === 'warm' ? 'bg-[#FCFAF6] text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'}`}
          >
            חם
          </button>
          <button 
            onClick={() => setGreetingTone('traditional')}
            className={`px-3 py-1 text-xs font-medium rounded-full cursor-pointer transition-all ${greetingTone === 'traditional' ? 'bg-[#FCFAF6] text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'}`}
          >
            מסורתי
          </button>
          <button 
            onClick={() => setGreetingTone('modern')}
            className={`px-3 py-1 text-xs font-medium rounded-full cursor-pointer transition-all ${greetingTone === 'modern' ? 'bg-[#FCFAF6] text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'}`}
          >
            קליל
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-xl mx-auto w-full my-auto py-12 flex flex-col items-center">
        
        {/* Dynamic Name Personalization Box */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#F5EFE4]/45 p-5 rounded-2xl border border-stone-200/50 mb-8 flex flex-col gap-3"
          id="name-input-card"
        >
          <label htmlFor="name-input" className="text-stone-600 text-[13px] font-medium text-center block">
            הקלידו את שמכם כדי להתחבר אישית:
          </label>
          <div className="relative flex items-center">
            <div className="absolute right-3.5 text-stone-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="name-input"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="בוקר טוב חבר...איך קוראים לך?"
              dir="rtl"
              maxLength={25}
              className="w-full bg-[#FCFAF6] border border-stone-300/80 rounded-xl py-2.5 pr-10 pl-4 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]/20 focus:border-[#D97706] transition-all placeholder:text-stone-400 text-center font-medium"
            />
          </div>
        </motion.div>

        {/* Floating animated sun rays backdrop behind the main text */}
        <div className="absolute -z-10 w-72 h-72 bg-gradient-to-tr from-amber-200/15 to-orange-100/20 rounded-full blur-3xl" />

        {/* Dynamic Header Greeting containing Hebrew Vowel-points */}
        <div className="text-center mb-8 px-4 w-full">
          <AnimatePresence mode="popLayout">
            <motion.h2
              key={`${getDynamicGreeting()}-${greetingTone}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight select-none"
              dir="rtl"
            >
              {getDynamicGreeting()}
            </motion.h2>
          </AnimatePresence>
          <p className="text-stone-500 font-mono text-xs tracking-wider uppercase mt-3">
            {userName.trim() ? `Hello, beloved ${userName.trim()}!` : "Hello, friend!"}
          </p>
        </div>

        {/* Central Blessing Presenter Card */}
        <div className="w-full relative px-1">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBlessing.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full rounded-3xl border p-8 md:p-10 shadow-[0_12px_40px_rgba(200,190,175,0.18)] bg-gradient-to-b ${activeBlessing.themeColor}`}
              id="blessing-container-card"
            >
              {/* Card Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] uppercase tracking-widest font-mono text-stone-500 bg-white/70 px-2.5 py-1 rounded-full border border-stone-200/30">
                  {activeBlessing.category}
                </span>
                
                <div className="text-[#B45309] bg-white/80 p-2.5 rounded-2xl shadow-xs">
                  <BlessingIcon name={activeBlessing.iconName} className="w-6 h-6" />
                </div>
              </div>

              {/* Precise Graceful Hebrew Text */}
              <blockquote className="text-2xl md:text-3xl font-bold text-stone-900 text-center leading-relaxed tracking-wide select-text my-4" dir="rtl">
                {activeBlessing.hebrewText}
              </blockquote>

              {/* Separator flower accent */}
              <div className="flex justify-center items-center gap-1.5 my-6 text-[#D97706]/40">
                <span className="h-px w-8 bg-current"></span>
                <span className="text-xs">✿</span>
                <span className="h-px w-8 bg-current"></span>
              </div>

              {/* Translation Toggles & Body */}
              <AnimatePresence initial={false}>
                {showTranslation && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden space-y-4"
                  >
                    {/* Transliteration */}
                    <div className="text-center px-2">
                      <p className="text-stone-500 font-mono text-xs italic leading-relaxed select-text tracking-wide">
                        "{activeBlessing.transliteration}"
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="text-center px-1">
                      <p className="text-stone-700 font-medium text-[13.5px] leading-relaxed select-text">
                        {activeBlessing.englishTranslation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Card Footer Tools */}
              <div className="mt-8 pt-6 border-t border-stone-200/40 flex items-center justify-between">
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 text-xs font-semibold select-none cursor-pointer p-1.5 rounded-lg hover:bg-stone-100/50 transition-all"
                  id="toggle-translation-btn"
                  title="Toggle translation and pronunciation translation"
                >
                  <Languages className="w-4 h-4 text-stone-500" />
                  <span>{showTranslation ? "הסתר תרגום" : "הצג תרגום"}</span>
                </button>

                <button
                  onClick={handleCopyText}
                  className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 text-xs font-semibold select-none cursor-pointer p-1.5 rounded-lg hover:bg-stone-100/50 transition-all"
                  id="copy-blessing-btn"
                  title="Copy card text"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">הועתק!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>העתק ברכה</span>
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Toast Notification for desktop/mobile accessibility */}
          <AnimatePresence>
            {isCopied && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute top-[-55px] left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-2 px-4 rounded-full shadow-lg font-medium tracking-wide flex items-center gap-1.5 z-50 select-none border border-stone-800"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>הברכה הועתקה ללוח הכללי!</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Core CTA Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full px-1">
          <button
            onClick={handleNextBlessing}
            className="flex-1 bg-[#D97706] hover:bg-[#C26B05] text-white py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 select-none"
            id="new-blessing-btn"
          >
            <RotateCw className="w-4 h-4 animate-spin-slow" />
            <span>בקש ברכה חדשה</span>
          </button>
        </div>

      </main>

      {/* Decorative Warm Footnote with Heart Interactions */}
      <footer className="max-w-2xl mx-auto w-full border-t border-stone-200/60 pt-6 mt-12 text-center relative">
        <div className="flex flex-col items-center gap-2">
          
          {/* Heart button of dynamic visual ripples */}
          <button 
            onClick={triggerHeartSpark}
            className="relative w-12 h-12 rounded-full bg-[#FCFAF6] border border-stone-200 shadow-xs hover:shadow-md flex items-center justify-center cursor-pointer group active:scale-90 transition-all"
            title="Send love"
            id="footer-heart-btn"
          >
            <motion.div
              animate={{ 
                scale: heartClicks > 0 ? [1, 1.25, 1] : 1 
              }}
              transition={{ duration: 0.3 }}
            >
              <Heart className={`w-5 h-5 transition-colors ${heartClicks > 0 ? 'fill-red-500 text-red-500' : 'text-stone-400 group-hover:text-red-500'}`} />
            </motion.div>

            {/* Sparkle effects on click */}
            {heartSparks.map(spark => (
              <motion.span
                key={spark.id}
                initial={{ transform: 'translate(-50%, -50%) scale(0.6)', opacity: 1 }}
                animate={{ transform: `translate(-50%, -50%) translate(${(spark.x - 24) * 2.2}px, ${(spark.y - 24) * 2.2}px) scale(0)`, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute text-red-500 pointer-events-none select-none text-lg"
                style={{ top: '50%', left: '50%' }}
              >
                ❤️
              </motion.span>
            ))}
          </button>

          <p className="text-[#9C9382] font-medium text-xs">
            נכתב באהבה • Creator of warmth & smiles
          </p>
          <p className="text-stone-400/90 font-mono text-[10px] tracking-wide mt-1">
            "כל בני חסותך יעלצו, לעולם ירננו..."
          </p>
        </div>
      </footer>

    </div>
  );
}
