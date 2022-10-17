/**
 * Logs reassigning of properties
 * @param propName - Name of the property
 * @param newVal - New value
 */
export function logPropReassign(propName: string, newVal: any) {
	switch (true) {
		case Array.isArray(newVal): {
			console.debug(`${prefix(propName)} ${propName} was assigned a new length of ${newVal.length}`);
			break;
		}

		case typeof newVal === 'object': {
			console.debug(`${prefix(propName)} ${propName} was assigned a new object ${JSON.stringify(newVal)}`);
			break;
		}

		default: {
			console.debug(`${prefix(propName)} ${propName} was given a new value of ${propName}`);
			break;
		}
	}
}

const prefix = (propName: string) => `[proxy-${propName}]`;
