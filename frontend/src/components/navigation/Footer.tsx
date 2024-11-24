import React from 'react';
import InstagramLink from './InstagramLink';
import TelegramLink from './TelegramLink';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav className='h-28 w-full bg-red p-4 flex flex-col items-center justify-end'>
        <a className='pt-4 text-black'>Otaniemi Fight Club</a>
        <div className='flex flex-row items-center'>
          <a href='mailto:ofc-hallitus@gmail.com?' className='p-4 text-black'>
            ofc-hallitus@gmail.com
          </a>
          <InstagramLink />
          <TelegramLink />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
