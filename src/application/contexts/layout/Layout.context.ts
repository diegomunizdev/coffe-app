import { createContext, useContext } from 'react';

type LayoutContextProps = {
  colorTheme: 'light' | 'dark' | undefined;
  handleColorTheme: () => void;
};

export const LayoutContext = createContext({} as LayoutContextProps);

export const useLayoutContext = () => useContext(LayoutContext);
