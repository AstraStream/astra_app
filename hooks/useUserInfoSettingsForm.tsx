import React from 'react'
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { userSettingsSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';

export const genderOptions = ["Male", "Female", "Something else", "Prefer not to say"] as const;
export const roles = ["listener", "artist"] as const;

type FormValues = z.infer<typeof userSettingsSchema>;
type Gender = (typeof genderOptions)[number];
type Role = (typeof roles)[number];

const useUserInfoSettingsForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isSuccessful, setIsSuccessful] = React.useState(false);

    const formik = useFormik<FormValues>({
        initialValues: {
            username: "",
            country: "",
            role: "" as Role,
            gender: "" as Gender
        },
        validationSchema: toFormikValidationSchema(userSettingsSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            setIsLoading(true)
            console.log(values, "reset password successful");

            setTimeout(() => {
                setIsSuccessful(true);
            }, 1500)
        }
    });

    const handleGenderChange = (value: Gender) => {
        formik.setFieldValue("gender", formik.values.gender === value ? "" : value.toLowerCase());
    };

    const handleCountrySelect = (value: string) => {
        formik.setFieldValue("country", formik.values.country === value ? "" : value);
    };

    const handleRoleSelect = (value: Role) => {
        formik.setFieldValue("role", formik.values.role === value ? "" : value);
    };

    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;
    const errors = {
        username:  getFieldError<FormValues>(formik, "username"),
        country: getFieldError<FormValues>(formik, "country"),
        role: getFieldError<FormValues>(formik, "role"),
        gender:  getFieldError<FormValues>(formik, "gender"),
    }

    return {
        isLoading,
        formik,
        isValid,
        handleGenderChange,
        handleCountrySelect,
        handleRoleSelect,
        isSuccessful,
        errors
    }
}

export default useUserInfoSettingsForm