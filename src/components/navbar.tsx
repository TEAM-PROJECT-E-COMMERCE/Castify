import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex gap={5} p={5} justifyContent={"center"} alignItems={"center"} 
          borderBottom={"1px"}
          borderColor={"gray"}>
        <NavLink to={"/"}>
          <Heading
            cursor={"pointer"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            AutoLux
          </Heading>
        </NavLink>
        <Text cursor={"pointer"} _hover={{ bg: "transparent", color: "gray" }}>
          Brands
        </Text>
        <Text cursor={"pointer"} _hover={{ bg: "transparent", color: "gray" }}>
          New Arrivals
        </Text>
        <Text cursor={"pointer"} _hover={{ bg: "transparent", color: "gray" }}>
          Best seller
        </Text>
        <InputGroup
          w={"50%"}
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
        <Button
          p={2}
          rounded={"full"}
          bg={"transparent"}
          _hover={{ bg: "transparent", color: "gray" }}
        >
          <MdAddShoppingCart size={25} color="gray.300" />
        </Button>
        <NavLink to={"/myProfile"}>
          <Button
            p={2}
            rounded={"full"}
            bg={"transparent"}
            _hover={{ bg: "transparent", color: "gray" }}
          >
            <FaUser color="gray.300" size={25} />
          </Button>
        </NavLink>
      </Flex>
    </>
  );
};

export default Navbar;
