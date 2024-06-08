import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { Container, Box, CardHeader,Card } from "@chakra-ui/react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Text,
  Box,
  Button,
  CardFooter,
  HStack,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import Footer from "../components/Footer";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState({});



  const fetccartproduct = async (id) => {
    // setloading(true);
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:3000/products/${id}`,
      });

      let data = res?.data;
      console.log(data);
      setSingleProduct(data);

      //   setloading(false);
    } catch (error) {
      console.log(error);
      //setErr(true);
      //   setloading(false);
    }
  };

  useEffect(() => {
    fetccartproduct(id);
  }, [id]);

  const { title, image, category, price, description, rating, count } =
    singleProduct;
  //   const {count,rate}= singleProduct.rating
  //console.log(rate,count)

  //  cart button

  const addToCart = async ({ id }) => {
    try {
      const newProduct = {
        id:id,
        title: title,
        image: image,
        price: price,
      };

     let res=  await axios({
        method: "post",
        url: "http://localhost:3000/cart",
        data: newProduct,
      });
      if(res.status===201){
        navigate("/cart")
       }
    } catch (error) {}
  };

  return (
    <>
      <Container
        padding={"40px"}
        display={"flex"}
        flexDirection={"row"}
        maxW={"full"}
       
      >
        <Box height={"500px"} width="40%">
          <Image height={"400px"} width="80%" src={image} />
        </Box>

        <Box  height={"auto"} width="60%">
          <Card alignContent={"center"} textAlign={"center"}>
            <CardHeader>
              <Heading size="md">{title}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Price
                  </Heading>

                  <Text pt="2" fontSize="sm">
                    {`MRP :${price}`}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Rating
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {rating}
                  </Text>
                </Box>
                <Box>
                  <Text pt="2" fontSize="sm">
                    {/* {count} */}
                    {`${count} Ratings`}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Product Details
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {description}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Categorey
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {category}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter alignItems={"center"} justify={"center"}>
              <HStack spacing={4}>
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => {
                    addToCart({ id });
                  }}
                >
                  ADD To CART
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export { ProductDetails };
