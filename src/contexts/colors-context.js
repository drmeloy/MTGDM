import React, { createContext, useContext, useState } from 'react';

const ColorsContext = createContext();

function ColorsProvider({ children }){
  const [colors, setColors] = useState(['blue']);
  const value = {
    colors,
    toggleColors: (thisColor, currentColors) => {
      const bgColors = currentColors.slice();
      if (bgColors.includes(thisColor)) {
        if (bgColors.length === 1) return;
        bgColors.splice(bgColors.indexOf(thisColor), 1);
        setColors(bgColors);
      }
      else (setColors([...bgColors, thisColor]));
    }
  };

  return <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>;
};

function useColors(){
  const context = useContext(ColorsContext);
  if (context === undefined) throw new Error('useColors must be used within a <ColorsProvider>');
  return context;
};

export { ColorsProvider, useColors };
