import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="bg-white rounded-sm shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 bg-brand-accent h-full"></div>
              
              <div className="bg-brand-accent/10 p-3 rounded-sm text-brand-accent shrink-0 hidden md:block">
                <Cookie size={32} />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h4 className="text-lg font-bold text-brand-dark mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Cookie size={20} className="md:hidden text-brand-accent" />
                  {t('legal.cookies.title')}
                </h4>
                <p className="text-brand-steel text-sm leading-relaxed max-w-4xl">
                  {t('legal.cookies.banner.text')}{' '}
                  <Link to="/cookies" className="text-brand-accent hover:underline font-medium">
                    {t('footer.cookies')}
                  </Link>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2 text-sm font-bold text-brand-steel hover:text-brand-dark transition-colors uppercase tracking-wider"
                >
                  {t('legal.cookies.banner.decline')}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-8 py-3 bg-brand-dark hover:bg-brand-dark/90 text-white text-sm font-bold rounded-sm transition-all uppercase tracking-widest shadow-lg"
                >
                  {t('legal.cookies.banner.accept')}
                </button>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-brand-dark transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
