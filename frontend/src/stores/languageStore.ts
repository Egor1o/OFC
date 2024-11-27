import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

const localeLanguage = persistentAtom('language', 'EN');
export const $language = atom<string>(localeLanguage.get());

export const setLanguage = (newValue: string) => {
  $language.set(newValue);
  localStorage.setItem('language', newValue); // Save to localStorage
  // console.log('inStore', $language.get());
};
