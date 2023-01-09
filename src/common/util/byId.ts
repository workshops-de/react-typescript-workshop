/**
 * Takes an array and creates an object with the values indexed by their id.
 *
 * Example:
 *
 * byId([
 *   { id: "1", name: "Book 1" },
 *   { id: "2", name: "Book 2" },
 * ])
 *
 * Returns:
 *
 * {
 *   "1": { id: "1", name: "Book 1" },
 *   "2": { id: "2", name: "Book 2" },
 * }
 *
 * @param values The values to index
 * @returns An object with the values indexed by their id
 */
export const byId = <T extends { id: string }>(values: T[]) => {
  return values.reduce<{ [id: string]: T }>((acc, value) => {
    acc[value.id] = value;
    return acc;
  }, {});
};
