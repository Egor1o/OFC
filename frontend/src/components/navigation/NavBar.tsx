import React, { useState } from 'react';
import LanguageDropDown from './LanguageDropDown.tsx';
import InstagramLink from './InstagramLink';
import TelegramLink from './TelegramLink';
import { useStore } from '@nanostores/react';
import { $language } from '../../stores/languageStore.ts';
import '../../styles/NavBar.css'

const NavBar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);

  const language = useStore($language);
  const fullLanguage = language === 'FIN' ? 'finnish' : 'english';

  const toggleDropdown = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible(visible => !visible);
  };

  const linkStyling = (path: string) =>
    `${window.location.pathname === path ? 'text-red' : 'hover:underline decoration-2 hover:decoration-red'}`;

  return (
    <div className='bg-white flex flex-row justify-between items-center mb-5 pt-2 pb-2 text-lg text-black'>
      <a href={`/${fullLanguage}`}>
        <img className='scale-75' src='/ofcLogo.jpg' alt='ofc_logo' />
      </a>
      <nav id="pc">
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
      <div id="mobile" className="flex items-center flex-row">
      <ol className='p-4 pr-3 flex flex-wrap items-center'>
      
      <svg
      onClick={toggleMobileDropdown}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={`w-8 h-8 cursor-pointer mr-4 rounded-md ${
      mobileDropdownVisible ? 'bg-gray-300' : 'bg-white'
      }`}
      >
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>
        {mobileDropdownVisible && (
          <ul className='absolute mt-80 mr-10 bg-white shadow-md rounded-md'>
            <li>
              <a href='/' className={`block px-4 py-2 ${linkStyling('/')}`}>
              {language === 'FIN' ? 'Etusivu' : 'Home'}
              </a>
            </li>
            <li>
              <a href='/trainings' className={`block px-4 py-2 ${linkStyling(`/trainings/${fullLanguage}`)}`}>
              {language === 'FIN' ? 'Harjoitukset' : 'Trainings'}
              </a>
            </li>
            <li>
              <a href='/association' className={`block px-4 py-2 ${linkStyling(`/association/${fullLanguage}`)}`}>
              {language === 'FIN' ? 'Assosiaatio' : 'Association'}
              </a>
            </li>
            <li>
              <a href='/faq' className={`block px-4 py-2 ${linkStyling(`/faq/${fullLanguage}`)}`}>
              {language === 'FIN' ? 'UKK' : 'FAQ'}
              </a>
            </li>
            <li>
              <a href='/member' className={`block px-4 py-2 ${linkStyling(`/member/${fullLanguage}`)}`}>
              {language === 'FIN' ? 'Liity jäseneksi!' : 'Become a member!'}
              </a>
            </li>
          </ul>         
        )}
          <li>
            <LanguageDropDown />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
