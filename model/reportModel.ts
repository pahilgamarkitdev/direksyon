import z from 'zod';

export const reportProblemSchema = z.object({
    userId: z.string(),
    problem: z.string().min(1)
})

export type reportProblemType = z.infer<typeof reportProblemSchema>