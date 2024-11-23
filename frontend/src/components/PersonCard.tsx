import React, { useEffect } from 'react';
import '../styles/PersonCard.css';

type Props = {
  name: string;
  image?: string;
  description?: string;
  focused: boolean;
  styles?: string;
};

const PersonCard: React.FC<Props> = props => {
  useEffect(() => {
    console.log(props.name, props.focused);
  }, []);
  return (
    <div className='flex flex-col text-gray-700 bg-white items-center min-w-[200px] text-center p-8 ml-10 mr-10 rounded-xl transition duration-450 hover:shadow-2xl'>
      <div className='flex items-center justify-center overflow-hidden w-40 h-40 rounded-full border border-black shadow-2xl'>
        <img src={props.image} alt={props.name} className='object-cover w-full h-full' />
      </div>
      <h1 className='mt-4 m-2 '>{props.name}</h1>
      <p className='m-0.5 '>{props.description}</p>
    </div>
  );
};

export default PersonCard;
