import {
  HStack,
  Box,
  Text,
  Container,
  VStack,
  Flex,
  Center,
  Square,
  Input,
  Button,
  IconButton,
  Image,
  Heading,
} from "@chakra-ui/react";

// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { React, useEffect, useState } from "react";
import locationimg from "../data/location.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner1 from "../data/banner1.webp";
import banner3 from "../data/banner3.webp";
import banner4 from "../data/banner4.webp";
import snpimg from "../data/snpimg.avif";
import appstorelogo from "../data/appStore.png";
import playstore from "../data/googlestore.png";
import Footer from "../components/Footer";
const Crousal = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <Box position="relative" width="full" overflow="hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`carousel-image-${index}`}
          display={index === currentIndex ? "block" : "none"}
          width="full"
          height="370px"
          objectFit="cover"
        />
      ))}
      <IconButton
        aria-label="Previous Slide"
        icon={<FaArrowLeft />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrev}
        zIndex={2}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<FaArrowRight />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={handleNext}
        zIndex={2}
      />
    </Box>
  );
};

const TrandingCrousal = ({ trandingItems }) => {
  //console.log(trandingItems)
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trandingItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + trandingItems.length) % trandingItems.length
    );
  };

  const displayedItems = trandingItems.slice(
    currentIndex,
    currentIndex + itemsToShow
  );
  const overflow = currentIndex + itemsToShow > trandingItems.length;
  const visibleItems = overflow
    ? [
        ...displayedItems,
        ...trandingItems.slice(
          0,
          (currentIndex + itemsToShow) % trandingItems.length
        ),
      ]
    : displayedItems;
  return (
    <Box position="relative" width="full" overflow="hidden">
      <HStack justify="center">
        {visibleItems.map((item, index) => (
          <Link key={index} to="/product">
            <Box
              bg={"white"}
              my={"20px"}
              width="220px"
              height="320px"
              padding={"10px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              flexDirection={"column"}
              _hover={{ boxShadow: "lg" }}
            >
              <Image height={"220"} src={item.img} />
              <Text fontSize={"15px"} noOfLines={2}>
                {item.des}
              </Text>
              <Text colorScheme="red">{item.price}</Text>
            </Box>
          </Link>
        ))}
      </HStack>
      <IconButton
        aria-label="Previous Slide"
        icon={<FaArrowLeft />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={handlePrev}
        zIndex={2}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<FaArrowRight />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={handleNext}
        zIndex={2}
      />
    </Box>
  );
};

function Home() {
  const images = [banner1, banner3, banner4];

  const trandingItems = [
    {
      img: "https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg",
      des: "Bhawna Collection Loard Shiv Trishul Damru Locket With Puchmukhi Rudraksha Mala Gold-plated Brass, Wood For Men & Women",
      price: "Rs 141",
    },
    {
      img: "https://n3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg",
      des: "Stay Healthy - Foot Protector (Free Size)",
      price: "Rs 96",
    },
    {
      img: "https://n3.sdlcdn.com/imgs/i/z/j/large/bc12-606ed.jpg",
      des: "Maxbell USB Rechargeable Electronic Flameless Lighter",
      price: "Rs 176",
    },
    {
      img: "https://n1.sdlcdn.com/imgs/j/f/3/large/Bentag-Exerciser-Single-Spring-Tummy-SDL420716614-1-c49e4.jpeg",
      des: "Bentag Exerciser Single Spring Tummy Trimmer",
      price: "Rs 248",
    },
    {
      img: "https://n1.sdlcdn.com/imgs/j/d/1/large/Aadi-Black-Casual-Shoes-SDL456083229-3-a8ae2.jpeg",
      des: "Aadi Black Casual Shoes",
      price: "Rs 362",
    },
    {
      img: "https://n4.sdlcdn.com/imgs/k/w/k/large/Bentag-kitchenware-Vegetable-Fruit-Clever-SDL841893040-1-1e2e8.jpg",
      des: "Bentag kitchenware Vegetable & Fruit Clever Cutter Stainless Steel Vegetable Scissor",
      price: "Rs 151",
    },
  ];

  return (
    <>
      <VStack
        border={"1px solid green"}
        // paddingX={"10"}
        paddingY={"10"}
        display={"flex"}
        flexDirection={"row"}
        bg={"RGBA(0, 0, 0, 0.04)"}
        marginBottom={"20px"}
      >
        {/* sidebar container */}
        <Container
          height={"790px"}
          // m={"10px"}
          width={"17%"}
        >
          <Flex
            width={"100%"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            fontFamily={"revert-layer"}
            fontSize={"14px"}
            marginTop={"15px"}
            gap="20px"
            padding={"8"}
            flexDirection={"column"}
          >
            <Heading as={"p"} fontSize={"12px"}>
              TOP CATEGORIES
            </Heading>
            <Box>
              <Text as={Link} to="/product" >Mens Fassion</Text>
            </Box>

            <Box>
              <Text as={Link} to="/product" >womens Fassion</Text>
            </Box>
            <Box>
              <Text as={Link} to="/product" >kids Fassion</Text>
            </Box>
            <Box>
              <Text as={Link} to="/product" >Home and kitchan</Text>
            </Box>
            <Box>
              <Text as={Link} to="/product" >Toys,Kids'Fassion</Text>
            </Box>
            <Box>
              <Text as={Link} to="/product" >top serch</Text>
            </Box>
            <Box>
              <Text as={Link} to="/product" >tranding serch </Text>
            </Box>
          </Flex>
        </Container>

        {/* middle container */}
        <Container maxWidth={"100%"} >
          {/* crousal and pincode container */}
          <Box maxW={"100%"} display={"flex"} flexDirection={"row"}>
            <Crousal images={images} />
            {/* <Container
            border={"1px solid red"}
            height={"auto"}
            // m={"10px"}
            maxW={"100%"}
          >
            
          </Container> */}

            {/* pincode container */}
            <Container
              boxShadow={"xs"}
              height={"auto"}
              m={"5px"}
              maxW={"18%"}
              background={"white"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex direction={"column"} gap={"5"} color="white">
                <Center w="180px">
                  <Box as="img" src={locationimg} alt="Logo" h="100px" />
                </Center>
                <Square>
                  <Text color={"gray.500"}>Your delivery pinconde </Text>
                </Square>
                <Box textAlign={"center"}>
                  <Text fontSize={"10px"} as={"p"} color={"gray.500"}>
                    Enter your pincode to check avaliablity and faster dilivery
                    option
                  </Text>
                </Box>
                <Box
                  m={"10px"}
                  gap="5"
                  display={"flex"}
                  flexDirection={"row"}
                  textAlign={"center"}
                >
                  {/* <Text fontSize={"15px"} as={"p"} color={"gray.500"}>
                    Pincode:
                  </Text> */}
                  <Input
                    fontSize={"10px"}
                    placeholder="Enter your pincode"
                    h={"30px"}
                    w={"150px"}
                  ></Input>
                </Box>
                <Button>Submit</Button>
              </Flex>
            </Container>
          </Box>

          {/* bottom container */}

          <Container my={"10px"} maxW={"100%"} height={"400px"}>
            <Heading
              letterSpacing={"0.1rem"}
              fontWeight={" thin: 200,"}
              fontSize={"25px"}
            >
              Tranding Product
            </Heading>
            <TrandingCrousal trandingItems={trandingItems} />
          </Container>
        </Container>
      </VStack>

      <VStack
        padding={"40px"}
        display={"flex"}
        flexDirection={"row"}
        height={"500px"}
      >
        <Box my={"20px"} h={"full"} width={"48%"}>
          <Image src={snpimg} />
        </Box>
        <Box my={"20px"} h={"full"} width={"48%"}>
          <Text width={"80%"} fontSize={"50px"}>
            Download SnapDeal app Now
          </Text>
          <Text>Fast, Simple & Delightful.</Text>
          <Text>All it takes is 30 seconds to Download.</Text>
          <Box display={"flex"} flexDirection={"row"}>
            {" "}
            <Link to="https://apps.apple.com">
              {" "}
              <Image width={"150px"} src={appstorelogo} />
            </Link>
            <Link>
              <Image width={"100px"} src={playstore} />
            </Link>
          </Box>
        </Box>
      </VStack>
      <Footer />
    </>
  );
}

export { Home };
