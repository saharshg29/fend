import React from 'react'
import FloatInput from '../input'
import { Button } from '@chakra-ui/react'

const Email = () => {
    
    return (
        <div>
            <FloatInput label="Email/Phone Number"></FloatInput>
            <Button w="30vw" colorScheme='facebook'>Send OTP</Button>

        </div>
    )
}

export default Email