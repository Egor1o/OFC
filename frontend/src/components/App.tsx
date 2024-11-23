import React, { useEffect, useState } from 'react';
import '../styles/PersonCard.css';
import { useStore } from '@nanostores/react';
import { $language } from '../stores/languageStore.ts';
import { setNewData } from '../stores/pageDataStorage.ts';
import { LoaderCircle } from "lucide-react";

type Props = {
  children: React.ReactNode;
  page: string;
}

const App: React.FC<Props> = ({ children, page }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  const language = useStore($language);
  const callBack = (data) => {
    setIsFetching(false);
    setFetchedData(data);
  };

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setNewData(page, language, callBack);
    }, 500);
  }, [language, page]);

  // useEffect mandatory on the rendering stage since astro is static otherwise.
  // Other solutions are welcomed ...
  useEffect(() => {
    if (fetchedData.length > 0) {
      fetchedData.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          element.innerText = item.description;
        }
      });
    }
  }, [fetchedData]);

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
      {isFetching ? (
        <LoaderCircle className="transition:rot" />
      ) : (
        <>
          {children}
        </>
      )}
    </div>
  );
};

export default App;
