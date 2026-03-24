import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';

export function Legal() {
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
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl font-display font-extrabold text-brand-dark">
              {t('legal.aviso.title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-brand-steel">
            <p className="mb-8 text-xl leading-relaxed">
              {t('legal.aviso.intro')}
            </p>

            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">{t('legal.aviso.datos')}</h2>
              <ul className="space-y-4 list-none p-0">
                <li className="flex flex-col">
                  <span className="font-bold text-brand-dark">{t('legal.aviso.empresa')}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-brand-dark">{t('legal.aviso.nif')}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-brand-dark">{t('legal.aviso.domicilio')}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-brand-dark">{t('legal.aviso.email')}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-brand-dark">{t('legal.aviso.tel')}</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-brand-dark">{t('legal.aviso.registro')}</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
