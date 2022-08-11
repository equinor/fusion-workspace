import { render } from '@testing-library/react';

import PowerBi from './power-bi';

describe('PowerBi', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PowerBi />);
		expect(baseElement).toBeTruthy();
	});
});
