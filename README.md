# React Language Switcher

![banner](/banner.png)

React Language Switcher is a lightweight React hook and component for adding language switching to React applications. It provides a simple way to save the user's language preference and switch between multiple languages without requiring a large internationalization library.

The main goal of the project is to make language switching **quick and easy to implement** for smaller React projects where a full internationalization solution would be unnecessary.

## Features

- **Lightweight**: No large dependencies or complicated setup.
- **Quick to implement**: Add language switching to an existing React project with minimal configuration.
- **Multiple languages**: Supports any number of languages.
- **Persistent language selection**: Saves the selected language in `localStorage` and restores it when the user returns.
- **Reusable**: Works with any translation structure and can be integrated into different UI designs.
- **HTML language support**: Automatically updates the document's `lang` attribute when the selected language changes.

## Installation

Clone the repository or copy the hook and component into your React project.

`git clone https://github.com/aidartheklutz/react-language-switcher.git`

Import the hook and component:

```jsx
import { useLanguage } from "./useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";
```

## How It Works

React Language Switcher consists of two parts:

- **`useLanguage`**: A custom hook responsible for managing language state.
- **`LanguageSwitcher`**: A ready-to-use dropdown component for selecting a language.

The translation data itself is not included (the developer creates their own translation data object). This allows the library to work with any translation format or internationalization approach.

## `useLanguage`

The `useLanguage` hook manages the currently selected language and provides a function for changing it.

```jsx
const [language, setLanguage] = useLanguage({
  languages: ["en", "ru", "ky"],
  defaultLanguage: "en",
});
```

The hook returns:

- **`language`**: The currently selected language code.
- **`setLanguage`**: A function used to change the current language.

Example:

```jsx
setLanguage("ru");
```

The hook automatically:

- checks for a previously saved language in `localStorage`
- saves language changes
- updates the HTML `lang` attribute

## `LanguageSwitcher`

The `LanguageSwitcher` component provides a simple dropdown menu for switching between languages.

```jsx
<LanguageSwitcher
  language={language}
  languages={[
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "ky", name: "Кыргызча" }, // Kyrgyz language
  ]}
  onChange={setLanguage}
/>
```

The component expects:

- **`languages`**: An array of available languages.
- **`language`**: The currently selected language code.
- **`onChange`**: A function that receives the newly selected language.

Example of a languages array:

```jsx
const languages = [
  {
    code: "en",
    name: "English"
  },
  {
    code: "fr",
    name: "Français"
  },
  {
    code: "de",
    name: "Deutsch"
  },
  {
    code: "es",
    name: "Español"
  },
  {
    code: "pl",
    name: "Polski"
  },
];
```

The component only handles selecting a language. The actual language state management is handled by the `useLanguage` hook. The component requires language codes as well as display names for the dropdown, while the hook only requires language codes.

## Example

A basic implementation can be done in a few lines. It should look something like this:

```jsx
import { useLanguage } from "./useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

// user-defined translation data object 
// (preferred to be imported from a separate file)
const translations = {
  en: {
    hello: "Hello",
    goodbye: "Goodbye",
  },
  ru: {
    hello: "Привет",
    goodbye: "Пока",
  },
  ky: {
    hello: "Салам",
    goodbye: "Аман бол",
  },
};

function App() {
  const [language, setLanguage] = useLanguage({
    languages: ["en", "ru", "ky"],
    defaultLanguage: "en",
  });

  const languages = [
    {
      code: "en",
      name: "English"
    },
    {
      code: "ru",
      name: "Русский"
    },
    {
      code: "ky",
      name: "Кыргызча"
    },
  ];

  return (
    <>
      <LanguageSwitcher
        language={language}
        languages={languages}
        onChange={setLanguage}
      />

      <p>{translations[language].hello}</p>
      <p>{translations[language].goodbye}</p>
    </>
  );
}
```

The translation object is supposed to be managed by the application:

```jsx
const translations = {
  en: {
    hello: "Hello",
    goodbye: "Goodbye",
  },
  ru: {
    hello: "Привет",
    goodbye: "Пока",
  },
  ky: {
    hello: "Салам",
    goodbye: "Аман бол",
  },
};
```

This keeps the language switcher flexible and allows it to work with any translation structure.


## Why Use It?

Personally, I use this approach on my [portfolio website](https://aidartheklutz.github.io) to make it support both the Russian and English languages. You see, for smaller React projects, adding a complete internationalization library can sometimes be excessive. React Language Switcher provides the core functionality needed for simple multilingual applications while keeping the implementation fast to integrate.

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as long as the original license and copyright notice are included.
