import React, { useState } from 'react';
import LanguageDropDown from './LanguageDropDown.tsx';
import InstagramLink from './InstagramLink';
import TelegramLink from './TelegramLink';
import { useStore } from '@nanostores/react';
import { $language } from '../../stores/languageStore.ts';

const NavBar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const language = useStore($language);
  const fullLanguage = language === 'FIN' ? 'finnish' : 'english';

  const toggleDropdown = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const linkStyling = (path: string) =>
    `${window.location.pathname === path ? 'text-red' : 'hover:underline decoration-2 hover:decoration-red'}`;

  return (
    <div className='bg-white flex flex-row justify-between items-center mb-5 pt-2 pb-2 text-lg text-black'>
      <a href='/'>
        <img className='scale-75' src='/ofcLogo.jpg' alt='ofc_logo' />
      </a>
      <nav>
        <ol className='p-4 flex flex-wrap items-center'>
          <li>
            <a href={`/${fullLanguage}`} className={`mr-4 ${linkStyling('/')}`}>
              {language === 'FIN' ? 'Etusivu' : 'Home'}
            </a>
          </li>

          <li
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
            onClick={() => toggleDropdown(true)}
            className='relative mr-4 list-none'
          >
            <span>{language === 'FIN' ? 'Meistä' : 'About'}</span>
            {dropdownVisible && (
              <ul className='absolute top-full bg-white shadow-md p-4 border-2 rounded-md'>
                <li>
                  <a
                    href={`/trainings/${fullLanguage}`}
                    className={`mr-4 ${linkStyling(`/trainings/${fullLanguage}`)}`}
                  >
                    {language === 'FIN' ? 'Harjoitukset' : 'Trainings'}
                  </a>
                </li>
                <li>
                  <a
                    href={`/association/${fullLanguage}`}
                    className={`mr-4 ${linkStyling(`/association/${fullLanguage}`)}`}
                  >
                    {language === 'FIN' ? 'Assosiaatio' : 'Association'}
                  </a>
                </li>
                <li>
                  <a href={`/faq/${fullLanguage}`} className={`mr-4 ${linkStyling(`/faq/${fullLanguage}`)}`}>
                    {language === 'FIN' ? 'UKK' : 'FAQ'}
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href={`/member/${fullLanguage}`} className={`mr-4 ${linkStyling(`/member/${fullLanguage}`)}`}>
              {language === 'FIN' ? 'Liity jäseneksi!' : 'Become a member!'}
            </a>
          </li>

          <li>
            <InstagramLink />
          </li>
          <li>
            <TelegramLink />
          </li>
          <li>
            <LanguageDropDown />
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default NavBar;
