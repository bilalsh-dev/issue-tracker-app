import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .min(1, "Title is required.")
    .max(255),
  description: z
    .string()
    .nonempty("Description is required")
    .min(1, "Description is required."), // Provide a custom error message
});
