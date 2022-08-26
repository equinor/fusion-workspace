import { useContext } from 'react';
import { MediatorContext } from '../components/provider/MediatorProvider';

export const useMediatorContext = () => useContext(MediatorContext);
