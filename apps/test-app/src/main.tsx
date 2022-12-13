import React, { createContext, ReactNode, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

type ContextType = string[];

const Provider = createContext<ContextType>([]);

const useProvider = () => useContext(Provider);
type NestProviderProps = {
	children: ReactNode;
	and: string;
};

const NestProvider = ({ and, children }: NestProviderProps) => {
	const val = useProvider();

	return <Provider.Provider value={[...val, '2']}>{children}</Provider.Provider>;
};

const Consumer = () => {
	const val = useProvider();

	return <div>{val.toString()}</div>;
};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <Provider.Provider value={['1']}>
			<NestProvider and="2">
				<Consumer />
			</NestProvider>
		</Provider.Provider> */}
		<App />
	</React.StrictMode>
);
