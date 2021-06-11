export function deepMerge<T>(newConfig: T, currentConfig: T): T {
  if (!newConfig) return currentConfig;
  for (const [key, value] of Object.entries(newConfig)) {
    if (!currentConfig[key]) {
      continue;
    }
    if (typeof value == 'object' && value && value.constructor.name === 'Object') {
      newConfig[key] = deepMerge(newConfig[key], currentConfig[key]);
    }
  }

  return { ...currentConfig, ...newConfig };
}
