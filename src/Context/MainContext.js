import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = (props) => {
  const [selectedLang, setSelectedLang] = useState('far');
  return (
    <>
      <LangContext.Provider value={[selectedLang, setSelectedLang]}>
        {props.children}
      </LangContext.Provider>
    </>
  );
};
