import { useState } from 'react';

export const useRefresh = (): (() => void) => {
  const setIsExpanded = useState(false)[1];
  return () => setIsExpanded((prev) => !prev);
};
