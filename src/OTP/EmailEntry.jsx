import React from 'react'
import FloatInput from '../input'
import { Button } from '@chakra-ui/react'

const EmailEntry = (props) => {
    
    return (
        <div>
            <FloatInput label="Email/Mobile Number"></FloatInput>
            <Button w="30vw" colorScheme='facebook'>Send OTP</Button>

        </div>
    )
}

export default EmailEntry