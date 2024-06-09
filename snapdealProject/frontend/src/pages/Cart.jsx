import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  CardFooter,
  Button,
  Text,
  Image,
  SimpleGrid,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import Footer from "../components/Footer";
//import { useParams } from 'react-router-dom'






function Cart() {
  const [cartProduct, setCartProduct] = useState([]);
  const [finalCart, setFinalCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderPlaced,setorderPlaced]=useState(false)
  //const {id}= useParams()
const navigate= useNavigate()
  const cartProducts = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/cart`,
      });
      const data = res?.data;

      console.log(data)
      setCartProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cartProducts();
  }, []);

  // function merged for there is a duplicate product to merge them and increase quintity
  useEffect(() => {
    const mergeProducts = (products) => {
      const productMap = {};

      products.forEach((product) => {
        if (productMap[product.id]) {
          productMap[product.id].quantity += 1;
        } else {
          productMap[product.id] = { ...product, quantity: 1 };
        }
      });

      return Object.values(productMap);
    };

    const mergedCart = mergeProducts(cartProduct);
    setFinalCart(mergedCart);
  }, [cartProduct]);

  // calculating total prioce of cart
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = finalCart.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal(finalCart);
  }, [finalCart]);

  // console.log(total);

  // delete function

  const deleteCartProduct = async (id) => {
    //console.log(id);
    try {
      let res = await axios({
        method: "delete",
        url: `http://localhost:3000/cart/${id}`,
      });

      if (res.status === 200) {
        cartProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // order placed button
  const placeOrder=()=>{
    setorderPlaced(true)
    setCartProduct([]);
    setFinalCart([]);
    setTotal(0);
    

    setInterval(()=>{
      navigate("/")
    },2000)
     
  }
  

  return (
    <>

     {/* alert and product conditional rendering  */}
      {
           
      orderPlaced ?  (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Order placed!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Your order has been placed successfully. Thank you for shopping with us.
          </AlertDescription>
        </Alert>
      ) :
      <Container
        gap="10px"
        padding={"20px"}
        maxW={"full"}
        display={"flex"}
        flexDirection="row"
        my={"30px"}
      >
    
        
       
      <SimpleGrid
          padding={"30px"}
      
          boxShadow={
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px ,rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          }
        
          columns={3}
          spacing={3}
        >
          {finalCart.map((items) => (
            <Card alignItems={"center"} justify={"center"} textAlign={"center"}>
              <CardHeader>
                <Image height={"120"} src={items.image} />
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text pt="2" fontSize="sm">
                      {items.title}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      quantity
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {items.quantity}
                    </Text>
                  </Box>
                  <Box>
                    <Text pt="2" fontSize="sm">
                      {`MRP : ${items.price}`}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => {
                    deleteCartProduct(items.id);
                  }}
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}

        </SimpleGrid>

        {/* cart total and checkout page */}




        <Box
          boxShadow={
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px ,rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          }
          width={"50%"}
        >
          <Card alignItems={"center"} justify={"center"} textAlign={"center"}>
            <CardHeader as={"h1"} fontSize={"30"}>
              Your total Price is : {total}
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Text pt="2" fontSize="lg">
                    Total items : {finalCart.length}
                  </Text>
                </Box>

                <Box>
                  <Text pt="2" fontSize="sm"></Text>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button variant="outline" colorScheme="red" onClick={placeOrder}>
                Place order
              </Button>
            </CardFooter>
          </Card>
        </Box> 




      </Container>}
      <Footer />
    </>
  );
}

export { Cart };
