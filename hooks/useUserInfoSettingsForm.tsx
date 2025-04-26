import React from 'react'
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { userSettingsSchema } from '@/lib/schemas';
import { getFieldError } from '@/lib/utils';
import { genderOptions } from '@/lib/constants';

type FormValues = z.infer<typeof userSettingsSchema>;
type Gender = (typeof genderOptions)[number];

const useUserInfoSettingsForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    
    const formik = useFormik<FormValues>({
        initialValues: {
            name: "",
            gender: "" as Gender
        },
        validationSchema: toFormikValidationSchema(userSettingsSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            setIsLoading(true)
            console.log(values, "reset password successful");
        }
    });

    const handleCheckboxChange = (value: Gender) => {
        formik.setFieldValue("gender", formik.values.gender === value ? "" : value);
      };

    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;
    const errors = {
        name:  getFieldError<FormValues>(formik, "name"),
        gender:  getFieldError<FormValues>(formik, "gender"),
    }

    return {
        isLoading,
        formik,
        isValid,
        handleCheckboxChange,
        errors
    }
}

export default useUserInfoSettingsForm