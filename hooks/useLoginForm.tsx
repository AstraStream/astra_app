import React, { useState } from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { authFormSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';
import { z } from 'zod';
import { useLogin } from '@/lib/api/auth';

export type AuthValues = z.infer<typeof authFormSchema>;

const useLoginForm = () => {    
    const { mutate: login, isPending, error } = useLogin();

    const formik = useFormik<AuthValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: toFormikValidationSchema(authFormSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            // Login user
        }
    });
    const errors = {
        email: getFieldError<AuthValues>(formik, "email"),
        password: getFieldError<AuthValues>(formik, "password"),
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading: formik.isSubmitting,
        formik,
        isValid,
        errors
    }
}

export default useLoginForm