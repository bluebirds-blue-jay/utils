import * as Lodash from 'lodash';

export function enumValues<T extends string | number, E extends {}>(enumeration: E, options: Partial<{ excludeValues: any[] }> = {}): T[] {
  const map = new Map(Lodash.toPairs(enumeration));
  const integerValues: number[] = [];
  const stringValues: string[] = [];

  for (const [key, value] of map.entries()) {
    if (options.excludeValues && options.excludeValues.includes(value)) {
      continue;
    }

    if (Lodash.isInteger(value) && enumeration[value as keyof E] === key) {
      integerValues.push(value as number);
    } else if (Lodash.isString(value)) {
      stringValues.push(value);
    }
  }

  if (integerValues.length) {
    return integerValues as T[];
  } else if (stringValues.length) {
    return stringValues as T[];
  } else {
    return [];
  }
}