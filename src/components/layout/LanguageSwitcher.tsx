import { useI18n } from "@/i18n/I18nProvider";

const LanguageSwitcher = () => {
  const { language, setLanguage, languages } = useI18n();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as any)}
      className="border bg-background text-foreground border-border rounded-md px-2 py-1 text-sm"
      aria-label="Select language"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;


