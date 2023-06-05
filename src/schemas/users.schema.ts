import { z } from "zod"

export const userSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória"),
  phone: z.string().nonempty("Número é obrigatório")
})

export const loginSchema = userSchema.omit({
  phone: true,
  name: true
})

export type UserData = z.infer<typeof userSchema>
export type LoginData = z.infer<typeof loginSchema>