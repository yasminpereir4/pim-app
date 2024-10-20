import { z } from "zod";

export const registerValidationSchema = z
  .object({
    fullName: z
      .string({ required_error: "Este campo é obrigatório." })
      .min(1, "Este campo é obrigatório.")
      .trim(),
    email: z
      .string({ required_error: "Este campo é obrigatório." })
      .email("Digite um e-mail válido.")
      .trim(),

    password: z
      .string({ required_error: "Este campo é obrigatório." })
      .min(6, "A senha deve conter no mínimo 6 caracteres."),
    passwordConfirmation: z.string().optional(),
  })
  .superRefine(({ password, passwordConfirmation }, context) => {
    if (password !== passwordConfirmation) {
      context.addIssue({
        code: "custom",
        message: "A confirmação está incorreta",
        path: ["passwordConfirmation"],
      });
    }
  });

export type RegisterFormInput = z.input<typeof registerValidationSchema>;
