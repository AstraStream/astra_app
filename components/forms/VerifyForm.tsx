"use client";

import React, { useState } from 'react'
import { REGEXP_ONLY_DIGITS } from "input-otp"
 
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/InputOtp";
import { Button } from '../ui/Button';
import useVerifyForm from '@/hooks/useVerifyForm';
import useCountdown from '@/hooks/useCountdown';

const VerifyForm = () => {
    const {
        isLoading,
        formik,
        isValid,
        handleCode,
        resendVerificationCode,
        isResending,
        errors,
        minutes,
        seconds,
        isRunning
    } = useVerifyForm();


    return (
        <div className="space-y-3.5">
            <form 
                onSubmit={formik.handleSubmit}
                className="flex flex-col items-center gap-y-4"
            >
                <div
                    role="group"
                    className="form-group"
                >
                    <InputOTP 
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS}
                        value={formik.values.code}
                        onChange={value => handleCode(value)}
                        className="w-full"
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    
                    {errors.code.message && (
                        <span className="form-error">{errors.code.message}</span>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={isValid}
                    isLoading={isLoading}
                >
                    Verify
                </Button>

            </form>

            {/* Reset verify code */}
            <div className="flex justify-center gap-x-2">
                <Button 
                    type="button"
                    variant="link"
                    size="none"
                    className="text-primary font-medium text-base disabled:bg-transparent"
                    disabled={!isRunning || isResending}
                    onClick={resendVerificationCode}
                >
                    Resend Code
                </Button>

                <span className="text-white font-medium select-none">
                    <span>{minutes.toString().padStart(2, "0")}</span>{":"}
                    <span>{seconds.toString().padStart(2, "0")}</span>
                </span>
            </div>
        </div>
    )
}

export default VerifyForm