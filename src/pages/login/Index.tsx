import {
  Box,
  Button,
  Card,
  Flex,
  IconButton,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { IoReturnUpBack } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex bg={"black"}>
      <Box
        backgroundImage="url('https://i.ibb.co/QcHjbGK/bg-regis-login.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={"100vh"}
        w={"50%"}
        p={20}
        justifyContent={"center"}
        alignItems={"center"}
      ></Box>
      <Card
        h={"90vh"}
        top={"5vh"}
        left={"-15vh"}
        w={"50%"}
        p={8}
        rounded={"2xl"}
      >
        <NavLink to={"/"}>
          <Button
            mb={12}
            w={"15%"}
            bg={"gray.200"}
            color={"black"}
            _hover={{ bg: "gray.500", color: "white" }}
            rounded={"full"}
            display={"flex"}
          >
            <IoReturnUpBack size={20} />
            <Text>Back</Text>
          </Button>
        </NavLink>
        <Box
          mb={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={"2xl"}>Login</Text>
        </Box>

        <Text>Email address</Text>
        <Input my={2} placeholder="Fullname" size="md" />

        <Flex justifyContent={"space-between"}>
          <Text>Phone number</Text>
          <Stack direction="row" align="center">
            <IconButton
              h="1.75rem"
              size="sm"
              bg={"transparent"}
              onClick={handleClick}
              _hover={{ bg: "transparent", color: "gray" }}
              icon={show ? <FaEyeSlash /> : <FaEye />}
              aria-label={show ? "Hide password" : "Show password"}
            />
            <span>{show ? "Hide" : "Show"}</span>
          </Stack>
        </Flex>
        <Input
          my={2}
          size="md"
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <Spacer />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
            w={"15%"}
            bg={"gray.200"}
            color={"white"}
            _hover={{ bg: "gray.500", color: "white" }}
            rounded={"full"}
            mr={4}
          >
            Login
          </Button>
          <Text>Don't have acount yet?</Text>
          <NavLink to={"/register"}>
            <Text fontWeight={"bold"} cursor={"pointer"}>
              Sign up
            </Text>
          </NavLink>
        </Box>
      </Card>
    </Flex>
  );
};

export default LoginPage;
