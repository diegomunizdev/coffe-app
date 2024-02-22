import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { LayoutContext } from '../../../application/contexts/layout/Layout.context';

export default function LayoutProvider({ children }: PropsWithChildren): JSX.Element {
  const [colorTheme, setColorTheme] = useState<'light' | 'dark' | undefined>('light');

  const handleColorTheme = useCallback(() => {
    const theme = colorTheme === 'dark' ? 'light' : 'dark';
    setColorTheme(theme);
  }, [colorTheme]);

  const value = useMemo(() => ({ colorTheme, handleColorTheme }), [colorTheme]);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}
