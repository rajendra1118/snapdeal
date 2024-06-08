import {
  Container,
  Stack,
  Box,
  SimpleGrid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Heading,
  Card,
  CardHeader,
  Text,
  CardBody,
  StackDivider,
  Select,
  HStack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProducrCard from "../components/ProducrCard";
import Footer from "../components/Footer";
function Product() {
  const [product, setProduct] = useState([]);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterValue,setFilterValue]= useState("")
  //   const url="https://fakestoreapi.com/products"

  const productData = async (sortOrderValue,filterValue) => {
    try {
      let queryParams={};
      if(filterValue){
        queryParams.
        category=filterValue
      }
      if(sortOrderValue){
        queryParams._sort="price",
        queryParams._order=sortOrderValue
      }
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/products`,
        params:queryParams
      });
      console.log(res.data);
      let data= res?.data
      setProduct(data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productData(sortOrderValue,filterValue);
  }, [sortOrderValue,filterValue]);

  return (
    <>
      <Container
        py={"12"}
        px={"20"}
        maxW={"100%"}
        height={"auto"}
        // border={"1px solid red"}
        // display={"flex"}
        // flexDirection={"row"}
        spacing="10"
        gap="10px"
        marginBottom={"10"}
      >
        <Box >
        <HStack spacing={4} my={3}>
        <Select
          placeholder="Filter by Price"
          value={sortOrderValue}
          onChange={(e) => {
            setSortOrderValue(e.target.value);
          }}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select placeholder="Filter by Category"   value={filterValue} onChange={(e)=>{
          setFilterValue(e.target.value)
        }}>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">womens</option>
         
        </Select>
       
      </HStack>
        </Box>

        {/*  */}

        <SimpleGrid
          padding={"10"}
          // width={"86%"}
          // border="1px solid red"
          columns={{ base: 1, md: 3, lg: 4 }}
          spacing={5}
        >
          {product.map((products) => (
            <ProducrCard key={products.id} {...products} />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}

export { Product };
