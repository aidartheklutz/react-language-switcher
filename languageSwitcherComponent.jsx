function LanguageSwitcherComponent({ languages, language, onChange }) {
  return (
    <select
      value={language}
      onChange={(e) => onChange(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
