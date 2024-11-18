import React from 'react';
import '../styles/PersonCard.css';

type Props = {
  handleClick: () => void
  label: string
};

const Button: React.FC<Props> = props => {

  return (
    <div className="bg-[#EC4D4D] p-2 min-w-24 rounded-md hover:shadow-2xl hover:shadow-cyan-500/50">
      <button onClick={props.handleClick} className="text-white hover:text-blue-900">
        {props.label}
      </button>
    </div>

  );
};

export default Button;
