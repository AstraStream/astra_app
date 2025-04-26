import { z } from "zod";

export const passwordValidationChecks = [
    {
        label: "Special Characters",
        test: (val: string) => /[!@#$%^&*]{1,}/ig.test(val) 
    },
    {
        label: "8 Characters",
        test: (val: string) => val.length >= 8 
    },
    {
        label: "Alphanumeric",
        test: (val: string) => /[A-Za-z]/.test(val)
    }
];

export const authFormSchema = z.object({
    email: z
        .string()
        .email({ message: "The email address format isn’t recongized" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .refine(val => /[A-Za-z]/.test(val), {
            message: "Password must contain AlphaNumeric letters"
        })
        .refine(val => /[!@#$%^&*]{1,}/.test(val), {
            message: "Password must contain at least 2 special characters"
        })
});

export const resetPasswordSchema = z.object({
    email: z
        .string()
        .email({ message: "The email address format isn’t recongized" })
});

export const updatePasswordSchema = z.object({
    newPassword: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .refine(val => /[A-Za-z]/.test(val), {
            message: "Password must contain AlphaNumeric letters"
        })
        .refine(val => /[!@#$%^&*]{1,}/.test(val), {
            message: "Password must contain at least 2 special characters"
        }),
    confirmNewPassword: z.string()
}).superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmNewPassword"],
      });
    }
});