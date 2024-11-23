import React from 'react';
import '../styles/PersonCard.css';

type Props = {
  handleClick: () => void
  label: string
  styles? : string
};

const Button: React.FC<Props> = props => {

  return (
    <div className={`bg-[#EC4D4D] min-w-24 rounded-md ${props.styles ? props.styles : "p-2"}`}>
      <button onClick={props.handleClick} className="text-white hover:text-blue-900">
        {props.label}
      </button>
    </div>

  );
};

export default Button;
