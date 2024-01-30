import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { LayoutContext } from '../../../contexts/layout/Layout.context';

export default function LayoutProvider({ children }: PropsWithChildren) {
  const [colorTheme, setColorTheme] = useState<'light' | 'dark' | undefined>('light');

  const handleColorTheme = useCallback((colorTheme: 'light' | 'dark') => {
    setColorTheme(colorTheme);
  }, []);

  const value = useMemo(() => ({ colorTheme, handleColorTheme }), [colorTheme]);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}
