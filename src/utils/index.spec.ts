import { expect, describe, it } from 'vitest';

import { validateObjectByShape } from './index';

describe('validateObjectByShape', () => {
  it('should filter object properties based on the expected shape', () => {
    const actual = {
      name: 'John',
      age: 30,
      city: 'New York',
    };

    const expectedShape = {
      name: '',
      age: 0,
    };

    const filteredObject = validateObjectByShape(actual, expectedShape);

    expect(filteredObject).toEqual({ name: 'John', age: 30 });
  });

  it('should handle empty objects', () => {
    const actual = {};
    const expectedShape = {
      name: '',
      age: 0,
    };

    const filteredObject = validateObjectByShape(actual, expectedShape);

    expect(filteredObject).toEqual({});
  });

  it('should not filter any properties if the shape matches the object', () => {
    const actual = {
      name: 'Alice',
      age: 25,
    };

    const expectedShape = {
      name: '',
      age: 0,
    };

    const filteredObject = validateObjectByShape(actual, expectedShape);

    expect(filteredObject).toEqual(actual);
  });
});
