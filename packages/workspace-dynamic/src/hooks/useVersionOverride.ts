import { useState, useEffect } from 'react';

const DEFAULT_PATH = 'https://unpkg.com/@equinor/workspace-fusion';

export function useVersionOverride() {
  const [key, setKey] = useState(DEFAULT_PATH);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      'message',
      (e) => {
        if (typeof e.data === 'object' && e.data !== null) {
          if (e.data['wsPath']) {
            setKey(e.data.wsPath);
          }
        }
      },
      { signal: controller.signal }
    );
    return () => controller.abort();
  }, []);
  return key;
}
