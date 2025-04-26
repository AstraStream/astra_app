import React from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { resetPasswordSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';

interface ResetPasswordValue {
    email: string;
}

const useResetPasswordForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik({
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
        error: getFieldError<ResetPasswordValue>(formik, "email")
    }
}

export default useResetPasswordForm