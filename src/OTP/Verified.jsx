import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Verified = () => {
  return (
    <>
    <Text>Your Verification has done.</Text>
    <Text>Please <b><Link to={"/signin"}>Sign In</Link></b></Text>
    </>
  )
}

export default Verified