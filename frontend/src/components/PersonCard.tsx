import React, { useEffect } from 'react';
import '../styles/PersonCard.css';
import MarkdownArticle from './MarkdownArticle';

type Props = {
  name: string;
  image?: string;
  description?: string;
  focused: boolean;
  styles?: string;
};

const PersonCard: React.FC<Props> = props => {
  useEffect(() => {
    // console.log(props.name, props.focused);
  }, []);
  return (
    <div className='flex flex-col text-gray-700 bg-white items-center max-w-[300px] md:min-w-[300px] min-[450px]:max-w-[450px] text-center p-8 min-[450px]:ml-10 min-[450px]:mr-10 rounded-xl transition duration-450 hover:shadow-2xl'>
      <div className='flex items-center justify-center overflow-hidden w-40 h-40 rounded-full border border-black shadow-2xl text-sm'>
        <img src={props.image} alt={props.name} className='object-cover h-full' />
      </div>
      <h1 className='mt-4 m-2 text-sm md:text-md'>{props.name}</h1>
      {props.description && (
        <MarkdownArticle markdown={props.description} styles={{ p: 'm-0.5 text-sm md:text-md text-black' }} />
      )}
    </div>
  );
};

export default PersonCard;
