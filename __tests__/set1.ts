// set1.ts
import { kasPositiivne } from "./f1"; // Importing from f1.ts

test("positiivsus", () => {
  expect(kasPositiivne(3)).toBe(true);
  expect(kasPositiivne(0)).toBe(false);
  expect(kasPositiivne(-5)).toBe(false);
});
