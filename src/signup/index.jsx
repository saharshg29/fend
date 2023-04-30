import React from 'react'
import { Container, Box, Text, Button, Center, useDisclosure } from '@chakra-ui/react'
import FloatInput from '../input'
import Password from '../passInput'
import ModalOTP from '../OTP'


const SignUP = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()

    return (
        <>
            {/* <Container maxW='2xl' bg='blue.600' centerContent> */}
            <Container maxW='2xl' centerContent>
                {/* <Box padding='1' bg='blue.400' color='black' maxW='md' content='center'> */}
                <Box padding='1' color='black' maxW='md' content='center'>
                    <Center pt={16}>
                        <Text fontSize='3xl'  >Sign Up</Text>
                    </Center>
                    <Center>
                        <Text fontSize='xs' >Welcome to doctor sign up!</Text>
                    </Center>

                    <FloatInput label="User Name"></FloatInput>
                    <FloatInput label="Email Id"></FloatInput>
                    <FloatInput label="Phone Number"></FloatInput>
                    <Password label="Password"></Password>
                    <Password label="Confirm Password"></Password>
                    <Button w="30vw" colorScheme='facebook' onClick={onOpen}>Sign Up</Button>
                    <ModalOTP close={onClose} open={isOpen} header="Activate Account"/>
                    <Center pt={4}>
                        <Text fontSize='sm'  >OR</Text>
                    </Center>
                    <Center pt={1}>
                        <Text fontSize='xs'  >Already have an account? Sign In</Text>
                    </Center>
                </Box>
            </Container>
        </>
    )
}

export default SignUP