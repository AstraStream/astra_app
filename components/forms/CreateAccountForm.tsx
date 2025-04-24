import React from 'react'
import { Input } from '../ui/Input'

const CreateAccountForm = () => {
  return (
    <form>
      <Input 
        type="email"
        placeholder="enter email"
        label="Email Address"
      />

      <Input 
        type="password"
        placeholder="enter password"
        label="Password"
      />

      {/* Terms */}
      <div>
    
      </div>
    </form>
  )
}

export default CreateAccountForm