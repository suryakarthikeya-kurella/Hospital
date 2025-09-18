import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const NotFound = () => {
  const location = useLocation();

  const { t } = useI18n();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">{t('404.title')}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t('404.subtitle')}</p>
        <a href="/" className="btn-primary">
          {t('404.returnHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
