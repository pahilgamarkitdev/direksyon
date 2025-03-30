import z from "zod"

export const userSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    username: z.string(),
    avatar: z.string().optional().nullable(),
    created_at: z.string().optional().nullable(),
    updated_at: z.string().optional().nullable(),
})

export type UserType = z.infer<typeof userSchema>