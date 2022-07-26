import { useState } from 'react';

export function useRefresh() {
    const [value, setValue] = useState(false);
    return () => setValue((s) => !s);
}
