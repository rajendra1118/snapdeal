import React from "react";
import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  Link,
  Heading,
  Input,
  Container,
  Divider
} from "@chakra-ui/react";

import securepayments from "../data/securePayment.png";
import trustPay from "../data/trustpay.png";
import callcenter from "../data/callcenter.png";
import onthego from "../data/phone.png";
import visacard from "../data/visa.png";
import paypl from "../data/paypal.png";
import mastercard from "../data/mcard.png";
import citicard from "../data/citicard.png";
import cod from "../data/conshondel.png";
import teligram from "../data/teligram.svg";
import tweetr from "../data/tweeter.svg";
import youtube from "../data/youtube.svg";
import instagram from "../data/insta.png";
import facebook from "../data/facebook.png";
// import {Link} from "react-router-dom"
function Footer() {
  return (
    <>
      <Stack
        direction="row"
        border={"1px solid gray"}
        justify={"center"}
        alignItems={"center"}
        width={"100%"}
        spacing="24px"
      >
        <Box
          borderRight={"1px solid gray"}
          borderLeft={"1px solid gray"}
          w="22%"
          h="200px"
          padding={"10"}
          textAlign={"center"}
        >
          <Image marginLeft={"100px"} width={"50px"} src={securepayments} />

          <Text mt={4}>100% SECURE PAYMENTS </Text>

          <Text as={"p"} fontSize={"12"}>
            {" "}
            Moving your card details to much more secured place{" "}
          </Text>
        </Box>
        <Box
          padding={"10"}
          textAlign={"center"}
          borderRight={"1px solid gray"}
          w="22%"
          h="200px"
        >
          <Image marginLeft={"100px"} width={"50px"} src={trustPay} />
          <Text>TRUSTPAY</Text>
          <Text as={"p"} fontSize={"12"}>
            100% payment Protection. Easy Return Policy
          </Text>
        </Box>
        <Box
          padding={"10"}
          textAlign={"center"}
          borderRight={"1px solid gray"}
          w="22%"
          h="200px"
        >
          <Image marginLeft={"100px"} width={"50px"} src={callcenter} />
          <Text>HELP CENTER</Text>
          <Text as={"p"} fontSize={"12"}>
            Got a question? Look no further Browse our FAQs or submit your query
            here
          </Text>
        </Box>
        <Box
          as={Link}
          to="*"
          padding={"10"}
          textAlign={"center"}
          borderRight={"1px solid gray"}
          w="22%"
          h="200px"
        >
          <Image marginLeft={"100px"} width={"50px"} src={onthego} />
          <Text>SHOP ON THE GO</Text>
          <Text as={"p"} fontSize={"12"}>
            Downloaad the app and got exciting app offer at your fingertips{" "}
          </Text>
        </Box>
      </Stack>
      <HStack
        direction="row"
        border={"1px solid gray"}
        justify={"center"}
        alignItems={"center"}
        width={"100%"}
        paddingRight={5}
        spacing="24px"
        height={"300px"}
      >
        <Box
          color={"gray"}
          lineHeight={"5"}
          fontSize={"13"}
          h="200px"
          width={"15%"}
        >
          <Heading color={"gray.600"} fontSize={"17px"}>
            POLICY INFO
          </Heading>
          <Text>Terms of Sale</Text>
          <Text>Terms of Use</Text>
          <Text>Report Abuse & Takedown Policy</Text>
          <Text>Know Your BIS Standard</Text>
          <Text>Products Under Cumpulsory BIS Certification</Text>
          <Text>FAQ</Text>
        </Box>
        <Box color={"gray"} fontSize={"13"} h="200px" width={"15%"}>
          <Heading color={"gray.600"} fontSize={"17px"}>
            COMPANY
          </Heading>

          <Text>Terms of Sale</Text>
          <Text>Impact@Snapdeal</Text>
          <Text>Careers</Text>
          <Text>Blog</Text>
          <Text>Sitemap</Text>
          <Text >Contact Us</Text>
        </Box>
        <Box color={"gray"} fontSize={"13"} h="200px" width={"15%"}>
          <Heading color={"gray.600"} fontSize={"17px"}>
            SNAPDEAL BUSINESS
          </Heading>
          <Text>Shopping App</Text>
          <Text>Sell on Snapdeal</Text>
          <Text>Media Enquiries</Text>
        </Box>
        <Box color={"gray"} fontSize={"13"} h="200px" width={"15%"}>
          <Heading color={"gray.600"} fontSize={"17px"}>
            POPULAR LINKS
          </Heading>
          <Text>Lehenga</Text>
          <Text>Kid's Clothing</Text>
          <Text>Sarees</Text>
          <Text>Winter Wear</Text>
        </Box>
        <Box color={"gray"} fontSize={"13"} h="200px" width={"15%"}>
          <Heading color={"gray.600"} fontSize={"17px"}>
            SUBSCRIBE
          </Heading>
          <Input></Input>
          <Text>
            Your email address SUBSCRIBERegister now to get updates on
            promotions andcoupons. Or Download App
          </Text>
        </Box>
      </HStack>

      {/* bootom footer box  */}
      <Stack
        direction="row"
        border={"1px solid gray"}
        justify={"center"}
        alignItems={"center"}
        width={"100%"}
        paddingRight={5}
        spacing="24px"
        height={"100px"}
      >
        <Box width={"48%"}>
          <Heading as={"p"} fontSize={"14px"}>
            PAYMENT
          </Heading>
          <HStack spacing={"5"} my={"2"}>
            <Image width={"50px"} src={citicard} />
            <Image width={"50px"} src={mastercard} />
            <Image width={"50px"} src={visacard} />
            <Image width={"50px"} src={paypl} />
            <Image width={"50px"} src={citicard} />
            <Image width={"50px"} src={cod} />
          </HStack>
        </Box>

        <Box width={"48%"}>
          <Heading as={"p"} fontSize={"14px"}>
            CONNECT
          </Heading>
          <HStack my={"2"} spacing={"5"}>
            <Image borderRadius={"20"} width={"40px"} src={facebook} />
            <Image width={"40px"} src={instagram} />
            <Image width={"40px"} src={tweetr} />
            <Image width={"40px"} src={youtube} />
            <Image width={"40px"} src={teligram} />
          </HStack>
        </Box>
      </Stack>

      <Container padding={"20px"} maxW="full" centerContent>
        <Box  padding="4" maxW="full">
          <Heading fontSize={"15px"}> Men:</Heading>  <Text  fontSize={"13px"} >Shirts for Men / Casual Shirts for Men / Formal Shirts for Men /
          Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T
          shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for
          Men / Trousers for Men / Jacket for Men / Formal Pants for Men /
          Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta for Men
          / Blazer for Men / Sweater for Men </Text>
          <Divider margin={"5px"} />
          Women: <Text  fontSize={"13px"} > Tops for Women / Kurti /
          Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees /
          Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit
          / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for
          Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for
          Women / Shirts for Women / Skirts for Women / Ethnic wear for Women /
          Western Dresses for Women / Leggings for Women </Text>
          <Divider margin={"5px"} />
          Footwear: <Text  fontSize={"13px"} > Men's
          Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for
          Men / Slippers for Men / Boots for Men / Sandals for Men / Footwear
          for Women / Heels for Women / Sandals for Women / Shoes for Women /
          Sandals for Women / Slippers for Women / Boots for Women / Jutti for
          Women / Sports Shoes for Women </Text>
          <Divider margin={"5px"} />
           Home & Kitchen: <Text  fontSize={"13px"} > Wall Painting / Wall
          Stickers / Dream Catcher / Rangoli Designs / Clock / Wall Clock /
          Alarm Clock / Diya / Bean Bag / Laptop Table / Study Table / Wall
          Hanging / Ceiling Lights / Table Lamp / Hanging Lights / LED Bulbs /
          Torch Light / LED Lights / Flower Vase / Keychain / Rudraksha /
          Screwdriver </Text>
          <Divider margin={"5px"} />
          Watch: <Text  fontSize={"13px"}> Watch For Men / Womens Watches / Smart Watch / Boys
          Watch / Girls Watch Home Furnishing: Bed Sheet / Mosquito Net /
          Mattress / Curtains / Sofa Cover / Blanket / Pillow / Carpet / Apron /
          Quilt / Floor Mat / Towel / Pillow Cover </Text>
          <Divider margin={"5px"} />
          Electronics: <Text  fontSize={"13px"}> Bluetooth
          Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer /
          Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas
          Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB &
          HDMI Cables / Computer Antivirus</Text>
          <Divider margin={"5px"} />

           Mobiles Accessories: <Text  fontSize={"13px"}> Mobile Covers /
          Leather Mobile Covers / Printed Back Covers / Tempered Glass</Text>
          <Divider margin={"5px"} />
           Snapdeal
          is India's leading pure-play value Ecommerce platform. Founded in 2010
          by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online
          lifestyle shopping destinations of India. Snapdeal brings together a
          wide assortment of good quality and value- priced merchandise on its
          platform. Snapdeal's vision is to enable the shoppers of Bharat to
          experience the joy of living their aspirations through reliable,
          value-for-money shopping. With a personalized, multilingual interface
          and cutting edge technology, Snapdeal has simplified the shopping
          experience for its value-conscious buyers by showcasing the most
          relevant products- products that are a good functional fit with their
          needs and of a quality that lasts- thereby delivering true value to
          its customers. With its commitment to high service standards, Snapdeal
          suppliers operate under a well structured ecosystem that enables them
          to offer great quality products at affordable prices. With majority of
          the value-seeking, middle-income, price-conscious buyers coming from
          the non-metros, Snapdeal’s logistics networks powered by third party
          logistics cover more than 96% of India’s pin codes enabling order
          deliveries to more than 2500 towns and cities and expanding. Further,
          Snapdeal's mission is to become India’s value lifestyle omni-channel
          leader. We are excited about continuing to build a complete ecosystem
          around value commerce, where we can serve Bharat consumers wherever
          they are on their offline to online shopping journey. Snapdeal is part
          of the AceVector Group and one of India’s best-known e-commerce
          companies with an exclusive focus on the value segment.
        </Box>
      </Container>
    </>
  );
}

export default Footer;
