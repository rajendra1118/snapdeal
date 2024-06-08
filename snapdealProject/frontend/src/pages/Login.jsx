import React from "react";

import {
  Heading,
  Box,
  Input,
  Button,
  VStack,
  Container,
} from "@chakra-ui/react";

import {Navigate} from"react-router-dom"
import { useState,useContext } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import {AuthContext} from "../context/AuthContextProvider"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login,authDetails:{isLoggedIn}} =useContext(AuthContext)

  const handleClick = async () => {
    try {
  let res= await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });


      login(res.data.token)
    } catch (error) {
        console.log(error)
    }
  };


  if(isLoggedIn){
    return <Navigate to="/" />
  }

  return (
    <>
    <Container my={"40px"} p={"20px"}  >
      <VStack spacing={3}>
        {/* <Heading as="h1" size="xl">
          Login Page
        </Heading> */}
      
        <Input
          placeholder="Enter Your Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="outline" colorScheme="red" onClick={handleClick}>
          Login
        </Button>
      </VStack>

    </Container>
    <Footer/>
    </>
  );
}

export { Login };
