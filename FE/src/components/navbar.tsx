import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Image,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "..//assets/Castify03.svg";
import logoMobile from "..//assets/Castify.svg";

const Navbar = () => {
  return (
    <Box boxShadow='md'>
      <Grid
        templateColumns="repeat(12, 1fr)"
        py={5}
        // justifyContent={"center"}
        alignItems={"center"}
        w={{ base: "90%", "2xl": "80%" }}
        m="auto"
        gap="5"
      >
        <GridItem colSpan={2}>
          <NavLink to={"/"}>
            {/* <Heading
            cursor={"pointer"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            AutoLux
          </Heading> */}
            <Image
              src={logo}
              alt="AutoLux"
              w="100%"
              display={{ base: "none", md: "block" }}
            />
            <Image
              src={logoMobile}
              alt="AutoLux"
              w="40%"
              display={{ base: "block", md: "none" }}
            />
          </NavLink>
        </GridItem>

        <GridItem colSpan={3}>
        <Flex gap={{ base: 5, "2xl": 10 }} justifyContent="center" alignItems="center">
          <Text
            cursor={"pointer"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            Brands
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            New Arrivals
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            Best seller
          </Text>
        </Flex>
        </GridItem>

        <GridItem colSpan={6}>
        <InputGroup
          // w={"100%"}
          borderColor={"black"}
          rounded={"100px"}
          bg={"gray.200"}
          gap={1}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<IoSearch color="gray.300" />}
          />
          <Input
            pr="4.5rem"
            rounded={"full"}
            border={2}
            type={"text"}
            placeholder=""
            // value={searchQuery}
          />
        </InputGroup>
        </GridItem>

        <GridItem colSpan={1}>
        <Flex gap='3'>
          <Button
            p={2}
            rounded={"full"}
            bg={"transparent"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            <MdAddShoppingCart size={25} color="gray.300" />
          </Button>
          <NavLink to={"/login"}>
            <Button
              p={2}
              rounded={"full"}
              bg={"transparent"}
              _hover={{ bg: "transparent", color: "gray" }}
            >
              <FaUser color="gray.300" size={25} />
            </Button>
            {/* <Button>Login</Button> */}
          </NavLink>
        </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Navbar;
