/**Core event */
export type CoreEvent<T> = {
	event: PropChangedEvent<T>;
	newValue: T;
};

export type PropChangedEvent<T> = {
	/**New value */
	newValue: T;
	/**Old value */
	oldValue: T;
	/**Who fired the event */
	originator: string;
	/**What prop was altered */
	target: string;
	/** Timestamp */
	timestamp: Date;
};
