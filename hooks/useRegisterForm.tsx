import { useState } from 'react'
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { authFormSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';
import { z } from 'zod';
import { useRegister } from '@/lib/apis/auth';

export type AuthValues = z.infer<typeof authFormSchema>;

const useRegisterForm = () => {
    const [displayDialog, setDisplayDialog] = useState(false);
    const { mutate: register, isPending, error } = useRegister();

    const formik = useFormik<AuthValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: toFormikValidationSchema(authFormSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            // Register new user
            register(values);
        }
    });
    const errors = {
        email: getFieldError<AuthValues>(formik, "email") || error?.message,
        password: getFieldError<AuthValues>(formik, "password"),
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading: formik.isSubmitting || isPending,
        displayDialog,
        setDisplayDialog,
        formik,
        isValid,
        errors
    }
}

export default useRegisterForm