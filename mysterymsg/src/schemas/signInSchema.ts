
import { z } from "zod";

export const signIn = z.object({
  email: z.string().email({ message: "Invalid email address" })
})