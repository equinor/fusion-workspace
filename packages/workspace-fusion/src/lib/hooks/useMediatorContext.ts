import { useContext } from 'react';
import { MediatorContext } from '../components/provider/MediatorProvider';
import { FusionMediator } from '../types';

export const useWorkspace = <TData extends Record<PropertyKey, unknown>>(): FusionMediator<TData> =>
	useContext(MediatorContext) as any;
