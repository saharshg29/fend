
import React from 'react'
import Password from '../passInput'
import { Container, Button } from '@chakra-ui/react'
const Reset = () => {
  return (
    <div>
      <Container pt={40}  centerContent>

        <Password label="New Password"></Password>
        <Password  label="Confirm New Password"></Password>

        <Button w="15vw" colorScheme='facebook'>Reset</Button>

      </Container>
    </div>
  )
}

export default Reset