import React from 'react'
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { userSettingsSchema } from '@/lib/schemas';
import { getFieldError, verifyEmail } from '@/lib/utils';
import useSearchQuery from './useSearchQuery';
import { useCompleteUserRegistration } from '@/lib/apis/auth';

export const genderOptions = ["Male", "Female", "Something else", "Prefer not to say"] as const;
// export const roles = ["listener", "artist"] as const;

export type CompleteUserRegistrationValues = z.infer<typeof userSettingsSchema>;
type Gender = (typeof genderOptions)[number];
// type Role = (typeof roles)[number];

const useUserInfoSettingsForm = () => {
    const [isSuccessful, setIsSuccessful] = React.useState(false);
    const { mutate: completeRegistration, isPending, error } = useCompleteUserRegistration();
    const emailQuery = useSearchQuery("email");

    const formik = useFormik<CompleteUserRegistrationValues>({
        initialValues: {
            username: "",
            country: "",
            // role: "" as Role,
            gender: "" as Gender
        },
        validationSchema: toFormikValidationSchema(userSettingsSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            if (emailQuery && verifyEmail(emailQuery).success) {
                completeRegistration({
                    ...values,
                    email: emailQuery
                });
            }
        }
    });

    const handleGenderChange = (value: Gender) => {
        formik.setFieldValue("gender", formik.values.gender === value ? "" : value.toLowerCase());
    };

    const handleCountrySelect = (value: string) => {
        formik.setFieldValue("country", formik.values.country === value ? "" : value);
    };

    // const handleRoleSelect = (value: Role) => {
    //     formik.setFieldValue("role", formik.values.role === value ? "" : value);
    // };

    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;
    const errors = {
        username:  getFieldError<CompleteUserRegistrationValues>(formik, "username"),
        country: getFieldError<CompleteUserRegistrationValues>(formik, "country"),
        // role: getFieldError<CompleteUserRegistrationValues>(formik, "role"),
        gender:  getFieldError<CompleteUserRegistrationValues>(formik, "gender"),
    }

    return {
        isLoading: formik.isSubmitting,
        formik,
        isValid,
        handleGenderChange,
        handleCountrySelect,
        // handleRoleSelect,
        isSuccessful,
        errors
    }
}

export default useUserInfoSettingsForm