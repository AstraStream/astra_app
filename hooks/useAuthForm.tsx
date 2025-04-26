import React, { useState } from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { authFormSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';
import { z } from 'zod';

type FormValues = z.infer<typeof authFormSchema>;

const useAuthForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [displayDialog, setDisplayDialog] = useState(false);
    
    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: toFormikValidationSchema(authFormSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            try {
                setIsLoading(true)
                console.log(values, "submitted");
            } catch (err) {
                // 
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                    setDisplayDialog(true);
                }, 500);
            }
        }
    });
    const errors = {
        email: getFieldError<FormValues>(formik, "email"),
        password: getFieldError<FormValues>(formik, "password"),
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading,
        displayDialog,
        setDisplayDialog,
        formik,
        isValid,
        errors
    }
}

export default useAuthForm