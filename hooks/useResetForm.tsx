import React from 'react'
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { resetPasswordSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';


type FormValues = z.infer<typeof resetPasswordSchema>;

const useResetPasswordForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik<FormValues>({
        initialValues: {
            email: ""
        },
        validationSchema: toFormikValidationSchema(resetPasswordSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            setIsLoading(true)
            console.log(values, "reset password successful");
        }
    });
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading,
        formik,
        isValid,
        error: getFieldError<FormValues>(formik, "email")
    }
}

export default useResetPasswordForm