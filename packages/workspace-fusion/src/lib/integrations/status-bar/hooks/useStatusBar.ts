import { useContext } from 'react';
import { StatusBarContext } from '../utils/addStatusBar';

export const useStatusBar = () => useContext(StatusBarContext);
