"use client";

import React from 'react'
import Link from 'next/link'
import { Checkbox } from '../ui/Checkbox'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import Checker from '../Checker'

// error="The email address format isn’t recongized"

const CreateAccountForm = () => {
  return (
    <form
      className="space-y-4"
    >
      <Input 
        type="email"
        placeholder="enter email"
        label="Email Address"
        aria-invalid={false}
      />

      <div className="space-y-2">
        <Input 
          type="password"
          placeholder="enter password"
          label="Password"
        />

        <div className="grid grid-cols-3 gap-x-2">
          <Checker 
            title="Special character"
            value={false}
            onChange={() => console.log('ss')}
          />

          <Checker 
            title="Alphanumeric"
            value={true}
            onChange={() => console.log('ss')}
          />

          <Checker 
            title="8 Characters long"
            value={false}
            onChange={() => console.log('ss')}
          />
        </div>
      </div>

      {/* Terms and Condition */}
      <div className="items-top flex space-x-2">
        <Checkbox id="terms" />

        <div className="grid leading-none select-none">
          <label
            htmlFor="terms"
            className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            By clicking on the checkbox, you agree to Astra's
          </label>
          <Link
            href="/terms" 
            className="text-primary text-lg"
          >
            Terms and Conditions of Use
          </Link>
        </div>
      </div>

      <Button
        type="submit"
        disabled={true}
        className=""
      >
        Continue
      </Button>
    </form>
  )
}

export default CreateAccountForm