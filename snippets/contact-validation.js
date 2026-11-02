import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000)
}).strict();

// Route handler sketch: parse with safeParse; return 422 for invalid input;
// persist with parameterized ORM/query; enqueue notification asynchronously.
