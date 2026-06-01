'use client';

import { useEffect } from 'react';

export default function PWAHandler() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('✅ SW registered: ', registration.scope);
          })
          .catch((error) => {
            console.log('❌ SW registration failed: ', error);
          });
      });
    }
  }, []);

  return null; // هذا المكون لا يظهر شيئاً في الواجهة
}