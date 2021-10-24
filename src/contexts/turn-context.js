import React, { createContext, useContext, useState } from 'react';

const TurnContext = createContext();

function TurnProvider({ children }){
  const [turn, setTurn] = useState(1);
  const [activePlayer, setActivePlayer] = useState(1);
  const value = {
    turn,
    activePlayer,
    incrementTurn: () => {
      if (activePlayer === 1) {
        setActivePlayer(2);
      };
      if (activePlayer === 2) {
        setTurn(turn + 1);
        setActivePlayer(1);
      }
    }
  }

  return <TurnContext.Provider value={value}>{children}</TurnContext.Provider>
};

function useTurnCounter(){
  const context = useContext(TurnContext);
  if (context === undefined) throw new Error('useTurn must be used within a <TurnProvider>');
  return context;
}
export { TurnProvider, useTurnCounter };