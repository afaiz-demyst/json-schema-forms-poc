import { RadioOption } from "../components/RadioButtonGroup";

/**
 * Validates an object by filtering it based on the expected shape.
 * It filters out any properties in the `actual` object that are not present in the `expectedShape` object.
 *
 * @template T - The type of the object to validate.
 * @param {T} actual - The object to validate.
 * @param {T} expectedShape - The expected shape of the object.
 * @returns {T} - A new object with properties that match the `expectedShape`.
 *
 * @example
 * const actual = {
 *   name: 'John',
 *   age: 30,
 *   city: 'New York',
 * };
 *
 * const expectedShape = {
 *   name: '',
 *   age: 0,
 * };
 *
 * const filteredObject = validateObjectByShape(actual, expectedShape);
 * // filteredObject is { name: 'John', age: 30 }
 */
export function validateObjectByShape<T>(actual: T, expectedShape: T): T {
  const filteredObject: T = {} as unknown as T;

  for (const key in expectedShape) {
    if (Object.prototype.hasOwnProperty.call(expectedShape, key)) {
      filteredObject[key] = actual[key];
    }
  }

  return filteredObject;
}

