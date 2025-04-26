import React from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

import { updatePasswordSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';

type FormValues = z.infer<typeof updatePasswordSchema>;

const useUpdatePasswordForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik<FormValues>({
        initialValues: {
            newPassword: "",
            confirmNewPassword: ""
        },
        validationSchema: toFormikValidationSchema(updatePasswordSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            setIsLoading(true)
            console.log(values, "reset password successful");
        }
    });
    const errors = {
        newPassword: getFieldError<FormValues>(formik, "newPassword"),
        confirmNewPassword: getFieldError<FormValues>(formik, "confirmNewPassword")
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading,
        formik,
        isValid,
        errors
    }
}

export default useUpdatePasswordForm