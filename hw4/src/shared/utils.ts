export const snakeToCamel = (snakeCaseValue: string): string => {
  return snakeCaseValue.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
}
