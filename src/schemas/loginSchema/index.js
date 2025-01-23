import { z } from "zod";

export const SignInSchema = z.object({
  username: z
    .string()
    .email("please Enter a valid email Address")
    .refine((username) => username.endsWith("@Ebtikar.com"), {
      message: "please use a valid Ebtikar email address",
    }),
  password: z
    .string()
    .min(6, "use valid password")
    .max(6, "password is too long"),
});
