import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 charasters")
  .max(20, "Username must be no more than 20 charasters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must not contain Special character")

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'password mustbe at least 6 charasters' })

})


