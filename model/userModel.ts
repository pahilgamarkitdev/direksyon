import z from "zod"

export const userSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    username: z.string(),
    avatar: z.string().optional().nullable(),
    created_at: z.string().optional().nullable(),
    updated_at: z.string().optional().nullable(),
})

export const userUpdateSchema = z.object({
    id: z.string(),
    email: z.string().email().optional(),
    username: z.string().optional(),
})

export type UserType = z.infer<typeof userSchema>
export type UserUpdateType = z.infer<typeof userUpdateSchema>