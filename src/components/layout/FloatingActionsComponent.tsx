// src/components/layout/FloatingActionsComponent.tsx
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../constants';
import { contactContent } from '../../content/pages/contact/contact.content';
import ActionButtonComponent from '../common/ActionButtonComponent';
import { CalendarIcon, WhatsappIcon } from '../ui';

import { useLocalizedRoutes } from '../../hooks/useLocalizedRoutes';

const FloatingActionsComponent = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const { to: localizedTo } = useLocalizedRoutes(); // 👈

  const { contactInfo } = contactContent;

  const prefilledText = t('generalWhatsappMessage', { ns: 'common' });
  const phone = contactInfo.phone.replace(/\s+/g, '');
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    prefilledText
  )}`;

  const handleNavigateAndScroll = () => {
    navigate(localizedTo(ROUTES['dive-experiences']));

    setTimeout(() => {
      const targetElement = document.getElementById('upcoming-trips-section');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
      className="fixed top-1/2 -translate-y-1/2 right-0 flex flex-col space-y-2 z-50"
    >
      <ActionButtonComponent
        text={t('viewCalendar', { ns: 'common' })}
        icon={<CalendarIcon className="w-6 h-6" />}
        onClick={handleNavigateAndScroll}
      />
      <ActionButtonComponent
        text={t('contactTextButton', { ns: 'common' })}
        icon={<WhatsappIcon className="w-6 h-6" />}
        isLink
        href={whatsappUrl}
      />
    </motion.div>
  );
};

export default FloatingActionsComponent;
