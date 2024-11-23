import React from 'react';
import InstagramLink from './InstagramLink';
import TelegramLink from './TelegramLink';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav className='h-28 w-full bg-red p-4 flex flex-row items-center justify-end'>
        <a className='p-4'>Otaniemi Fight Club</a>
        <a href='mailto:ofc-hallitus@gmail.com?' className='p-4 pr-8'>
          ofc-hallitus@gmail.com
        </a>
        <InstagramLink />
        <TelegramLink />
      </nav>
    </footer>
  );
};

export default Footer;
