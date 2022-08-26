import { useContext } from 'react';
import { MediatorContext } from '../components/provider/MediatorProvider';

export const useWorkspace = () => useContext(MediatorContext);
