import { useContext } from 'react';
import { MediatorContext } from '../components/provider/MediatorProvider';
import { FusionMediator } from '../types';

export const useWorkspace = <TData, TError>(): FusionMediator<TData, TError> => useContext(MediatorContext) as any;
