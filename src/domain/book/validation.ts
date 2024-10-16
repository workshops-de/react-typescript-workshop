import { z } from "zod";

export const validateBookForm = z
  .object({
    title: z.string().min(5),
    author: z.string().min(2),
    numPages: z.coerce.number().min(10),
  })
  .refine(
    ({ title, numPages }) => {
      if (title === "Bible") {
        return numPages > 1000;
      }

      return true;
    },
    { message: "The Bible must have more than 1000 pages.", path: ["numPages"] }
  );
