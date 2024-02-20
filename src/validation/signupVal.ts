import z from "zod";

export const adminDetailsSchema = z.object({
    firstName: z.string().min(2, {message: "First name should have at least two characters"}),
    lastName: z.string().min(2, {message: "Last name should have at least 2 characters"}),
    workEmail: z.string().email("Invalid email"),
    password: z.string().min(5, {message: "Password is not strong enough"})
})

export const companyDetailsSchema = z.object({
    companyName: z.string().min(3, {message: "Company name should not be less than three characters"}),
    businessType: z.string(),
    address: z.string(),
})