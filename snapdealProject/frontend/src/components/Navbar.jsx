import React from 'react'

import { Link  } from 'react-router-dom';
import { Button, Flex,Link as ChakraLink , Input , Box , InputGroup, InputRightElement} from "@chakra-ui/react";
import sdlogo  from "../data/sde1.png"


function Navbar() {


  
   
  return (
 
    

 
    <Flex h={20} bg="#e40046"   alignItems="center" justifyContent="space-between">
      <Box paddingX={"30px"}>
        <Link as={Link} to="/" style={{ textDecoration: 'none' }}>
          <Box  as="img" src={sdlogo} alt="Logo" h="50px" width={"200px"}  borderRadius={5} />
        </Link>
      </Box>

     

      <InputGroup maxW="600px"  >
        <Input background={"white"}  width="400px" h={"10"} placeholder="Search..." />
        <Button  color={"white"}  bg={"gray.600"} variant="solid">Search</Button>
        
      </InputGroup>

    

      <Flex paddingEnd={"60px"} gap="40px" alignItems="center">
        <Button as={Link} to="/cart" colorScheme="teal" variant="solid" mx={2}>
          Cart
        </Button>
        <Button as={Link} to="/login" colorScheme="Black" variant="outline" mx={2}>
          Login
        </Button>

     
      </Flex>
    </Flex>


  
);
};
  


export {Navbar}