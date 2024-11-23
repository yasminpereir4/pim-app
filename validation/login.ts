import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Este campo é obrigatório." })
    .min(1, "Este campo é obrigatório.")
    .trim(),
  password: z
    .string({ required_error: "Este campo é obrigatório." })
    .min(1, "Este campo é obrigatório."),
});

export type LoginFormInput = z.input<typeof loginValidationSchema>;
