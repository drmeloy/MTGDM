import React, { createContext, useContext, useState } from 'react';

const HpContext = createContext();

function HpProvider({ children }){
  const defaultHp = {
    player1: 40,
    player2: 40
  };

  const [hp, setHp] = useState(defaultHp);
  const value = {
    hp,
    setHp,
    resetHp: () => setHp(defaultHp)
  }

  return <HpContext.Provider value={value}>{children}</HpContext.Provider>
}

function useHp(){
  const context = useContext(HpContext);
  if (context === undefined) throw new Error('useHp must be used within a <HpProvider>');
  return context;
}

export { HpProvider, useHp };