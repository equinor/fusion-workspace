import { useContext } from 'react';
import { ControllerContext } from '../context/controllerContext';

export const useControllerContext = () => useContext(ControllerContext);
