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
      const timer = setTimeout(() => setIsVisible(true), 500);
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-[400px] z-50"
        >
          <div className="bg-white rounded-sm shadow-2xl border border-gray-100 p-5 flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 bg-brand-accent h-full"></div>
            
            <div className="flex gap-3 items-start pr-6">
              <div className="bg-brand-accent/10 p-2 rounded-sm text-brand-accent shrink-0 mt-1">
                <Cookie size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-dark mb-1">
                  {t('legal.cookies.title')}
                </h4>
                <p className="text-brand-steel text-xs leading-relaxed">
                  {t('legal.cookies.banner.text')}{' '}
                  <Link to="/cookies" className="text-brand-accent hover:underline font-medium">
                    {t('footer.cookies')}
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-bold text-brand-steel hover:text-brand-dark transition-colors uppercase tracking-wider"
              >
                {t('legal.cookies.banner.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-brand-dark hover:bg-brand-dark/90 text-white text-xs font-bold rounded-sm transition-all uppercase tracking-widest shadow-md"
              >
                {t('legal.cookies.banner.accept')}
              </button>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-brand-dark transition-colors p-1"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
