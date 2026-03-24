import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Cookie } from 'lucide-react';

export function Cookies() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-accent/10 p-3 rounded-sm text-brand-accent">
              <Cookie size={32} />
            </div>
            <h1 className="text-4xl font-display font-extrabold text-brand-dark">
              {t('legal.cookies.title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-brand-steel">
            <p className="mb-12 text-xl leading-relaxed">
              {t('legal.cookies.intro')}
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">{t('legal.cookies.queSon')}</h2>
                <p className="leading-relaxed">
                  {t('legal.cookies.queSonDesc')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">{t('legal.cookies.tipos')}</h2>
                <p className="leading-relaxed">
                  {t('legal.cookies.tiposDesc')}
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
