import React, { useEffect, useState } from 'react';
import '../styles/PersonCard.css';
import { useStore } from '@nanostores/react';
import { $language } from '../stores/languageStore.ts';
import { $data, setNewData } from '../stores/pageDataStorage.ts';
import {LoaderCircle} from "lucide-react"

type Props = {
  children: React.ReactNode
  page: string
}

const App: React.FC = ({children, page}) => {

  const [isFetching, setIsFetching] = useState(false)

  const language = useStore($language)
  const data = useStore($data)
  const callBack = () => {
    setIsFetching(false)
  }

  useEffect(() => {
    setIsFetching(true);
    //mock
    setTimeout(() => {
      setNewData(page, language, callBack);
    }, 5000);
  }, [language]);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        textAlign: 'center',
      }}
    >
      {!isFetching ? children : <LoaderCircle/>}

    </div>

  );
};

export default App;
