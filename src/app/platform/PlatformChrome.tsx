'use client';

import { useEffect, ReactNode } from 'react';

export default function PlatformChrome({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Add a class to body when we are on the platform
    document.body.classList.add('platform-mode');
    return () => {
      document.body.classList.remove('platform-mode');
    };
  }, []);

  return <>{children}</>;
}
