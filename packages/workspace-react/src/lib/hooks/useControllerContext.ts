import { useContext } from 'react';
import { controllerContext } from '../context/controllerContext';

export const useControllerContext = () => useContext(controllerContext);
