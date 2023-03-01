import { ReactNode } from 'react';

export type Provider = {
  name: string;
  Component: React.FC<{ children: ReactNode }>;
};
