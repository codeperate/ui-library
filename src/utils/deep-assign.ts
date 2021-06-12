export function deepAssign<T>(newObj: T, currentObj: T): T {
	if (!newObj) return currentObj;
	for (const [key, value] of Object.entries(newObj)) {
		if (!currentObj[key]) {
			continue;
		}
		if (typeof value == 'object' && value && value.constructor.name === 'Object') {
			newObj[key] = deepAssign(newObj[key], currentObj[key]);
		}
	}

	return { ...currentObj, ...newObj };
}
