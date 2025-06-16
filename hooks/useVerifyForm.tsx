import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { verifyOTPSchema } from '@/lib/schemas';
import { getFieldError, verifyEmail } from '@/lib/utils';
import { z } from 'zod';
import useSearchQuery from './useSearchQuery';
import { useResendVerifyCode, useVerifyUserEmail } from '@/lib/apis/auth';
import useCountdown from './useCountdown';
import { useEffect } from 'react';

export type VerifyValue = z.infer<typeof verifyOTPSchema>;
export type VerifyCredential = {
    code: VerifyValue["code"],
    email: string;
}

const useVerifyForm = () => {    
    const emailQuery = useSearchQuery("email");
    const { mutate: verify, isPending, error } = useVerifyUserEmail();
    const { mutate: resendCode, isPending: isSending, isSuccess: isSendingSuccessful, error: isSendingError } = useResendVerifyCode()
    const { minutes, seconds, isRunning, reset } = useCountdown(300);

    useEffect(() => {
        if (isSendingSuccessful) {
            // Reset countdown
            reset();
        }
    }, [isSendingSuccessful])

    const formik = useFormik<VerifyValue>({
        initialValues: {
            code: "",
        },
        validationSchema: toFormikValidationSchema(verifyOTPSchema),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            if (emailQuery && verifyEmail(emailQuery).success) {
                verify({
                    code: values.code,
                    email: emailQuery
                });
            }
        }
    });

    // Resend Verification Code
    const resendVerificationCode = () => {
        if (emailQuery && verifyEmail(emailQuery).success) {
            resendCode(emailQuery);
        }
    }

    const handleCode = (value: VerifyValue["code"]) => {
        formik.setFieldValue("code", value);
    }

    const errors = {
        code: getFieldError<VerifyValue>(formik, "code") || error?.message,
    }
    const isValid = !formik.isValid || !formik.dirty || formik.isSubmitting;

    return {
        isLoading: formik.isSubmitting || isPending,
        formik,
        handleCode,
        resendVerificationCode,
        isResending: isSending,
        resendHasError: isSendingError,
        isValid,
        errors,
        minutes,
        seconds,
        isRunning
    }
}

export default useVerifyForm