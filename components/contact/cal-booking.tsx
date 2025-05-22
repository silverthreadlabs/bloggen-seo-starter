'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: '30min' });
        cal('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
          cssVarsPerTheme: {
            light: { 'cal-brand': '#0048ec' },
            dark: { 'cal-brand': '#0048ec' },
          },
        });
      } catch (error) {
        console.error('Error initializing Cal.com:', error);
      }
    })();
  }, []);

  return (
    <div className="w-full h-full min-h-96">
      <Cal
        namespace="30min"
        calLink="syed-saif.com/30min"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '700px',
          overflow: 'auto',
        }}
        config={{
          layout: 'month_view',
        }}
      />
    </div>
  );
}
