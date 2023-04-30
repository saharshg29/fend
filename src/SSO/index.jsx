import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import Body from '../OTP/Body'
import EmailEntry from '../OTP/EmailEntry'

function ModalOTP(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [status, setStatus] = useState(false)

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={props.open} onClose={props.close || onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.header}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            status ? <Body></Body> : <EmailEntry status = {true}></EmailEntry>

                        }
                    </ModalBody>




                    <ModalFooter>
                    {
                            status ? <Button w="30vw" colorScheme='facebook' onDoubleClick={onClose} onClick={() => {
                                setStatus(true)
    
                                console.log(status)
                            }
                            }>
                                <Text onClick={onClose}>Continue</Text>
                                </Button> : <></>

                        }


                        

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

    //
}
export default ModalOTP