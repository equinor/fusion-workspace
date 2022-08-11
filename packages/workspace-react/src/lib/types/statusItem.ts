export interface StatusItem {
	/** Title to be shown above the value */
	title: string;
	/** Value to be shown in the status bar */
	value: string | number;
	/** Value that reflects how much the main value has changed over the course of 1 week */
	weeklyChange?: () => string | number;
	description?: string;
}
