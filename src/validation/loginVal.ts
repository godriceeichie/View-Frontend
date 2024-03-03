import { z } from "zod";

export const loginVal = z.object({
    workEmail: z.string().email(),
    password: z.string().min(5, {message: "Password must contain at least 5 characters"})
})