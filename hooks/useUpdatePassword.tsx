import React from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { updatePasswordSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';

interface UpdatePasswordValues {
    newPassword: string,
    confirmNewPassword: string
}

const useUpdatePasswordForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik({
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
        newPassword: getFieldError<UpdatePasswordValues>(formik, "newPassword"),
        confirmNewPassword: getFieldError<UpdatePasswordValues>(formik, "confirmNewPassword")
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