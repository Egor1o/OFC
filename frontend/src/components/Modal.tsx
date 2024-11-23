import React, { useState } from 'react';
import '../styles/PersonCard.css';
import Button from './Button.tsx';
import {X} from "lucide-react"

type Props = {
  onConfirm: () => void,
  styles? : string
};

const Modal: React.FC<Props> = ({onConfirm, styles}) => {
  const [opened, setOpened] = useState(false)
  const handleOpened = () => setOpened(value => !value)

  return opened ?
  <div
    className="fixed inset-0 backdrop-blur-sm bg-black/70 flex items-center justify-center text-black "
  >
    <div
      className="rounded-md bg-slate-50 opacity-90 flex flex-col w-1/2 min-h-64 justify-between p-5 min-w-96 max-w-[650px]">
      <div className="flex w-full justify-end mb-1">
        <button onClick={handleOpened}>
          <X />
        </button>
      </div>
      <div className="flex flex-col items-center gap-10 pr-10 pl-10 mb-4">
        <h1 className="text-2xl font-bold">
          Confirmation dialogue
        </h1>

        <p>
          I have carefully read all the terms and conditions provided by the OFC and agree to follow them fully,
          ensuring that I comply with their guidelines and requirements.
        </p>

        <div className="flex flex-row justify-center gap-10 ">
          <Button handleClick={() => {
            const newWindow = window.open('https://stackoverflow.com/questions/67399620/how-to-make-open-url-on-click-on-button-in-reactjs', '_blank', 'noopener,noreferrer')
            console.log('newWindow', newWindow)
            if (newWindow) newWindow.opener = null
          }} label="Confirm" />
        </div>
      </div>
    </div>
  </div> : <div className="flex justify-center m-5"><Button handleClick={handleOpened} label="Become a member" styles={styles}/></div>

};

export default Modal;
