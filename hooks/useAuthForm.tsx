import React from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { authFormSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';

interface AuthValues {
    email: string;
    password: string;
}

const useAuthForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: toFormikValidationSchema(authFormSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            setIsLoading(true)
            console.log(values, "submitted");
        }
    });
    const errors = {
        email: getFieldError<AuthValues>(formik, "email"),
        password: getFieldError<AuthValues>(formik, "password"),
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading,
        formik,
        isValid,
        errors
    }
}

export default useAuthForm