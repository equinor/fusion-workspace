/**Prefix for easier filtering of logs */
const prefix = (propName: string) => `[proxy-${propName}]`;
/**
 * Logs reassigning of properties
 * @param propName - Name of the property
 * @param newVal - New value
 */
export function logPropReassign(propName: string, newVal: any) {
	switch (true) {
		case Array.isArray(newVal): {
			console.groupCollapsed(`${prefix(propName)} ${propName} was assigned a new length of ${newVal.length}`),
				console.trace(`${propName}`),
				console.debug(newVal),
				console.groupEnd();

			break;
		}

		case typeof newVal === 'object': {
			console.groupCollapsed(
				`${prefix(propName)} ${propName} was assigned a new object ${JSON.stringify(newVal)}`
			);
			console.trace(`${propName}`);
			console.groupEnd();
			break;
		}

		default: {
			console.groupCollapsed();
			console.trace(`${prefix(propName)} ${propName} was given a new value of ${propName}`, {});
			console.groupEnd();
			break;
		}
	}
}
