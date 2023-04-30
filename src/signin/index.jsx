import React, { useState } from 'react'
import { Container, Box, Text, Button, Center, useDisclosure, Flex, Spacer } from '@chakra-ui/react'
import FloatInput from '../input'
import Password from '../passInput'
import { Link } from 'react-router-dom'
import SSOLogin from '../SSO'

const SignIN = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const [first, setfirst] = useState(false)

    return (
        <>
            {/* <Container maxW='2xl' bg='blue.600' centerContent> */}
            <Container maxW='2xl' centerContent>
                {/* <Box padding='1' bg='blue.400' color='black' maxW='md' content='center'> */}
                <Box padding='1' color='black' maxW='md' content='center'>
                    <Center pt={16}>
                        <Text fontSize='3xl'  >Sign In</Text>
                    </Center>
                    <Center>
                        <Text fontSize='xs' >Welcome to doctor sign in!</Text>
                    </Center>

                    <FloatInput label="User Name"></FloatInput>

                    <Password label="Password"></Password>
                    <Flex pt={4} paddingBottom={4}>
                        <Box >
                            {/* <Text size="xs">Verify Account</Text> */}
                        </Box>
                        <Spacer />
                        <Box >
                            <Text size="xs"><b>Forget Password</b></Text>
                        </Box>
                    </Flex>
                    <SSOLogin show={first} close={onClose} open={isOpen} header="Login with SSO"/>

                    <Button w="30vw" colorScheme='facebook'>Sign In</Button>
                    <Center pt={4} paddingBottom={4}>
                        <Text fontSize='sm'  >OR</Text>
                    </Center>
                    <div onClick={() => {
                        setfirst(true)
                    }}>
                    <Button w="30vw" colorScheme='facebook' onClick={onOpen}>Login with SSO </Button>

                    </div>
                    <Center pt={4}>
                        <Text fontSize='xs'  >New Member? <Link to={"/signup"}>Sign Up</Link></Text>
                    </Center>
                </Box>
            </Container>
        </>
    )
}

export default SignIN