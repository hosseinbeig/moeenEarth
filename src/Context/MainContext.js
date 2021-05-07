import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = (props) => {
  const [selectedLang, setSelectedLang] = useState('far');
  const englishName = 'Green Earth';
  const farsiName = 'زمین سبز';
  return (
    <>
      <LangContext.Provider
        value={[selectedLang, setSelectedLang, englishName, farsiName]}
      >
        {props.children}
      </LangContext.Provider>
    </>
  );
};
