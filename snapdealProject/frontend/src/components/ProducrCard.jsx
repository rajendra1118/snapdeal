import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Image
} from "@chakra-ui/react";
function ProducrCard({
  id,
  title,
  price,
 
  image,
 
}) {



    //console.log(id,title,price,description,image,rating,category)
  const navigate = useNavigate();
  return (
    <Card alignItems={'center'} justify={"center"} textAlign={"center"} as={Link} to={`/productdetails/${id}`}>
      <CardHeader>
       <Image height={"150px"} src={image}/>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            {/* <Heading size="xs" textTransform="uppercase">
              Title
            </Heading> */}
            <Text pt="2" fontSize="sm">
              {title}
            </Text>
          </Box>
          <Box>
            {/* <Heading size="xs" textTransform="uppercase">
              Price
            </Heading> */}
            <Text pt="2" fontSize="sm">
              {`MRP : ${price}`}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      {/* <CardFooter>
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => {
            navigate(`/productdetails/${id}`);
          }}
        >
          View Ticket
        </Button>
      </CardFooter> */}
    </Card>
  );
}

export default ProducrCard;
