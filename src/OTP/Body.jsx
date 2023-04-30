import React from 'react'
import { Center, Text, HStack, PinInput, PinInputField, Stack, Flex, Box, Spacer } from '@chakra-ui/react'
// import Verified from './Verified'
const Body = () => {
    return (
        <>
            <Text>We have sent <b>OTP</b> to your registered</Text>
            <Text>Email/Phone Number</Text>
            <Stack pt={3}>
                <Flex>
                    <Box >
                        <Text size="xs">Enter OTP</Text>
                    </Box>
                    <Spacer />
                    <Box >
                        <Text size="xs"><b>Resend OTP</b></Text>
                    </Box>
                </Flex>

                <Center >
                    <HStack>
                        <PinInput otp>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Center>

            </Stack>
        </>
    )
}

export default Body