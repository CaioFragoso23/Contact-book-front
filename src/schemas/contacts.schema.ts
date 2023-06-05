import { z } from "zod";

export const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export type contactData = z.infer<typeof contactSchema>;
