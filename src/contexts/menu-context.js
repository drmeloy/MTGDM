import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

function MenuProvider({children}){
  const [menuOpen, setMenuOpen] = useState(false);
  const value = {
    menuOpen,
    toggleMenu: () => setMenuOpen(menuOpen === false ? true : false)
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

function useMenu(){
  const context = useContext(MenuContext);
  if (context === undefined) throw new Error('useMenu must be used within a <MenuProvider>');
  return context;
};

export { MenuProvider, useMenu };
